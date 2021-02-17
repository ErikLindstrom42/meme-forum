<template>
  <v-container>
    <div v-for="meme in memes" :key="meme.id" class="py-5">
      <meme
        class="mx-auto"
        :top="meme.topText"
        :bottom="meme.bottomText"
        :imageURL="meme.imageURL"
      />
    </div>
  </v-container>
</template>
<script>
import { db } from "../firebase";
import Meme from "../components/Meme";

export default {
  components: { Meme },
  data() {
    return {
      memes: [],
    };
  },
  //On mount sets array named memes to all the memes in the "memes" collection... memememememe
  mounted() {
    db.collection("memes").onSnapshot((snap) => {
      const memes = snap.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      this.memes = memes;
    });
  },
};
</script>

<style></style>