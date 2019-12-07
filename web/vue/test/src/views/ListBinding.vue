<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="user in users" :key="user.id">
        <b-form>
          <b-form-group label="Name">
            <b-form-input v-model="user.name" />
          </b-form-group>
          <b-form-group label="Surname">
            <b-form-input v-model="user.surname" />
          </b-form-group>
          <b-form-group label="Age">
            <b-form-input v-model="user.age" />
          </b-form-group>
          <b-button variant="success">Save</b-button>
          <b-button type="reset" variant="danger">Cancel</b-button>
        </b-form>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "ListBinding",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Heinrich",
          surname: "Barnard",
          age: 12
        },
        {
          id: 2,
          name: "Hendrik",
          surname: "Barnard",
          age: 15
        },

        {
          id: 3,
          name: "Drikkie",
          surname: "Barnard",
          age: 21
        }
      ]
    };
  }
};
</script>
