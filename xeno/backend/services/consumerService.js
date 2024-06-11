const amqp = require('amqplib/callback_api');
const Customer = require('../models/Customer');
const Order = require('../models/Order');

function consumeMessage(queue, callback) {
  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertQueue(queue, { durable: false });
      ch.consume(queue, (msg) => {
        const data = JSON.parse(msg.content.toString());
        callback(data);
        ch.ack(msg);
      });
    });
  });
}

function processCustomer(data) {
  const customer = new Customer(data);
  customer.save();
  console.log(`Customer ${customer.name} added to database`);
}

function processOrder(data) {
  const order = new Order(data);
  order.save();
  console.log(`Order for product ${order.product} added to database`);
}

module.exports = {
  consumeMessage,
  processCustomer,
  processOrder
};
