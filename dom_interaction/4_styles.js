/* global Vue */

new Vue({
  el: '#exercise',
  data: {
    effect: '',
    someClasses: '',
    newClass: '',
    attachRed: false,
    bgColor: '',
    progress: 0
  },
  computed: {
    progressStyles () {
      return {
        height: '30px',
        backgroundColor: 'green',
        width: (this.progress * 3) + 'px'
      }
    }
  },
  methods: {
    startEffect () {
      this.effect = 'highlight'
      var vm = this

      setInterval(() => {
        if (vm.effect === 'highlight') {
          vm.effect = 'shrink'
        } else {
          vm.effect = 'highlight'
        }
      }, 1000)
    },
    startProgress () {
      var vm = this
      setInterval(() => { vm.progress += 1 }, 500)
    }
  }
})
