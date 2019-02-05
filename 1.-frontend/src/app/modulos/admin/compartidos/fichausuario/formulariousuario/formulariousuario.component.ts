
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { UsuarioService } from '../../../../../servicios';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'formulariousuario',
  templateUrl: './formulariousuario.component.pug',
  styleUrls: ['./formulariousuario.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class FormulariousuarioComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    editar: boolean = true
    valid: boolean = true
    @Input() usuario
    formulario: FormGroup;



    usuarios: any

    constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {

        
        
  }

    ngOnInit() {

    }

    editarusuario(){

      this.editar = !this.editar
      this.valid = !this.valid

    }

    aceptar(){

        console.log(this.usuario)

        UsuarioService.editar(this.usuario).then(response => {
          this.snackBar.open("Guardado Correctamente", "cerrar", { duration: 1000 })
        })

    }


}