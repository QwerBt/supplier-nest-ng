import { Component, inject, Input, model } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { NgxSpinnerService } from 'ngx-spinner';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { IndustryService } from '../../../../core/services/common/models/industry.service';
import { ApiResponse } from '../../../../core/models/api-response';

@Component({
	selector: 'app-general',
	imports: [FormsModule, CheckboxModule, InputMaskModule, TextareaModule, FloatLabelModule, FieldsetModule, SelectModule, InputTextModule, InputNumberModule],
	templateUrl: './general.component.html'
})
export class GeneralComponent {
	industries: ApiResponse = {} as ApiResponse;
	objGeneral = model<any>({});
	@Input() formGroup!: FormGroup;
	readonly industryService = inject(IndustryService);
	readonly spinnerService = inject(NgxSpinnerService);

	constructor() {
		this.getIndustries();
	}

	async getIndustries() {
		this.spinnerService.show();
		this.industries = await this.industryService.getAll(
			0,
			999,

			() => this.spinnerService.hide(),
			(errorMessage) => alert(errorMessage)
		);
	}
}
