const { consumeMessage, processCustomer, processOrder } = require('./services/consumerService');

consumeMessage('customer_queue', processCustomer);
consumeMessage('order_queue', processOrder);
