const Order = require('../models/Order');
const amqp = require('amqplib/callback_api');

exports.addOrder = (req, res) => {
  const { product, quantity, customerId } = req.body;
  if (!product || !quantity || !customerId) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      const queue = 'order_queue';
      const msg = JSON.stringify(req.body);

      ch.assertQueue(queue, { durable: false });
      ch.sendToQueue(queue, Buffer.from(msg));

      res.status(202).json({ message: 'Order data received' });
    });
  });
};
