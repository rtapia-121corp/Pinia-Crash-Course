<template>
    <form @submit.prevent="handleSubmit">
        <input type="text"
         placeholder="I need to..."
         v-model="newTask"
        >
        <button>Add taks</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TasksStore';

export default {
    props: [],
    setup () {
        const taskStore = useTaskStore();
        const newTask = ref('');
        
        // // call service 
        // taskStore.getTasks();

        const handleSubmit = () => {
            if(newTask.value.length > 0 ){
                taskStore.addTasks({
                    title: newTask.value,
                    isFav: false,
                    id: Math.floor(Math.random() * 10000)
                })
                newTask.value='';
            }
        }

        return {newTask, handleSubmit}
    }
}
</script>
