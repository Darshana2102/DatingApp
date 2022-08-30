import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from './_models/user';
import { AccountService } from './_services/account.service';
// import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating Application';
  users: any;

  constructor( private accountservice: AccountService){}
  ngOnInit(): void {
   //this.getUsers();
   this.setCurrentUser();
  }
  setCurrentUser(){
    const user:user=JSON.parse(localStorage.getItem('user'));
    this.accountservice.setCurrentUser(user);
  }
  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(
  //     response =>{this.users=response;},error=>{console.log(error);})
  // }
}
