<template>
  <v-card class="pa-6">
    <v-card-title>Crear Usuario</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="isValid" lazy-validation>
        <v-text-field
          label="Nombre de usuario"
          v-model="user.username"
          :rules="[rules.required, rules.username]"
          required
        />

        <v-text-field
          label="Correo electrónico"
          v-model="user.email"
          :rules="[rules.required, rules.email]"
          required
        />

        <!-- Teléfono principal con código -->
        <v-row>
          <v-col cols="4">
            <v-select
              label="Código país"
              v-model="user.phoneCode"
              :items="countryCodes"
              item-title="label"
              item-value="code"
              return-object
              :rules="[rules.required]"
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
        <v-row>
          <v-col cols="4">
            <v-select
              label="Código país"
              v-model="user.secondaryPhoneCode"
              :items="countryCodes"
              item-title="label"
              item-value="code"
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

        <v-text-field
          label="Dirección"
          v-model="user.address"
          :rules="[rules.required, rules.address]"
          required
        />

        <v-select
          v-model="user.country"
          :items="countries"
          item-title="name"
          item-value="name"
          label="País"
          :rules="[rules.required]"
          return-object
          clearable
          solo
        ></v-select>

        <v-select
          label="Tipo de usuario"
          v-model="user.userType"
          :items="userTypes"
          :rules="[rules.required]"
          required
        />

        <v-row justify="end" class="mt-4">
          <v-btn color="secondary" class="mr-2" @click="goBack">Cancelar</v-btn>
          <v-btn color="primary" @click="submit" :disabled="!isValid">Guardar</v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import countries from './countries.json'

const router = useRouter()
const form = ref(null)
const isValid = ref(false)

const user = ref({
  username: '',
  email: '',
  phoneCode: null,
  phone: '',
  secondaryPhoneCode: null,
  secondaryPhone: '',
  address: '',
  country: null,
  userType: null
})

const userTypes = ['admin', 'usuario']

const countryCodes = countries.map(c => ({
  label: `+${c.dial_code} (${c.name})`,
  code: c.dial_code
}))

const rules = {
  required: v => !!v || 'Este campo es obligatorio',
  email: v =>
    /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/.test(v) ||
    'Correo no válido',
  username: v =>
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v) || 'Nombre no válido',
  address: v =>
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9.,#\\-\\s]+$/.test(v) || 'Dirección no válida',
  phone: v => /^[0-9\\s]+$/.test(v) || 'Número no válido',
  optionalPhone: v =>
    !v || /^[0-9\\s]+$/.test(v) || 'Número secundario no válido'
}

const submit = () => {
  if (form.value?.validate()) {
    console.log('Usuario creado:', user.value)
    // Aquí puedes emitir evento o llamar API
  }
}

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.v-card {
  margin: auto;
}
</style>
