import {Server} from "./Core/Server";
import {LogMiddleware} from "./Http/Middlewares/LogMiddleware";


import {CustomerRoute, ApiRoute, AdminRoute} from "./Routes";
import {JsonParser} from "./Http/Middlewares/JsonParser";
import {ValidatorMiddleware} from "./Http/Middlewares/ValidatorMiddleware";


/**
 * init the server application
 */
let server = new Server();

/**
 * load middlewares and related checks
 */
server.AddMiddleware(new JsonParser())
server.AddMiddleware(new ValidatorMiddleware())
server.AddMiddleware(new LogMiddleware())

/**
 * Inject routes
 */
server.LoadRout(new ApiRoute())
server.LoadRout(new AdminRoute())
server.LoadRout(new CustomerRoute())
/**
 * Run the Application
 */
server.Start(3000)

