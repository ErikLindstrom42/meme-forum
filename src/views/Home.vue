<template>
  <v-container>
    <div class="mx-auto mt-6">
      <v-alert
        v-if="errorMessage"
        elevation="2"
        border="left"
        colored-border
        type="error"
      >
        <h5>{{ errorMessage }}</h5>
      </v-alert>
      <h1>Welcome</h1>
      <img :src="require(`@/assets/logo.png`)" />
      <h1>VUE MEMES ONLY</h1>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: null,
    };
  },
  mounted() {
    const hasAuthErr = this.$route.query.unauthorized === "true";
    if (hasAuthErr) {
      this.errorMessage = "You must be logged in to do that";
    }
  },
};
</script>

<style></style>