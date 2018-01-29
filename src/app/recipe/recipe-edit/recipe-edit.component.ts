import { Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Recipe } from './../../models/recipe/recipe';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from './../../service/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private recipe: Recipe;
  private recipeIndex: number;
  private isNew: Boolean = true;
  public recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  public ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }else {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    const newRecipe: Recipe = this.recipeForm.value;
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    }else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }

    this.navigateBack();
  }

  public onCancel() {
    this.navigateBack();
  }

  public onAddItem(name: string, amount: string) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [Validators.required, Validators.pattern('\\d+')])
      }));
  }

  public onRemoveItem(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  private initForm(): void {
    let recipeName: String = '';
    let recipeContent: String = '';
    let recipeImageUrl: String = '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern('\\d+')])
          })
        );
      }

      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }
}
