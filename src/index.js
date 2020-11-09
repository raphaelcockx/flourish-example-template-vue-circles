import Vue from 'vue'
import Circles from './Circles.vue'

export var data = {}

export var state = {
  numCircles: 25
}

export function update() {
  // Vue makes your state and data reactive and doesn't really need an update function
  // However, if you use other ways to update your visualization you can do so here.
}

export function draw() {
  // Uses the Circles.vue component as the root of your visualization
  // Data and State get passed as props

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
  }).$mount('#app') // Circles.vue is mounted to the #app container in index.html
}
