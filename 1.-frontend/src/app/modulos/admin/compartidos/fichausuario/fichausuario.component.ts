
    import { Component, Input, OnInit } from '@angular/core';


import { UsuarioService, AuthService } from '../../../../servicios';


@Component({
  selector: 'fichausuario',
  templateUrl: './fichausuario.component.pug',
  styleUrls: ['./fichausuario.component.styl']
})
export class FichausuarioComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    usuario : any = {}

    constructor(private auth : AuthService) {
        this.auth.obtenerUsuario().subscribe(usuario => this.usuario = usuario)

    // UsuarioService.one()
    // .then(response => this.usuarios = response)
    // .then(response => console.log(response))

  }

  ngOnInit() {

      console.log( this.usuario  )

  }
}
