import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CardTableTemplate } from '../../../core/components/card-html-template/card-table-template';
import { PaginatorComponent } from '../../../core/components/paginator/paginator.component';

@Component({
	selector: 'app-requests',
	imports: [CommonModule, CardTableTemplate, TableModule, InputIconModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, PaginatorComponent, CardTableTemplate],
	templateUrl: './requests.component.html'
})
export class RequestsComponent {
	allData: any = {};
	fillData(event: any) {}
}
