//sample for generating migrations

import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'arte7',
    entities: ['dist/**/*.entity.js'],
    dropSchema: false,
    synchronize: false,
    migrations: ['dist/shared/migrations/**/*{.ts,.js}'],
    migrationsRun: true,
};


const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

/**
 * Command for generating migrations
 * npm run typeorm -- -d dist/db/data-source.js migration:generate ./src/shared/migrations/newMigration
 * / */
