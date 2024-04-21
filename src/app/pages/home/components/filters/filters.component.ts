import { Component, EventEmitter, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [MatExpansionModule, MatListModule, CommonModule],
    templateUrl: './filters.component.html',
    styleUrl: './filters.component.css',
})
export class FiltersComponent {
    @Output() showCategory = new EventEmitter<string>();
    categories = ['shoes', 'socks'];

    onShowCategory(category: string): void {
        this.showCategory.emit(category);
    }
}
