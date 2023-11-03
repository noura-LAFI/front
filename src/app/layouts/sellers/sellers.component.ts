import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddSellerReq } from 'src/app/core/add-seller-req';
import { Seller } from 'src/app/core/Seller';
import { SellerServiceService } from 'src/app/services/seller-service.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {
  // sellers: Seller [] =[]
  selApprouved : Seller []=[]
  selNotApprouved : Seller []=[]
  addSellerForm: FormGroup;
addSellerReq : AddSellerReq
  constructor( private sellerService: SellerServiceService   ) { 
this.addSellerForm = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  firstName: new FormControl('', Validators.required) ,
  lastName: new FormControl('', Validators.required) ,
  gender: new FormControl('', Validators.required) ,
  zip: new FormControl('', Validators.required) ,
  adress: new FormControl('', Validators.required) ,
  city: new FormControl('', Validators.required) ,
  state: new FormControl('', Validators.required),
  birthday: new FormControl('', Validators.required),
  phone: new FormControl('', Validators.required) ,
 
})
this.addSellerReq={
  firstName: "",
  lastName: "", 
  email: "", 
 phone: "",
 adress: "",
 state:"",
birthday:"",
city:"",
zip:"",
gender:"",
password :""
}
  }
  addSeller(){
if(this.addSellerForm.valid){
this.addSellerReq.firstName = this.addSellerForm.get('firstName')!.value;
this.addSellerReq.lastName = this.addSellerForm.get('lastName')!.value;
this.addSellerReq.email = this.addSellerForm.get('email')!.value;
this.addSellerReq.phone = this.addSellerForm.get('phone')!.value;
this.addSellerReq.adress = this.addSellerForm.get('adress')!.value;
this.addSellerReq.gender = this.addSellerForm.get('gender')!.value;
this.addSellerReq.zip = this.addSellerForm.get('zip')!.value;
this.addSellerReq.state = this.addSellerForm.get('state')!.value;
this.addSellerReq.city = this.addSellerForm.get('city')!.value;
this.addSellerReq.password = this.addSellerForm.get('password')!.value;
this.addSellerReq.birthday = this.addSellerForm.get('birthday')!.value;
this.sellerService.addSeller(this.addSellerReq).subscribe(data =>{
  console.log(data)
  window.location.reload()
})
}
 }

  aff(){
    console.log(this.addSellerForm.value)
  }
  disableSeller(id:string){return this.sellerService.disableSeller(id).subscribe(data =>{
    const msg = data
    console.log(data)
    window.location.reload()
  })}
  enableSeller(id:string){return this.sellerService.enableSeller(id).subscribe(data =>{

   const msg = data
    console.log(id)
    window.location.reload()
  })}
  // allSellers(){
  //   return this.sellerService.allSellers().subscribe(data =>{
  //     this.sellers = data
  //     console.log(data)
  //   })
  // }

  deleteSeller(id:string){
    return this.sellerService.removeSeller(id).subscribe(data =>{
      window.location.reload()
    })
  }
  
  sellersApprouved(){
    return this.sellerService.sellerApprouved().subscribe(data =>{
      this.selApprouved = data
      console.log(data)
    })
  }
  sellersNotApprouved(){
    return this.sellerService.sellerNotApprouved().subscribe(data =>{
      this.selNotApprouved = data
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.sellersApprouved()
    this.sellersNotApprouved()
  }

}
