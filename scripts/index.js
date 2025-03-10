import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";

const elem = document.getElementById("formCursos");

// Función para mostrar un curso en el DOM
function mostrarCurso(curso) {
    const hijo = document.createElement("div");
    hijo.classList.add("card");
    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="${curso.getPoster()}" alt="${curso.getNombre()}" style="width: 100%; height: auto;"/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3> 
            <div class="s-center">
              <span class="small">Clases: ${curso.getClases()}</span>
            </div>
        </div>
    `;
    elem.appendChild(hijo);
}

// Mostrar profesor
const listaProfesores = document.getElementById("formProfesor");
function mostrarProfe(profesor) {
    const hijo = document.createElement("li");
    hijo.classList.add("card");
    hijo.innerHTML = `
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${profesor.getNombre()}, ${profesor.getApellido()}, ${profesor.getCorreo()}, ${profesor.getActivo()}</h3>
            <div class="s-center">
              <span class="small">Clases: ${profesor.getCursosDictados()}, Calificación: ${profesor.getCalificacion()}</span>
            </div>
        </div>
    `;
    listaProfesores.appendChild(hijo);
}

// Mostrar estudiante
const listaEstudiantes = document.getElementById("formAlumno");
function mostrarAlum(alumno) {
    const hijo = document.createElement("li");
    hijo.classList.add("card");
    hijo.innerHTML = `
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${alumno.getNombres()}, ${alumno.getApellidos()}, ${alumno.getCorreo()}, ${alumno.getActivo()}</h3>
            <div class="s-center">
              <span class="small">Cursos Tomados: ${alumno.getCursosTomados()}</span>
            </div>
        </div>
    `;
    listaEstudiantes.appendChild(hijo);
}

// Función para manejar la visibilidad de los formularios
function mostrarFormulario(tipo) {
    document.getElementById("seleccion-usuario").style.display = "none";
    document.getElementById("formularios").style.display = "block";

    document.getElementById("formulario-curso").style.display = "none";
    document.getElementById("formulario-profesor").style.display = "none";
    document.getElementById("formulario-estudiante").style.display = "none";

    if (tipo === "curso") document.getElementById("formulario-curso").style.display = "block";
    else if (tipo === "profesor") document.getElementById("formulario-profesor").style.display = "block";
    else if (tipo === "estudiante") document.getElementById("formulario-estudiante").style.display = "block";
}

// Crear curso desde formulario
const formularioCurso = document.getElementById("formCursos");
formularioCurso.addEventListener("submit", e => {
    e.preventDefault();
    const target = e.target;
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value);
    mostrarCurso(curso);
    formularioCurso.reset();
});

// Crear profesor desde formulario
const formularioProfesor = document.getElementById("formProfesor");
formularioProfesor.addEventListener("submit", e => {
    e.preventDefault();
    const target = e.target;
    const profesor = new Profesor(
        target.nombreProfesor.value,
        target.apellidoProfesor.value,
        target.correoProfesor.value,
        target.activoProfesor.value,
        target.cursosdicProfesor.value,
        target.calificacionProfesor.value
    );
    mostrarProfe(profesor);
    formularioProfesor.reset();
});

// Crear alumno desde formulario
const formularioAlumno = document.getElementById("formAlumno");
formularioAlumno.addEventListener("submit", e => {
    e.preventDefault();
    const target = e.target;
    const alumno = new Alumno(
        target.nombreAlumno.value,
        target.apellidoAlumno.value,
        target.correoAlumno.value,
        target.activoAlumno.value,
        target.cursosTomados.value
    );
    mostrarAlum(alumno);
    formularioAlumno.reset();
});