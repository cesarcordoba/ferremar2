

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey, BeforeUpdate, AfterCreate, AfterUpdate, BeforeCreate } from 'sequelize-typescript';
import { Producto } from '../producto/modelo';
import { Marca } from '../marca/modelo';
import { Transaccion } from '../transaccion/modelo';

@Table({
    timestamps: true,
    tableName: 'margenes'
})
export class Margen extends Model<Margen> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.INTEGER)
    cantidad : number;



    @Column(DataType.INTEGER)
    nivel : number;



    @BelongsToMany(()=> Producto,'productos_margenes','IdMargen', 'IdProducto')
    Productos : Producto[];

    @BelongsTo(()=> Marca, 'IdMarca')
    Marca : Marca;

    @ForeignKey(() => Marca)
    @Column
    IdMarca: number;
    

    @BelongsToMany(()=> Transaccion,'transacciones_margenes','IdMargen', 'IdTransaccion')
    Transacciones : Transaccion[];

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}