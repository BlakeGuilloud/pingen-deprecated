

// ------------------------------
// Import Dependencies
// ------------------------------
import express from 'express';
import bodyParser from 'body-parser';
import { Model } from 'objection';
import cors from 'cors';
import path from 'path';
import knex from 'knex';

// ------------------------------
// Import Routers
// ------------------------------
import pingenRouter from './routers/pingen.router';

// ------------------------------
// Establish Knex Connection
// ------------------------------
import knexConfig from './db/knexfile.js';

const connection = knex(knexConfig);

Model.knex(connection);

// ------------------------------
// Configure Express
// ------------------------------
const app = express();

app.set('appPath', path.join('', 'client'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ------------------------------
// Configure Routes
// ------------------------------
app.use('/users', pingenRouter);

// ------------------------------
// Initialize Server
// ------------------------------
const port = process.env.PORT || 8100;

app.listen(port, () => {
  console.log('app listening on port: ', port);
});
