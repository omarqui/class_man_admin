const carreras = [
    {
      id: 1,
      nombre: "Ing. Sistema y Computo",
      idProfesorGuia: 1
    },
    {
      id: 2,
      nombre: "Educacion Matematica",
      idProfesorGuia: 1
    },
    {
      id: 3,
      nombre: "Mercadeo",
      idProfesorGuia: 2
    }
  ];

const aulas = [
    {
      id: 1,
      descripcion: "Aula 404"
    },
    {
      id: 2,
      descripcion: "Aula 248"
    },
    {
      id: 3,
      descripcion: "Aula 782"
    }
  ];

const materias = [
    {
      id: 1,
      codigo: "ab2356",
      nombre: "Ingles 1",
      cantCreditos: 3,
      UrlProgramaClase: ""
    },
    {
      id: 2,
      codigo: "789456",
      nombre: "Introduccion Programacion",
      cantCreditos: 4,
      urlProgramaClase: ""
    },
    {
      id: 3,
      codigo: "12346",      
      nombre: "Prueba",
      cantCreditos: 2,
      urlProgramaClase: ""
    }
  ];

  const profesores = [
    {
      id: 1,
      nombre: "Robizon Inoa"
    },
    {
      id: 2,
      nombre: "Fernando Peralta"
    },
    {
      id: 3,
      nombre: "Simon Perez"
    }
  ];

  const pensums = [
    {
      id: 1,
      carrera: {
        id: 1,
        nombre: "Ing. Sistema y Computo",
        idProfesorGuia: 1
      },
      cantCiclos: 12,
      nota: "version 1",
      ciclos:[
          {
              posicion: 1,
              materias:[
                  {
                    id:1,
                    materia: {
                        id: 1,
                        codigo: "ab2356",
                        nombre: "Ingles 1",
                        cantCreditos: 3,
                        UrlProgramaClase: ""
                    },                      
                    prerequisito: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 4
                  },
                  {
                    id:2,
                    materia: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 3
                  },
                  {
                    id:3,
                    materia: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 4
                  }
              ]
          },
          {
            posicion: 2,
            materias:[
                  {
                    id:1,
                    materia: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 3
                  },
                  {
                    id:2,
                    materia: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 4
                  }
            ]
        }
      ]
    },
    {
        id: 2,
        carrera: {
            id: 2,
            nombre: "Educacion Matematica",
            idProfesorGuia: 1
        },
        cantCiclos: 10,
        nota: "",
        ciclos:[
            {
                posicion: 1,
                materias:[        
                    {
                    id:1,
                    materia: {
                            id: 3,
                            codigo: "12346",      
                            nombre: "Prueba",
                            cantCreditos: 2,
                            urlProgramaClase: ""
                        },
                        prerequisito: {
                            id: 2,
                            codigo: "789456",
                            nombre: "Introduccion Programacion",
                            cantCreditos: 4,
                            urlProgramaClase: ""
                        },
                        cantCreditos: 4
                    }
                ]
            }
        ]
      }
  ];

  const periodos = [
    {
      id: 1,
      mesIni: 1,
      mesFin: 4,
      descripcion: "Ene-Abr"
    },{
      id: 2,
      mesIni: 5,
      mesFin: 8,
      descripcion: "May-Ago"
    }
  ];

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];

  const horarios = [
    {
      id: 1,
      horaIni:{
        hora:18,
        minuto:10
      },
      horaFin:{
        hora:19,
        minuto:0
      }
    },
    {
      id: 2,
      horaIni:{
        hora:19,
        minuto:0
      },
      horaFin:{
        hora:19,
        minuto:50
      }
    },
    {
      id: 3,
      horaIni:{
        hora:19,
        minuto:50
      },
      horaFin:{
        hora:20,
        minuto:40
      }
    }
  ];

  const ciclos = [
    {
      id: 1,
      fechaIni: {
        year: 2018,
        month: 9,
        day:15
      },
      fechaFin: {
        year: 2018,
        month: 12,
        day:23
      },
      estaAbierto: 0
    },
    {
      id: 2,
      fechaIni: {
        year: 2019,
        month: 1,
        day:15
      },
      fechaFin: {
        year: 2019,
        month: 4,
        day:23
      },
      estaAbierto: 1
    }
  ];

  let datos = {    
    carreras,
    aulas,
    materias,
    profesores,
    pensums,
    periodos,
    meses,
    horarios,
    ciclos
  };



  const DatosFactory = (()=>{
    function SingletonClass() {
        return datos;
    }

    var instance;
    return {
        getInstance: ()=>{
            if (instance == null) {                
                instance = new SingletonClass();
                // Hide the constructor so the returned object can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();

export default DatosFactory;