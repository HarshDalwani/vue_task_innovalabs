<!-- UserList.vue -->
<template>
  <div class="container">
    
    <!--Global Searh component for all parameters  -->
    <SearchInput @search="updateSearch" />

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in displayedUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <a target="_blank" :href="'//' + user.website">{{
              user.website
            }}</a>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-grid gap-2 d-md-block mt-5">
      <button
        class="btn btn-secondary btn-sm"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Previous Page
      </button>
      <b class="px-2">{{ currentPage }}</b>
      <button
        class="btn btn-secondary btn-sm"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/Users/SearchInput.vue";

export default {
  name: "UserList",

  components: {
    SearchInput,
  },

  computed: {
    displayedUsers() {
      return this.$store.getters.displayedUsers;
    },

    currentPage: {
      get() {
        return this.$store.state.currentPage;
      },
      set(value) {
        this.$store.commit("setCurrentPage", value);
      },
    },

    totalPages() {
      return this.$store.getters.totalPages;
    },
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch("fetchUsers");
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    updateSearch(value) {
      this.$store.commit("setSearch", value);
    },
  },

  mounted() {
    this.fetchUsers();
  },
};
</script>
