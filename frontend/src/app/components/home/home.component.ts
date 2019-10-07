import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any;
  filteredProducts : any[] = [];
  category = ''

  constructor(private productService : ApiService , private route:ActivatedRoute) { }

  ngOnInit() {
    // this.getProducts()
  }

  // getProducts(){
  //   this.productService.getProducts().subscribe(data=>{
  //     this.products = data
  //     this.route.queryParamMap.subscribe(params =>{
  //       this.category = params.get('category');
  //       this.filteredProducts = (this.category) ? 
  //       this.products.filter(p => p.category === this.category) : this.products
  //     })
  //   }
  // }

}
