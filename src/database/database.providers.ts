
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import { ConfigKey } from '../config/config.key';

export const databaseProviders = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get(ConfigKey.DATABASE_HOST) || 'localhost',
  port: Number(configService.get(ConfigKey.DATABASE_PORT)),
  username: configService.get(ConfigKey.DATABASE_USERNAME) || 'root',
  password: configService.get(ConfigKey.DATABASE_PASSWORD),
  database: configService.get(ConfigKey.DATABASE_NAME),
  entities: [],
  synchronize: true,
});
