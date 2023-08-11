import axios from "axios";

async function TelegramBot() {
  let updates = await axios.get(
    "https://api.telegram.org/bot6528920785:AAEUDQiju_-g4EnF8mdQIb2vhne0Jvv1yyk/getUpdates?offset=-1"
  );

  if (!updates?.data?.ok) return;
  for (let message of updates.data.result) {
    sendRequest("sendLocation", {
      chat_id: message.message.chat.id,
      longitude: "40.3689992",
      latitude: "71.8380567,16z",
      caption: "@HRazzoqov",
      // text: "<b>Send me link</b>",
      // parse_mode: "html",
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
