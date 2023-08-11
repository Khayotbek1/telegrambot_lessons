const https = require("https");

/* function getUpdates() {
  https.get(
    "https://api.telegram.org/bot6528920785:AAEUDQiju_-g4EnF8mdQIb2vhne0Jvv1yyk/getUpdates",
    (Response) => {
      Response.setEncoding("utf-8");
      let data = "";

      Response.on("data", (chunk) => {
        data = data + chunk;
      });

      Response.on("end", () => {
        try {
          let x = JSON.parse(data);
          console.log(x);
        } catch (error) {
          console.log(error.message);
        }
      });
    }
  );
}
 */
let x = new Promise((resolve, rejects) => {
  setTimeout(() => {
    // resolve(5);
    rejects("Memory is out");
  }, 2000);
});

async function main() {
  try {
    let y = await x;
    console.log(y);
  } catch (error) {
    console.log(error);
  }
}
main();
