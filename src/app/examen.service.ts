import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) {

  }
  getcorreu(){
    this.http.get<any>('http://localhost:3000/modificarCorreu').subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );

  }
  getdepartament(){
    const departament={
      DEPT_CODI:22,
      DEPT_NOM:'noudepartament',
      DEPT_UBICACIO:'novaubicacion',
      DEPT_TELEFON:126735,
    }
    this.http.post('http://localhost:3000/afegirDepartament',departament).subscribe(
      response=>console.log('Departamento creado',response);
    console.error()
    );
  }
}
