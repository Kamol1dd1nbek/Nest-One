import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectModel } from "@nestjs/sequelize"
import { Driver } from './models/driver.model';

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private readonly driverRepo: typeof Driver) {}

   async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }

  async findDriverById(id: number) {
    const driver = await this.driverRepo.findByPk(id);
    if (!driver) throw new HttpException("driver with this id was not found", HttpStatus.NOT_FOUND);
    else return driver;
  }

  async findAllDrivers(): Promise<Driver[]> {
    const drivers = await this.driverRepo.findAll({ include: { all: true } });
    if (drivers.length === 0 ) throw new HttpException("drivers not found", HttpStatus.NOT_FOUND);
    else return drivers;
  }

  async updateDriver(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.update(updateDriverDto, {where: { id }, returning: true});
    if (driver[0] == 0) throw new HttpException("driver with this id was not found", HttpStatus.NOT_FOUND);
    return driver[1][0];
  }

  async removeDriver(id: number) {
    const deleteddriver = await this.driverRepo.destroy({where: { id }});
    if (deleteddriver == 0) throw new HttpException("Error deleting record", HttpStatus.NOT_FOUND);    
    throw new HttpException("Record deleted successfully", HttpStatus.OK);
  }
}