
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barramenuhome',
  templateUrl: './barramenuhome.component.pug',
  styleUrls: [
      './barramenuhome.component.styl'
  ]
})
export class BarramenuhomeComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}