import { Component, Input, Output } from '@angular/core';
import {  BehaviorSubject, Observable  } from 'rxjs'

@Component({
    moduleId: module.id,
    selector: 'sweetimage',
    templateUrl: 'sweetimage.component.pug',
    styleUrls: ['sweetimage.component.styl']
})
export class SweetimageComponent {

    file: File | string

    @Input() width = 400;
    @Input() height = 400;

    pasarImagen : BehaviorSubject<any>

    constructor(){

        this.pasarImagen = new BehaviorSubject(null);


    }

    nuevoArchivo(ev){
        this.pasarImagen.next(ev)
    }

    eliminarArchivo(ev){
        this.pasarImagen.next(null)
    }

}
