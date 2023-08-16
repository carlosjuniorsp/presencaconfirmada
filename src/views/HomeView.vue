
<template>
  <div class="column-center">
    <div class="columns">
      <div class="column"> <img alt="Vue logo" class="logo" src="@/assets/convite.jpg" /></div>
      <form @submit.prevent="salvar">
        <div class="column">
          <div class="field">
            <label class="label">Nome Completo</label>
            <div class="control">
              <input class="input" type="text" placeholder="Seu nome Completo" v-model="confirmados.nome">
            </div>
          </div>

          <div class="field">
            <label class="label">Nº de Adultos</label>
            <div class="control">
              <input class="input" type="number" placeholder="Número de adultos que irão à festa"
                v-model="confirmados.numero_adultos">
            </div>
          </div>
          
          <div class="field">
            <label class="label">Nº de Crianças</label>
            <div class="control">
              <input class="input" type="number" placeholder="Número de crianças que irão à festa"
                v-model="confirmados.numero_criancas">
            </div>
          </div>

          <div class="field">
            <label class="label">WhatsApp</label>
            <div class="control">
              <input class="input" maxlength="11" minlength="11" type="tel" placeholder="(11) 9999-9999" v-model="confirmados.telefone">
            </div>
          </div>

          <div class="field">
            <label class="label">Observação</label>
            <div class="control">
              <textarea class="textarea" placeholder="Observação, caso tenha!"
                v-model="confirmados.observacao"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="termos">
                Estou de acordo com os <a href="#">termos e condições da festa</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Confirmar Presença</button>
            </div>

          </div>
          <br>
          <span class="msgs">
            *Ao confirmar sua presença você concorda com os termos da festa
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/services/config';
import Swal from 'sweetalert2';
import { defineComponent } from 'vue';
import type { ListaConfirmados } from '@/services/convidados';

export default defineComponent({
  name: "Home",
  data() {
    return {
      confirmados: {
        nome: '',
        telefone: '',
        numero_adultos: 1,
        numero_criancas: 1,
        observacao: ''
      },
      errors: "",
    }
  },

  methods: {
    salvar() {
      let itens: ListaConfirmados = this.confirmados;
      api.post("confirmados", itens).then((response) => (
        Swal.fire({
          title: 'Sua Presença foi Confirmada, Obrigado!',
          padding: '3em',
          width: '600',
          color: '#333',
          backdrop:
            `
            rgb(237 237 237 / 13%)
            url("../src/assets/mario.gif")
            right bottom
            no-repeat
          `
        })
      )).catch((error) => {
        Swal.fire(error.response.data.message);
      });
    }
  }
});

</script>