
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'barramenuhome',
  templateUrl: './barramenuhome.component.pug',
  styleUrls: [
      './barramenuhome.component.styl'
  ],encapsulation: ViewEncapsulation.None
})
export class BarramenuhomeComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor(
      private dialog: MatDialog,
    ) {

  }

  ngOnInit() {

  }

}
