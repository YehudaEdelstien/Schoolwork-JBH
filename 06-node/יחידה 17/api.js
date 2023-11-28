const express = require('express')
const database = require('./Database/database');

const router = express.Router();
const usersRouter = express.Router();
const todosRouter = express.Router();
const postsRouter = express.Router();

router.use('/users', usersRouter);
router.use('/todos', todosRouter);
router.use('/posts', postsRouter);

// users router

usersRouter.get('/random', async (req, res) => {
    const randomUser = await database.getRandomUser();
    res.send(randomUser);
})

usersRouter.get('/exists', async (req, res) => {
    const { userName, password } = req.query;
    const userExists = await database.verifyUser(userName, password)
    res.send(userExists);
})

usersRouter.get('/info', async (req, res) => {
    try {
        const { userName } = req.query;
        const data = await database.getUserInfo(userName);
        res.send(data);
    } catch (err) {
        if (err == 'ENOENT') res.sendStatus(404)
        res.sendStatus(500);
    }
})


// todos router

todosRouter.get('/*', async (req, res) => {
    try {
        const { userName } = req.query;
        const data = await database.getTodos(userName);
        res.send(data);
    } catch (err) {
        res.sendStatus(500);
    }
})

todosRouter.patch('/*', async (req, res) => {
    try {
        const { id, value } = req.query;
        await database.updateToDo(id, value);
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
})


// posts router

postsRouter.get('/*', async (req, res) => {
    try {
        const { userName } = req.query;
        const data = await database.getPosts(userName);
        res.send(data);
    } catch (err) {
        res.sendStatus(500);
    }
})

// default routers
router.get('/*', async (req, res) => {
    res.sendStatus(404);
})


module.exports = router;