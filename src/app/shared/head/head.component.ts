import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  role=localStorage.getItem('role')
  status = localStorage.getItem('status')
  loggedUser =  localStorage.getItem('etat')

  constructor( private authService : AuthServiceService , private router :Router
      ) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log("hethi",res);
    localStorage.clear();
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });

      },
      error: err => {
        console.log(err);
      }
    });
    
  }
}
