"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_service_1 = require("../services/email.service");
class PostRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    postEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield email_service_1.sendEmail(req.body.message);
            if (resp) {
                res.json("email sent, success");
            }
            else {
                res.json("email not sent, error");
            }
        });
    }
    routes() {
        this.router.post("/send/email", this.postEmail);
    }
}
const postRoutes = new PostRouter();
exports.default = postRoutes.router;
