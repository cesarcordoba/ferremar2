
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Input } from '@angular/core';
import { VersionService } from '../../../../../../servicios';

@Component({
  selector: 'detalleversion',
  templateUrl: './detalleversion.component.pug',
  styleUrls: ['./detalleversion.component.styl']
})
export class DetalleversionComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    versiones: any

    constructor(
        public dialogRef: MatDialogRef<DetalleversionComponent>,
        @Inject(MAT_DIALOG_DATA) public version: any
    ){

    // VersionService.obtener()
    // .then(response => this.versiones = response)
    // .then(response => console.log(response))

  }

  ngOnInit() {



  }
}