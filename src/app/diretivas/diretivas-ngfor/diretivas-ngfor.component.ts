import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngfor',
  templateUrl: './diretivas-ngfor.component.html',
  styleUrls: ['./diretivas-ngfor.component.css']
})
export class DiretivasNgforComponent implements OnInit {
  teste = 'Victor Xavier';
  num1 = 10;
  num2 = 20;
  //declaração de vetor
  cursos = [] = ["Java script", "PHP", "IONIC", "Bootstrap"];
  precos : number[] = [500,1500,340,250];

  infogeral = [
    {
      curso: 'PHP',
      preco: 400,
      ch: '40h'
    } ,
    {
      curso: 'Java',
      preco: 500,
      ch: '50h'
    } ,
    {
      curso: 'IONIC',
      preco: 300,
      ch: '45h'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
