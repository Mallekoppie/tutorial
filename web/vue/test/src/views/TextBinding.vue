<template>
  <div>
    <p>Text binding here: {{ MyText }}</p>
    <input type="text" v-model="MyText" />
  </div>
</template>

<script>
export default {
  name: "TextBinding",
  data() {
    return {
      MyText: "This text has been bound"
    };
  }
};
</script>
