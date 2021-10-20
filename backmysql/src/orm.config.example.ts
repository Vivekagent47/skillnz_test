import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306, //DB Port You use,
  username: "root",
  password: "DB password",
  database: "DB Name",
  entities: [__dirname + "/**/**/*.entity{.ts,.js}"],
  synchronize: true,
  // debug: true,
};

export = config;
