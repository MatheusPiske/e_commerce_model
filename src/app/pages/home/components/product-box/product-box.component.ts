import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product.model';

@Component({
    selector: 'app-product-box',
    standalone: true,
    imports: [MatCardModule, MatIconModule, CommonModule],
    templateUrl: './product-box.component.html',
    styleUrl: './product-box.component.css',
})
export class ProductBoxComponent {
    @Input() fullWidthMode = false;
    product: Product | undefined = {
        id: 1, 
        title: 'Sneakers',
        price: 150,
        category: 'Shoes',
        description: 'Description',
        image: 'https://via.placeholder.com/150'
    }
    @Output() addToCart = new EventEmitter();

    onAddToCart(): void {
        this.addToCart.emit(this.product);
    }
}
