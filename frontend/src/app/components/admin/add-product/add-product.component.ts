import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  submitted = false;
  productForm: FormGroup;
  Category:any = ['phones', 'computers', 'clothes', 'machine'];


  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService , 
    private toastr : ToastrService , 
    private location : Location) { 
      this.mainForm() }

  ngOnInit() {
  }

  mainForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imgUrl: ['', [Validators.required ]],
      description: ['', [Validators.required]],
      category : ['' , [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.productForm.get('category').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return false;
    } else {
      this.apiService.createProduct(this.productForm.value).subscribe(
        (res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/home'));
          this.toastr.success( 'successfully created!' , 'Product' )
        }, (error) => {
          this.toastr.error( error)
        });
    }
  }

  cancel(){
    this.location.back()
  }



}
