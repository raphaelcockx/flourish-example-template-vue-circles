import Vue from 'vue'
import Circles from './Circles.vue'

export var data = {}

export var state = {
  name: 'world',
  numCircles: 25
}

export function update() {}

export function draw() {
  new Vue({
    data: {
      data,
      state
    },
    render: (h) => h(Circles, {
      props: {
        data,
        state
      }
    })
  }).$mount('#app')
}
