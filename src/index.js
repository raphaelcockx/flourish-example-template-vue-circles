import Vue from 'vue'
import App from './App.vue'

export var data = {}

export var state = {
  name: 'world'
}

export function update() {}

export function draw() {
  new Vue({
    data: {
      data,
      state
    },
    render: (h) => h(App, {
      props: {
        data,
        state
      }
    })
  }).$mount('#app')
}
