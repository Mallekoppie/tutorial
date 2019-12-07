<template>
  <div>
    <b-list-group v-if="showList">
      <b-list-group-item v-for="user in users" :key="user.id">
        <span>{{ user.name }} {{ user.surname }}</span>
        <div />
        <b-button @click="selectUser(user)">Update</b-button>
      </b-list-group-item>
    </b-list-group>

    <ComponentDetail v-if="showDetail" :user="selectedUser" @save="saveUser" @cancel="cancelUser" />
  </div>
</template>

<script>
import ComponentDetail from "@/components/component-detail";

export default {
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
      ],
      showList: true,
      showDetail: false,
      selectedUser: undefined
    };
  },
  components: {
    ComponentDetail
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user;
      this.showDetail = true;
      this.showList = false;
    },
    cancelUser() {
      this.selectedUser = undefined;
      this.showDetail = false;
      this.showList = true;
    },
    saveUser(user) {
      const index = this.users.findIndex(i => i.id === user.id);
      this.users.splice(index, 1, user);
      this.users = [...this.users];
      this.selectedUser = undefined;

      this.showDetail = false;
      this.showList = true;
    }
  }
};
</script>
