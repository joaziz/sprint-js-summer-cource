import {AccountsDB, UserModelInterface} from "../Model";


export interface TransactionsList {
    accountName: string
    no: string,
    balance: number,
    currency: "USD" | "EGP",
    type: "CURRENT" | "SAVING"
}

export class CustomerAccount {
    getListOfTransactions(user: UserModelInterface): TransactionsList[] {
        return (new AccountsDB).getCustomerAccounts().filter(current => current.user_id === user.id).map(account => {
            account.transactions = null;
            return account
        })
    }
}