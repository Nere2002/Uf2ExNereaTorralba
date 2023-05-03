const express = require('express');
const mysql = require('mysql2');
const app = express();
const { BadRequestException } = require('@nestjs/common');
const cors = require('cors');
const {sequence} = require("@angular/animations");
const {initModels} = require("../models/init-models");

const models = initModels(db);
const {createConfigBaseDades}=require("/src/app/db.config.js");
const db=createConfigBaseDades();
app.use(cors());
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Admin123',
  database: 'universitat'
});

//------------------- EXERCICI 1 ------------------------------------

// Defineix el mètode per a modificar el correu electrònic de l'alumne
function modifiquiCorreu(idAlumne, nouCorreu,callback) {
  // Comprova si el nou correu té més de 30 caràcters
  if (nouCorreu.length > 30) {
    throw new BadRequestException('El correu electrònic no pot tenir més de 30 caràcters');
  }

  // Defineix la consulta SQL per actualitzar el correu electrònic de l'alumne
  const query = `UPDATE alumnes SET ALUMN_E_MAIL = '${nouCorreu}' WHERE id = ${idAlumne}`;

  // Executa la consulta a la base de dades
  connection.query(query, (error, results, fields) => {
    if (error) {
      // Si hi ha un error, llança una excepció amb un missatge adequat
      throw new Error(`No s'ha pogut actualitzar el correu electrònic: ${error.message}`);
    }
    // Si la consulta s'ha executat amb èxit, retorna els resultats obtinguts
    return results;
  });
}
app.get('/modificarCorreu', (req, res) => {
  modifiquiCorreu((error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al modificar los correos .');
    } else {
      res.json(results);
    }
  });
});

//-------------------EXERCICI 3 --------------------------------------

app.post('/afegirDepartament',async (req,res)=>{
  try{
    const noudepartament=await models.departament.create({
      DEPT_CODI:req.body.DEPT_CODI,
      DEPT_NOM:req.body. DEPT_NOM,
      DEPT_UBICACIO:req.body.DEPT_UBICACIO,
      DEPT_TELEFON:req.body. DEPT_TELEFON
    });
    res.status(201).json({mensaje:'departemento creado correctamente',noudepartament})
  }catch (error){
    console.error(error);
    res.status(500).json({mensaje:'Error al crear departamento'})
  }
})
connection.connect((err) => {
  if (err) throw err;
  console.log('Conexion a MySQL');
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

