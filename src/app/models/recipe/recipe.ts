import { Ingredient } from './../ingredient/ingredient';

export class Recipe {
    constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {

    }
}