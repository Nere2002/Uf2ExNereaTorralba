import { Component } from '@angular/core';

import {ExamenService} from "../examen.service";
@Component({
  selector: 'app-modifica-correu',
  templateUrl: './modifica-correu.component.html',
  styleUrls: ['./modifica-correu.component.css']
})
export class ModificaCorreuComponent {
  constructor(public n:ExamenService) {
    n.getcorreu()
  }
}
