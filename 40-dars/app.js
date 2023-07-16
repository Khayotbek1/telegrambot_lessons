const https = require("https");
https.get("https://jsonplaceholder.typicode.com/posts", (Response) => {
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
});
