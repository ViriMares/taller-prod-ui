<template>
  <v-container class="pa-6 d-flex align-center justify-center" style="min-height: 100vh; background-color: #f5f5f5;">
    <v-card class="pa-6" width="100%" max-width="700px">
      <v-card-title>Crear Usuario</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="isValid" lazy-validation>

          <!-- Nombre de usuario -->
          <v-text-field
            label="Nombre de usuario"
            v-model="user.username"
            :rules="[rules.required, rules.username]"
            required
            class="mb-4"
          />

          <!-- Correo electrónico -->
          <v-text-field
            label="Correo electrónico"
            v-model="user.email"
            :rules="[rules.required, rules.email]"
            required
            class="mb-4"
          />

          <!-- Teléfono principal con código -->
          <v-row class="mb-4">
            <v-col cols="4">
              <v-autocomplete
                label="Código país"
                v-model="user.phoneCode"
                :items="filteredCountryCodes"
                :search-input.sync="searchPhoneCode"
                item-title="label"
                item-value="dial_code"
                return-object
                clearable
                solo
              />
            </v-col>
            <v-col cols="8">
              <v-text-field
                label="Número de teléfono"
                v-model="user.phone"
                :rules="[rules.required, rules.phone]"
                required
                solo
              />
            </v-col>
          </v-row>

          <!-- Teléfono secundario con código -->
          <v-row class="mb-4">
            <v-col cols="4">
              <v-autocomplete
                label="Código país"
                v-model="user.secondaryPhoneCode"
                :items="filteredSecondaryCodes"
                :search-input.sync="searchSecondaryCode"
                item-title="label"
                item-value="dial_code"
                return-object
                clearable
                solo
              />
            </v-col>
            <v-col cols="8">
              <v-text-field
                label="Número secundario"
                v-model="user.secondaryPhone"
                :rules="[rules.optionalPhone]"
                solo
              />
            </v-col>
          </v-row>

          <!-- Dirección -->
          <v-text-field
            label="Dirección"
            v-model="user.address"
            :rules="[rules.required, rules.address]"
            required
            class="mb-4"
          />

          <!-- País -->
          <v-autocomplete
            v-model="user.country"
            :items="filteredCountries"
            :search-input.sync="searchCountry"
            item-title="name"
            item-value="name"
            label="País"
            :rules="[rules.required]"
            return-object
            clearable
            solo
            class="mb-4"
          />

          <!-- Tipo de usuario -->
          <v-select
            label="Tipo de usuario"
            v-model="user.userType"
            :items="userTypes"
            item-title="name"
            item-value="name"
            :rules="[rules.required]"
            required
            class="mb-4"
          />

          <!-- Botones -->
          <v-row justify="end" class="mt-4">
            <v-btn color="secondary" class="mr-2" @click="goBack">Cancelar</v-btn>
            <v-btn color="primary" @click="submit" :disabled="!isValid">Guardar</v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import countriesData from './countries.json';

// Datos reactivos
const user = ref({
  username: '',
  email: '',
  phoneCode: null,
  phone: '',
  secondaryPhoneCode: null,
  secondaryPhone: '',
  address: '',
  country: null,
  userType: null,
});

const isValid = ref(false);

// Búsquedas reactivas
const searchPhoneCode = ref('');
const searchSecondaryCode = ref('');
const searchCountry = ref('');

// Validaciones
const rules = {
  required: v => !!v || 'Este campo es obligatorio',
  username: v => /^[a-zA-Z0-9_-]{3,16}$/.test(v) || 'Debe tener entre 3 y 16 caracteres',
  email: v => /.+@.+\..+/.test(v) || 'Correo no válido',
  phone: v => /^[0-9]{10}$/.test(v) || 'Debe tener 10 dígitos',
  optionalPhone: v => !v || /^[0-9]{10}$/.test(v) || 'Debe tener 10 dígitos',
  address: v => v.length >= 5 || 'Mínimo 5 caracteres',
};

// Normalizar acentos y mayúsculas
const normalize = str =>
  str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() || '';

// Generar lista con label para códigos
const countryCodes = countriesData.map(c => ({
  ...c,
  label: `+${c.dial_code} (${c.name})`,
}));

// Filtros computados dinámicos
const filteredCountryCodes = computed(() =>
  countryCodes.filter(c =>
    normalize(c.label).includes(normalize(searchPhoneCode.value)) ||
    normalize(c.dial_code).includes(normalize(searchPhoneCode.value))
  )
);

const filteredSecondaryCodes = computed(() =>
  countryCodes.filter(c =>
    normalize(c.label).includes(normalize(searchSecondaryCode.value)) ||
    normalize(c.dial_code).includes(normalize(searchSecondaryCode.value))
  )
);

const filteredCountries = computed(() =>
  countriesData.filter(c =>
    normalize(c.name).includes(normalize(searchCountry.value))
  )
);

const userTypes = [
  { name: 'Administrador' },
  { name: 'Usuario' },
];

// Acciones
const submit = () => {
  if (isValid.value) {
    console.log('Formulario enviado', user.value);
  }
};

const goBack = () => {
  console.log('Volver atrás');
};
</script>

<style scoped>
.v-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  margin-top: 64px;
}

.v-card {
  margin: auto;
  width: 100%;
  max-width: 700px;
}

.v-text-field,
.v-select,
.v-autocomplete {
  width: 100%;
}

.mb-4 {
  margin-bottom: 16px;
}
</style>
