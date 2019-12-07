<template>
  <div>
    <b-form>
      <b-form-group label="Name">
        <b-form-input v-model="user.name" />
      </b-form-group>
      <b-form-group label="Surname">
        <b-form-input v-model="user.surname" />
      </b-form-group>
      <b-button @click="submit">Submit</b-button>
    </b-form>
    <div />
    <span>Response</span>
    <span>{{ResponseData}}</span>
  </div>
</template>

<script>
import * as axios from "axios";
import {API} from "@/shared/config";

export default {
  name: "ApiPost",
  data() {
    return {
      user: {
        id: 0,
        name: "",
        surname: ""
      },
      ResponseData: ""
    };
  },
  methods: {
    async submit() {
      try {
        const response = await axios.post(
          `${API}/postuser`,
          this.user
        );

        console.log(response);
        this.ResponseData = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
