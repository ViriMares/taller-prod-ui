<script setup>
import CreateUser from '@/components/CreateUser.vue'
</script>

<template>
  <v-container class="pa-6 d-flex align-center justify-center" style="min-height: 100vh; background-color: #f5f5f5;">
    <v-card class="pa-6" width="66%" max-width="900">
      <CreateUser />
    </v-card>
  </v-container>
</template>


<style scoped>
.v-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  margin-top: 64px; 
}
</style>

