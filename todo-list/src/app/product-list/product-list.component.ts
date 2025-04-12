import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [
    {
      name: 'Awesome Product',
      descriptioin: 'This is an awesome poroduct',
      price: 99.99,
      imageUrl:
        'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
    },
    {
      name: 'Awesome Product',
      descriptioin: 'This is an awesome poroduct',
      price: 99.99,
      imageUrl:
        'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
    },
  ];
}
