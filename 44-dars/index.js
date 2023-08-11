import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("6528920785:AAEUDQiju_-g4EnF8mdQIb2vhne0Jvv1yyk", {
  polling: true,
});

const keyboard = [];
const firstLine = ["photo", "video", "music"];
const secondLine = ["options", "info", "cancel"];
const result = [firstLine, secondLine];

/* bot.on("message", (update) => {
  bot.sendMessage(update.chat.id, "Testing", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Join",
            url: "https://t.me/HRazzoqov",
          },
          {
            text: "click me",
            callback_data: "click_me",
          },
          {
            text: "Join",
            url: "https://t.me/HRazzoqov",
          },
        ],
      ],

      keyboard: result,
      resize_keyboard: true,
    },
  });
});
 */
// one-time: bir marta ishlaydi keyboard
// resize-keyboard: telegramda optionsla ixcham turadu
// remove-keyboard: pastdan optionslani olib tashlaydi

bot.on("message", (update) => {
  if (update.text === "/start") {
    bot.sendMessage(update.chat.id, "<b>Enter menus</b>", {
      reply_markup: {
        keyboard: [["Robiyaxon", "Kamolaxon", "Fotimaxon", "Zuxraxon"]],
        resize_keyboard: true,
      },
      parse_mode: "HTML",
    });
  } else if (update.text == "Robiyaxon") {
    bot.sendMessage(update.chat.id, "Bo'limni tanlang:", {
      reply_markup: {
        keyboard: [["Foto", "Video"]],
        resize_keyboard: true,
      },
    });
  } else if (update.text == "Foto") {
    bot.sendMessage(update.chat.id, "No photos", {
      reply_markup: {
        keyboard: [["back"]],
        resize_keyboard: true,
      },
    });
  }
});
