<template>
  <div>
    <h4>This is Child Component two:</h4>
    <button @click="sendMsgToSibling" class="btn btn-sm btn-primary">
      Send to Child One
    </button>
    <p>From sibling:{{ messageFromSibling }}</p>
  </div>
</template>

<script>
// import  sharedBus  from "../helpers/SharedBus";
export default {
  data() {
    return {
      messageFromSibling: "",
    };
  },

  methods: {
    sendMsgToSibling() {
      this.emitter.emit('childB-event', 'Hello from Child B!');
    },
  },
  mounted() {
    // Listen for events from Child One
    this.emitter.on("childA-event", (message) => {
      this.messageFromSibling = message;
    });
  },
};
</script>

<style lang="scss" scoped></style>
