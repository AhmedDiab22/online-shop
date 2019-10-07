import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  datas:any ;
  namePattern = "^[a-zA-z0-9_-]{8,15}$";
  passowrdPattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/;
  msg
  msg2
  messageUser
  messageEmail

  constructor(private userService : UserService , private toastr : ToastrService , private router : Router) { }

  ngOnInit() {
  }

  getData(val){
    this.userService.register(val).subscribe(data=>{
      this.toastr.success('You are register Now' , 'Hello');
      let a=  window.location.assign('/home');
      this.datas = data
      this.userService.storeUserData(this.datas.token , this.datas.user);
      console.log(data);
      
    } , err =>{
      this.toastr.error(err.error.text , 'Sorry');
          
    })
  }

  checkusername(nike){
   this.userService.checkUsername(nike).subscribe(data =>{
     this.msg = data
     this.messageUser = this.msg.msg
   } , err => console.log('er'))
  }

  checkemail(email){
    this.userService.checkEmail(email).subscribe(data=>{      
      this.msg2 = data
      this.messageEmail = this.msg2.msg
    }, err =>{
      console.log('er');
    })
  }

}
