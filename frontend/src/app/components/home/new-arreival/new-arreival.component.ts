import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
declare let $:any;

@Component({
  selector: 'app-new-arreival',
  templateUrl: './new-arreival.component.html',
  styleUrls: ['./new-arreival.component.css']
})
export class NewArreivalComponent implements OnInit {

 
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
