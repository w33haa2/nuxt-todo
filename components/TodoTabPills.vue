<template>
  <v-chip-group
    :value="value"
    @change="(e) => $emit('input', e)"
    class="pb-4"
    active-class="grey darken-1 white--text"
    column
  >
    <v-chip value="pending" color="transparent">Pending</v-chip>
    <v-chip color="transparent" value="completed">Completed</v-chip>
  </v-chip-group>
</template>

<script>
import { PENDING } from "../js/constants/status";

export default {
  props: {
    value: {
      type: String,
      default: PENDING
    }
  }
}
</script>

<style scoped>

</style>
