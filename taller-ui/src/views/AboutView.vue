<template>
  <div class="about-container">
    <!-- Introducción -->
    <section class="intro">
      <h1>Acerca de Nosotros</h1>
      <p class="justified">
        Somos una empresa especializada en la distribución de productos electrónicos de seguridad y en proporcionar soluciones de software 
        para la gestión de activos de seguridad. Nuestra misión es ofrecer productos innovadores que permitan a las empresas del sector de seguridad 
        gestionar sus activos de manera eficiente.
      </p>
      <p class="justified">
        Fundada en <strong>2010</strong>, nuestra empresa ha trabajado para ofrecer soluciones de alta calidad en la adquisición y disposición de 
        productos de seguridad como cámaras, alarmas y sistemas de control de acceso.
      </p>
    </section>

    <!-- Misión, Visión y Objetivos -->
    <section class="mission-vision-objectives">
      <div class="section-item">
        <img :src="mision" alt="Misión" class="section-img" />
        <h2>Misión</h2>
        <p class="justified">
          Nuestra misión es proporcionar soluciones tecnológicas de vanguardia para la gestión de activos de seguridad, ayudando a las empresas a 
          optimizar sus operaciones y mejorar la seguridad de sus instalaciones mediante el uso de software intuitivo y eficaz.
        </p>
      </div>
      
      <div class="section-item">
        <img :src="vision" alt="Visión" class="section-img" />
        <h2>Visión</h2>
        <p class="justified">
          Ser la empresa líder en el desarrollo de software de gestión de activos para el sector de seguridad, ofreciendo soluciones innovadoras que 
          permitan a nuestros clientes tener un control total sobre sus equipos de seguridad.
        </p>
      </div>
      
      <div class="section-item">
        <img :src="objetivos" alt="Objetivos" class="section-img" />
        <h2>Objetivos</h2>
        <ul class="justified">
          <li>Desarrollar tecnologías de software que optimicen la gestión de activos de seguridad.</li>
          <li>Brindar soluciones personalizadas para cada cliente de acuerdo a sus necesidades.</li>
          <li>Ofrecer soporte continuo para asegurar el buen funcionamiento de nuestros productos.</li>
          <li>Expandir nuestra presencia en el mercado global de seguridad.</li>
        </ul>
      </div>
    </section>

    <!-- Empresas con las que trabajamos -->
    <section class="partners">
      <h2>Empresas con las que trabajamos</h2>
      <p class="justified">
        A lo largo de los años, hemos tenido el privilegio de colaborar con una variedad de empresas líderes en el sector de la seguridad. 
        Estas alianzas nos han permitido ofrecer soluciones personalizadas y de alta calidad para cada uno de nuestros clientes. 
        Trabajamos de la mano con empresas de todo el mundo para proporcionarles las herramientas necesarias para gestionar de manera eficiente 
        sus activos de seguridad y mejorar su operatividad.
      </p>
      <div class="partner-logos">
        <img :src="bimbo" alt="Bimbo" class="partner-logo" />
        <img :src="microsoft" alt="Microsoft" class="partner-logo" />
        <img :src="liverpool" alt="Liverpool" class="partner-logo" />
      </div>
    </section>

    <!-- Botón de contacto -->
    <section class="contact-button">
      <button @click="toggleContact" class="contact-toggle-btn">
        {{ showContact ? 'Ocultar contacto' : 'Contáctanos' }}
      </button>

      <div v-if="showContact" class="contact-info">
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/5215551234567" target="_blank">+52 1 555 123 4567</a></p>
        <p><strong>Facebook:</strong> <a href="https://facebook.com/secure.stock" target="_blank">facebook.com/empresa.seguridad</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/secure-stock" target="_blank">linkedin.com/company/empresa-seguridad</a></p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/secure.stock" target="_blank">@empresa.seguridad</a></p>
      </div>
    </section>
  </div>
</template>

<script>
import mision from '@/views/images/mision.png';
import vision from '@/views/images/vision.png';
import objetivos from '@/views/images/objetivos.png';
import bimbo from '@/views/images/bimbo.png';
import microsoft from '@/views/images/microsoft.png';
import liverpool from '@/views/images/liverpool.png';

export default {
  name: "AboutView",
  data() {
    return {
      mision,
      vision,
      objetivos,
      bimbo,
      microsoft,
      liverpool,
      showContact: false,
    };
  },
  methods: {
    toggleContact() {
      this.showContact = !this.showContact;
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.about-container {
  font-family: Arial, sans-serif;
  padding: 40px 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding-top: 80px;
  margin-left: 50%;
}

/* Introducción */
.intro {
  margin-bottom: 40px;
  width: 100%;
}

.intro h1 {
  font-size: 3em;
  color: #333;
  margin-bottom: 20px;
  width: 100%;
}

.intro p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  width: 100%;
}

.justified {
  text-align: justify;
  width: 100%;
}

/* Misión, Visión y Objetivos */
.mission-vision-objectives {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
  width: 100%;
}

.section-item {
  width: 30%;
  text-align: center;
}

.section-item h2 {
  font-size: 2em;
  color: #333;
}

.section-item p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

.section-item ul {
  list-style-type: none;
  padding: 0;
}

.section-item ul li {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.section-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
}

/* Empresas con las que trabajamos */
.partners {
  margin-top: 40px;
  width: 100%;
}

.partners h2 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.partners p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.partner-logos {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.partner-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Botón de contacto */
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
