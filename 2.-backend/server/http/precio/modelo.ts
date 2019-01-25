

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey, BeforeUpdate, AfterCreate, AfterUpdate, BeforeCreate } from 'sequelize-typescript';
import { Inventario } from '../inventario/modelo';
import { Transaccion } from '../transaccion/modelo';

@Table({
    timestamps: true,
    tableName: 'precios'
})
export class Precio extends Model<Precio> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.INTEGER)
    cantidad : number;



    @Column(DataType.INTEGER)
    status : number;



    @BelongsToMany(()=> Inventario,'inventarios_precios','IdPrecio', 'IdInventario')
    Inventarios : Inventario[];

    @HasMany(()=> Transaccion, 'IdPrecio')
    Transacciones : Transaccion[];

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}