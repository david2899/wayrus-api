const nodemailer = require('nodemailer');
const nodemailMailgun = require('nodemailer-mailgun-transport')


// const  authMailgun = {
//     auth: {
//         api_key: '',
//         domain: '',
//         url: 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50'
//       }
//   }

  const API_KEY = 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50';
  const DOMAIN = 'sandboxb28a4130fb0f4b5ea1cc77e6c013bfcd.mailgun.org';
  const mailgun = require('mailgun-js')
         ({apiKey: API_KEY, domain: DOMAIN});

 export const sendEmail = async (subject: string, message: string) => {
    try {
        const mailOptions = {
            from:  "jironulload@gmail.com",
            subject: subject,
            to: "jironulload@gmail.com",
            text: message
        };
          await mailgun.messages().send(mailOptions, (error, body) => {
            if(error) console.log(error)
            else console.log(body);
          });
          return true
    } catch (error) {
        console.log(error)
    }
}
