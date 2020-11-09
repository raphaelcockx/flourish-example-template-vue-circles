<template>
  <svg width="100%" height="100%">
    <transition-group name="pop" tag="g"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave">
      <circle v-for="circle in circles" :cx="circle.cx" :cy="circle.cy" :r="circle.r" :fill="circle.fill" :key="circle.index"></circle>
    </transition-group>
  </svg>
</template>

<script>
import Velocity from 'velocity-animate'
  
export default {
  name: 'app',
  // We don't use data in this example, so although it gets passed to the component, we don't declare it here
  props: ['state'],
  data () {
    return {
      circles: [],
      circleIndex: 0
    }
  },
  created: function() {
    const that = this

    for (let i = 0; i < this.state.numCircles; i++) {
      setTimeout(() => {
        that.addCircle()
      }, i * 50);
    }
  },
  watch: {
    'state.numCircles': function(newNumber, oldNumber) {
      const that = this

      if(newNumber > oldNumber) {
        for(let i=0; i < newNumber - oldNumber; i++) {
          setTimeout(() => {
            that.addCircle()
          }, i * 50);
        }
      }

      if(newNumber < oldNumber) {
        for(let i=0; i < oldNumber - newNumber; i++) {
          setTimeout(() => {
            that.circles.pop()
          }, i * 10);
        }
      }
    }
  },
  methods: {
    addCircle: function() {
      this.circleIndex++

      this.circles.push({
        cx: Math.floor(Math.random()*100) + '%',
        cy: Math.floor(Math.random()*100) + '%',
        r: Math.floor(Math.random()*100),
        fill: 'hsl(' + Math.floor(Math.random()*360) + ', 100%, 50%)',
        index: this.circleIndex
      })
    },
    beforeEnter: function (el, done) {
      Velocity(el,
        { scale: 0 },
        { 
          duration: 0,
          complete: done
        }
      )
    },
    enter: function (el, done) {
      Velocity(el,
        { scale: 1 },
        { 
          duration: 4000,
          complete: done
        }
      )
    },
    leave: function (el, done) {
      Velocity(el,
        { scale: 0 },
        { complete: done }
      )
    }
  }  
}
</script>

<style>
svg {
  display: block;
}

svg g {
  transform-origin: 400px 400px;
}
</style>