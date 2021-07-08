<template>
  <v-row justify="center" align="center">
    <v-card
      class="mx-auto my-12"
      min-width="370"
    >
      <v-card-title>Checklist</v-card-title>
      <v-card-text>
        <TodoTabPills v-model="selection"/>
        <TodoList @change="changeStatus" :todos="selection === 'completed' ? getCompletedTodos : getPendingTodos" />
        <TodoForm />
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
  import { mapMutations, mapGetters, mapState } from 'vuex';
  import { GET_COMPLETED_TODOS, GET_PENDING_TODOS, SET_TODO_STATUS } from "../store";
  import { PENDING } from "../js/constants/status";

  export default {
    data() {
      return {
        selection: PENDING,
      }
    },
    computed: {
      ...mapGetters({
        getCompletedTodos: GET_COMPLETED_TODOS,
        getPendingTodos: GET_PENDING_TODOS,
      }),
    },
    methods: {
      ...mapMutations({
        setStatus: SET_TODO_STATUS,
      }),
      changeStatus(id) {
        this.setStatus(id)
      }
    }
  }
</script>
