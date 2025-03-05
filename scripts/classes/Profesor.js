import Usuario from "./Usuario.js"

export default class Profesor extends Usuario {
    constructor(nombres,apellidos,correo,activo,cursosdictados,calificacion) {
        super(nombres,apellidos,correo,activo);
        this.cursosDictados = cursosdictados;
        this.calificacion=calificacion
    }
    getNombre(){
        return this.nombres;
    }
    getApellido(){
        return this.apellidos;
    }
    getCorreo(){
        return this.correo;
    }
    getActivo(){
        return this.activo;
    }
    getCursosDictados(){
        return this.cursosDictados;
    }
    getCalificacion(){
        return this.calificacion;
    }
    
    setNombre(nombres){
        this.nombres=nombres;
    }
    setApellido(apellidos){
        this.apellidos=apellidos;
    }
    setCorreo(correo){
        this.correo=correo;
    }
    setActivo(activo){
        this.activo=activo;
    }
    setCursosDictados(cursosDictados){
        this.cursosDictados=cursosDictados;
    }
    setCalificacion(calificacion){
        this.calificacion=calificacion;
    }
}
