import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {

  categories = ['Agriculture' , 'Clothing' , 'Cars & Motorbikes' , 'Chemicals' 
  , 'Computer Hardware & Software', 'Construction & Real Estate' , 'Consumer Electronics' , 'Electrical Equipment & Supplies' , 'Energy & Energy Production' , 'Environment' , 'Fashion Accessories']
  subCtegories = ['Agriculture' , 'Clothing' , 'Cars & Motorbikes' , 'Chemicals']
  subSubCtegories = ['Electrical Equipment & Supplies' , 'Energy & Energy Production' ]
  
  categoriess = [
    'Agriculture (9)', 'Chemicals (3)' , 'Clothing (9)' , 'Computer Hardware & Software (2)' , 'Construction & Real Estate (1)' , 'Consumer Electronics (2)' , 'Cosmetics & Beauty Products (2)' , 'Food & Beverage (3)' ,'Furniture & Furnishings (1)','General Industrial Equipment (2)' , 'Health & Medical (1)' , 'Manufacturing & Processing Machinery', 'Minerals And Compounds (4)', 'Office & School Supplies (2)','Packaging & Paper (2)',
    'Energy & Energy Production (1)', 'Electrical Equipment & Supplies (1)' , 'Frozen Foods, Fish & Seafood (1)', 'Printing & Publishing (1)','Rubber & Plastics (2)','Rubber & Plastics (2)'
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
