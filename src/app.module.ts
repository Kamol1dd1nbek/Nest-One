import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DriverModule } from './driver/driver.module';
import { MachineModule } from './machine/machine.module';
import { BuilderModule } from './builder/builder.module';
import { CompanyModule } from './company/company.module';
import { Company } from './company/models/company.model';
import { Builder } from './builder/models/builder.model';
import { Driver } from './driver/models/driver.model';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true
  }),
  SequelizeModule.forRoot({
    dialect: "postgres",
    host: process.env.PS_HOST,
    username: process.env.PS_USER,
    port: +process.env.PS_PORT,
    password: process.env.PS_PASSWORD,
    database: process.env.PS_DB,
    models: [Company, Builder, Driver],
    autoLoadModels: true,
    logging: true
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
 