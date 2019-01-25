import { OPENPAYKEYS } from "../../../../environments/environment";
import { Component, OnInit } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {  BehaviorSubject, Observable  } from 'rxjs'

import { CrearentregaComponent } from './crearentrega/crearentrega.component';

import { CambiardireccionComponent } from './cambiardireccion/cambiardireccion.component';
import { CambiartarjetaComponent } from './cambiartarjeta/cambiartarjeta.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
declare var $: any;
import { OrdenService, TransaccionService } from '../../../servicios';

@Component({
  selector: 'perfilpedido',
  templateUrl: './perfilpedido.component.pug',
  styleUrls: [
      './perfilpedido.component.styl'
  ]
})
export class PerfilpedidoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    //
    // pasarOrden : BehaviorSubject<any>

    private MERCHANT_ID: string = OPENPAYKEYS.MERCHANT_ID;
    private PUBLIC_API_KEY: string = OPENPAYKEYS.PUBLIC_API_KEY;
    private produccion: boolean;

    orden: any = {}

    constructor(private dialog: MatDialog, public route : ActivatedRoute, private titleService: Title, private meta : Meta, public snackBar: MatSnackBar ) {

        OpenPay.setId('mzbzo4aoqvcld7vl9f9s');
        ​OpenPay.setApiKey(this.PUBLIC_API_KEY);
        OpenPay.setSandboxMode(false);

    route.params.subscribe(async (res) =>
        OrdenService.one(Number(res.id))
        .then(response => this.orden = response)
        .then(response => {
            this.orden.obtenerEntregas()
            this.orden.obtenerDireccion()
            this.orden.obtenerTarjeta()
            this.orden.obtenerUsuario()
            this.orden.obtenerTransacciones()
            .then(transacciones => {
                transacciones.forEach(transaccion => {
                    transaccion.obtenerPrecio()
                    transaccion.obtenerMargenes()
                    transaccion.obtenerDescuentos()
                    transaccion.obtenerVersion()
                    transaccion.obtenerPromo()
                    transaccion.obtenerVersion()
                    .then(version => version.obtenerProducto())
                    .then(producto => producto.obtenerPortadas())
                })
            })

            console.log(this.orden)

            // this.pasarOrden.next(response);

            this.titleService.setTitle( this.orden.nombre );
        // this.meta.updateTag({ name: 'description', content: _.replace( this.proyecto.resumen, '<p>', '')  })
        // this.meta.updateTag({ name: 'keywords', content: 'pagina web, presupuesto web, cotizador online, cotizador paginas web, presupuesto tienda online,' + this.proyecto.nombre })

        })

    )


  }

  ngOnInit() {



  }

    cambiarTarjeta(){
        this.dialog.open(CambiartarjetaComponent, {
            width :  '600px',
            height :  '600px',
            data :  {
                orden : this.orden
            }
        }).afterClosed().subscribe(response => {

        });
    }

    cambiarDireccion(){
        this.dialog.open(CambiardireccionComponent, {
            width :  '600px',
            height :  '600px',
            data :  {
                orden : this.orden
            }
        }).afterClosed().subscribe(response => {

        });
    }


  imprimir(){
      console.log(this)
  }

  guardarTransaccion(transaccion){
      TransaccionService.editar(Object.assign(transaccion, { status : 1}))
      .then(response => this.notificacion('se asigno una entrega'))

  }

  agregar(){
      this.dialog.open(CrearentregaComponent, {
          // position : {
          //     top : '25px'
          // },
          width :  '600px',
          height :  '600px',
          data :  {
              orden : this.orden.id
          }
      }).afterClosed().subscribe(response => {
            this.orden.obtenerEntregas()
      });
  }

  primero(){

        if(this.orden.transacciones.reduce((ac, v) => ac = ac === false ? v.status ===  ( 0 || null ) ? false : true : false
        , true) === true){
            this.notificacion('Es hora de confirmar el pago')
            OrdenService.editar(Object.assign(this.orden, { status : 1 }))
        }else{
            this.notificacion('Todas las transacciones deben de tener fecha')
        }
  }
  segundo(){

      // OpenPay.setId(this.MERCHANT_ID);
      // ​OpenPay.setApiKey(this.PUBLIC_API_KEY);
      // OpenPay.setSandboxMode(true);
      // OpenPay.token.create({
      //     'holder_name': this.nuevatarjeta.controls.nombre.value,
      //     'card_number': this.nuevatarjeta.controls.numero.value,
      //     'expiration_month': this.nuevatarjeta.controls.mes.value,
      //     'expiration_year': this.nuevatarjeta.controls.ano.value,
      //     'cvv2': this.nuevatarjeta.controls.codigo.value
      // }, this.SuccessCallback, (response) => console.log(response))

      OrdenService.crearCargo({
            id : this.orden.id,
            device : OpenPay.deviceData.setup("payment-form", "divice_id_token")
        })
      .then(response => console.log(response))

      this.snackBar.open('Se esta generando el pago', 'Listo', {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center'
      });
  }
  tercero(){
      this.snackBar.open('Pendiente de recolección', 'Listo', {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center'
      });
  }
  cuarto(){
      this.snackBar.open('Se ha recogido la mercancia', 'Listo', {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center'
      });
  }

  notificacion(x){
      this.snackBar.open(x, 'Listo', {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center'
      });
  }
}
