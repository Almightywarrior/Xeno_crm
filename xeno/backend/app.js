const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/mini_crm', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api', customerRoutes);
app.use('/api', orderRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
