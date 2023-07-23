import { Table, Column, DataType, Model, ForeignKey } from "sequelize-typescript";
import { Company } from "../../company/models/company.model";
interface BuilderAttr {
  full_name: string;
  birth_day: Date;
  salary: number;
  companyId: number;
}

@Table({ tableName: "builder" })
export class Builder extends Model<Builder, BuilderAttr> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    full_name: string;

    @Column({
        type: DataType.DATE
    })
    birth_day: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    salary: number;

    @ForeignKey(() => Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    companyId: number;
}