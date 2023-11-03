import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siedbar',
  templateUrl: './siedbar.component.html',
  styleUrls: ['./siedbar.component.scss']
})
export class SiedbarComponent implements OnInit {
 role=localStorage.getItem('role')
 status = localStorage.getItem('status')
 
  constructor( ) {}
  
  ngOnInit(): void {

  }

}
