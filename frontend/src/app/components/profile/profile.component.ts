import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users :any[] = [];
  userProfile
  submitted = false;
  editForm: FormGroup;
  passowrdPattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/;
  msg
  msg2
  messageUser
  messageEmail
  msgPassword

  constructor(private userService : UserService , public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr : ToastrService , 
    private location : Location) { }

  ngOnInit() {
    this.updateEmployee();
    this.getUserData()
  }

  getUserData() {
    this.userService.getProfileByUserAndEmail().subscribe(data=>{
      console.log(data);
      this.editForm.setValue({
        username: data['username'],
        email: data['email'],
        password: data['password'],
        mobile: data['mobile']
      });          
    })
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required ]],
      mobile: ['', [Validators.required ]]
    })
  }

  cancel(){
    this.location.back()
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        this.userService.updateUser(this.editForm.value)
          .subscribe(res => {
            this.toastr.success('data updated successfully!' , 'User')
            this.router.navigate(['/profile' , { username : res }])
          }, (error) => {
            console.log(error);
            
          })
      }
    }
  }


  checkusername(valUsername){
    this.userService.checkUsername(valUsername).subscribe(data=>{
      this.msg = data
     this.messageUser = this.msg.msg
   } , err => console.log(err))
  }

  checkEmail(valEmail){
    this.userService.checkEmail(valEmail).subscribe(data=>{      
      this.msg2 = data
      this.messageEmail = this.msg2.msg 
    }, err =>{
      console.log(err);
    })
  }


}
