
// Angular Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../extras/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";


import { FichaversionComponent } from './fichaversion.component';


import { VersionComponent } from './version/version.component';
import { AtributosComponent } from './version/atributos/atributos.component';
import { CategoriaComponent } from './version/atributos/categoria/categoria.component';
import { AtributoComponent } from './version/atributos/categoria/atributo/atributo.component';
import { PrecioComponent } from './version/precio/precio.component';
import { ExistenciaComponent } from './version/existencia/existencia.component';

import { AtributosBridge  } from '../atributos.bridge';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,],
    declarations: [
        FichaversionComponent,
        VersionComponent,
        AtributosComponent,
        CategoriaComponent,
        AtributoComponent,
        PrecioComponent,
        ExistenciaComponent,
    ],
    exports: [
        FichaversionComponent
    ],
    providers : [
        AtributosBridge
    ]
})
export class FichaversionModule {}
