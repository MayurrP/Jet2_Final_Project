import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { InfoModule } from './info/info.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { TempComponent } from './temp/temp.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    CartComponent,
    PaymentComponent,
    TempComponent,
    OrdersuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InfoModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
