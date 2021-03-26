const mongoose = require('mongoose')
require('dotenv').config();

const url = process.env.mongoURI
mongoose.connect(url, {
  auth: {
    user: process.env.COSMOSDB_USER,
    password: process.env.COSMOSDB_PASSWORD
  },
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false,
retryWrites: false
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));

//.env file contents
//  COSMOSDB_USER="username"
//  COSMOSDB_PASSWORD="password"
//  mongoURI="URL"