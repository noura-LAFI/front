import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BackOffice';
  isLogged =localStorage.getItem('isLogged');
  constructor( ) {}

  ngOnInit(): void { 
 }
}
