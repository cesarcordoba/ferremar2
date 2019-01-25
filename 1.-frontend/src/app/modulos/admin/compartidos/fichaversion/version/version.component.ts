
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

//    3
import { VersionService, AuthService, AccionService } from '../../../../../servicios';
@Component({
  selector: 'version',
  templateUrl: './version.component.pug',
  styleUrls: ['./version.component.styl']
})
export class VersionComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() version

    formulario: FormGroup;

    versiones: any
    opciones : any

    sucursales : any

    constructor(private fb: FormBuilder, private auth : AuthService) {


        this.formulario = this.fb.group({
            nombre : null,
            status : null,
        })

        // VersionService.obtener()
        // .then(response => this.versiones = response)
        // .then(response => console.log(response))

    }

    ngOnInit() {

        this.formulario = this.fb.group({
            nombre: [ this.version.nombre ],
            status: [ this.version.status ]
        })

        VersionService.opciones(this.version.id)
        .then(response => this.opciones = response)
        .then(response => console.log(response))


        VersionService.sucursales(this.version.id)
        .then(response => this.sucursales = response)

    }

    cambio(x){
        this.version.status = x.checked ? 1 : 0
    }

    aceptar(){
        VersionService.editar(this.version)
        this.auth.obtenerUsuario()
        .subscribe(usuario => {
            AccionService.crear({
                seccion : 'version', contenido : 'se edito', objeto : this.version.id, IdUsuario : usuario.id
            })
        })
    }
}
