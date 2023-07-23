import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DriverModule } from './driver/driver.module';
import { MachineModule } from './machine/machine.module';
import { BuilderModule } from './builder/builder.module';
import { CompanyModule } from './company/company.module';
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
  }),
  CompanyModule,
  BuilderModule,
  MachineModule,
  DriverModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
 