
export class City {
	id: number = 0;
	name: string = '';
    countryId : number = 0;

    regionId :number = 0;
	towns: Town[] = [];

	constructor(init?: Partial<City>) {
		if (init) {
			Object.assign(this, init);
			this.towns = (init.towns || []).map((t) => new Town(t));
		}
	}
}

export class Town {
	id: number = 0;
	name: string = '';
	cityId: number = 0;

	constructor(init?: Partial<Town>) {
		if (init) {
			Object.assign(this, init);
		}
	}
}

