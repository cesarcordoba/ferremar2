const _ = require('lodash');


const { planeta } = require('../../ovnis/relaciones.js')

module.exports = (documento, constelacion, nivel) => {
return new Promise(resolve => {
constelacion.getPlaneta()
.then(planeta => {


documento.write(`
button(mat-button, (click)="edicion = !edicion")
	span(*ngIf="edicion === false") Cambiar a modo edición
	span(*ngIf="edicion === true") Quitar el modo edición
mat-form-field(*ngIf="edicion === true")
	mat-select((selectionChange)="cambiarEscala($event)")
		mat-option([value]="'cuadrado'") Cuadrado
		mat-option([value]="'horizontal'") Horizontal
		mat-option([value]="'vertical'") Vertical
form([formGroup]='formulario', *ngIf="edicion === true")
	mat-form-field(appearance="outline")
		mat-label Width
		input(type="number", matInput, placeholder="Busca un nombre", formControlName='width')
	mat-form-field(appearance="outline")
		mat-label Height
		input(type="number", matInput, placeholder="Busca un nombre", formControlName='height')
	mat-form-field(appearance="outline")
		mat-label Escala W
		input(type="number", matInput, placeholder="Busca un nombre", formControlName='escala_w')
	mat-form-field(appearance="outline")
		mat-label Escala H
		input(type="number", matInput, placeholder="Busca un nombre", formControlName='escala_h')
	button(mat-stroked-button, (click)="aceptar()") Aceptar
mat-chip-list(*ngIf="edicion === true")
	mat-chip(*ngFor="let chip of configuracion.escalas") {{ chip.width }} - {{ chip.height }}
.inputs(*ngIf="edicion === true")
	dropify(
		[(ngModel)]="file",
		[isBase64]="true",
		[withCroppie]="true",
		[croppieWith]="configuracion.escalas[0].width",
		[croppieHeight]="configuracion.escalas[0].height")
	button(mat-icon-button, (click)="guardar()", *ngIf="carga==false")
		mat-icon save
	mat-spinner(*ngIf="carga==true")
//- img([src]="file")
.imagenes(*ngIf="edicion === false")
	.item(*ngFor="let item of items")
		.dimensiones
			.dimension(*ngFor="let imagen of item.imagenes") {{imagen.dimension}}
		.imagen
			img([src]="obtenerImagen(item.imagenes)")
		.eliminar
			button(mat-icon-button, color="warn", (click)="borrar()")
				mat-icon delete
	mat-spinner(*ngIf="carga==true")
`
)
})

constelacion.getSubConstelaciones()
.then(constelaciones => {

	constelaciones.forEach(constelacion => {
documento.write(`
	`+ constelacion.nombre)
	})
})
.then(() => resolve(true))

	})
}
