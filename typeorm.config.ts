import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const env = process.env.NODE_ENV || 'development';
const envFilePath = `${process.cwd()}/.env.${env}`;

if (!fs.existsSync(envFilePath)) {
  throw new Error(`No se encontró el archivo: ${envFilePath}`);
}

dotenv.config({ path: envFilePath });

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});