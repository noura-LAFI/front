import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginReq } from 'src/app/core/UserLoginReq';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private helper = new JwtHelperService(); 
  signInForm: FormGroup;
  userLogin: UserLoginReq;
  constructor(private router: Router, private authSer: AuthServiceService) {
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.userLogin = {
      email: '',
      password: '',
    };
  }
  aff() {
    console.log(this.signInForm.get('email')!.value);
    console.log(this.signInForm.get('password')!.value);
  }
  decodeJWT() {
let token :any =localStorage.getItem('token')
if(token){
    const decodedToken = this.helper.decodeToken(token);
    console.log("lll",decodedToken)
    return decodedToken}
    
  
  }
//   détailsUserLogged(){
//   const decodedToken=  this.decodeJWT()
//   const emailLogged = decodedToken.email
//   console.log("hhh",emailLogged)
//   console.log("hhh")
// localStorage.setItem("userLogged",emailLogged)

//   }
  signIn() {
    if (this.signInForm.valid) {
      this.userLogin.email = this.signInForm.get('email')!.value;
      this.userLogin.password = this.signInForm.get('password')!.value;
      this.authSer.signIn(this.userLogin).subscribe((data) => {
        console.log("iii",data)
        localStorage.removeItem('token');
        localStorage.setItem('token', data.body.token);
        localStorage.setItem('role', data.body.data.role);
        localStorage.setItem('status', data.body.data.status);
        var token = localStorage.getItem('token')
        var role = localStorage.getItem('role');
        var status = localStorage.getItem('status');
        var isLogged = localStorage.getItem('isLogged');

        // if(isLogged){
        // this.router.navigateByUrl('/dashboard')}
        // else {    
if( token !='' && token != null){
       localStorage.setItem('isLogged',"true");  
       if (role == 'seller' && status == 'NOT_approuved') {
          this.router.navigateByUrl('/profil').then(() => {
            window.location.reload();
          });
        } else {
          this.router.navigateByUrl('/dashboard').then(() => {
            window.location.reload();
          });
        }} else {
          this.router.navigateByUrl('/')
          
        }
      });
    }}
  

  ngOnInit(): void {
    if(localStorage.getItem('isLogged'))
    this.router.navigateByUrl('/dashboard')
  }
}
