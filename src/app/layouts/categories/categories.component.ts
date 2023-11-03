import { Categories } from './../../core/Categories';
import { AllCategResp } from './../../core/all-categ-resp';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  AllCateg: AllCategResp[] = [];
  modifCategForm: FormGroup;
  addCategoryForm: FormGroup;
  searchCategForm: FormGroup;
  categorie: Categories;
  constructor(private categorieService: CategoryService) {
    this.addCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    this.searchCategForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    this.modifCategForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    this.categorie = { name: '' };
  }
  searchCateg() {
    console.log(this.searchCategForm.valid)
    if (this.searchCategForm.get('name')!.value) {
      this.categorie.name = this.searchCategForm.get('name')!.value
      this.categorieService
        .searchCategByName(this.categorie)
        .subscribe((data) => {
          console.log(data);
        }); }}

  addCateg() {
    if (this.addCategoryForm.valid) {
      this.categorie.name = this.addCategoryForm.get('name')!.value;
      this.categorieService.addCateg(this.categorie).subscribe((data) => {
        console.log(data);
      });
    }
  }
  aff() {
    console.log('gg', this.searchCategForm.value);
  }
  delCateg(id: string) {}
  getAllCategorie() {
    this.categorieService.gettAllCateg().subscribe((data) => {
      this.AllCateg = data;
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getAllCategorie();
  }
}
