import client from "./client";
import config from "./config";

if (config.BOT_TOKEN === undefined) {
  console.error("Please provide a BOT_TOKEN in the config.json file.");
  process.exit(1);
} else if (config.CRAZY_ID === undefined) {
  console.error("Please provide CRAZY_ID in the config.json file.");
  process.exit(1);
}

client.login(config.BOT_TOKEN);
