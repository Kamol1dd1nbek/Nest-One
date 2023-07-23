import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true
  }),
  SequelizeModule.forRoot({
    dialect: "postgres",
    host: process.env.HOST,
    username: process.env.USER,
    port: +process.env.PORT,
    password: process.env.PASSWORD,
    database: process.env.DB
  })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
 