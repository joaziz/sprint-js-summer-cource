import {Response} from "express";
import {AccountsDB} from "../../Model";
import {CustomerAccount} from "../../service/CustomerAccount";
import {
    CustomerAccountsControllerLitResponse
} from "../../Http/JsonResponses/CustomerAccountsController/CustomerAccountsControllerLitResponse";
import {CustomRequest} from "../../Core/Server";
import {CustomResponse} from "../../Http/CustomResponse";


export class CustomerAccountsController {
    list(req: CustomRequest, res: Response<CustomerAccountsControllerLitResponse>) {
        let accounts = (new CustomerAccount()).getListOfTransactions(req.user);

        CustomResponse(res).json(new CustomerAccountsControllerLitResponse(accounts, req.user.getUserInfo()))
    }


    details(req: CustomRequest, res: Response) {

        let {acountno} = req.params;
        let account = (new AccountsDB).getAccountByNo(acountno)

        if (account) {
            account.transactions = null;
            return CustomResponse(res).json(account)
        }
        return CustomResponse(res).NotFound("account not found")

    }

    async transactions(req: CustomRequest, res: Response) {

        let {acountno} = req.params;

        let account = (new AccountsDB).getAccountByNo(acountno)

        if (!account)
            return CustomResponse(res).NotFound("account not found")

        return CustomResponse(res).json(account.transactions)
    }
}