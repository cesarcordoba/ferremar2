

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey, BeforeUpdate, AfterCreate, AfterUpdate, BeforeCreate } from 'sequelize-typescript';
import { Precio } from '../precio/modelo';
import { Existencia } from '../existencia/modelo';

@Table({
    timestamps: true,
    tableName: 'inventarios'
})
export class Inventario extends Model<Inventario> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    clave : string;



    @BelongsToMany(()=> Precio,'inventarios_precios','IdInventario', 'IdPrecio')
    Precios : Precio[];

    @BelongsToMany(()=> Existencia,'inventarios_existencias','IdInventario', 'IdExistencia')
    Existencias : Existencia[];

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}