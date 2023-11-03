import { Categories } from './../core/Categories';
import { AllCategResp } from './../core/all-categ-resp';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService { 
   private host = environment.baseUrl;
 constructor(private httpCl : HttpClient) { }
  searchCategByName(categorie: Categories) {
    return this.httpCl.post(this.host+"/categories/searchCateg",categorie)
  }
  getCategById(id: string) {
return this.httpCl.get<AllCategResp>(this.host+"/categories/allCategories")
  }

  gettAllCateg(){
   return this.httpCl.get<AllCategResp[]>(this.host+"/categories/allCategories")
  }

  addCateg(categorie: Categories) {
  return this.httpCl.post(this.host+"/categories/addCategorie",categorie)
  }
}
