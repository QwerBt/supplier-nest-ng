import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';
import { AddressesComponent } from './addresses/addresses.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ImagesComponent } from './images/images.component';
import { BrandsComponent } from './brands/brands.component';
import { GeneralComponent } from './general/general.component';
import { CommonModule } from '@angular/common';
import { Company, CompanyAddress } from '../../../core/models/domain/company';
import { CompanyService } from '../../../core/services/common/models/company.service';
@Component({
	selector: 'app-company-profile',
	imports: [
		FormsModule,
		CommonModule,
		GeneralComponent,
		AddressesComponent,
		ContactsComponent,
		TransactionsComponent,
		ImagesComponent,
		BrandsComponent,
		SplitterModule,
		TableModule,
		InputMaskModule,
		FieldsetModule,
		FloatLabelModule,
		SelectModule,
		InputTextModule,
		InputNumberModule,
		DatePickerModule,
		ButtonModule,
		CardModule
	],
	templateUrl: './company-profile.component.html',
})
export class CompanyProfileComponent {
	companyMenuItems: any[] = [];
	objCompany: Company = new Company();
    selectedMenuItem:string = 'general';
	readonly companyService = inject(CompanyService);

	constructor() {
		this.companyMenuItems = [
			{ key: 'general', label: 'Genel', icon: 'pi pi-home' },
			{ key: 'addresses', label: 'Adresler', icon: 'pi pi-map-marker' },
			{ key: 'contacts', label: 'İletişim', icon: 'pi pi-address-book' },
			{ key: 'transactions', label: 'İşlemler', icon: 'pi pi-file' },
			{ key: 'images', label: 'Görseller', icon: 'pi pi-images' },
			{ key: 'categories', label: 'Kategoriler', icon: 'pi pi-bars' },
			{ key: 'brands', label: 'Markalar', icon: 'pi pi-tags' }
		];
	}

	add() {
        this.objCompany.companyAddresses.forEach((address:CompanyAddress) => {
            address.cityId = address.city.id;
            address.townId = address.town.id;
            address.countryId=225;
            if (address.cityId) {
                address.city = null;
            }
            if (address.townId) {
                address.town = null;
            }
        });
		this.companyService
			.create(this.objCompany)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
