<template>
  <div>
    <b-form>
      <b-form-group label="Name">
        <b-form-input v-model="ResponseData.name" />
      </b-form-group>
    </b-form>
    <div />
    <span>{{ ResponseData }}</span>
    <div />
    <b-button @click="getData">Call APi</b-button>
  </div>
</template>

<script>
import * as axios from "axios";
// import {API} from "@/shared/config";

export default {
  name: "ApiGet",
  data() {
    return {
      ResponseData: {}
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("http://localhost:10000/getuser");
        console.log(response);
        this.ResponseData = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
