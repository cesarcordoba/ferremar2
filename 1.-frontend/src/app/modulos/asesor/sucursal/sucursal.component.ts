
import { Component, OnInit } from '@angular/core';

import { SucursalService, AuthService } from '../../../servicios';
@Component({
  selector: 'sucursal',
  templateUrl: './sucursal.component.pug',
  styleUrls: [
      './sucursal.component.styl'
  ]
})
export class SucursalComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    usuario : any = {
        IdUsuario : null
    }

    constructor( private us: AuthService) {

        this.us.obtenerUsuario().subscribe(user => {

			console.log('si')

			this.usuario = user
			// user && user.getTipo() == 'admin'? this.navLinks.push({ path: '/admin/usuarios', label: 'Usuarios', icon: 'supervised_user_circle' }) : null;
		})

        // SucursalService.obtener()
        // .then(response => this.sucursales = response)
        // .then(response => console.log(response))

    }

  ngOnInit() {

    console.log( this.borde )

  }
}
