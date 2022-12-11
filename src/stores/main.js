import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    data: JSON.parse(localStorage.getItem('data')) || ""
  }),
  getters: {
    getData() {
      return this.data
    },
  },
  actions: {

    setData(value) {
      this.data.value = value
      if (value === "") {
        // localStorage.removeItem('data');
        return;
      }
      localStorage.setItem('data', JSON.stringify(value));
    },
    resetData() {
      this.setData("")
    },
  },
})