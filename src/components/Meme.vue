<template>
  <div>
    <v-img :src="imageURL" :width="800">
      <h1 id="top">{{ top.toUpperCase() }}</h1>
      <h1 id="bottom">{{ bottom.toUpperCase() }}</h1>
    </v-img>
    <h2 id="normalized">{{ normalized }}</h2>
  </div>
</template>

<script>
export default {
  props: ["top", "bottom", "imageURL", "normalized"],
};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  font-size: 3rem;
  font-family: impact, sans-serif;
  font-weight: bold;
  text-shadow: 0 0 10px black;
  width: 100%;
  position: absolute;
  text-align: center;
}

#bottom {
  bottom: 20px;
}

#top {
  top: 20px;
}
</style>