<template>
  <v-app>
    <v-app-bar app color="teal darken-2" dark>
      <h1>Vue Meme Forum</h1>
      <v-spacer> </v-spacer>
      <router-link v-if="user" to="/my-memes">
        <v-btn text> My Memes </v-btn>
      </router-link>
      <span v-if="user">|</span>
      <router-link to="/create">
        <v-btn text>Create </v-btn>
      </router-link>
      |
      <router-link to="/feed">
        <v-btn text>Memes </v-btn>
      </router-link>
      <v-btn v-if="user" text @click="signOut">Sign Out </v-btn>
      <v-btn v-else text @click="signIn"> Sign In </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { auth, signIn, signOut } from "./firebase";
export default {
  data() {
    return {
      user: auth.currentUser,
    };
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  methods: {
    signIn() {
      return signIn();
    },
    signOut() {
      signOut();
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.router-link-active .v-btn {
  color: rgb(255, 200, 100);
}
</style>