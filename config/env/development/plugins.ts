module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.forwardemail.net",
        // port: 1025,
        port: 465,
        secure: true,
        // port: 1025,465
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "ttemujin469@gmail.com",
          pass: "Pi04320416",
        },
      },
    },
  },
});


