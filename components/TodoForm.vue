<template>
  <v-form class="pt-4" ref="form">
    <v-row align="center" justify="center" class="mx-0">
      <v-text-field
        v-model="task"
        placeholder="Add an item here"
        :rules="taskRules"
        required
      ></v-text-field>
      <v-btn
        small
        @click="createTodo"
        class="pa-4 info text-no-wrap rounded-pill"
        text
      >
        Add Item
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import { ADD_TODO_LIST } from "../store";
import { PENDING } from "../js/constants/status";
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      task: '',
      taskRules: [v => !!v || 'Task is required'],
    }
  },
  computed: {
    ...mapState(["todoList"])
  },
  methods:{
    ...mapMutations({
      addTodo: ADD_TODO_LIST,
    }),
    createTodo() {
      if(this.$refs.form.validate()) {
        this.addTodo({
          status: PENDING,
          name: this.task,
          id: this.todoList.length + 1,
        })
        this.$refs.form.reset()
      }
    },
  }
}
</script>
