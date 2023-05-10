import express from 'express'
import sequelize from 'sequelize'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const db = new sequelize('example', 'example_user', 'example_password', {
    host: 'localhost',
    dialect: 'mariadb'
});

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}