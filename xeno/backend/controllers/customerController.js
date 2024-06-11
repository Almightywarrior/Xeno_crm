const Customer = require('../models/Customer');
const amqp = require('amqplib/callback_api');

exports.addCustomer = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      const queue = 'customer_queue';
      const msg = JSON.stringify(req.body);

      ch.assertQueue(queue, { durable: false });
      ch.sendToQueue(queue, Buffer.from(msg));

      res.status(202).json({ message: 'Customer data received' });
    });
  });
};
