// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    search: "",
    currentPage: 1,
    itemsPerPage: 5,
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSearch(state, search) {
      state.search = search;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },

  getters: {
    filteredUsers: (state) => {
      return state.users.filter((user) =>
        Object.values(user).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(state.search.toLowerCase())
        )
      );
    },

    totalPages: (state, getters) => {
      return Math.ceil(getters.filteredUsers.length / state.itemsPerPage);
    },

    displayedUsers: (state, getters) => {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;

      /* returning users directly from filteredUsers getters,
         and creating shallow copy of an array */
      return getters.filteredUsers.slice(startIndex, endIndex);
    },
  },

  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        commit("setUsers", users);
        commit("setCurrentPage", 1); // reset to the first page after fetching
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
});
