<template>
  <v-app>
    <v-app-bar app color="teal darken-2" dark>
      <h1>Vue Meme Forum</h1>
      <v-spacer> </v-spacer>
      <router-link to="/create">
        <v-btn text>Create </v-btn>
      </router-link>
      |
      <router-link to="/feed">
        <v-btn text>Memes </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>
<style scoped>
a {
  text-decoration: none;
}
.router-link-active .v-btn {
  color: rgb(255, 200, 100);
}
</style>