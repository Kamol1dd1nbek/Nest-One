import { Injectable } from '@nestjs/common';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Injectable()
export class BuilderService {
  create(createBuilderDto: CreateBuilderDto) {
    return 'This action adds a new builder';
  }

  findAll() {
    return `This action returns all builder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} builder`;
  }

  update(id: number, updateBuilderDto: UpdateBuilderDto) {
    return `This action updates a #${id} builder`;
  }

  remove(id: number) {
    return `This action removes a #${id} builder`;
  }
}
