const mysql2 = require('mysql2');

require('dotenv').config();

const connection = mysql2.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    multipleStatements: true
});

const query = `
CREATE DATABASE ${process.env.DATABASE};
USE ${process.env.DATABASE};

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    user_name VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    register_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id)
);

CREATE TABLE todo (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    todo VARCHAR(255) NOT NULL,
    done VARCHAR(1) DEFAULT 0,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE post (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    text TEXT,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comment (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    text TEXT,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES post(id)
);
`

connection.query(query, function (err) {
    console.log(err || 'connection completed: created db');
    connection.destroy();
})