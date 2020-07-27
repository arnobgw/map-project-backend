const db = require("./api/database");

async function setupDatabase(req, res, next) {
    addDocuments('users',
        [
            {
                name: 'David',
                email: 'david@email.com',
                password: 'abc123',
                cost: 50,
                budget: 100
            }
        ]
    )
    addDocuments('todos',
        [
            {
                userEmail: "david@email.com",
                task: "task1",
                completed: false
            }
        ]
    )
    addDocuments('journal',
        [
            {
                userEmail: "david@email.com",
                title: "Journal1",
                text: "Hello World",
                name: "David"
            }
        ]
    )
    res.send("Setting Up Database.... Done ");
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc));
}

module.exports = setupDatabase;