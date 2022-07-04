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
// const  authMailgun = {
//     auth: {
//         api_key: '',
//         domain: '',
//         url: 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50'
//       }
//   }
const API_KEY = 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50';
const DOMAIN = 'sandboxb28a4130fb0f4b5ea1cc77e6c013bfcd.mailgun.org';
const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });
exports.sendEmail = (subject, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(subject, message);
        const mailOptions = {
            from: "jironulload@gmail.com",
            subject: subject,
            to: "jironulload@gmail.com",
            text: message
        };
        yield mailgun.messages().send(mailOptions, (error, body) => {
            if (error)
                console.log(error);
            else
                console.log(body);
        });
        return true;
    }
    catch (error) {
        console.log(error);
    }
});
