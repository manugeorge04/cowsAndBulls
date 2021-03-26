# MERN Boiler Plate

This is a BoilerPlate for MERN Stack. The production version is built ready for deploying on azure and hence already has the relevant script in package.json.

The directory structure splits the react front end and node back end. All react componenets and dependencies are under the `client` directory. All the node and mongo files are under the `server directory`. React dependencies are installed via yarn within the `client` directory and all the node modules are installed via npm in the `root`. This allows for better version control amongst the dependencies.


## Prerequisites

- [NodeJS](https://nodejs.org/en/)


## Tech Stack Used

- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)



## Set-Up Mongo Connection

Create a `.env` file in the root directory and add the following lines

>COSMOSDB_USER="your-db-user-name"

>COSMOSDB_PASSWORD="your-db-user-password"

>mongoURI="your-mongo-URI"


## Build and Run

### `npm install`

### `cd ./client && yarn install`

### `npm start`

### Open another terminal :

### `cd ./client && yarn run dev-server`


