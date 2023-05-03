export class Professor {
  PROF_DNI?: string;
  PROF_NOM?: string;
  PROF_COGNOM_1?: string;
  PROF_COGNOM_2?: string;
  PROF_ADRECA?:string;
  PROF_CODI_POSTAL?:string;
  PROF_POBLACIO?: string;
  PROF_COMARCA?: string;
  PROF_TELEFON?: string;
  PROF_DATA_NAIXEMENT?: string;
  PROF_CASAT?:number;
  PROF_E_MAIL?: string;
  PROF_CATEGORIA?: string;
  PROF_SOU?:boolean;
  PROF_DEPT_CODI?: number;
  PROF_DATA_ENTRADA?: string;
  constructor(  PROF_DNI?: string, PROF_NOM?: string, PROF_COGNOM_1?: string, PROF_COGNOM_2?: string, PROF_ADRECA?:string, PROF_CODI_POSTAL?:string, PROF_POBLACIO?: string, PROF_COMARCA?: string, PROF_TELEFON?: string, PROF_DATA_NAIXEMENT?: string, PROF_CASAT?:number, PROF_E_MAIL?: string, PROF_CATEGORIA?: string, PROF_SOU?:boolean, PROF_DEPT_CODI?: number, PROF_DATA_ENTRADA?: string,

) {
    this.PROF_DNI=PROF_DNI;
    this.PROF_NOM=PROF_NOM;
    this.PROF_COGNOM_1=PROF_COGNOM_1;
    this. PROF_COGNOM_2=PROF_COGNOM_2;
    this.PROF_ADRECA=PROF_ADRECA;
    this.PROF_CODI_POSTAL=PROF_CODI_POSTAL;
    this.PROF_POBLACIO=PROF_POBLACIO;
    this.PROF_COMARCA=PROF_COMARCA;
    this.PROF_TELEFON=PROF_TELEFON;
    this. PROF_DATA_NAIXEMENT=PROF_DATA_NAIXEMENT;
    this.PROF_CASAT=PROF_CASAT;
    this.PROF_E_MAIL=PROF_E_MAIL;
    this.PROF_CATEGORIA=PROF_CATEGORIA;
    this. PROF_SOU=PROF_SOU;
    this.PROF_DEPT_CODI=PROF_DEPT_CODI;
    this.PROF_DATA_ENTRADA=PROF_DATA_ENTRADA;
  }
}
