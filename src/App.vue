<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
       <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { Vue } from 'vue'
import { TaskDetails } from './components/TaskDetails/TaskDetails.vue';
import { useTaskStore } from "./stores/TasksStore";
// import { TaskDetails } from './components/TaskDetails';

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
