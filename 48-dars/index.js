import TelegramBot from "node-telegram-bot-api";
const bot = new TelegramBot("6528920785:AAEUDQiju_-g4EnF8mdQIb2vhne0Jvv1yyk", {
  polling: true,
});

bot.on("message", (update) => {
  if ((update, text == "./start")) {
    bot.sendMessage(update.chat.id, "Enter your name");
  } else {
    data.push(update.text);
  }
});
