export interface Transaction {
    merchant: string,
    amount: number,
    date: string,
    details: string
}

export interface AccountDetails {
    accountName: string
    user_id: number
    no: string,
    balance: number,
    currency: "USD" | "EGP",
    type: "CURRENT" | "SAVING"
    transactions: Transaction[] | null
}

export class AccountsDB {
    private Accounts: AccountDetails[] = [
        {
            accountName: "Ahmed Ali",
            no: "2345454184",
            user_id: 1,
            balance: 23535.32,
            currency: "USD",
            type: "CURRENT",
            transactions: [
                {amount: 200, date: "2020-01-01 11:30:00", details: "pay Lamp", merchant: "IKIA"}
            ]
        },
        {
            accountName: "Ahmed Ali",
            no: "874145468",
            balance: 0.0,
            currency: "USD",
            user_id: 5,
            type: "SAVING",
            transactions: [
                {amount: 200, date: "2020-01-01 11:30:00", details: "pay Lamp", merchant: "IKIA"}
            ]
        },
        {
            accountName: "Ahmed Ali",
            no: "325454816",
            balance: 1024548.5,
            currency: "EGP",
            user_id: 1,
            type: "CURRENT",
            transactions: [
                {amount: 200, date: "2020-01-01 11:30:00", details: "pay Lamp", merchant: "IKIA"}
            ]
        }
    ];

    getCustomerAccounts(): AccountDetails[] {
        return this.Accounts
    }

    getAccountByNo(accountNo: string): AccountDetails | null {
        let accounts: AccountDetails[] = this.Accounts.filter(account => account.no === accountNo)
        if (accounts.length > 0)
            return accounts[0];
        return null;
    }
}
