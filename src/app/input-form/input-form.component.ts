import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  title = "Titulo mamalon";

  ngOnInit(): void {
  }

  onClick(){
    alert("Alert displayed!!!");
  }

  onClickInput(input:string){
    alert(input);
  }

  onKeyUp(title:string){
    this.title = title;
  }

  inputEvent(event){
    this.title = event.target.value;
  }

}
