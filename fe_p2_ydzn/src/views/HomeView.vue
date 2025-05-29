<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPaises() {
  router.push('/paises')
}

function goToSeries() {
  router.push('/series')
}
</script>

<template>
  <div class="flex flex-column overflow-hidden" style="width: 80vw; margin: 0 auto;">

    <h1 class="mb-4" style="font-size: 2.5rem;">Bienvenido!!</h1>
    <p class="mb-5" style="font-size: 1.2rem; color: #666;">
      Gestionar <b>paises</b> y <b>series</b>. Elige una opcion:
    </p>
    <div class="flex gap-4">
      <PrimeButton 
        label="Ver Paises" 
        icon="pi pi-globe" 
        class="p-button-lg"
        @click="goToPaises"
      />
      <PrimeButton 
        label="Ver Series" 
        icon="pi pi-video" 
        class="p-button-lg p-button-secondary"
        @click="goToSeries"
      />
    </div>
  </div>
</template>
