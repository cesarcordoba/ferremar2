import { Component, OnInit, Input, ViewChild, ElementRef , AfterViewInit, Output, EventEmitter} from '@angular/core';
declare var Croppie: any;
import * as _ from 'lodash'

@Component({
    moduleId: module.id,
    selector: 'croppie',
    templateUrl: 'croppie.component.pug',
    styleUrls: ['croppie.component.styl']
})
export class CroppieComponent implements OnInit, AfterViewInit {

    croppie: any

    @Input() width = 400;
    @Input() height = 400;

    @Input() nuevoArchivo

    @Output() eliminarArchivo = new EventEmitter();

    @ViewChild('croppie') el : ElementRef

    base64textString

    ngAfterViewInit(){

        this.nuevoArchivo.subscribe(inputValue => {

            if(!_.isNull(inputValue)){

                var file: File = inputValue.files[0];
                var myReader: FileReader = new FileReader();

                myReader.onload = this._handleReaderLoaded.bind(this);
                myReader.readAsBinaryString(file);

                myReader.onloadend = (e) => {

                        console.log(this.base64textString)

                        this.croppie.bind({
                            url: this.base64textString
                        })


                    }

            }

        })
    }

    private _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = 'data:image/png;base64,' + btoa(binaryString);

    }

    ngOnInit(){

        var myReader: FileReader = new FileReader();

        this.croppie =  new Croppie( this.el.nativeElement, {
            viewport: {
                width: this.width, height: this.height
            },
            boundary: {
                width: 200, height: 200
            },
            showZoomer: true,
        });

    }

    eliminar(){
        this.eliminarArchivo.emit(true)
        this.croppie.destroy();
    }

}
