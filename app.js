const express = require('express');
const dotenv = require('dotenv');
const appRoute = require('./server/routes/appRoutes');
const db = require('./server/configs/database');
const app = express();

dotenv.config();
app.use(express.json());

app.use('/', appRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
