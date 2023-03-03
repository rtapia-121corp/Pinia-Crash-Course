<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="form-task">
      <TasksForm />
      
    </div>


    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favs tasks</button>
    </nav>

    <!-- loading  -->

    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ taskStore.totalCount }} tasks left to do!</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ taskStore.favCount }} favs left to do!</p>
      <p>Favs tasks</p>
      <div v-for="task in taskStore.favs" :key="task.id">
       <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import  TaskDetails  from './components/TaskDetails';
import TasksForm from './components/TasksForm.vue';
import { useTaskStore } from "./stores/TasksStore";

import {ref} from "vue";
export default {
  components: { TaskDetails,TasksForm },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref('all');

    return { taskStore,filter };
  },
};
</script>
