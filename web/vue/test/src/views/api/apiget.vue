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
    <div />
  </div>
</template>

<script>
import * as axios from "axios";
import {API} from "@/shared/config";

export default {
  name: "ApiGet",
  data() {
    return {
      ResponseData: {}
    };
  },
  created() {
    console.log(
      "Envonment var value for backend: " + API
    );
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(`${API}/getuser`);
        console.log(response);
        this.ResponseData = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
