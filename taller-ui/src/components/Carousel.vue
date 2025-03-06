<template>
    <v-container>
      <v-carousel cycle height="400">
        <v-carousel-item
          v-for="(item, i) in images"
          :key="i"
          :src="item"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "https://www.nivianhome.com/wp-content/uploads/2017/10/Camaras-1024x537.jpg",
          "https://st2.depositphotos.com/1010613/6332/i/450/depositphotos_63321965-stock-photo-security-alarm-keypad.jpg",
          "https://media.istockphoto.com/id/969328162/es/foto/dispositivo-de-control-electr%C3%B3nico.jpg?s=612x612&w=0&k=20&c=jt2J23tBUnFTkOQT5GRNSAFUrx5KhVE5RBD4QfECtKY=",
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .v-carousel {
    border-radius: 10px;
  }
  </style>
  