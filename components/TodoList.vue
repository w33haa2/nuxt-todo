<template>
  <v-container class="px-4" fluid justify="center" align="center">
    <div v-for="todo in todos"
         :key="todo.id">
      <v-checkbox
        v-if="todo.status === 'pending'"
        :label="todo.name"
        @change="$emit('change', todo.id)"
      ></v-checkbox>
      <p v-else>
        {{ todo.name }}
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
