const mongoDB = require('mongodb')

const uri = 'mongodb://localhost/name-of-app'
module.exports = () => {
    const client = new mongoDB.MongoClient(uri)
    return client.connect()
}