<!-- DynamicForm.vue -->
<template>
  <form @submit.prevent="submitForm" class="container w-50">
    <div
      v-for="(person, index) in formArray"
      :key="index"
      class="mb-4 p-3 border rounded text-start"
    >
      <button
        @click="formArray.splice(index,1)"
        type="button"
        v-if="index > 0"
        class="btn btn-danger btn-sm float-end"
      >
        Remove
      </button>
      <h5 class="mb-3">Person {{ index + 1 }}</h5>
      <br />

      <div class="mb-3">
        <label :for="'name-' + index" class="form-label"
          >Enter your name:</label
        >
        <input
          required
          :id="'name-' + index"
          v-model="person.name"
          class="form-control"
          placeholder="e.g. John Doe"
        />
      </div>

      <div class="mb-3 form-check">
        <input
          :id="'minor-' + index"
          v-model="person.minor"
          type="checkbox"
          class="form-check-input"
        />
        <label :for="'minor-' + index" class="form-check-label"
          >Is the current person minor?</label
        >
      </div>

      <div class="mb-3">
        <label :for="'dob-' + index" class="form-label">Enter Your DOB:</label>
        <input
          :required="person.minor"
          :id="'dob-' + index"
          v-model="person.dob"
          type="date"
          class="form-control"
        />
      </div>
    </div>

    <div class="d-grid gap-2 d-md-block mb-3">
      <button type="button" @click="addPerson" class="btn btn-secondary mx-2">
        Add Person
      </button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "DynamicForm",
  data() {
    return {
      formArray: [
        { name: "", minor: false, dob: "" },
        // Initial person in the form array
      ],
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      alert(`Form data submitted:${JSON.stringify(this.formArray)}`);
    },
    addPerson() {
      this.formArray.push({ name: "", minor: false, dob: "" });
    },
  },
};
</script>
