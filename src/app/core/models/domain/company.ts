import { Industry } from './Industry';
import { Transaction } from './transaction';

export class Company {
	name: string = '';
	taxId: string = '';
	phone1: string = '';
	phone2: string = '';
	email: string = '';
	website: string = '';
	description: string = '';
	bankAccountNumber: string = '';
	bankName: string = '';
	isVerified: boolean = false;
	creditLimit: number = 0;
	paymentTerms: string = '';
	facebookUrl: string = '';
	twitterUrl: string = '';
	linkedInUrl: string = '';
	isActive: boolean = true;
	industryId: number | null = null;
	industry: Industry = new Industry();
	companyAddresses: CompanyAddress[] = [];
	companyContacts: CompanyContact[] = [];
	transactions: Transaction[] = [];
	companyImages: CompanyImage[] = [];
	companyCategories: CompanyCategory[] = [];
	companyBrands: CompanyBrand[] = [];

	constructor(init?: Partial<Company>) {
		if (init) {
			Object.assign(this, init);

			this.industry = init.industry ? new Industry(init.industry) : new Industry();
			this.companyAddresses = (init.companyAddresses || []).map((a) => new CompanyAddress(a));
			this.companyContacts = (init.companyContacts || []).map((c) => new CompanyContact(c));
			this.transactions = (init.transactions || []).map((t) => new Transaction(t));
			this.companyImages = (init.companyImages || []).map((i) => new CompanyImage(i));
			this.companyCategories = (init.companyCategories || []).map((cat) => new CompanyCategory(cat));
			this.companyBrands = (init.companyBrands || []).map((b) => new CompanyBrand(b));
		}
	}
}

export class CompanyContact {
	phone1?: string | null; // İletişim Kişisinin Telefon Numarası
	phone2?: string | null; // İletişim Kişisinin Telefon Numarası
	position?: string | null; // İletişim Kişisinin Pozisyonu (isteğe bağlı)
	isPrimary?: boolean | null; // Bu iletişim kişisi birincil mi? (Firma için ana kişi)
	companyId?: number | null; // İlişkili Firma ID

	constructor(init?: Partial<CompanyContact>) {
		Object.assign(this, init);
	}
}

export class CompanyImage {
	id: number | null = null;
	imageUrl: string = '';

	constructor(init?: Partial<CompanyImage>) {
		Object.assign(this, init);
	}
}

export class CompanyCategory {
	id: number | null = null;
	name: string = '';

	constructor(init?: Partial<CompanyCategory>) {
		Object.assign(this, init);
	}
}

export class CompanyBrand {
	id: number | null = null;
	name: string = '';

	constructor(init?: Partial<CompanyBrand>) {
		Object.assign(this, init);
	}
}

import { City, Town } from './city';

export class CompanyAddress {
	// id: number | null = null;
	street: string = '';
	cityId: number | null = null;

	city: City = new City();
	townId: number | null = null;
	town: Town = new Town();
	countryId: number | null = null;
	postalCode: string = '';
	description: string = '';
	// companyId: number | null = null;

	constructor(init?: Partial<CompanyAddress>) {
		Object.assign(this, init);
	}

	get cityName(): string {
		return this.city?.name ?? '';
	}

	set cityName(value: string) {
		if (this.city) {
			this.city.name = value;
		} else {
			this.city = new City();
			this.city.name = value;
		}
	}

	get townName(): string {
		return this.town?.name ?? '';
	}

	set townName(value: string) {
		if (this.town) {
			this.town.name = value;
		} else {
			this.town = new Town();
			this.town.name = value;
		}
	}
}
