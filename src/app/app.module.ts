import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { WelcomePageComponent } from './layouts/welcome-page/welcome-page.component';
import { AccueilComponent } from './layouts/accueil/accueil.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProfilComponent } from './layouts/profil/profil.component';
import { HeadComponent } from './shared/head/head.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SiedbarComponent } from './shared/siedbar/siedbar.component';
import { SellersComponent } from './layouts/sellers/sellers.component';
import { from } from 'rxjs';
import { CategoriesComponent } from './layouts/categories/categories.component';
import { ModifCategModalComponent } from './layouts/modals/modif-categ-modal/modif-categ-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomePageComponent,
    AccueilComponent,
    DashboardComponent,
    ProfilComponent,
    HeadComponent,
    FooterComponent,
    SiedbarComponent,
    SellersComponent,
    CategoriesComponent,
    ModifCategModalComponent,
  ]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule 
    ,ReactiveFormsModule,HttpClientModule ,JwtModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
