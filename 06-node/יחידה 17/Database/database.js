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
    const [[{data}]] = await connection.execute(query, [userName, password]);
    connection.destroy();
    return Boolean(data);
}

module.exports.getRandomUser = getRandomUser;
module.exports.verifyUser = verifyUser;