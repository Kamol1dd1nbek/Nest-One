import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post()
  createMachine(@Body() createMachineDto: CreateMachineDto) {
    return this.machineService.createMachine(createMachineDto);
  }

  @Get()
  findAllMachines() {
    return this.machineService.findAllMachines();
  }

  @Get(':id')
  findMachineById(@Param('id') id: string) {
    return this.machineService.findMachineById(+id);
  }

  @Patch(':id')
  updateMachine(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machineService.updateMachine(+id, updateMachineDto);
  }

  @Delete(':id')
  removeMachine(@Param('id') id: string) {
    return this.machineService.removeMachine(+id);
  }
}