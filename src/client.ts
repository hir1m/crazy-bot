import { Client, GatewayIntentBits } from "discord.js";
import config from "./config";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("messageCreate", async (message) => {
  const { content } = await message.fetch();

  // removes punctuation, make message lowercase and split it into words
  const words = content
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase()
    .split(" ");

  // check if the message contains the word "crazy", if so, @Ethan
  if (words.includes("crazy")) {
    message.reply(`<@${config.CRAZY_ID}>`);
  }
});

client.on("ready", () => {
  console.log("Crazy Bot Listening...");
});

export default client;
