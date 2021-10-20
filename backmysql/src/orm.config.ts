import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Vivek@123',
  database: 'skillz_test',
  entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
  synchronize: true,
  // debug: true,
};

export = config;
