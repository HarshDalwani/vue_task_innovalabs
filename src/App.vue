<template>
  <div id="nav">
    <router-link
      style="padding: 5px;"
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
      >{{ route.name }}</router-link
    >
    
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: "/", name: "Home" },
        { path: "/users", name: "Users" },
        { path: "/form", name: "DynamicForm" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
