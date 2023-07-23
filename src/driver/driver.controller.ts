import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }

  @Get()
  findAllDrivers() {
    return this.driverService.findAllDrivers();
  }

  @Get(':id')
  findDriverById(@Param('id') id: string) {
    return this.driverService.findDriverById(+id);
  }

  @Patch(':id')
  updateDriver(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.updateDriver(+id, updateDriverDto);
  }

  @Delete(':id')
  removeDriver(@Param('id') id: string) {
    return this.driverService.removeDriver(+id);
  }
}