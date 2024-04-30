import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{
    cart: Cart = {items: []};
    title = 'store';

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartService.cart.subscribe((_cart) => {
            this.cart = _cart;
        });
    }
}
