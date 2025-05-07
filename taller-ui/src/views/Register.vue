<template>
    <div class="register-container">
      <h2>Crear Cuenta</h2>
  
      <form @submit.prevent="registrarUsuario">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            v-model="nombre"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
          />
          <span v-if="email && !isValidEmail" class="error">Correo no válido.</span>
        </div>
  
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
          <span v-if="password && password.length < 6" class="error">
            Mínimo 6 caracteres.
          </span>
        </div>
  
        <div class="form-group">
          <label for="confirm">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirm"
            v-model="confirmar"
            required
          />
          <span v-if="confirmar && confirmar !== password" class="error">
            Las contraseñas no coinciden.
          </span>
        </div>
  
        <button type="submit" :disabled="!isFormValid">Registrarse</button>
  
        <p class="login-link">
          ¿Ya tienes cuenta?
          <RouterLink to="/login">Inicia sesión</RouterLink>
        </p>
  
        <div v-if="mensaje" :class="{ 'success': registrado, 'error': !registrado }">
          {{ mensaje }}
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  
  const nombre = ref('');
  const email = ref('');
  const password = ref('');
  const confirmar = ref('');
  const mensaje = ref('');
  const registrado = ref(false);
  
  const isValidEmail = computed(() =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  );
  
  const isFormValid = computed(() =>
    nombre.value &&
    isValidEmail.value &&
    password.value.length >= 6 &&
    password.value === confirmar.value
  );
  
  const registrarUsuario = async () => {
    try {
      // Reemplaza la URL con la de tu backend real
      const response = await axios.post('http://localhost:8080/api/registro', {
        nombre: nombre.value,
        email: email.value,
        password: password.value
      });
  
      if (response.status === 200 || response.status === 201) {
        mensaje.value = '¡Registro exitoso! Redirigiendo a login...';
        registrado.value = true;
        setTimeout(() => router.push('/login'), 2000);
      }
    } catch (error) {
      registrado.value = false;
      mensaje.value = '❌ Hubo un error al registrar. Intenta más tarde.';
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    width: 300px;
    margin: 80px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: white;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
  
  .success {
    color: green;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
  }
  
  .error-message,
  .error:not(.form-group) {
    color: red;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
  }
  
  .login-link {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
  .login-link a {
    color: #4caf50;
    text-decoration: underline;
  }
  </style>
  