import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { InjectModel } from "@nestjs/sequelize"
import { Machine } from './models/machine.model';
@Injectable()
export class MachineService {
  constructor(@InjectModel(Machine) private readonly machineRepo: typeof Machine) {}

  async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
    const machine = await this.machineRepo.create(createMachineDto);
    return machine;
  }

  async findMachineById(id: number) {
    const machine = await this.machineRepo.findByPk(id);
    if (!machine) throw new HttpException("machine with this id was not found", HttpStatus.NOT_FOUND);
    else return machine;
  }

  async findAllMachines(): Promise<Machine[]> {
    const machines = await this.machineRepo.findAll({ include: { all: true } });
    if (machines.length === 0 ) throw new HttpException("machines not found", HttpStatus.NOT_FOUND);
    else return machines;
  }

  async updateMachine(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine> {
    const machine = await this.machineRepo.update(updateMachineDto, {where: { id }, returning: true});
    if (machine[0] == 0) throw new HttpException("machine with this id was not found", HttpStatus.NOT_FOUND);
    return machine[1][0];
  }

  async removeMachine(id: number) {
    const deletedmachine = await this.machineRepo.destroy({where: { id }});
    if (deletedmachine == 0) throw new HttpException("Error deleting record", HttpStatus.NOT_FOUND);    
    throw new HttpException("Record deleted successfully", HttpStatus.OK);
  }
}