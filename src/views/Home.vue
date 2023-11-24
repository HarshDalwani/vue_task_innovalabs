<template>
  <div class="home">
    <ChildOne class="my-4" @child-event="customMessage" messageFromParent="Hello my child one" />
    <ChildTwo @child-event="customMessage" messageFromParent="Hello my child two" />
  </div>
</template>

<script>
import ChildOne from "../components/ChildOne.vue";
import ChildTwo from "../components/ChildTwo.vue";
export default {
  name: "Home",
  components: {
    ChildOne,
    ChildTwo
  },
  methods: {
    customMessage(v) {
      alert('From child' + v)
    }
  },
};
</script>
