import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'client';
  viewHome= true;
  viewSchedule= false;
  viewStatus= false;
  viewApplication= false;
  viewRegister = false;
  viewLogin = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  getHome(){
    this.viewHome= true;
    this.viewSchedule = false;
    this.viewStatus=false;
    this.viewApplication= false;
    this.viewRegister = false;
    this.viewLogin = false;
    console.log('home clicked');
  }
  getSchedule(){
    this.viewHome= false;
    this.viewSchedule = true;
    this.viewStatus=false;
    this. viewApplication= false;
    this.viewRegister = false;
    this.viewLogin = false;
    console.log('schedule clicked');
    console.log(this.viewSchedule );
  }
  getStatus(){
    this.viewHome= false;
    this.viewSchedule = false;
    this.viewStatus=true;
    this. viewApplication= false;
    this.viewRegister = false;
    this.viewLogin = false;
    console.log('status clicked');
  }
  getApplication(){
    this.viewHome= false;
    this.viewSchedule = false;
    this.viewStatus= false;
    this. viewApplication= true;
    this.viewRegister = false;
    this.viewLogin = false;
    console.log('manage clicked');
  }
  getRegister(){
    this.viewHome= false;
    this.viewSchedule = false;
    this.viewStatus= false;
    this. viewApplication= false;
    this.viewRegister = true;
    this.viewLogin = false;
    console.log('register clicked');
  }
  getLogin(){
    this.viewHome= false;
    this.viewSchedule = false;
    this.viewStatus= false;
    this. viewApplication= false;
    this.viewRegister = false;
    this.viewLogin = true;
    console.log('login clicked');
  }

}
