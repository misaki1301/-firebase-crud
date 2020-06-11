<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand to="/" tag="h1" class="mb-0">
      Nuxt Start Project
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav exact exact-active-class="active">
        <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
        <b-nav-item to="/nosotros"  exact exact-active-class="active">About</b-nav-item>
        <b-nav-item to="/blog"  exact exact-active-class="active">Blog</b-nav-item>
        <b-nav-item to="/vuex"  exact exact-active-class="active">Vuex</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
