<template>
  <div>
    <h4>This is Child Component one:</h4>
    <p>From parent:{{ messageFromParent }}</p>
    <button @click="onButtonClick" class="btn btn-sm btn-primary">
      Send to Parent
    </button>
    <br /><br />
    <button @click="sendMsgToSibling" class="btn btn-sm btn-primary">
      Send to Child Two
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
  props: {
    messageFromParent: {
      type: String,
      default: "",
    },
  },
  methods: {
    onButtonClick() {
      this.$emit("child-event", "one");
    },
    sendMsgToSibling() {
      this.emitter.emit("childOne-event", "Hello from Child One!");
    },
  },
  mounted() {
    // Listen for events from Child Two
    this.emitter.on("childTwo-event", (message) => {
      this.messageFromSibling = message;
    });
  },
};
</script>

<style lang="scss" scoped></style>
