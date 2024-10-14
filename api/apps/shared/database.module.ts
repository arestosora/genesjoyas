import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class DatabaseModule {
    static forRoot(entities = []): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    useFactory: () => ({
                        type: 'postgres',
                        host: process.env.DB_HOST || 'localhost',
                        port: parseInt(process.env.DB_PORT) || 5432,
                        username: process.env.DB_USER || 'test',
                        password: process.env.DB_PASSWORD || 'test',
                        database: process.env.DB_NAME || 'yourdb',
                        entities,
                        synchronize: true,
                    }),
                }),
            ],
        };
    }
}
