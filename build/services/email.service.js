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
exports.sendEmail = void 0;
const nodemailer = require('nodemailer');
const nodemailMailgun = require('nodemailer-mailgun-transport');
const authMailgun = {
    auth: {
        api_key: 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50',
        domain: 'sandboxb28a4130fb0f4b5ea1cc77e6c013bfcd.mailgun.org',
        url: 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50'
    }
};
exports.sendEmail = (message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const destinity = "jironulload@gmail.com";
        const transporter = yield nodemailer.createTransport(nodemailMailgun(authMailgun));
        const mailOptions = {
            from: destinity,
            subject: 'wayrus front end contact',
            to: destinity,
            text: message
        };
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err, data) {
                if (err)
                    return reject(err);
                resolve(data);
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
