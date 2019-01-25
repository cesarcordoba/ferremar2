
// Angular Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../extras/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";


import { FichausuarioComponent } from './fichausuario.component';


import { FormulariousuarioComponent } from './formulariousuario/formulariousuario.component';
import { FormulariollaveComponent } from './formulariollave/formulariollave.component';
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,],
    declarations: [
        FichausuarioComponent,
        FormulariousuarioComponent,
        FormulariollaveComponent,
    ],
    exports: [FichausuarioComponent]
})
export class FichausuarioModule {}

