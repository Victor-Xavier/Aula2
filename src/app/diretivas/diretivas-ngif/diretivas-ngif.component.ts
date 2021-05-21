import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.css']
})
export class DiretivasNgifComponent implements OnInit {

  p1: boolean = false;
  p2: boolean = false;
  p3: boolean = false;
btn_Click1(){
    if(this.p1){
        this.p1 = false;
    } else{
        this.p1 = true;
        this.p2 = false;
        this.p3 = false;
      }
    }
btn_Click2(){
    if(this.p2){
      this.p2 = false;
    } else{
      this.p2 = true;
      this.p1 = false;
      this.p3 = false;
      }
    }
btn_Click3(){  
  if(this.p3){
    this.p3 = false;
  } else{
    this.p3 = true;
    this.p1 = false;
    this.p2 = false;
    }
    
}
  constructor() { }

  ngOnInit(): void {
  }

}
