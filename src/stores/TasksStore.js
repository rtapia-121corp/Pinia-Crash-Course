import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
      tasks: [
          {id: 1, title: "Finalizar banner", isFav: false},
          {id: 2, title: "Seguir curso", isFav: false}
        ],
  }),
});
