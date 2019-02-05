
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { LlaveService } from '../../../../../servicios';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'formulariollave',
  templateUrl: './formulariollave.component.pug',
  styleUrls: ['./formulariollave.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class FormulariollaveComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() llave = {
        IdTwitter : null,
        IdFacebook : null,
        IdGoogle : null,
        IdInstagram : null,
        password : null
    }
    formulario: FormGroup;
    llaves: any

    editar: boolean = true
    valid: boolean = true
    passwordValid : boolean = true
    validpass = "password"

    constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {



  }

    ngOnInit() {
        console.log(this.llave)
    }


    aceptar(){

        console.log(this.llave)

        LlaveService.editar(this.llave).then(response => 
            this.snackBar.open("Guardado Correctamente", "cerrar", { duration: 1000 }))

    }

    editarusuariollave(){

        this.editar = !this.editar
        this.valid = !this.valid
        this.passwordValid = !this.passwordValid
        if(this.passwordValid === false){
            this.validpass = "password"
        }
      }
      
    cambiarpass(){
        this.passwordValid = !this.passwordValid
        if(this.passwordValid === true){
            this.validpass = "text"
        }else {
            this.validpass = "password"
        }
        
    }

}
