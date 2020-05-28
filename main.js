var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    list: ["りんご", "ばなな", "いちご"],
    count: 1,
    show: true,
    scroll: 0,
  },
  mounted: function () {
    this.scroll = 100;
  },
  methods: {
    handleClick: function (event) {
      alert(event.target);
    },
  },
});
