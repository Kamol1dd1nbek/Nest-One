import { Model, Table, Column, DataType } from "sequelize-typescript"

interface DriverAttr {
    first_name: string;
    last_name: string;
}

@Table({ tableName: "driver" })
export class Driver extends Model<Driver, DriverAttr> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    first_name: string;

    @Column({
        type: DataType.STRING(40)
    })
    last_name: string;
}
