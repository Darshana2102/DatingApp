import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { user } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit 
{
  model: any={}  
    constructor(public accountService: AccountService, private router: Router, 
      private toastr: ToastrService) 
      { 
        //this.toastr.success("testing");
      }
    ngOnInit(): void {} 
  login()
  {
    // console.log(this.model);
    this.accountService.login(this.model).subscribe(response=>
      {
      //console.log(response);      
      this.router.navigateByUrl('/members');
      })
  }
  logout()
  {
    this.accountService.logout();  
    this.router.navigateByUrl('/');
  } 
}
