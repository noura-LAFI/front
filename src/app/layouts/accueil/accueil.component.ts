import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  role =localStorage.getItem('role') 
  etat=localStorage.getItem('etat') 
  constructor() { }

  ngOnInit(): void {
  }

}
