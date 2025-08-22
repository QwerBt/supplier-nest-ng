import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardTableTemplate } from '../../../core/components/card-html-template/card-table-template';
import { PaginatorComponent } from '../../../core/components/paginator/paginator.component';

@Component({
	selector: 'app-shortlists',
	imports: [CommonModule,CardTableTemplate, TableModule, InputIconModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, PaginatorComponent],

	templateUrl: './shortlists.component.html'
})
export class ShortlistsComponent {
	allData: any = {};
	fillData(event: any) {}
}
