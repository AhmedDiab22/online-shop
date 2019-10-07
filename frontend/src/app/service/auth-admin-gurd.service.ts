import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class AuthAdminGurdService implements CanActivate {

  constructor(private router : Router , private toastr : ToastrService , private userService : UserService) { }


  userOne
  userAdmin

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>{
    return new Promise(resolve =>{
      this.userService.getProfileByUserAndEmail().subscribe(user=>{
        this.userOne = user
        this.userAdmin = this.userOne.isAdmin
        if(this.userAdmin === true) resolve(true)
        else{
          this.toastr.error('You are not permission to acsess  this link' ,  "Sorry")
          resolve(false)    
        }
      })
    })

  }
}
