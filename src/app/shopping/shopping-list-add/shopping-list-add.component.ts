import { ShoppingListService } from './../../service/shopping-list.service';
import { Ingredient } from './../../models/ingredient/ingredient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShopippingListAddComponent implements OnChanges {

  @Input() item: Ingredient = new Ingredient(null, null);
  @Output() cleared = new EventEmitter();
  private isAdd = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnChanges(changes): void {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = new Ingredient(null, null);
    }else {
      this.isAdd = false;
    }
  }


  onSubmit(ingredient: Ingredient) {
    if (!this.isAdd) {
      this.shoppingListService.editItem(this.item, ingredient);
      this.onClear();
    } else {
      this.shoppingListService.addItem(ingredient);
    }
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
