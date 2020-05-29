var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    list: ["りんご", "ばなな", "いちご"],
    count: 0,
    show: true,
    scroll: 0,
    radius: 50,
    ok: false,
  },
  mounted: function () {
    this.scroll = 100;
  },
  methods: {
    handleClick: function (event) {
      alert(event.target);
    },
    increment: function () {
      this.count++;
    },
  },
});
