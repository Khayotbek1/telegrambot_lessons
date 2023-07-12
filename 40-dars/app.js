const https = require("https");

https.get("https://jsonplaceholder.typicode.com/posts", (Response) => {
  Response.setEncoding("utf-8");
  let data = "";

  Response.on("data", (chunk) => {
    data = data + chunk;
  });

  Response.on("end", () => {
    try {
      let result = JSON.parse(data);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  });
});
