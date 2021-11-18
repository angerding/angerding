import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  data:any[];
  constructor() { }

  ngOnInit(): void {
    this.data=[
      {
        name:'Pepito perez',
        nota1:3.2,
        nota2:5,
        promedio:0
      },
      {
        name:'Papo Alejandro',
        nota1:1.2,
        nota2:3.2,
        promedio:0
      },
      {
        name:'Carlos Rojas',
        nota1:1.2,
        nota2:3.2,
        promedio:0
      }
    ]
    this.data.map(item=>{
      item.promedio = (item.nota1 + item.nota2)/2
      return item;
    })
  }

}
