import {Collection} from "./DataSource/MongoSource";

export interface Transaction {
    merchant: string,
    amount: number,
    date: string,
    details: string
}

export interface AccountDetails extends Document {
    // _id:Obje
    accountName: string
    user_id: number
    no: string,
    balance: number,
    currency: "USD" | "EGP",
    type: "CURRENT" | "SAVING"
    transactions: Transaction[] | null
}

export class AccountsDB {
    private Accounts: AccountDetails[] = [];
    private CollectionName: string = "Accounts";

    async getCustomerAccounts(userId: number): Promise<AccountDetails[]> {

        return await (await Collection<AccountDetails>(this.CollectionName)).find({user_id: userId}).toArray();

    }

    async getAccountByNo(accountNo: string): Promise<AccountDetails | null> {
        let accounts = await (await Collection<AccountDetails>(this.CollectionName)).find({no: accountNo}).toArray()
        if (accounts.length > 0)
            return accounts[0];
        return null;
    }
}
