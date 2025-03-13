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
    </form>
  </template>
  
  <script>
  export default {
    name: 'UserForm',
    props: {
      loading: Boolean,  // Recibimos el estado de carga
      error: String,     // Recibimos el mensaje de error
    },
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: {
      // Validación de email (básica)
      isValidEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(this.email);
      },
      // Verificamos que la contraseña tenga al menos 6 caracteres
      isValidPassword() {
        return this.password.length >= 6;
      },
      // El formulario es válido si el email y la contraseña son correctos
      isValidForm() {
        return this.isValidEmail && this.isValidPassword;
      },
    },
    methods: {
      submitForm() {
        if (this.isValidForm) {
          // Emitimos los datos al componente principal (Login)
          this.$emit('submit', { email: this.email, password: this.password });
        }
      },
    },
  };
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
  </style>  