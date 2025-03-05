import Curso from "./classes/Curso.js"
import Profesor from "./classes/profesor.js"
import Alumno from "./classes/Alumno.js"

const elem = document.getElementById("cursos")

// Imprime un curso en el DOM
function mostrarCurso(curso) {
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="${curso.getPoster()}" alt="${curso.getNombre()}" />
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3> 
            <div class="s-center">
              <span class="small">Clases: ${curso.getClases()}</span>
            </div>
        </div>
    `
    elem.appendChild(hijo)
}

// Mostrar profesor
const lista = document.getElementById("formProfesor");
function mostrarProfe(profesor) {
    const hijo = document.createElement("li");
    hijo.classList.add("card");
    hijo.innerHTML = `
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${profesor.getNombre()}, ${profesor.getApellido()}, ${profesor.getCorreo()}, ${profesor.getActivo()}</h3>
            <div class="s-center">
              <span class="small">Clases: ${profesor.getCursosDictados()}, ${profesor.getCalificacion()}</span>
            </div>
        </div>
    `
    lista.appendChild(hijo);
}

// Mostrar estudiante
const listEst = document.getElementById("formAlumno");
function mostrarAlum(alumno) {
    const hijo = document.createElement("li");
    hijo.classList.add("card");
    hijo.innerHTML = `
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${alumno.getNombres()}, ${alumno.getApellidos()}, ${alumno.getCorreo()}, ${alumno.getActivo()}</h3>
            <div class="s-center">
              <span class="small">Clases: ${alumno.getCursosTomados()}</span>
            </div>
        </div>
    `
    listEst.appendChild(hijo);
}

// Crear curso desde formulario
const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
    formulario.reset()
})

// Crear profesor desde formulario
const forprof = document.getElementById("formProfesor")
forprof.addEventListener("submit", P => {
    P.preventDefault()
    const target = P.target
    const profesor = new Profesor(
        target.nombreProfesor.value,
        target.apellidoProfesor.value,
        target.correoProfesor.value,
        target.activoProfesor.value,
        target.cursosdicProfesor.value,
        target.calificacionProfesor.value
    )
    mostrarProfe(profesor)
    forprof.reset()
})

// Crear alumno desde formulario
const foralum = document.getElementById("formAlumno")
foralum.addEventListener("submit", P => {
    P.preventDefault()
    const target = P.target
    const alumno = new Alumno(
        target.nombreAlumno.value,
        target.apellidoAlumno.value,
        target.correoAlumno.value,
        target.activoAlumno.value,
        target.cursosTomados.value
    )
    mostrarAlum(alumno)
    foralum.reset()
})





