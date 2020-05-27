var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    list: ["りんご", "ばなな", "いちご"],
    count: 1,
    show: true,
  },
  methods: {
    handleClick: function (event) {
      alert(event.target);
    },
  },
});

console.log(app.message);
