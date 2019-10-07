import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location : Location , private userService : UserService , private toastr : ToastrService , private router : Router) { }

  datas :any ;
  passwordd


  ngOnInit() {
  }

  login(val){
    this.userService.login(val).subscribe(data =>{
      this.datas = data
       this.toastr.success(this.datas.msg , 'Welcome');
       this.userService.storeUserData(this.datas.token , this.datas.user);
      //  this.router.navigate(['/']);
      let a=  window.location.assign('/home');
    } , err =>{
      this.toastr.error(`${err.error.msg}` , 'Sorry');
      this.passwordd = '';
    })
    
  }



}
