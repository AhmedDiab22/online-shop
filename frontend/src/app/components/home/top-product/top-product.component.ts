import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
declare let $:any;


@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit{
  images: Array<any> = []
  products : any;
  filteredProducts : any[] = [];
  category = ''
 


  constructor(private productService : ApiService , private route:ActivatedRoute) {
    this.images = [
      { name: 'http://lorempixel.com/640/480/animals/' },

    ]
  }


   

  ngOnInit() {
   this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
      this.route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) : this.products
      })
    } , err=>{      
    })
  }

  


}
