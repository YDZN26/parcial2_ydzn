<script setup lang="ts">
import type { Pais } from '@/models/pais'
import http from '@/plugins/axios'
import { ref, computed, onMounted } from 'vue'
import { DataTable, Column, InputGroup, InputGroupAddon, InputText, Dialog } from 'primevue'
import Button from 'primevue/button'

const ENDPOINT = 'paises'
const paises = ref<Pais[]>([])
const emit = defineEmits(['edit'])
const paisDelete = ref<Pais | null>(null)
const mostrarConfirmDialog = ref(false)
const busqueda = ref('')

async function obtenerLista() {
  paises.value = await http.get(ENDPOINT).then(res => res.data)
}

const paisesFiltrados = computed(() => {
  return paises.value.filter(
    pais => pais.descripcion.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})

function emitirEdicion(pais: Pais) {
  emit('edit', pais)
}

function mostrarEliminarConfirm(pais: Pais) {
  paisDelete.value = pais
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${paisDelete.value?.id}`)
  obtenerLista()
  mostrarConfirmDialog.value = false
}

onMounted(obtenerLista)
defineExpose({ obtenerLista })
</script>

<template>
  <div>
    <InputGroup>
      <InputGroupAddon><i class="pi pi-search"></i></InputGroupAddon>
      <InputText v-model="busqueda" type="text" placeholder="Buscar país" />
    </InputGroup>
    <DataTable :value="paisesFiltrados" paginator :rows="5" tableStyle="min-width: 30rem">
      <Column field="descripcion" header="Descripción" sortable />
      <Column header="Acciones">
        <template #body="{ data }">
          <Button icon="pi pi-pencil" aria-label="Editar" text @click="emitirEdicion(data)" />
          <Button icon="pi pi-trash" aria-label="Eliminar" severity="danger" text @click="mostrarEliminarConfirm(data)" />
        </template>
      </Column>
    </DataTable>
    <Dialog v-model:visible="mostrarConfirmDialog" header="Confirmar Eliminación" :style="{ width: '20rem' }">
      <p>¿Estás seguro de que deseas eliminar este país?</p>
      <div class="flex justify-end gap-2">
        <Button label="Cancelar" severity="secondary" @click="mostrarConfirmDialog = false" />
        <Button label="Eliminar" @click="eliminar" />
      </div>
    </Dialog>
  </div>
</template>
