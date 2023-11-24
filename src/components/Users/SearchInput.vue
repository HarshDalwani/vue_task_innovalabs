<!-- SearchInput.vue -->
<template>
  <div>
     <div class="form-group my-4">
      <input class="form-control" v-model="search" placeholder="Search users" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search() {
      this.$emit('search', this.search);
    },
  },
};
</script>
