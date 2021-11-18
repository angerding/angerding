import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  courses:any[];

  constructor() { }

  ngOnInit(): void {
    this.courses=[
      {
        teacher:'Juan perez',
        title:'Castellano'
      },
      {
        teacher:'Juan perez',
        title:'Matematicas'
      },
      {
        teacher:'Juan perez',
        title:'Filosofia'
      },
      {
        teacher:'Juan perez',
        title:'Educación Fisica'
      }
    ]
  }

}
