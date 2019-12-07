<template>
  <div>
      <b-form>
          <b-form-group label="Name">
              <b-form-input v-model="clonedUser.name" />
          </b-form-group>
          <b-form-group label="Surname">
              <b-form-input v-model="clonedUser.surname" />
          </b-form-group>
          <b-form-group label="Age">
              <b-form-input v-model="clonedUser.age" />
          </b-form-group>
          <b-button @click="saveUser">Save</b-button>
          <b-button @click="cancelSave">Cancel</b-button>

      </b-form>
  </div>
</template>

<script>
export default {
  name: "component-detail",
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      clonedUser: { ...this.user }
    };
  },
  methods: {
    cancelSave() {
      this.$emit("cancel");
    },
    saveUser() {
      this.$emit("save", this.clonedUser);
    }
  }
};
</script>
