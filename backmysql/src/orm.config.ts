import { ConnectionOptions } from 'typeorm';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config';

const config: ConnectionOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
  synchronize: true,
  // debug: true,
};

export = config;
