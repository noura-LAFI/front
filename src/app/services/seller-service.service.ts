import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddSellerReq } from '../core/add-seller-req';
import { Seller } from '../core/Seller';

@Injectable({
  providedIn: 'root',
})
export class SellerServiceService {

  private host = environment.baseUrl; 
  
   constructor(private httpCl: HttpClient) {}

  addSeller(addSelReq:AddSellerReq) {
   return this.httpCl.post(this.host+'/sellers/addSeller',addSelReq)
  }
  allSellers() {
    return this.httpCl.get<Seller[]>(this.host + '/sellers/allSellers');
  }
  sellerApprouved(): Observable<Seller[]> {
    return this.httpCl.get<Seller[]>(this.host + '/sellers/sellerApprouved');
  }
  disableSeller(id: string): Observable<any> {
    let etat = 'NOT_approuved';
    return this.httpCl.put<any>(this.host + '/sellers/enableSeller', {
      id,
      etat,
    });
  }
  sellerNotApprouved(): Observable<Seller[]> {
    return this.httpCl.get<Seller[]>(this.host + '/sellers/sellerNotApprouved');
  }
  enableSeller(id: string): Observable<any> {
    let etat = 'approuved';
    return this.httpCl.put<any>(this.host + '/sellers/enableSeller', {
      id,
      etat,
    });
  }
  removeSeller(id: string):Observable<any>{
    return this.httpCl.delete<string>(`${this.host}/sellers/deleteSeller/${id}`);
  }
}
