
<template>
  <div class="column-center">
    <div class="columns is-mobile">
      <div class="column"> <img alt="Vue logo" class="logo" src="@/img/convite.jpg" /></div>
      <form @submit.prevent="salvar">
        <div class="column">
          <div class="field">
            <label class="label">Nome Completo</label>
            <div class="control">
              <input class="input" type="text" placeholder="Seu nome Completo" v-model="confirmados.nome">
            </div>
          </div>

          <div class="field">
            <label class="label">Nº de crianças</label>
            <div class="control">
              <input class="input" type="number" placeholder="Número de crianças que irão à festa"
                v-model="confirmados.numero_criancas">
            </div>
          </div>

          <div class="field">
            <label class="label">WhatsApp</label>
            <div class="control">
              <input class="input" type="tel" placeholder="(11) 9999-9999" v-model="confirmados.telefone">
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
              <label class="checkbox">
                <input type="checkbox" v-model="confirmados.termos">
                Estou de acordo com os <a href="#">termos e condições da festa</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Confirmar Presença</button>
            </div>
          </div>

          <div v-if="this.errors" class="notification is-danger is-light">
            {{ this.errors }}
          </div>
        </div>
      </form>

    </div>
  </div>
</template>


<script>
import Confirmado from '../services/confirmados.js'
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      confirmados: {
        nome: '',
        telefone: '',
        observacao: null,
        numero_criancas: '',
      },
      errors: "",
    }
  },
  methods: {
    salvar() {
      /*
      if (this.confirmados.termos != true) {
        Swal.fire('Você precisa aceitar os termos da festa');
      } else {
        */
      Confirmado.salvar(this.confirmados).then(resposta => {
        this.confirmados = {}
        console.log(resposta.message)
        Swal.fire({
          title: 'Sua Presença foi Confirmada, Obrigado!',
          width: 600,
          padding: '3em',
          color: '#333',
          backdrop: `
            rgb(237 237 237 / 13%)
            url("src/img/yoshi-run.gif")
            right bottom
            no-repeat
          `
        })
      }).catch(error => {
        this.errors = error.response.data.message
      })
      //}
    }
  }
}
</script>