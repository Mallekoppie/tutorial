<template>
  <header>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/home">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="/textbinding">Text Binding</b-nav-item>
            <b-nav-item href="/listbinding">List Binding</b-nav-item>
            <b-nav-item-dropdown text="Components" right>
              <b-dropdown-item href="/component-binding">Subcomponent Binding</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Api Call" right>              
              <b-dropdown-item href="/api-get">Get</b-dropdown-item>
              <b-dropdown-item href="/api-post">Post</b-dropdown-item>
              <b-dropdown-item href="#">other</b-dropdown-item>
            </b-nav-item-dropdown>            
            <b-nav-item href="#">Grafana</b-nav-item>
            <b-nav-item href="#">Prometheus</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Settings" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar"
};
</script>
