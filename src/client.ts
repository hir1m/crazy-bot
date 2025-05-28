import { Client, GatewayIntentBits } from "discord.js";
import config from "./config";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("messageCreate", async (message) => {
  try {
    const { content } = await message.fetch();

    // removes punctuation, make message lowercase and split it into words
    const words = content
      .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()…]/g, "")
      .toLowerCase()
      .split(" ");
    const crazyWords = ["crazy", "craziest", "crazier"];
    const gnjackson = ["good night jackson", "gn jackson", "goodnight jackson"];
    const hasCrazy = words.some((word) => crazyWords.includes(word));
    const hasJackson = words.some((word) => gnjackson.includes(word));

    if (hasCrazy && !message.author.bot) {
      message.reply(`<@${config.CRAZY_ID}>`);
    }
    if (hasJackson && !message.author.bot){
      message.reply(`goodnight jackson`);
    }
  } catch (error) {
    console.log(error);
  }
});

client.on("ready", () => {
  console.log("Crazy Bot Listening...");
});

export default client;
