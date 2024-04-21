import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatMenuModule,
        MatButtonModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    providers: [CurrencyPipe],
})
export class HeaderComponent {
    constructor(private currencyPipe: CurrencyPipe) {}

    keyboard_price = this.currencyPipe.transform(150, '$');
    totalValue = this.currencyPipe.transform(450, '$');
}
