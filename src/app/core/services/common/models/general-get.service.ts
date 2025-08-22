import { inject, Injectable, resource, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { ApiResponse } from '../../../models/api-response';

@Injectable({
	providedIn: 'root'
})
export class GenerealGetService {
	httpCLientService = inject(HttpClientService);

	async cityGetAll(page: number = 0, size: number = 9999,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<ApiResponse> {
		const observable: Observable<any> = this.httpCLientService.get({
			controller: 'cities',
			queryString: `PageIndex=${page}&PageSize=${size}`
		});

		const promiseData = firstValueFrom(observable);
		promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

		return await promiseData;
	}



	async cityGetById(id: string, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
		const observable: Observable<any> = this.httpCLientService.get<any>(
			{
				controller: 'cities'
			},
			id
		);

		const promiseData = firstValueFrom(observable);
		promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

		return await promiseData;
	}

    async townGetAll(page: number = 0, size: number = 9999,cityId?:number, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<ApiResponse> {
		const observable: Observable<any> = this.httpCLientService.get({
			controller: 'towns',
			queryString: `PageIndex=${page}&PageSize=${size}&CityId=${cityId}`
		});

		const promiseData = firstValueFrom(observable);
		promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

		return await promiseData;
	}



	async townGetById(id: string, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
		const observable: Observable<any> = this.httpCLientService.get<any>(
			{
				controller: 'towns'
			},
			id
		);

		const promiseData = firstValueFrom(observable);
		promiseData.then((value) => successCallBack()).catch((error) => errorCallBack(error));

		return await promiseData;
	}
}
