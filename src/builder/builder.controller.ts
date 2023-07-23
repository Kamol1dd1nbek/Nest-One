import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}
 
  @Post()
  createBuilder(@Body() createBuilderDto: CreateBuilderDto) {
    return this.builderService.createBuilder(createBuilderDto);
  }

  @Get()
  findAllBuilders() {
    return this.builderService.findAllBuilders();
  }

  @Get(':id')
  findBuilderById(@Param('id') id: string) {
    return this.builderService.findBuilderById(+id);
  }

  @Patch(':id')
  updateBuilder(@Param('id') id: string, @Body() updateBuilderDto: UpdateBuilderDto) {
    return this.builderService.updateBuilder(+id, updateBuilderDto);
  }

  @Delete(':id')
  removeBuilder(@Param('id') id: string) {
    return this.builderService.removeBuilder(+id);
  }
}