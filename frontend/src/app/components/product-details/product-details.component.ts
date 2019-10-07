import { Component, OnInit  , NgZone} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/service/cart.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  allProducts;
  product;
  productName;
  productPrice;
  productImgUrl;
  productDescription;
  productId;
  addCartItem;
  productForm = true;
  idUser;
  CurrentIdUser

  constructor(
    public activeRoute : ActivatedRoute,
    private cartService : CartService,
    private userService : UserService,
    public productService : ApiService,
    private location : Location,
    private router : Router,
    private toastr : ToastrService
    ) { }

  ngOnInit() {
    let id;
    // let id = this.actRoute.snapshot.paramMap.get('id');
    this.activeRoute.paramMap.subscribe((params : ParamMap)=>{
      id = params.get('id')
    })
    this.getProduct(id);
    this.getIdUser();
    this.getCarts();
    this.getAllProduct()
  }

    getIdUser(){
      this.userService.getProfile().subscribe(a=>{
        this.idUser = a
        this.CurrentIdUser =  this.idUser.user._id
      })
    }

  getProduct(id){
    this.productService.getProduct(id).subscribe(data=>{
      this.product = data  
      this.productImgUrl = this.product.imgUrl
      this.productDescription = this.product.description
      this.productName = this.product.name
      this.productPrice = this.product.price
      this.productId = this.product._id      
    })
  }

  getAllProduct(){
    this.productService.getProducts().subscribe(products =>{
      this.allProducts = products  
      console.log(this.allProducts);
          
    })
  }

  addForm(val){
    this.cartService.createCart(val).subscribe(data =>{
      this.toastr.success('Success' , ' Cart Item Added Successfully');      
      this.router.navigate(['/user/carts']);
    } , err =>{
      this.toastr.error('Sorry' , err.error.message)
    })   
  }

  getCarts(){
    this.cartService.getCarts()
  }

  cancel(){
    this.location.back()
  }

  aa(){
    this.productForm =! this.productForm
  }

  cancle(){
    this.productForm = true
  }

}
