import { Table, Column, DataType, Model } from "sequelize-typescript"

interface CompanyAttr {
    name: string;
    address: string;
    phone: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyAttr>{
    @Column({ 
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
        unique: true
    })
    name: string;

    @Column({
        type: DataType.STRING,
    })
    address: string;

    @Column({
        type: DataType.STRING(20)
    })
    phone: string;
}