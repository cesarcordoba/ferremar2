
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { LlaveService } from '../../../../../servicios';
@Component({
  selector: 'formulariollave',
  templateUrl: './formulariollave.component.pug',
  styleUrls: ['./formulariollave.component.styl']
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

    constructor(private fb: FormBuilder) {



  }

    ngOnInit() {
        console.log(this.llave)
    }


    aceptar(){

        console.log(this.llave)

        LlaveService.editar(this.llave)

    }


}
