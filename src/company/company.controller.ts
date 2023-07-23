import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  createComapny(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createComapny(createCompanyDto);
  }

  @Get()
  findAllCompanies() {
    return this.companyService.findAllCompanies();
  }

  @Get(':id')
  findCompanyById(@Param('id')  id: string) {
    return this.companyService.findCompanyById(+id);
  }

  @Get('byname/:name')
  findCompanyByName(@Param('name')  name: string) {
    return this.companyService.findCompanyByName(name);
  }

  @Put(':id')
  updateCompany(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.updateCompany(+id, updateCompanyDto);
  }

  @Delete(':id')
  removeCompany(@Param('id') id: string) {
    return this.companyService.removeCompany(+id);
  }
}
