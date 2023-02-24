import {AccountsDB, UserModelInterface} from "../Model";


export interface TransactionsList {
    accountName: string
    no: string,
    balance: number,
    currency: "USD" | "EGP",
    type: "CURRENT" | "SAVING"
}

export class CustomerAccount {
    async getListOfTransactions(user: UserModelInterface): Promise<TransactionsList[]> {
        return (await (new AccountsDB).getCustomerAccounts(user.id)).map(account => {
            account.transactions = null;
            return account
        })
    }
}