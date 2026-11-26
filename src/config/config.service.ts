import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ConfigKey } from './config.key';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const env = process.env.NODE_ENV || 'development';

    if (!['development', 'production'].includes(env)) {
      throw new Error(`Entorno no válido: ${env}`);
    }

    const envFilePath = `${process.cwd()}/.env.${env}`;

    if (!fs.existsSync(envFilePath)) {
      throw new Error(`No se encontró el archivo: ${envFilePath}`);
    }

    this.envConfig = dotenv.parse(fs.readFileSync(envFilePath));
  }

  get(key: ConfigKey): string | undefined {
    return this.envConfig[key];
  }
}