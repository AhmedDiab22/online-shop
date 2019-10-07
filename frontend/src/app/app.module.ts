import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes , RouterModule } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';

// // Import your library
// import { SlickCarouselModule } from 'ngx-slick-carousel';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
import { ApiService } from './service/api.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ManageOrdersComponent } from './components/admin/manage-orders/manage-orders.component';
import { ManageproductsComponent } from './components//admin/manageproducts/manageproducts.component';
import { SummarypipePipe } from './pipes/summarypipe.pipe';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserService } from './service/user.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGurdService } from './service/auth-gurd.service';
import { AuthAdminGurdService } from './service/auth-admin-gurd.service';
import { RelateedComponent } from './components/home/relateed/relateed.component';
import { TopProductComponent } from './components/home/top-product/top-product.component';
import { SearchproductComponent } from './components/home/searchproduct/searchproduct.component';
import { AdvantageComponent } from './components/home/advantage/advantage.component';
import { ProblemComponent } from './components/home/problem/problem.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountryComponent } from './components/home/country/country.component';
import { NavbarHeaderComponent } from './components/navbar/navbar-header/navbar-header.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { FeatureProductComponent } from './components/home/feature-product/feature-product.component';
import { AdvertiseComponent } from './components/home/advertise/advertise.component';
import { NewArreivalComponent } from './components/home/new-arreival/new-arreival.component';
import { SidebarSliderComponent } from './components/home/sidebar-slider/sidebar-slider.component';
import { LastViewProductComponent } from './components/home/last-view-product/last-view-product.component';
import { BuyingrequestsComponent } from './components/buyingrequests/buyingrequests.component';
import { AdvancesearchComponent } from './components/buyingrequests/advancesearch/advancesearch.component';
import { BuyDetailsComponent } from './components/buyingrequests/buy-details/buy-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartService } from './service/cart.service';
import { UpdateComponent } from './components/cart/update/update.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUssComponent } from './components/home/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

const route: Routes = [  
  { path: '', component :  HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'user/carts', component: CartComponent , canActivate : [AuthGurdService]},
  { path: 'user/carts/update/:id', component: UpdateComponent , canActivate : [AuthGurdService]},
  { path: 'orders', component: OrdersComponent , canActivate : [AuthGurdService]},
  { path: 'product-details/:id', component: ProductDetailsComponent , canActivate : [AuthGurdService] },
  { path: 'admin/add/product', component: AddProductComponent , canActivate : [AuthAdminGurdService] }  ,
  { path: 'admin/edit/product/:id', component: EditProductComponent , canActivate : [AuthAdminGurdService] }  ,
  { path: 'admin/manage/products', component: ManageproductsComponent , canActivate : [AuthAdminGurdService] },
  { path: 'admin/manage/orders', component: ManageOrdersComponent , canActivate : [AuthAdminGurdService] },
  { path: 'buying-request', component: BuyingrequestsComponent  },
  { path: 'blog', component: BlogComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    AddProductComponent,
    ManageOrdersComponent,
    ManageproductsComponent,
    SummarypipePipe,
    EditProductComponent,
    ProductDetailsComponent,
    ProfileComponent,
    RelateedComponent,
    TopProductComponent,
    SearchproductComponent,
    AdvantageComponent,
    ProblemComponent,
    FooterComponent,
    CountryComponent,
    NavbarHeaderComponent,
    SidebarComponent,
    SliderComponent,
    FeatureProductComponent,
    AdvertiseComponent,
    NewArreivalComponent,
    SidebarSliderComponent,
    LastViewProductComponent,
    BuyingrequestsComponent,
    AdvancesearchComponent,
    BuyDetailsComponent,
    BlogComponent,
    UpdateComponent,
    AboutUsComponent,
    AboutUssComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // SlickCarouselModule
    Ng2CarouselamosModule
  ],
  exports: [RouterModule],
  providers: [
    ApiService,
    UserService,
    AuthGurdService,
    AuthAdminGurdService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
