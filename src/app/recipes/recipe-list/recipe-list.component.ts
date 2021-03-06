import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is only a test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Kitchen-Tomatoes-Food-Vegetable-729896.jpg'),
    new Recipe('A test recipe',
      'This is only a test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Kitchen-Tomatoes-Food-Vegetable-729896.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
