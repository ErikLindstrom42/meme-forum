<template>
  <v-container>
    <v-form @submit.prevent="generateMeme">
      <v-row justify="space-between">
        <v-col>
          <v-text-field
            outlined
            label="ImageURL"
            type="text"
            v-model="imageURL"
          />
        </v-col>
        <v-col>
          <v-text-field
            outlined
            label="Top Text"
            type="text"
            v-model="topText"
          />
        </v-col>
        <v-col>
          <v-text-field
            outlined
            label="Bottom Text"
            type="text"
            v-model="bottomText"
          />
        </v-col>
      </v-row>
      <v-row v-if="!showMeme" justify="center">
        <v-btn :disabled="!imageURL" text color="primary" type="submit"
          >Generate Meme!</v-btn
        >
      </v-row>
    </v-form>
    <div v-if="showMeme">
      <Meme
        class="mx-auto"
        :top="topText"
        :bottom="bottomText"
        :imageURL="imageURL"
        :width="800"
      ></Meme>
      <div class="text-center mt-3">
        <v-btn type="button" @click="saveMeme" color="primary">
          Save this meme
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import Meme from "../components/Meme";
import { db, auth } from "../firebase";
export default {
  components: { Meme },
  data() {
    return {
      imageURL: "",
      topText: "",
      bottomText: "",
      showMeme: false,
    };
  },
  methods: {
    generateMeme() {
      this.showMeme = true;
    },
    async saveMeme() {
      await db.collection("memes").add({
        topText: this.topText,
        bottomText: this.bottomText,
        imageURL: this.imageURL,
        normalized: `${this.topText.toUpperCase()} ${this.bottomText.toUpperCase()}`,
        userId: auth.currentUser.uid,
      });
      this.$router.push("/feed");
    },
  },
  mounted() {
    console.log("Create component mounted");
  },
  beforeDestroy() {
    console.log("Create component about to be destroyed");
  },
};
</script>

<style></style>