import { Component } from '@angular/core';
import { AuthAdminGurdService } from './service/auth-admin-gurd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private authGuard : AuthAdminGurdService){

  }

  ngOnInit() {
    // this.authGuard.data()
  }

 


}
