import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories = ['Agriculture' , 'Clothing' , 'Cars & Motorbikes' , 'Chemicals' 
  , 'Computer Hardware & Software', 'Construction & Real Estate' , 'Consumer Electronics' , 'Electrical Equipment & Supplies' , 'Energy & Energy Production' , 'Environment' , 'Fashion Accessories']


  constructor() { }

  ngOnInit() {
  }

}