import {Request, Response} from "express";
import {AccountDetails, AccountsDB} from "../../Model";
import {CustomerAccount, TransactionsList} from "../../service/CustomerAccount";
import {RequestInterface} from "../../Http/RequestInterface";
import {
    CustomerAccountsControllerLitResponse
} from "../../Http/JsonResponses/CustomerAccountsController/CustomerAccountsControllerLitResponse";


export class CustomerAccountsController {
    list(req: RequestInterface, res: Response<CustomerAccountsControllerLitResponse>) {
        let accounts = (new CustomerAccount()).getListOfTransactions(req.user);

        res.send(new CustomerAccountsControllerLitResponse(accounts, req.user.getUserInfo()));
    }

    details(req: RequestInterface, res: Response) {

        let {acountno} = req.params;

        let account = (new AccountsDB).getAccountByNo(acountno)

        if (account) {
            account.transactions = null;
            return res.send(account);
        }

        return res.status(404).json({error: "account not found"})

    }

    transactions(req: RequestInterface, res: Response) {

        let {acountno} = req.params;

        let account = (new AccountsDB).getAccountByNo(acountno)

        if (!account)
            return res.status(404).json({error: "account not found"})

        return res.send(account.transactions);
    }
}