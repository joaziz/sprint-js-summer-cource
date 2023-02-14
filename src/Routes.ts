import express, {Application, Request, Response} from "express";
import {CustomerAccountsController} from "./Controllers/Accounts/CustomerAccountsController";
import {AuthMiddleware} from "./Http/AuthMiddleware";

export function customerAccountModule(app: Application) {

    let ct = new CustomerAccountsController();

    const customerAccountModule = express()
    // @ts-ignore
    customerAccountModule.get("/", ct.list);
    // @ts-ignore
    customerAccountModule.get("/:acountno", ct.details);
    // @ts-ignore
    customerAccountModule.get('/:acountno/transactions', ct.transactions);

    app.use("/customer/account", AuthMiddleware("USER"), customerAccountModule)
}

export function admin(app: Application) {
    const adminApp = express()
    adminApp.use(AuthMiddleware("ADMIN"))

    adminApp.get("/", (req, res) => res.send("admin"));

    adminApp.get('/customers', function (req, res) {
        res.json([
            {name: "Gamal", 'phone': "1215455"}
        ]);
    });


    app.use("/admin", adminApp);
}


