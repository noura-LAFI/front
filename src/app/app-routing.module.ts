import { CategoriesComponent } from './layouts/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './layouts/accueil/accueil.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/login/login.component';
import { ProfilComponent } from './layouts/profil/profil.component';
import { RegisterComponent } from './layouts/register/register.component';
import { SellersComponent } from './layouts/sellers/sellers.component';
import { WelcomePageComponent } from './layouts/welcome-page/welcome-page.component';

const routes: Routes = [
//  { path: '', component: WelcomePageComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'accueil',
    component: AccueilComponent},
{path: 'dashboard',
        component: DashboardComponent},{
        path: 'profil',
        component: ProfilComponent,
      },{
        path: 'sellers',
        component: SellersComponent,
      } ,{
        path: 'categories',
        component: CategoriesComponent,
      }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule {}
