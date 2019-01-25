
// Angular Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../extras/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";


import { FichatarjetasComponent } from './fichatarjetas.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,],
    declarations: [
        FichatarjetasComponent,
    ],
    exports: [FichatarjetasComponent]
})
export class FichatarjetasModule {}

