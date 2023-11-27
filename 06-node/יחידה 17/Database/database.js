const mysql2 = require('mysql2/promise');

require('dotenv').config();

async function createConnection() {
    return await mysql2.createConnection({
        host: 'localhost',
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
}

async function getRandomUser() {
    const connection = await createConnection();
    const query = `
    SELECT user_name AS userName, password 
    FROM users 
    ORDER BY RAND() 
    LIMIT 1`
    const [[data]] = await connection.execute(query);
    connection.destroy();
    return data;
}

async function verifyUser(userName, password) {
    const connection = await createConnection();
    const query = `
        SELECT EXISTS(SELECT 1 from users WHERE user_name = ? AND password = ?) AS data`;
    const [[{ data }]] = await connection.execute(query, [userName, password]);
    connection.destroy();
    return Boolean(data);
}

async function getUserInfo(userName) {
    const connection = await createConnection();
    
    const [[data]] = await connection.execute(`SELECT id, user_name, UNIX_TIMESTAMP(register_date) AS register_date FROM users WHERE user_name = ? LIMIT 1`, [userName]);
    if (!data) throw new Error("ENOENT")
;
    const [[{todos}]] = await connection.execute(`SELECT COUNT(*) as todos FROM todo WHERE user_id = ?`, [data.id]);
    const [[{posts}]] = await connection.execute(`SELECT COUNT(*) as posts FROM post WHERE user_id = ?`, [data.id]);
    
    data.todos = todos;
    data.posts = posts;
    data.register_date = new Date(data.register_date * 1000).toDateString()

    connection.destroy();
    return data;
}

module.exports.getRandomUser = getRandomUser;
module.exports.verifyUser = verifyUser;
module.exports.getUserInfo = getUserInfo;