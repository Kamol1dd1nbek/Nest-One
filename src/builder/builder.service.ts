import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
import { InjectModel } from "@nestjs/sequelize"
import { Builder } from './models/builder.model';
@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private readonly builderRepo: typeof Builder) {}

  async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.create(createBuilderDto);
    return builder;
  }

  async findBuilderById(id: number) {
    const builder = await this.builderRepo.findByPk(id);
    if (!builder) throw new HttpException("builder with this id was not found", HttpStatus.NOT_FOUND);
    else return builder;
  }

  async findAllBuilders(): Promise<Builder[]> {
    const builders = await this.builderRepo.findAll();
    if (builders.length === 0 ) throw new HttpException("builders not found", HttpStatus.NOT_FOUND);
    else return builders;
  }

  async updateBuilder(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.update(updateBuilderDto, {where: { id }, returning: true});
    if (builder[0] == 0) throw new HttpException("builder with this id was not found", HttpStatus.NOT_FOUND);
    return builder[1][0];
  }

  async removeBuilder(id: number) {
    const deletedbuilder = await this.builderRepo.destroy({where: { id }});
    if (deletedbuilder == 0) throw new HttpException("Error deleting record", HttpStatus.NOT_FOUND);    
    throw new HttpException("Record deleted successfully", HttpStatus.OK);
  }
}