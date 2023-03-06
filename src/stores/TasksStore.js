import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
      tasks: [],
      loading: false
  }),
  getters:{
    favs(){
      return this.tasks.filter(task => task.isFav)
    },
    favCount(){
      return this.tasks.reduce((count,task) => {
          return task.isFav ? count + 1 : count;
      },0 );
    },
    totalCount: (state) => {
      return state.tasks.length;
    }
  },
  actions:{
    async getTasks(){
      this.loading = true;
      const res = await fetch('http://localhost:3000/tasks');
      const data = await res.json()

      this.tasks = data;
      this.loading = false;
    },
    async addTasks(task){
      this.tasks.push(task);

      const res = await fetch('http://localhost:3000/tasks',{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
      });

      if(res.error){
        console.error(res.error);
      }
    },
    async deleteTask(id){
      this.tasks = this.tasks.filter( task => {
        return task.id !== id
      })

      const res = await fetch('http://localhost:3000/tasks/' +id,{
        method: 'DELETE',
      });

      if(res.error){
        console.error(res.error);
      }
    },
    async toggleFav(id){
      const task = this.tasks.find(task => task.id === id);
      task.isFav =  !task.isFav;

      const res = await fetch('http://localhost:3000/tasks/' + id,{
        method: 'PATCH',
        body: JSON.stringify({isFav: task.isFav}),
        headers: {'Content-Type': 'application/json'}
      });

      if(res.error){
        console.error(res.error);
      }
      
    }
  }
});
