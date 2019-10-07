import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  idUser
  currencyuserId;
  carts : any[] = [];

  constructor(private userId : UserService , 
    private cartService : CartService,
    private activRoute : ActivatedRoute,
    private toastr : ToastrService) { }
 
  ngOnInit() {
    this.getCarts();    
}


  // getAllCart By User Id
  getCarts(){
    this.userId.getProfile().subscribe( a=>{
      this.idUser = a
      this.currencyuserId =  this.idUser.user._id
      let id = this.currencyuserId
      this.cartService.getCart(id).subscribe(data =>{
        this.carts = data;
      }, err =>{
      })
    })
  }

  deleteCart(id){
    if (window.confirm('Are you sure?')) {
        this.cartService.deleteCart(id).subscribe(data =>{
        this.toastr.success('Item Cart  removed Successfully' , 'Cart');
        this.getCarts();
        }, (error) => {
          this.toastr.warning(error , 'Error')
        })
    }
  }

}
