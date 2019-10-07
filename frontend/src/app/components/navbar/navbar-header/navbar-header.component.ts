import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

  Carts : any[] = [];
  idUser
  currencyuserId;
  userAdmin
  userOne
  nikeName
  isAdmin = false;
  isUser = false


  constructor(
    private cartService : CartService,
    private userService : UserService , 
    private toastr : ToastrService , 
    private router : Router  ) { }
  

  ngOnInit() {
    this.getUser();
    this.getCarts();
    // this.checkOffsetTop()
  }

  // getAllCart By User Id
  getCarts(){
    this.userService.getProfile().subscribe( a=>{
      this.idUser = a
      this.currencyuserId =  this.idUser.user._id
      let id = this.currencyuserId
      this.cartService.getCart(id).subscribe(data =>{
        this.Carts = data;
      }, err =>{
       this.toastr.error(err)
      })
    })
  }
  


//   @HostListener('window:scroll', ['$event'])
//   checkOffsetTop() {
//   console.log(window.pageYOffset); // this will console log our scroll position
//   let navbar = document.getElementById('main');
//   if(window.pageYOffset > 100){
//     navbar.className += ' navv'
//   }else{
//     navbar.classList.remove('navv')
//   }
// }

  // checkAdminOrUser(){
  //   let user = localStorage.getItem('user');
  //   let admin = localStorage.getItem('admin_token');
  //   this.user = user    
  //   this.admin = admin   
  // }


  singout(){
    this.userService.logout();
    window.location.assign('/home')
    this.toastr.success('You are logged out' , 'User')
  }

  getUser(){
    this.userService.getProfileByUserAndEmail().subscribe(user =>{
      this.userOne = user
      this.nikeName = this.userOne.username
      this.userAdmin = this.userOne.isAdmin
      if(this.userAdmin === true){
        this.isAdmin = true
      }else{
        this.isUser = true
      }
    })
  }

}

