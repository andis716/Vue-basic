var app = new Vue({
  el: '#app',
  data: {
    int: 2,
    int2: 3,
    result: null,
    meters:0,
    killometers:0
  },
  computed: {
    sum: function() {
      return this.int + this.int2;
    }
  },
  methods: {
    sumProsses: function() {
      return this.result = this.int + this.int2;
    }
  },
  watch: {
    killometers: function(val) {
      this.killometers = val;
      this.meters = val * 1000; 
    },
    meters: function(val) {
      this.killometers = val / 1000;
      this.meters = val;
    }
  }

})