<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <UserForm @submit="handleLogin" :loading="isLoading" :error="errorMessage" />
  </div>
</template>

<script>
// Importamos el componente UserForm
import UserForm from '../components/UserForm.vue';  

export default {
  name: 'Login',
  components: {
    UserForm, // Registramos el componente UserForm
  },
  data() {
    return {
      isLoading: false,
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin(credentials) {
      this.errorMessage = '';
      this.isLoading = true;

      try {
        const response = await this.authenticateUser(credentials);
        if (response.success) {
          this.$router.push('/dashboard');
        } else {
          this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
        }
      } catch (error) {
        this.errorMessage = 'Hubo un error en la conexión. Intenta nuevamente más tarde.';
      } finally {
        this.isLoading = false;
      }
    },
    authenticateUser(credentials) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (credentials.email === 'user@example.com' && credentials.password === 'password123') {
            resolve({ success: true });
          } else {
            resolve({ success: false });
          }
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

h2 {
  text-align: center;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>