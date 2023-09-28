<template>
  <div class="column-center">
    <div class="columns">
      <div class="column"><img alt="Convite" class="logo" src="@/assets/convite.jpg" /></div>
      <div class="column">
        <form @submit.prevent="salvar">
          <div class="field">
            <label class="label">Nome Completo*</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Seu nome Completo"
                v-model="confirmados.nome"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Nº de Adultos*</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="Número de adultos que irão à festa"
                v-model="confirmados.numero_adultos"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Nº de Crianças*</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="Número de crianças que irão à festa"
                v-model="confirmados.numero_criancas"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">WhatsApp*</label>
            <div class="control">
              <input
                class="input"
                maxlength="11"
                minlength="11"
                type="tel"
                placeholder="(11) 9999-9999"
                v-model="confirmados.telefone"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Observação</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Observação, caso tenha!"
                v-model="confirmados.observacao"
              ></textarea>
            </div>
          </div>

          <div class="control">
            <div class="background" v-if="loading">
              <img alt="mario animado" class="imagem_animada" src="@/assets/mario.gif" />
            </div>
            <button class="button is-success" v-if="!loading">Confirmar Presença</button>
            <button class="button is-link" v-else>Salvando</button>
          </div>
          <br />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/services/config'
import Swal from 'sweetalert2'
import { defineComponent } from 'vue'
import type { ListaConfirmados } from '@/services/convidados'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      loading: false,
      confirmados: {
        id: 0,
        nome: '',
        telefone: '',
        numero_adultos: 2,
        numero_criancas: 1,
        observacao: ''
      },
      errors: ''
    }
  },

  methods: {
    salvar() {
      let itens: ListaConfirmados = this.confirmados
      this.loading = true
      api
        .post('confirmados', itens)
        .then(
          () => (
            (this.loading = false),
            this.limpaCampos(),
            Swal.fire({
              title: 'Sua Presença foi Confirmada, Obrigado!',
              padding: '3em',
              width: '600',
              color: '#333'
            })
          )
        )
        .catch((error) => {
          this.loading = false
          Swal.fire(error.response.data.message)
        })
    },
    limpaCampos() {
      ;(this.confirmados.id = 0),
        (this.confirmados.nome = ''),
        (this.confirmados.telefone = ''),
        (this.confirmados.numero_adultos = 2),
        (this.confirmados.numero_criancas = 1),
        (this.confirmados.observacao = '')
    }
  }
})
</script>
