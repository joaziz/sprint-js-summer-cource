import express, {Application, Request, Response} from "express";
import {CustomerAccountsController} from "./Controllers/Accounts/CustomerAccountsController";
import {AuthMiddleware} from "./Http/AuthMiddleware";

export function customerAccountModule(app: Application) {

    let ct = new CustomerAccountsController();

    const customerAccountModule = express()
    customerAccountModule.get("/", ct.list);
    customerAccountModule.get("/:acountno", ct.details);
    customerAccountModule.get('/:acountno/transactions', ct.transactions);

    app.use("/customer/account", AuthMiddleware, customerAccountModule)
}

export function admin(app: Application) {
    const adminApp = express()
    adminApp.use(AuthMiddleware)

    adminApp.get("/", AuthMiddleware, (req, res) => res.send("admin"));

    adminApp.get('/customers', function (req, res) {
        res.json([
            {name: "Gamal", 'phone': "1215455"}
        ]);
    });


    app.use("/admin", adminApp);
}


