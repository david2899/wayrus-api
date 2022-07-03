const nodemailer = require('nodemailer');
const nodemailMailgun = require('nodemailer-mailgun-transport')


const  authMailgun = {
    auth: {
        api_key: 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50',
        domain: 'sandboxb28a4130fb0f4b5ea1cc77e6c013bfcd.mailgun.org',
        url: 'f1ed27eca9f46914c0feb26aedf5a5b0-1f1bd6a9-d0496f50'
      }
  }

 export const sendEmail = async (message: string) => {
    try {
        const destinity = "jironulload@gmail.com"
        const transporter = await nodemailer.createTransport(nodemailMailgun(authMailgun));

        const mailOptions = {
            from: destinity,
            subject: 'wayrus front end contact',
            to: destinity,
            text: message
        };
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err, data) {
                if (err) return reject(err);
                resolve(data)
            })
        })
    } catch (error) {
        console.log(error)
    }
}
