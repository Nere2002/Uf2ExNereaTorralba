export class Assignatures {
  ASSIG_CODI?: number;
  ASSIG_NOM?: string;
  ASSIG_CREDITS?: boolean;
  ASSIG_DNI_PROFESSOR_RESP?: string;
  ASSIG_SEMESTRE?: number;
  ASSIG_CURS?: number;
  ASSIG_TIPUS?: string;
  ASSIG_CARRERA?: string;
  constructor( ASSIG_CODI?: number, ASSIG_NOM?: string, ASSIG_CREDITS?: boolean, ASSIG_DNI_PROFESSOR_RESP?: string, ASSIG_SEMESTRE?: number, ASSIG_CURS?: number, ASSIG_TIPUS?: string, ASSIG_CARRERA?: string) {
   this.ASSIG_CODI=ASSIG_CODI;
    this.ASSIG_NOM=ASSIG_NOM;
    this.ASSIG_CREDITS=ASSIG_CREDITS;
    this.ASSIG_DNI_PROFESSOR_RESP=ASSIG_DNI_PROFESSOR_RESP;
    this.ASSIG_SEMESTRE=ASSIG_SEMESTRE;
    this.ASSIG_CURS=ASSIG_CURS;
    this.ASSIG_TIPUS=ASSIG_TIPUS;
    this.ASSIG_CARRERA=ASSIG_CARRERA;
  }
}
