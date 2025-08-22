export class User {
	id?: string;
	firstName?: string = '';
	lastName?: string = '';
	fullName?: string = '';
	// userProfile?: UserProfile =new UserProfile();

	constructor(init?: Partial<User>) {
		if (init) {
			Object.assign(this, init);
		}

		const first = this.firstName ?? '';
		const last = this.lastName ?? '';
		this.fullName = `${first} ${last}`.trim();

		// this.userProfile = init?.userProfile ? new UserProfile(init.userProfile) : null;
	}
}

export class UserProfile {
	id?: string;
    firstName?: string = '';
    lastName?: string = '';

	jobDiscipline?: string | null;
	jobFunction?: string | null;
	jobLevel?: string | null;

	isRoleBuyer?: boolean | null;
	isRoleSupplier?: boolean | null;
	isRoleOther?: boolean | null;

	companyName?: string | null;
	companyUrl?: string | null;
	currentCompany?: string | null;

	emailVerified: boolean = false;
	canAccessCompanyProfile: boolean = false;

	country?: string | null;
	industry?: string | null;
	zipCode?: string | null;
	mobilePhone?: string | null;
	businessEmail?: string | null;
	userProfileImage?: string | null;

	userId?: string | null;

	constructor(init?: Partial<UserProfile>) {
		Object.assign(this, init);
		// this.user = init?.user ? new User(init.user) : {} as User;
	}
}
