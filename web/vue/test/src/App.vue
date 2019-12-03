<template>
  <div>
    <HeaderBar />
    <div class="container-fluid">
      <div class="row">
      <MenuBar class="col-sm-2"/>
      <main class="col-md-10">
        <router-view />
      </main>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar";
import MenuBar from "@/components/menu-bar";

export default {
  name: "App",
  components: { HeaderBar, MenuBar }
};
</script>