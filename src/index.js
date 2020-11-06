import Vue from 'vue'
import App from './App.vue'

export var data = {}

export var state = {
  example_state_property: 25,
  background_colour: '#ff0000',
  name: 'world'
}

export function update() {
  document.body.style.backgroundColor = state.background_colour
}

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

  update()
}
