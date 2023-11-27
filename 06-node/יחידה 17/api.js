const express = require('express')
const database = require('./Database/database');

const router = express.Router();
const usersRouter = express.Router();

router.use('/users', usersRouter);

// /users
usersRouter.get('/random', async (req, res) => {
    const randomUser = await database.getRandomUser();
    res.send(randomUser);
})

usersRouter.get('/exists', async (req, res) => {
    const {userName, password} = req.query;
    const userExists = await database.verifyUser(userName, password)
    res.send(userExists);
})


router.get('/*', async (req, res) => {
    try {
        res.send();
    } catch (err) {
        handleError(err, res)
    }
})

function handleError(err, res) {
    if (err.code === 'ENOENT') {
        res.status(404).send('Not Found');
    } else {
        console.log(err)
        res.status(500).end();
    }
}

module.exports = router;