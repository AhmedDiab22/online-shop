import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { ApiService } from '../../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/interface/products';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  productData: Products[];
  Product: any = ['phones', 'computers', 'clothes', 'machine'];

  constructor( public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private toastr : ToastrService , 
    private location : Location) { }

  ngOnInit() {
    this.updateEmployee();
    let id;
    // let id = this.actRoute.snapshot.paramMap.get('id');
    this.actRoute.paramMap.subscribe((params : ParamMap)=>{
      id = params.get('id')
    })
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imgUrl: ['', [Validators.required ]],
      description: ['', [Validators.required]],
      category : ['' , [Validators.required]]
    })
  }

   // Choose options with select-dropdown
   updateProduct(e) {
    this.editForm.get('category').setValue(e, {
      onlySelf: true
    })
  }

  
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getProduct(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        price: data['price'],
        imgUrl: data['imgUrl'],
        description: data['description'],
        category: data['category'],
      });      
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imgUrl: ['', [Validators.required ]],
      description: ['', [Validators.required]],
      category : ['' , [Validators.required]]
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
        this.apiService.updateProduct(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('//admin/manage/products');
            this.toastr.success('Content updated successfully!' , 'Employee')
          }, (error) => {
            this.toastr.warning(error , 'Error')
          })
      }
    }
  }

  

}
