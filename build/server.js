"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./config/mongoose");
const server = new app_1.Server();
server.start();
