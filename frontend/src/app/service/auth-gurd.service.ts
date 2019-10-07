import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGurdService implements CanActivate{

  userOne
  userAdmin
  constructor(private router : Router , private toastr : ToastrService , private userService : UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>{
    return new Promise(resolve =>{
      this.userService.getProfileByUserAndEmail().subscribe(user=>{
        this.userOne = user
        this.userAdmin = this.userOne.isAdmin
        if(this.userAdmin === false) resolve(true)
        else{
          this.toastr.error('You are not permission to acsess  this link' , "Sorry")
          resolve(false)
        }
      })
    })

  }
}


