import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// Configure routes
routes.register( app );

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
