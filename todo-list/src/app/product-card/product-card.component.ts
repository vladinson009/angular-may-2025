import { NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';

interface Product {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
}

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  //   productName: string = 'Awesome Product';
  //   productDescription: string = 'This is a description of the awesome product.';
  //   productPrice: number = 99.99;
  //   productImage: string = 'https://via.placeholder.com/150';
  //   products: Product[] = [{
  //     productName: 'Awesome Product',
  //   productDescription: 'This is a description of the awesome product.',
  //   productPrice:   199.99,
  //     productImage: 'https://via.placeholder.com/150'
  //   },{
  //     productName: 'Awesome Product',
  //   productDescription: 'This is a description of the awesome product.',
  //   productPrice:   299.99,
  //     productImage: 'https://via.placeholder.com/150'
  //   },{
  //     productName: 'Awesome Product',
  //   productDescription: 'This is a description of the awesome product.',
  //   productPrice:   399.99,
  //     productImage: 'https://via.placeholder.com/150'
  //   },{
  //     productName: 'Awesome Product',
  //   productDescription: 'This is a description of the awesome product.',
  //   productPrice:   499.99,
  //     productImage: 'https://via.placeholder.com/150'
  //   },{
  //     productName: 'Awesome Product',
  //   productDescription: 'This is a description of the awesome product.',
  //   productPrice:   599.99,
  //     productImage: 'https://via.placeholder.com/150'
  //   },{
  //     productName: 'Awesome Producta',
  //   productDescription: 'This is a description of the awesome product.',
  //   productPrice:   699.99,
  //     productImage: 'https://via.placeholder.com/150'
  //   }]
  //   trackByFn(index: number, item: any) {
  //   return item.productPrice
  // }
  //   constructor() { }
  //   ngOnInit(): void {
  //   // Initialization logic here (e.g., fetching data)
  //   }
  //   addToCart(): void {
  //     // Logic to add the product to the cart
  //    console.log('Product added to cart!');
  //   }

  @Input() product: any;
}
