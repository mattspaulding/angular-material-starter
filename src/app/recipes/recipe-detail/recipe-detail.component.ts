import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedValue: string;

  recipeOptions = [
    {value: 'list', viewValue: 'To Shopping List'},
    {value: 'edit', viewValue: 'Edit Recipe'},
    {value: 'delete', viewValue: 'Delete Recipe'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
