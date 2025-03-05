import Usuario from "./Usuario.js"

export default class Alumno extends Usuario {
    constructor(nombres, apellidos,correo,activo,cursosTomados) {
        super(nombres, apellidos, correo, activo);
        this.cursosTomados = cursosTomados;
        
    }
    // GETTERS
        getNombres() {
            return this.nombres;
        }
        getApellidos() {
            return this.apellidos;
        }
        
        getCorreo() {
            return this.correo;
        }
        
        getActivo() {
            return this.activo;
        }

        getCursosTomados() {
            return this.cursosTomados;
        }
        // SETTERS
        setNombres(nombres) {
            this.nombres = nombres;
        }
        setApellidos(apellidos) {
            this.apellidos = apellidos;
        }
        
        setCorreo(correo) {
            this.correo = correo;
        }
        
        setActivo(activo) {
            this.activo = activo;
        }
        
        setCursosTomados(cursosTomados) {
            this.cursosTomados = cursosTomados;
        }
}