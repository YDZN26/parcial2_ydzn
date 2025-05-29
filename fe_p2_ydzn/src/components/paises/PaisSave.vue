<script setup lang="ts">
import type { Pais } from '@/models/pais'
import http from '@/plugins/axios'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref, computed, watch } from 'vue'

const ENDPOINT = 'paises'

const props = defineProps({
  mostrar: Boolean,
  pais: {
    type: Object as () => Pais,
    default: () => ({} as Pais),
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const dialogVisible = computed({
  get: () => props.mostrar,
  set: value => { if (!value) emit('close') }
})

const pais = ref<Pais>({ ...props.pais })

async function handleSave() {
  try {
    const body = { descripcion: pais.value.descripcion }
    if (props.modoEdicion && pais.value.id) {
      await http.patch(`${ENDPOINT}/${pais.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    pais.value = {} as Pais
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message || 'Error al guardar el país')
  }
}

watch(
  () => props.mostrar,
  nuevoValor => {
    if (nuevoValor) {
      if (props.pais?.id) {
        pais.value = { ...props.pais }
      } else {
        pais.value = { descripcion: '' }
      }
    }
  }
)
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Registrar') + ' País'"
      style="width: 30rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-5">Descripción</label>
        <InputText v-model="pais.descripcion" class="flex-auto" maxlength="30" />
      </div>
      <div class="flex justify-end gap-2">
        <Button label="Cancelar" icon="pi pi-times" severity="secondary" @click="dialogVisible = false"></Button>
        <Button label="Guardar" icon="pi pi-save" @click="handleSave"></Button>
      </div>
    </Dialog>
  </div>
</template>
