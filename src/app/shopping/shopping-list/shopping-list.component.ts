import { ShoppingListService } from './../../service/shopping-list.service';
import { Ingredient } from './../../models/ingredient/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShopippingListComponent implements OnInit {

  private items: Ingredient[] = [];
  private selectedItem: Ingredient = null;

  constructor(private shoppingListService: ShoppingListService) {
    this.items = shoppingListService.getItems();
  }

  ngOnInit() {
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }
}
