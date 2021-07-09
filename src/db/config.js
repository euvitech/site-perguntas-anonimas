const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = () => {
    open({
        filename: '/src/db/datev.sqllite',
        driver: sqllite3.Database
    })
}