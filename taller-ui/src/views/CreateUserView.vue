<script setup>
import CreateUser from '@/components/CreateUser.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Vista cargada');
});
</script>

<template>
  <v-container class="pa-6 d-flex align-center justify-center" style="min-height: 100vh; background-color: #f5f5f5;">
    <!-- Se ajusta el contenedor a ocupar más espacio -->
    <v-card class="pa-6" width="100%" style="max-width: 1200px;">
      <CreateUser />
    </v-card>
  </v-container>
</template>

<style scoped>
.v-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  margin-top: 64px; /* Ajuste para que no quede pegado al header */
  display: flex;
  justify-content: center;
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
}

.v-card {
  width: 100%; /* Asegura que la tarjeta ocupe todo el espacio disponible */
  max-width: 1200px; /* Ajuste de máximo ancho */
}
</style>
