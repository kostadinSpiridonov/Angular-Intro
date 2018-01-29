import { ShopippingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ExamplesBaseComponent } from './examples/examples-base/examples-base.component';
import { RECIPE_ROUTES } from './recipe/recipe.routing';
import { RecipesComponent } from './recipe/recipes/recipes.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: RECIPE_ROUTES
    },
    {
        path: 'shoppinglist',
        component: ShopippingListComponent
    },
    {
        path: 'examples',
        component: ExamplesBaseComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
