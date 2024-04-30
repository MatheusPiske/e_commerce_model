import { Component } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Cart = {items: [
    {
      product: 'https://via.placeholder.com/150',
      name: 'television',
      price: 445,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Bottle',
      price: 23,
      quantity: 3,
      id: 2,
    },
  ]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private _cartService: CartService) {}

  ngOnInit() : void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return this._cartService.getTotal(items);
  }
}
