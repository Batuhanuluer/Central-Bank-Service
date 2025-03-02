import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); 


@Module({
  imports: [AccountsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, 
      port: 3306,
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,  
      database: process.env.DB_NAME,  
      autoLoadEntities: true,
      synchronize: true,
    }),


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
