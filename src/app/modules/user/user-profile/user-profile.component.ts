
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { UserProfile } from '../../../core/models/domain/user';
import { DisciplinService } from '../../../core/services/common/models/disciplines.service';
import { GenerealGetService } from '../../../core/services/common/models/general-get.service';
import { IndustryService } from '../../../core/services/common/models/industry.service';
import { JobFunctionService } from '../../../core/services/common/models/job-function.service';
import { JobLevelService } from '../../../core/services/common/models/job-level.service';
import { UserProfileService } from '../../../core/services/common/models/user-profile.service';

@Component({
	selector: 'app-user-profile',
	imports: [CommonModule, ButtonModule, CardModule, FormsModule, InputTextModule, FloatLabelModule, SelectModule, AvatarModule, CheckboxModule],
	templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
	objLists: any = {
		lstJobFunctions: [],
		lstJobLevel: [],
		lstDiscipline: [],
		lstIndustry: [],
		lstCity: []
	};
	objUserProfile: UserProfile = new UserProfile();
	readonly spinnerService = inject(NgxSpinnerService);
	readonly jobFunctionService = inject(JobFunctionService);
	readonly userProfileService = inject(UserProfileService);
	readonly jobLevelService = inject(JobLevelService);
	readonly disciplinesService = inject(DisciplinService);
	readonly industryService = inject(IndustryService);
	readonly generealGetService = inject(GenerealGetService);

	ngOnInit(): void {
		this.getJobFunctions();
		this.getJobLevels();
		this.getUserProfile();
        this.getDisciplines();
        this.getIndustries();
        this.getCities();
	}

	async getJobLevels() {
		this.spinnerService.show();
		const { items = [] } = await this.jobLevelService.getAll(
			0,
			100,
			() => this.spinnerService.hide(),
			(errorMessage) => alert(errorMessage)
		);
		this.objLists.lstJobLevels = items;
	}
	async getDisciplines() {
		this.spinnerService.show();
		const { items = [] } = await this.jobLevelService.getAll(
			0,
			100,
			() => this.spinnerService.hide(),
			(errorMessage) => alert(errorMessage)
		);
		this.objLists.lstDiscipline = items;
	}
    async getJobFunctions() {
		this.spinnerService.show();
		const { items = [] } = await this.jobFunctionService.getAll(
			0,
			100,
			() => this.spinnerService.hide(),
			(errorMessage) => alert(errorMessage)
		);
		this.objLists.lstJobFunctions = items;
	}

    async getIndustries() {
		this.spinnerService.show();
		const { items = [] } = await this.industryService.getAll(
			0,
			100,
			() => this.spinnerService.hide(),
			(errorMessage) => alert(errorMessage)
		);
		this.objLists.lstIndustry = items;
	}

	async getUserProfile() {
		this.spinnerService.show();
		this.objUserProfile = await this.userProfileService.GetUserProfile(
			() => this.spinnerService.hide(),
			(errorMessage) => console.log(errorMessage)
		);
	}

    async getCities() {
       	this.spinnerService.show();
           const { items = [] } =	 await this.generealGetService.cityGetAll(
            0,100,
			() => this.spinnerService.hide(),
			(errorMessage) => console.log(errorMessage)
		);
		this.objLists.lstCity = items;

	}

	async saveUserProfile() {
        this.spinnerService.show();
        let httpType:string=this.objUserProfile.id ? 'update' : 'create';

		await this.userProfileService[httpType](
            this.objUserProfile,
            () => {
                this.spinnerService.hide();
            }

        );
	}


}
