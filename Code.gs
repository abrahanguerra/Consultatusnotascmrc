// ID de la hoja de cálculo
const sheetId = '1IU39LB8us6qehxCDUsSuD6BRdM2xHZW7l8v8x-H7sXQ';  // ID del documento
const hojas = ['71', '72', '81', '82', '91', '92', '101', '102', '111', '112'];  // Nombres de las hojas

// Función que se ejecuta al recibir la solicitud desde la página web
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

// Función que busca el estudiante por su documento en todas las hojas
function consultarEstudiante(documento) {
  // Recorre todas las hojas del documento
  for (let i = 0; i < hojas.length; i++) {
    const hoja = SpreadsheetApp.openById(sheetId).getSheetByName(hojas[i]);
    const data = hoja.getDataRange().getValues();  // Obtiene todos los datos de la hoja

    // Recorre las filas de la hoja buscando el número de documento
    for (let j = 1; j < data.length; j++) {  // Comienza en 1 para omitir la cabecera
      if (data[j][0] == documento) {  // Compara con la columna de documento (índice 0)
        return {
          documento: data[j][0],
          estudiante: data[j][1],
          asignatura: data[j][22],
          // Notas de trabajo en clase
          C1: data[j][2], DC1: data[j][23],
          C2: data[j][3], DC2: data[j][24],
          C3: data[j][4], DC3: data[j][25],
          C4: data[j][5], DC4: data[j][26],
          C5: data[j][6], DC5: data[j][27],
          C6: data[j][7], DC6: data[j][28],
          C7: data[j][8], DC7: data[j][29],
          C8: data[j][9], DC8: data[j][30],
          // Notas de tareas
          T1: data[j][10], DT1: data[j][31],
          T2: data[j][11], DT2: data[j][32],
          T3: data[j][12], DT3: data[j][33],
          T4: data[j][13], DT4: data[j][34],
          // Notas de quizzes
          Q1: data[j][15], DQ1: data[j][35],
          Q2: data[j][16], DQ2: data[j][36],
          Q3: data[j][17], DQ3: data[j][37],
          Q4: data[j][18], DQ4: data[j][38],
          // Nota bimestral
          B: data[j][20], DB: data[j][39],
          FINAL: data[j][21], DF: data[j][40],
        };
      }
    }
  }
  return 'Estudiante no encontrado';
}
