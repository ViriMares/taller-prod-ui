<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="email">Correo Electrónico</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Introduce tu correo electrónico"
        :disabled="loading"
        required
      />
      <span v-if="!isValidEmail" class="error">Por favor, introduce un correo válido.</span>
    </div>

    <div class="form-group">
      <label for="password">Contraseña</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Introduce tu contraseña"
        :disabled="loading"
        required
      />
      <span v-if="password && password.length < 6" class="error">La contraseña debe tener al menos 6 caracteres.</span>
    </div>

    <button type="submit" :disabled="loading || !isValidForm">Iniciar Sesión</button>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <!-- 🔗 Redirección a Registro -->
    <p class="registro-texto">
      ¿No tienes cuenta?
      <RouterLink to="/register">Regístrate aquí</RouterLink>
    </p>
  </form>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  loading: Boolean,
  error: String
});

const emit = defineEmits(['submit']);

import { ref, computed } from 'vue';

const email = ref('');
const password = ref('');

const isValidEmail = computed(() => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email.value);
});

const isValidPassword = computed(() => password.value.length >= 6);

const isValidForm = computed(() => isValidEmail.value && isValidPassword.value);

function submitForm() {
  if (isValidForm.value) {
    emit('submit', { email: email.value, password: password.value });
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 12px;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.registro-texto {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: #555;
}

.registro-texto a {
  color: #4caf50;
  text-decoration: underline;
  cursor: pointer;
}
</style>
