import { Model, Table, Column, DataType, AllowNull } from "sequelize-typescript"

interface MachineAttr {
    name: string;
    companyId: number;
}

@Table({ tableName: "machine" })
export class Machine extends Model<Machine, MachineAttr> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    companyId: number;
}