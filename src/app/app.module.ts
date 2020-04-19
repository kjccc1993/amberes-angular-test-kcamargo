import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimpleTimer } from 'ng2-simple-timer';

import { ToastsContainer } from './components/shared/toaster/toaster.component';
import { CoinsCarrouselComponent } from './components/shared/coins-carrousel/coins-carrousel.component';

import { LoginService } from './components/login/login.service';
import { CoinsCarouselService } from './components/shared/coins-carrousel/coins-carrousel.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToastsContainer,
    CoinsCarrouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, CoinsCarouselService, SimpleTimer],
  bootstrap: [AppComponent],
})
export class AppModule {}
