import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from "@nestjs/sequelize"
import { Company } from './models/company.model';
@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private readonly companyRepo: typeof Company) {}

  async createComapny(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = await this.companyRepo.create(createCompanyDto);
    return company;
  }

  async findAllCompanies() {
    const companies = await this.companyRepo.findAll();
    if (!companies) throw new HttpException("Companies not found", HttpStatus.NOT_FOUND);
    else return companies;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
