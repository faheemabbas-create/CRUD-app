require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;
const db_URL = process.env.db_URL || 'mongodb://localhost:27017/express-users';


app.use(express.json());


app.use('/api/users', usersRouter);


app.get('/', (req, res) => {
  res.json({message: 'APP is working' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

mongoose.connect("mongodb+srv://ffaheemaabbas_db_user:canada456@userapi.adx9yyo.mongodb.net/?retryWrites=true&w=majority&appName=userApi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('connection failed', err);
  process.exit(1);
});
