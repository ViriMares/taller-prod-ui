<template>
  <div class="inventory-container">
    <h1>Inventario de Productos de Seguridad</h1>
    <table class="inventory-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>
            <img :src="product.imageSrc" alt="Product Image" class="product-image" />
          </td>
          <td>{{ product.description }}</td>
          <td>{{ formatPrice(product.price) }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import camaravigilancia from '@/views/images/camaravigilancia.png'; // Importar la imagen correspondiente
import controlacceso from '@/views/images/controlacceso.png'; // Importar la imagen correspondiente
import alarmaseguridad from '@/views/images/alarmaseguridad.png'; // Importar la imagen correspondiente
import camaraseguridad from '@/views/images/camaraseguridad.png'; // Importar la imagen correspondiente

export default {
  name: 'Inventario',
  data() {
    return {
      products: [
        { id: 1, description: 'Cámara de video vigilancia HD', price: 150.99, stock: 25, imageSrc: camaravigilancia },
        { id: 2, description: 'Control de acceso biométrico', price: 99.49, stock: 15, imageSrc: controlacceso },
        { id: 3, description: 'Alarma de seguridad inteligente', price: 199.99, stock: 40, imageSrc: alarmaseguridad },
        { id: 4, description: 'Cámara de seguridad IP exterior', price: 249.99, stock: 10, imageSrc: camaraseguridad },
        { id: 5, description: 'Control de acceso RFID', price: 89.99, stock: 30, imageSrc: controlacceso },
      ],
    };
  },
  methods: {
    formatPrice(price) {
      return `$${price.toFixed(2)}`; // Formato de precio con dos decimales
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.inventory-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  text-align: left;
  padding-top: 100px;
  padding-left: 50%; /* Desplazar el contenido al 50% a la derecha */
}

/* Título de la página */
h1 {
  color: #333;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: left; /* Alineación del título a la izquierda */
  width: 100%; /* Asegura que el título ocupe todo el ancho disponible */
  margin-left: 0; /* Alinea el título de acuerdo a la sección */
}

/* Estilos de la tabla */
.inventory-table {
  width: 100%; /* Se ocupa todo el ancho disponible */
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Estilos de las celdas */
.inventory-table th, .inventory-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #ddd;
  font-size: 1.1rem;
}

/* Fondo de las celdas de encabezado */
.inventory-table th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
}

/* Filas alternadas de la tabla */
.inventory-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Efecto hover sobre las filas */
.inventory-table tr:hover {
  background-color: #f1f1f1;
}

/* Estilo para las imágenes de los productos */
.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

/* Estilo de los precios */
.inventory-table td {
  color: #555;
}

/* Alineación de los precios */
.inventory-table td:last-child {
  text-align: center;
}
</style>
