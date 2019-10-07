const crypto = require('crypto').randomBytes(256).toString('hex')

module.exports = {
    // uri : `momongodb://localhost/${this.db}`,
    uri : "mongodb://deploy:moka55555@cluster0-shard-00-00-6nzpn.mongodb.net:27017,cluster0-shard-00-01-6nzpn.mongodb.net:27017,cluster0-shard-00-02-6nzpn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    secret : crypto,
    db : 'Users'
}