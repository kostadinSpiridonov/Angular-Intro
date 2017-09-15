import { HttpService } from './service/http.service';
import { ShopippingListAddComponent } from './shopping/shopping-list-add/shopping-list-add.component';
import { ShopippingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeService } from './service/recipe.service';
import { ShoppingListService } from './service/shopping-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { ExamplesComponent } from './examples/examples.component';
import { DataDrivenComponent } from './examples/data-driven/data-driven.component';
import { ExamplesBaseComponent } from './examples/examples-base/examples-base.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShopippingListComponent,
    ShopippingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    ExamplesComponent,
    DataDrivenComponent,
    ExamplesBaseComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppingListService, RecipeService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
