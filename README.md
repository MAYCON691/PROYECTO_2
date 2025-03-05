#  Proyecto Final - Curso de JavaScript POO | EDteam

Bienvenido a este proyecto final desarrollado para el curso de **JavaScript POO** de **EDteam**.  
Se trata de una aplicación web sencilla que permite **registrar cursos** y **gestionar usuarios** asociados a dichos cursos, quienes pueden ser **profesores** o **alumnos**.

---

##  Descripción

Esta aplicación fue creada con el objetivo de practicar los principios de **Programación Orientada a Objetos (POO)** en **JavaScript**.

La app permite:
- Registrar nuevos cursos con nombre, poster y cantidad de clases.
- Registrar profesores y asignarles cursos dictados.
- Registrar alumnos y asignarles cursos tomados.
- Mostrar todos estos registros dinámicamente en la página.
- Almacenar usuarios y cursos directamente desde código o desde formularios.

Todo el manejo de datos se realiza en **tiempo real** y se reflejan en el DOM con la creación dinámica de elementos HTML.

---

##  Tecnologías utilizadas

- **HTML5**
- **CSS3** (con clases sugeridas por EDteam)
- **JavaScript (ES6+)**
  - Programación Orientada a Objetos (POO)
  - Manipulación del DOM
  - Eventos y formularios

---

##  Estructura del proyecto
 proyecto-js-poo/
│
├── 📁 scripts/                    # Carpeta principal de scripts JS
│   ├── 📁 classes/                # Clases del proyecto
│   │   ├── Alumno.js              # Clase que define a un alumno
│   │   ├── Curso.js               # Clase que define un curso
│   │   ├── Profesor.js            # Clase que define a un profesor
│   │   └── Usuario.js             # Clase base para Alumno y Profesor
│   │
│   └── index.js                   # Archivo principal que gestiona la lógica de la app
│
├── 📄 index.html                  # Página principal de la aplicación
├── 📄 README.md                   # Documentación del proyecto


