import { Company } from "./company";


export class Industry {
    id: number | null = null;
    name: string = "";
    parentIndustryId:number | null = null;
    parentIndustry: Industry | null = null;
    subIndustries: Industry[] = [];
    companies: Company[] = [];
    constructor(init?: Partial<Industry>) {
      Object.assign(this, init);

      this.parentIndustry = init?.parentIndustry ? new Industry(init.parentIndustry) : null;
      this.subIndustries = init?.subIndustries?.map(i => new Industry(i)) || [];
      this.companies = init?.companies?.map(c => new Company(c)) || [];

    }
  }


