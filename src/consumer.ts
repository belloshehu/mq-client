import { Channel, Connection, connect } from "amqplib";
import config from "./config";
import { Data } from "./types";

export default class Consumer {
  private channel!: Channel;
  private exhangeType = "direct";
  private queueName = "InfoQueue";

  async createChannel() {
    // create connection
    const connection: Connection = await connect(config.rabbitMQ.url);
    this.channel = await connection.createChannel();
  }

  async consumeMessage(routingKey: string) {
    if (!this.channel) {
      await this.createChannel();
    }

    // create exhange
    const { exhangeName } = config.rabbitMQ;
    await this.channel.assertExchange(exhangeName, this.exhangeType);

    // Create queue
    const { queue } = await this.channel.assertQueue(this.queueName);

    // bind queue: connect queue to exhange
    await this.channel.bindQueue(queue, exhangeName, routingKey);

    //consume message
    this.channel.consume(queue, (msg) => {
      const { content } = msg!;
      const data: Data = JSON.parse(content.toString());
      console.log(`${data.message.length} customers invited`);
      console.log(data.message);
      this.channel.ack(msg!);
    });
  }
}
