import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LogisticSite } from '@mycompany/my-library/logistic-site.entity';

export function getDatabase() : TypeOrmModuleOptions {
  return {
    type: 'postgres',
    port: +process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    schema: 'scone',
    entities: [LogisticSite],
    ...(process.env.SEQUELIZE_SSL === 'true' && {
      ssl: { rejectUnauthorized: false },
    }),
  };
}
