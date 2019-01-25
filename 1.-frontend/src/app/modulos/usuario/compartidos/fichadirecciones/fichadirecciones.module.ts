
// Angular Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../extras/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";


import { FichadireccionesComponent } from './fichadirecciones.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,],
    declarations: [
        FichadireccionesComponent,
    ],
    exports: [FichadireccionesComponent]
})
export class FichadireccionesModule {}

