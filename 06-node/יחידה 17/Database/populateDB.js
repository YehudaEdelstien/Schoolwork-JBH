const mysql2 = require('mysql2/promise');
const { faker } = require('@faker-js/faker');

require('dotenv').config();

function peopleGenerator(amount) {
    let str = '';
    for (let i = 1; i <= amount; i++) {
        str += `('${faker.internet.displayName()}', '${faker.internet.password()}')`;
        if (i !== amount) str += ',';
    }
    return str;
}

function todosGenerator(idRange, amount) {
    let str = '';
    for (let i = 1; i <= idRange; i++) {
        for (let j = 0; j <= amount; j++) {
            str += `(${i}, '${faker.word.verb()} ${faker.word.noun()}')`;
            if (i !== idRange || j !== amount) str += ', \n';
        }
    }
    return str;
}

function postGenerator(userIdRange, amount) {
    let str = '';
    for (let i = 1; i <= userIdRange; i++) {
        for (let j = 0; j < amount; j++) {
            str += `(${i}, '${faker.word.words({ count: { min: 2, max: 5 } })}', '${faker.word.words({ count: { min: 20, max: 60 } })}')`;
            if (i !== userIdRange || j !== amount - 1) str += ', \n';
        }
    }
    return str;
}

function commentGenerator(userIdRange, commentIdRange, amount) {
    let str = '';
    for (let i = 1; i <= userIdRange; i++) {
        for (let j = 0; j < amount; j++) {
            str += `(${i}, ${Math.floor(Math.random() * commentIdRange) + 1}, '${faker.word.words({ count: { min: 2, max: 30 } })}')`;
            if (i !== userIdRange || j !== amount - 1) str += ', \n';
        }
    }
    return str;
}

async function generateData() {
    const userAmount = 10;
    const todoPerUser = 10;
    const postPerUser = 3;
    const commentPerUser = 15;

    const query1 = `
        INSERT INTO users (user_name, password)
        VALUES ${peopleGenerator(userAmount)};
    `;

    const query2 = `
        INSERT INTO todo (user_id, todo)
        VALUES ${todosGenerator(userAmount, todoPerUser)}
    `;

    const query3 = `
    INSERT INTO post (user_id, title, text)
        VALUES ${postGenerator(userAmount, postPerUser)}
    `;

    const query4 = `
        INSERT INTO comment (user_id, post_id, text)
        VALUES ${commentGenerator(userAmount, userAmount * postPerUser, commentPerUser)}
    `;

    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: process.env.USER,
        password: process.env.PASSWORD,
        multipleStatements: true,
        database: process.env.DATABASE
    });
    try {

        await connection.execute(query1);
        console.log('connection completed: added users');

        await connection.execute(query2);
        console.log('connection completed: added todos');

        await connection.execute(query3);
        console.log('connection completed: added posts');

        await connection.execute(query4);
        console.log('connection completed: added comments');

    } catch (err) {
        console.log(err);
    } finally {
        connection.destroy();
        console.log('done');
    }
}

generateData();