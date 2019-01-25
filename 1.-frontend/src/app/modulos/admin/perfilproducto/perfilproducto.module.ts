
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasModule } from '../../../extras/extras.module'
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { PerfilproductoComponent } from './perfilproducto.component';


import { ImagenportadaComponent } from './imagenportada/imagenportada.component';
import { VersionesComponent } from './versiones/versiones.component';
import { FichaproductoModule } from './../compartidos/fichaproducto/fichaproducto.module';
import { FichaversionModule } from './../compartidos/fichaversion/fichaversion.module';


@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        ExtrasModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2ImgMaxModule,

        FichaproductoModule, 
        FichaversionModule, ],
    declarations: [
        PerfilproductoComponent,
        ImagenportadaComponent,
        VersionesComponent,
    ],
    entryComponents : [
    ],
    exports: []
})
export class PerfilproductoModule {}

