import { Ingredient } from './../models/ingredient/ingredient';
import { Recipe } from './../models/recipe/recipe';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy 1', 'Desc 1', 'https://www.w3schools.com/css/paris.jpg', [new Ingredient('GG', 3), new Ingredient('SS', 2)]),
    new Recipe('Dummy 2', 'Desc 2', 'https://www.w3schools.com/css/paris.jpg', [new Ingredient('FF', 5), new Ingredient('TT', 4)]),
    new Recipe('Dummy 3', 'Desc 3', 'https://www.w3schools.com/css/paris.jpg', [new Ingredient('RR', 7), new Ingredient('VV', 6)]),
  ];

  constructor(private httpService: HttpService) { }

  // public getRecipes(): Observable<Response> {
  //   return this.httpService.getData('https://database-a90f2.firebaseio.com/recipes.json')
  //     .map((response: Response) => response.json());
  // }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipe(id: number) {
    return this.recipes[id];
  }

  public deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  public editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
