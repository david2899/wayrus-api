import { Server } from "./app";
import './config/mongoose'
const server = new Server();
server.start();
