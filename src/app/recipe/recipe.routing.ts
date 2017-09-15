import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { Recipe } from './../models/recipe/recipe';
import { Routes } from '@angular/router';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Component } from '@angular/core';

export const RECIPE_ROUTES: Routes = [
    {
        path: '',
        component: RecipeStartComponent
    },
    {
        path: 'new',
        component: RecipeEditComponent
    },
    {
        path: ':id',
        component: RecipeDetailComponent
    },
    {
        path: ':id/edit',
        component: RecipeEditComponent
    }
];