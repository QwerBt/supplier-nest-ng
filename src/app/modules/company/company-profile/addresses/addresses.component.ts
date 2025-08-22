import { Component, inject, model, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { TextareaModule } from 'primeng/textarea';
import { CompanyAddress } from '../../../../core/models/domain/company';
import { GenerealGetService } from '../../../../core/services/common/models/general-get.service';

@Component({
	selector: 'app-addresses',
	imports: [FormsModule,TextareaModule, CommonModule, TableModule, ButtonModule, FloatLabelModule, InputTextModule, SelectModule],
	templateUrl: './addresses.component.html'
})
export class AddressesComponent {
	readonly companyAddresses = model<CompanyAddress[]>([]);
	readonly objCompanyAddress = signal(new CompanyAddress());
	cities: any = {};
	towns: any = {};
	readonly generalGetService = inject(GenerealGetService);
	readonly spinnerService = inject(NgxSpinnerService);
	constructor() {
		this.getCities();
	}

	addAddress() {
		this.companyAddresses().push(this.objCompanyAddress());
        this.objCompanyAddress.set(new CompanyAddress());
	}
    removeAddress(index: number) {
        this.companyAddresses().splice(index, 1);
    }

	async getCities() {
		this.spinnerService.show();
		this.cities = await this.generalGetService.cityGetAll(
			0,
			999,
			() => this.spinnerService.hide(),
			(errorMessage) => alert(errorMessage)
		);
	}

	async getTowns() {
		this.spinnerService.show();
		this.towns = await this.generalGetService.townGetAll(
			0,
			999,
			this.objCompanyAddress().city.id,
			() => this.spinnerService.hide(),
			(errorMessage) => alert(errorMessage)
		);
	}
}
