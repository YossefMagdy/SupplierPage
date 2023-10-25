import {  TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { BackButtonComponent } from './@theme/component/back-button/back-button.component';
import { ToggleButtonComponent } from './@theme/component/toggle-button/toggle-button.component';
import { ButtonComponent } from './@theme/component/button/button.component';
import { SupplierInfoComponent } from './component/reservation/supplier-info/supplier-info.component';
import { CalenderComponent } from './@theme/component/calender/calender.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import{HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    BackButtonComponent,
    ToggleButtonComponent,
    ButtonComponent,
    SupplierInfoComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        defaultLanguage:'en',
        loader:{
          provide:TranslateLoader,
          useFactory:CreateTranslateloader,
          deps:[HttpClient]
        }
      }
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function CreateTranslateloader( http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}