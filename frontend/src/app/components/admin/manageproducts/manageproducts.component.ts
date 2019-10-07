import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit {

  products;
  filteredProducts : any;
  category = ''

  constructor(private productService : ApiService, private route:ActivatedRoute , private toastr : ToastrService) { }

  ngOnInit() {
    this.getProduct()
  }

  getProduct(){
    this.productService.getProducts().subscribe(products =>{
      this.products = products
      this.route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) : this.products
      })      
    })
  }

  filter(value : string){
    if(value){
      this.filteredProducts = this.products.filter(a =>
          a.name.toLowerCase().includes(value.toLocaleLowerCase()));
    }else{
      this.filteredProducts = this.products
    }
  }

  removeEmployee(product, index) {
    if(window.confirm('Are you sure?')) {
        this.productService.deleteProduct(product._id).subscribe((data) => {
          this.products.splice(index, 1);
          this.toastr.warning('Successfully Deleted!' , 'Product')
        }
      )    
    }
  }


}
