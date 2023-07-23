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
    if (companies.length === 0 ) throw new HttpException("Companies not found", HttpStatus.NOT_FOUND);
    else return companies;
  }

  async findCompanyById(id: number): Promise<Company> {
    const company = await this.companyRepo.findByPk(id);
    if (!company) throw new HttpException("Company with this id was not found", HttpStatus.NOT_FOUND);
    else return company;
  }

  async findCompanyByName(name: string): Promise<Company> {
    const company = await this.companyRepo.findOne({where: { name }});
    if (!company) throw new HttpException("Company with this name was not found", HttpStatus.NOT_FOUND);
    else return company;
  }

  async updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companyRepo.update(updateCompanyDto, {where: { id }, returning: true});
    if (company[0] == 0) throw new HttpException("Company with this id was not found", HttpStatus.NOT_FOUND);
    return company[1][0];
  }

  async removeCompany(id: number) {
    const deletedCompany = await this.companyRepo.destroy({where: { id }});
    if (deletedCompany == 0) throw new HttpException("Error deleting record", HttpStatus.NOT_FOUND);    
    throw new HttpException("Record deleted successfully", HttpStatus.OK);
  }
}