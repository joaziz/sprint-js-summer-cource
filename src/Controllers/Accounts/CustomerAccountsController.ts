import {Request, Response} from "express";
import {AccountDetails, AccountsDB} from "../../service/accounts";


export class CustomerAccountsController {
    list(req: Request, res: Response) {
        let Response: { accounts: AccountDetails[] } = {
            accounts: (new AccountsDB).getCustomerAccounts().map(account => {
                account.transactions = null;
                return account
            })
        }
        // @ts-ignore
        res.send({...Response, name: req.user.name});
    }

    details(req: Request, res: Response) {

        let {acountno} = req.params;

        let account = (new AccountsDB).getAccountByNo(acountno)

        if (account) {
            account.transactions = null;
            return res.send(account);
        }

        return res.status(404).json({error: "account not found"})

    }

    transactions(req: Request, res: Response) {

        let {acountno} = req.params;

        let account = (new AccountsDB).getAccountByNo(acountno)

        if (!account)
            return res.status(404).json({error: "account not found"})

        return res.send(account.transactions);
    }
}