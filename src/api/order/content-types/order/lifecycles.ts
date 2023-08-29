module.exports = {
  async afterCreate(event) {
    const { result } = await event;

    try {
      await strapi.plugin("email").service("email").sennd({
        to: "temvjin469@gmail.com",
        from: "ttemujin469@gmail.com",
        subject: "Hello world",
        text: "Hello world",
        html: `<h4>Hello world</h4>`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
