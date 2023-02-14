import express, {Request, Response} from 'express';
import {admin, customerAccountModule} from "./Routes";

/**
 * Ebanking System
 * init the express app
 */
const app = express(); // express application


function sendEmail() {
    setTimeout(function () {
        console.log('mail sent')
    }, 4000);
}

let controller = function (req: Request, res: Response) {
    res.send("ok");
    sendEmail()
};


let count = 0;

let rateLimit = function (req, res, next) {
    count++;
    if (count > 3) {
        return res.sendStatus(403)
    }
    return next()
}

let logMid = function (req, res, next) {
    console.log('new request')
    return next()
}
app.use(logMid)
// app.use(rateLimit)

app.get("/", controller);

/**
 * load routes
 */
customerAccountModule(app);
admin(app)
/**
 * run the app
 */
const PORT = 3000
app.listen(PORT, function () {
    console.log(`server working on port ${PORT}`)
})


// research frameworks in Nodejs (5 framework with pros and cons)