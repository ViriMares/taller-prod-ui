<template>
    <section class="contact-button">
      <button @click="toggleContact" class="contact-toggle-btn">
        {{ showContact ? 'Ocultar contacto' : 'Contáctanos' }}
      </button>
  
      <div v-if="showContact" class="contact-info">
        <p><strong>WhatsApp:</strong>
          <a href="https://wa.me/5215551234567" target="_blank" rel="noopener">
            +52 1 555 123 4567
          </a>
        </p>
        <p><strong>Facebook:</strong>
          <a href="https://facebook.com/secure.stock" target="_blank" rel="noopener">
            facebook.com/secure.stock
          </a>
        </p>
        <p><strong>LinkedIn:</strong>
          <a href="https://linkedin.com/company/secure-stock" target="_blank" rel="noopener">
            linkedin.com/company/secure.stock
          </a>
        </p>
        <p><strong>Instagram:</strong>
          <a href="https://instagram.com/secure.stock" target="_blank" rel="noopener">
            @secure.stock
          </a>
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        showContact: false
      };
    },
    methods: {
      toggleContact() {
        this.showContact = !this.showContact;
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-button {
    width: 100%;
    margin-top: 60px;
    text-align: center;
  }
  
  .contact-toggle-btn {
    background-color: #0056b3;
    color: white;
    padding: 12px 24px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .contact-toggle-btn:hover {
    background-color: #004494;
  }
  
  .contact-info {
    margin-top: 20px;
    font-size: 1.1rem;
    color: #333;
    text-align: left;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .contact-info p {
    margin-bottom: 10px;
  }
  
  .contact-info a {
    color: #007BFF;
    text-decoration: none;
  }
  
  .contact-info a:hover {
    text-decoration: underline;
  }
  </style>
  