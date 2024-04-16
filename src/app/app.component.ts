import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor() {}

  randomNumber = 0;

  ngOnInit(): void {
    this.getRandomNumber();
  }

  getRandomNumber(){
    this.randomNumber = Math.floor(Math.random() * Math.floor(15));
    console.log("random number: " + this.randomNumber);
  }



}
