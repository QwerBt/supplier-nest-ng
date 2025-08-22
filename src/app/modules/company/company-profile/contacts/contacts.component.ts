import { CommonModule } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { CompanyContact } from '../../../../core/models/domain/company';

@Component({
	selector: 'app-contacts',
	imports: [FormsModule, TextareaModule, CommonModule, TableModule, ButtonModule, FloatLabelModule, InputTextModule, SelectModule],
	templateUrl: './contacts.component.html'
})
export class ContactsComponent {
    readonly companyContacts = signal([] as CompanyContact[]);

    removeContact(index: number) {}

}
