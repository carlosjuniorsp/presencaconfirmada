<template>
  <div class="container is-fluid">
    <h1 class="notification is-primary">Lista de convidados confirmados ({{ total }})</h1>
    <table class="table">
      <thead>
        <tr>
          <th><abbr title="Position">Nome</abbr></th>
          <th>Telefone</th>
          <th>Observação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="confirmados" class="lista-confirmados" v-for="convidados in confirmados">
          <th>{{ convidados.nome }}</th>
          <td>{{ convidados.telefone }}</td>
          <td>{{ convidados.numero_criancas }}</td>
          <td>{{ convidados.observacao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import api from '@/services/config';
import { defineComponent, ref, onMounted } from 'vue';
import type { ListaConfirmados } from '@/services/convidados';
interface exibeDados {
  data: ListaConfirmados
}

export default defineComponent({
  name: "Confirmados",
  setup() {
    const confirmados = ref<exibeDados>();
    const total = ref<exibeDados>();
    const fetchConfirmados = () => api.get("confirmados").then((response) => (
      confirmados.value = response.data.data,
      total.value = response.data.data.length
    ));
    onMounted(fetchConfirmados);
    return { confirmados, total };
  }
});
</script>