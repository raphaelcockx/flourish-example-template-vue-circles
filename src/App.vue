<template>
  <div>
    <p>Hello {{ state.name }}</p>
  
    <div v-for="entry in data.fruits" :key="entry.label">
      <p><strong>{{ entry.label }}</strong>: {{ entry.value }}</p>
  	</div>
  </div>

</template>

<script>
export default {
  name: 'App',
  props: ['data', 'state']
}
</script>
