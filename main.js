const app = Vue.createApp({
  data() {
    return {
      teste: "Teste",
      data: null,
      restaurantCode: "",
      orderList: [
        {
          id: 1,
          name: "João Souza",
          email: "jaoa@gmail.com",
          phone_number: "87271221",
          note: "Com maionese",
          code: "53165",
          restaurant: {},
        },
      ],
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        `http://localhost:3000/api/v1/restaurants/EYFFKJ/orders`
      );

      console.log(response);
      this.data = response;
    },
  },
});

app.mount("#app");
