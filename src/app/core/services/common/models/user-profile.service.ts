import { inject, Injectable, resource, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { ApiResponse } from '../../../models/api-response';

@Injectable({
	providedIn: 'root'
})
export class UserProfileService {
	httpCLientService = inject(HttpClientService);
	controller: string = 'UserProfiles';

	// async getAll(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<ApiResponse> {
	// 	const observable: Observable<any> = this.httpCLientService.get({
	// 		controller: this.controller,
	// 		queryString: `PageIndex=${page}&PageSize=${size}`
	// 	});

	// 	const promiseData = firstValueFrom(observable);
	// 	promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

	// 	return await promiseData;
	// }
	async create(data: any,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<void> {
		const observable: Observable<any> = this.httpCLientService.post(
			{
				controller: this.controller
			},
			data
		);

	 	const promiseData = firstValueFrom(observable);
	  	promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

	  	return await promiseData;
	}

	async update(data: any,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<void> {
		const observable: Observable<any> = this.httpCLientService.put(
			{
				controller: this.controller
			},
			data
		);

        const promiseData = firstValueFrom(observable);
        promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

        return await promiseData;
	}



	async getById(id: string, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
		const observable: Observable<any> = this.httpCLientService.get<any>(
			{
				controller: this.controller
			},
			id
		);

		const promiseData = firstValueFrom(observable);
		promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

		return await promiseData;
	}

    async GetUserProfile(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
		const observable: Observable<any> = this.httpCLientService.get<any>(
			{
				controller: this.controller,
			},
             `GetUserProfile`

		);

		const promiseData = firstValueFrom(observable);
		promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

		return await promiseData;

}
}
