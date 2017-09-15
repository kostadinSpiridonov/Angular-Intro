import { RecipeService } from './../../service/recipe.service';
import { Recipe } from './../../models/recipe/recipe';
import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http"

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      (data: any) => this.recipes = data);
  }
}
