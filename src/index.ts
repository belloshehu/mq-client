import Consumer from "./consumer";

const consumer = new Consumer();

const consumeSentMessage = async () => {
  await consumer.consumeMessage("invitedCustomers");
};

consumeSentMessage();
