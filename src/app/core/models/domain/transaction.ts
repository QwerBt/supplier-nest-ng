export class Transaction {
    id: number | null = null;
    amount: number = 0;
    date: Date = new Date();
    type: string = "";

    constructor(init?: Partial<Transaction>) {
      if (init?.date && typeof init.date === 'string') {
        init.date = new Date(init.date);
      }
      Object.assign(this, init);
    }
  }
