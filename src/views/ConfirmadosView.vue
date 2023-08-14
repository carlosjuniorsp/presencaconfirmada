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
        <tr class="lista-confirmados" v-for="convidados of confirmados" :key="convidados.id">
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
import Confirmado from '../services/confirmados.js'

export default {
  name: "Confirmados",
  data() {
    return {
      confirmados: [],
      total: "",
    }
  },
  mounted() {
    Confirmado.listar().then(resposta => {
      this.confirmados = resposta.data.data
      this.total = resposta.data.data.length
    })
  }
}
</script>
<style></style>
