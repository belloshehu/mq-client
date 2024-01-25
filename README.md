# About Project

This is a node application that read messages published by producer with a
routing key and exchange name of "InvitedCustomers". The message contains array
of IDs of a fintech that it that are within 100km distance from it.

## How Run The Application

To start this application, follow the following steps:

- Clone the [repository](https://github.com/belloshehu/mq-client):

  `git clone https://github.com/belloshehu/mq-client.git`

- Change to the directory of the application:

  `cd publisher`

- Install the application packages

  `npm install`

- Start the application

  `npm run dev`

### Note

You need to have RabbitMQ server on your machine to be able to receive messages.
For how to install RabbitMQ server, visit the RabbitMQ
[getting started](https://www.rabbitmq.com/#getstarted) page for guide on
installation on various platforms.
