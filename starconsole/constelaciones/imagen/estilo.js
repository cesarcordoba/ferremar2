const _ = require('lodash');

module.exports = (documento, modelo, nivel) => {
return new Promise(resolve => {
documento.write(`
@import  '../../../`+ _.repeat('../', nivel) + `defaults.styl'`)
documento.write(`


.item
    position: relative;
    width 220px
    @extend .borde
    .dimensiones
        position: absolute;
        right 0px
        top 0px
        .dimension
            height 20px
            width 70px
            background-color: rgba(0,0,0,.2)
            color black
            font-family: arial
            border-radius: 20px
            display: flex
            justify-content: center
            align-items: center
            margin 4px 0
            font-size: 13px
    .eliminar
        position: absolute;
        bottom 0px

.imagenes
    display flex
    justify-content center
    align-items center

form
    mat-form-field
        width 100px


    `, (algo) => resolve(true))
    })
}
