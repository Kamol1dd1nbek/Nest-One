import { IsString, IsNumber, IsNotEmpty } from "class-validator"
export class CreateBuilderDto {
    @IsString()
    full_name: string;
    birth_day: Date;
    salary: number;
    companyId: number;
}
