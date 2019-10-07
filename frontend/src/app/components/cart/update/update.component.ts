import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/interface/products';
import { Location } from '@angular/common';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;

  constructor( public fb: FormBuilder,
    private cartService : CartService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr : ToastrService , 
    private location : Location) { }

  ngOnInit() {
    this.updateCart();
    let id;
    // let id = this.actRoute.snapshot.paramMap.get('id');
    this.actRoute.paramMap.subscribe((params : ParamMap)=>{
      id = params.get('id')
    })
    this.getCart(id);
    this.editForm = this.fb.group({
      amount: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      productId: ['', [Validators.required ]],
      userId: ['', [Validators.required]],
    })
  }

  //  // Choose options with select-dropdown
  //  updateProduct(e) {
  //   this.editForm.get('category').setValue(e, {
  //     onlySelf: true
  //   })
  // }

  
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getCart(id) {
    this.cartService.getCartId(id).subscribe(data => {
      this.editForm.setValue({
        amount: data['amount'],
        name: data['name'],
        price: data['price'],
        productId: data['productId'],
        userId: data['userId'],
      });      
    });
  }

  updateCart() {
    this.editForm = this.fb.group({
      amount:    ['', [Validators.required]],
      name:      [{value : '' , disabled: true}, [Validators.required]],
      price:     [{value : '' , disabled: true}, [Validators.required]],
      productId: [{value : '' , disabled: true}, [Validators.required ]],
      userId:    [{value : '' , disabled: true}, [Validators.required]],
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
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.cartService.updateCart(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigate(['user/carts']);
            this.toastr.success('Item updated successfully!' , 'Cart')
          }, (error) => {
            this.toastr.warning(error , 'Error')
          })
      }
    }
  }
}
