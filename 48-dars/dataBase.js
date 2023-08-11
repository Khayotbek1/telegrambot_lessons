import fsPromises from "fs/promises";
import fs from "fs";

class DataBase {
  constructor(db_name) {
    this.db_name = db_name;
    this.init();
  }

  async init() {
    let exist = fs.existsSync("./", +this.db_name + ".json");
    if (!exist) {
      await fsPromises.writeFile(
        "./" + this.db_name + ".json",
        JSON.stringify({}),
        {
          encoding: "utf-8",
        }
      );
    }
  }
}

const db = new DataBase("db1");
