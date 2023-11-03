import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup ;
  userLogged:any
  userRegisterReq: User
  submittingForm: boolean = false;

  constructor(  private router: Router  , private authSer: AuthServiceService) { 
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
    this.userRegisterReq = { id:0,
      firstName:'',
      lastName: '',
      email: '',
      password: '',
      role :'' , etat :''
    };
  }


  aff(){
    console.log(this.signUpForm.value)
    console.log(this.signUpForm.valid)}
  SignUp(): void{
    if (this.signUpForm.valid) {
      this.submittingForm = true;
    this.userRegisterReq.firstName=this.signUpForm.get('firstName')!.value;
    this.userRegisterReq.lastName=this.signUpForm.get('lastName')!.value;
    this.userRegisterReq.email=this.signUpForm.get('email')!.value;
    this.userRegisterReq.password=this.signUpForm.get('password')!.value;
    this.userRegisterReq.role = this.signUpForm.get('role')!.value;
console.log("dd",this.userRegisterReq)
this.authSer.signUp(this.userRegisterReq).subscribe(data => { 
  console.log('hethi',data)
   this.router.navigateByUrl('/login').then(window.location.reload);
   ;
  }
);

    }}
  ngOnInit(): void {
  }

}
