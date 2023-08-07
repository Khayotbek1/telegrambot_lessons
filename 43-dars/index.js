import axios from "axios";

async function TelegramBot() {
  let updates = await axios.get(
    "https://api.telegram.org/bot6528920785:AAEUDQiju_-g4EnF8mdQIb2vhne0Jvv1yyk/getUpdates"
  );
  if (!updates?.data?.ok) return;
  for (let message of updates.data.result) {
    sendRequest("sendMessage", {
      chat_id: message.message.chat.id,
      text: "<b>Hi send me link</b>",
      parse_mode: "html",
    });
  }
}

TelegramBot();

async function sendRequest(methodName, options) {
  let response = await axios.post(
    "https://api.telegram.org/bot6528920785:AAEUDQiju_-g4EnF8mdQIb2vhne0Jvv1yyk/" +
      methodName,
    options
  );
  return response.data;
}
