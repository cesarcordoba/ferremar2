

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MaterialModule } from './../../extras/material.module';
import { ExtrasModule } from './../../extras/extras.module';


import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component'
import { AdminRoutingModule } from './admin-routing.module';
import { ConfirmDelDialogComponent } from './fragments/confirm-del-dialog/confirm-del-dialog.component';

import { PerfilComponent } from './perfil/perfil.component';
import { HomeModule } from './home/home.module';

import { ProductosModule } from './productos/productos.module';

import { OtrosModule } from './otros/otros.module';

import { AmbientesModule } from './ambientes/ambientes.module';

import { SucursalesModule } from './sucursales/sucursales.module';

import { PromocionesModule } from './promociones/promociones.module';

import { UsuariosModule } from './usuarios/usuarios.module';

import { PerfilproductoModule } from './perfilproducto/perfilproducto.module';

import { FichausuarioModule } from './compartidos/fichausuario/fichausuario.module';

import { ActividadesModule } from './actividades/actividades.module';

import { PrefilpromocionesModule } from './prefilpromociones/prefilpromociones.module';

import { MarcasModule } from './marcas/marcas.module';

import { PerfilmarcaModule } from './perfilmarca/perfilmarca.module';

import { AnunciosModule } from './anuncios/anuncios.module';

import { PerfilanuncioModule } from './perfilanuncio/perfilanuncio.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, ReactiveFormsModule,
		AdminRoutingModule,
		SlickCarouselModule,
		FroalaEditorModule, FroalaViewModule,
		ExtrasModule,
		MaterialModule,
        HomeModule,
        ProductosModule,
        OtrosModule,
        AmbientesModule,
        SucursalesModule,
        PromocionesModule,
        UsuariosModule,
        PerfilproductoModule,
        FichausuarioModule,
        ActividadesModule,
        PrefilpromocionesModule,
        MarcasModule,
        PerfilmarcaModule,
        AnunciosModule,
        PerfilanuncioModule,
		],
	entryComponents: [
		ConfirmDelDialogComponent
	],
	declarations: [
		AdminComponent,
		ConfirmDelDialogComponent,
		PerfilComponent
	]
})
export class AdminModule { }
