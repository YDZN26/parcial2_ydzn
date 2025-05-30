<script setup lang="ts">
import type { Serie } from '@/models/serie'
import type { Pais } from '@/models/pais'
import http from '@/plugins/axios'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import { ref, computed, watch } from 'vue'

const idiomas = ['Espanol', 'Ingles', 'Aleman', 'Frances', 'Portugues']

const ENDPOINT = 'series'

const props = defineProps({
  mostrar: Boolean,
  serie: {
    type: Object as () => Serie,
    default: () => ({} as Serie),
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const paises = ref<Pais[]>([])

const serie = ref<Serie>({
  idPais: 0,
  titulo: '',
  sinopsis: '',
  director: '',
  temporadas: 1,
  fechaEstreno: null,
  idiomaPrincipal: '',
})

const dialogVisible = computed({
  get: () => props.mostrar,
  set: value => { if (!value) emit('close') }
})

async function obtenerPaises() {
  paises.value = await http.get('paises').then(res => res.data)
}
watch(
  () => props.mostrar,
  (nuevoValor) => {
    if (nuevoValor) {
      obtenerPaises()
      if (props.serie?.id) {
        serie.value = { ...props.serie }
        if (typeof serie.value.fechaEstreno === 'string') {
          serie.value.fechaEstreno = new Date(serie.value.fechaEstreno)
        }
      } else {
        serie.value = { idPais: 0, titulo: '', sinopsis: '', director: '', temporadas: 1, fechaEstreno: null, idiomaPrincipal: '' }

      }
    }
  }
)

async function handleSave() {
  try {
    const body = {
      idPais: serie.value.idPais,
      titulo: serie.value.titulo,
      sinopsis: serie.value.sinopsis,
      director: serie.value.director,
      temporadas: serie.value.temporadas,
      fechaEstreno: serie.value.fechaEstreno
        ? (serie.value.fechaEstreno as Date).toISOString().slice(0, 10)
        : '',
        idiomaPrincipal: serie.value.idiomaPrincipal,
    }
    if (props.modoEdicion && serie.value.id) {
      await http.patch(`${ENDPOINT}/${serie.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    serie.value = { idPais: 0, titulo: '', sinopsis: '', director: '', temporadas: 1, fechaEstreno: null, idiomaPrincipal: '' }

    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message || 'Error al guardar la serie')
  }
}
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Registrar') + ' Serie'"
      style="width: 30rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-4">País</label>
        <Dropdown
          v-model="serie.idPais"
          :options="paises"
          optionLabel="descripcion"
          optionValue="id"
          placeholder="Seleccione un país"
          class="flex-auto"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-4">Título</label>
        <InputText v-model="serie.titulo" class="flex-auto" maxlength="250" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-4">Sinopsis</label>
        <InputText v-model="serie.sinopsis" class="flex-auto" maxlength="5000" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-4">Director</label>
        <InputText v-model="serie.director" class="flex-auto" maxlength="100" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-4">Temporadas</label>
        <InputNumber v-model="serie.temporadas" class="flex-auto" :min="1" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-4">Fecha de estreno</label>
        <Calendar
          v-model="serie.fechaEstreno"
          dateFormat="yy-mm-dd"
          showIcon
          class="flex-auto"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-4">Idioma principal</label>
        <Dropdown
          v-model="serie.idiomaPrincipal"
          :options="idiomas"
          placeholder="Seleccione un idioma"
          class="flex-auto"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancelar" icon="pi pi-times" severity="secondary" @click="dialogVisible = false"></Button>
        <Button type="button" label="Guardar" icon="pi pi-save" @click="handleSave"></Button>
      </div>
    </Dialog>
  </div>
</template>
