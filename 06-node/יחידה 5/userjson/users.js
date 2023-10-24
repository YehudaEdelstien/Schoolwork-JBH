const fsp = require("fs/promises");
const uniqid = require("uniqid");

const usersFile = "./users.json";

async function createUser(username, email) {
    const data = await getUsersObject();
    const id = uniqid();

    const user = {
        username: username,
        email: email
    }

    data[id] = user;
    updateUsersFile(data);

    return id;
}

async function getUser(id) {
    const data = await getUsersObject();

    if (id in data === false){
        throw new error("Cannot get user: no such user id")
    }

    return data[id];
}

async function updateUser(id, name, email) {
    const data = await getUsersObject();

    if (id in data === false){
        throw new error("Cannot get user: no such user id")
    }

    data[id] = {
        name: name,
        email: email
    }

    updateUsersFile(data);
}

async function deleteUser(id) {
    const data = await getUsersObject();
    delete data[id];
    updateUsersFile(data);
}

async function getUsersObject() {
    try {
        const data = await fsp.readFile(usersFile, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code == 'ENOENT') {
            createUsersFile();
            return {};
        } else {
            console.log(error);
        }
    }
}

function createUsersFile() {
    fsp.writeFile(usersFile, "{}");
}

function updateUsersFile(data) {
    fsp.writeFile(usersFile, JSON.stringify(data, null, 4));
}

async function test() {
    const newUser = await createUser("Joe Musashi", "joe@musashi.ninj");
    console.log(newUser);
    console.log(await getUser("newUser"));
    console.log(await getUsersObject())
    updateUser(newUser, "Joe Ninja Musashi", "myemail@email.com");
    console.log(await getUser(newUser));
    console.log(await getUsersObject());
    await deleteUser(newUser)
    console.log(await getUsersObject());
}

test()