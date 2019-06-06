const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name,) => {
    sgMail.send({
        to: email,
        from: 'kuba.simecek@gmail.com',
        subject: 'To cumis na me',
        text: `Vitej ${name} \n Email z moji husty aplikace. \n Klidne ho smaz =D`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kuba.simecek@gmail.com',
        subject: 'Sorry jako',
        text: `Tak si bez ${name} \n Kdyz uz nechces moje sluzby!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}