
<template>
  <div class="column-center">
    <div class="columns">
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
          <br>
          <span class="msgs">
            *Ao confirmar sua presença você concorda com os termos da festa
          </span>
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
      Confirmado.salvar(this.confirmados).then(resposta => {
        this.confirmados = {}
        this.errors = ""
        Swal.fire({
          title: 'Sua Presença foi Confirmada, Obrigado!',
          padding: '3em',
          width: '600',
          color: '#333',
          backdrop: `
            rgb(237 237 237 / 13%)
            url("src/img/yoshi-run.gif")
            right bottom
            no-repeat
          `
        })
      }).catch(error => {
        Swal.fire(error.response.data.message)
      })
    }
  }
}
</script>
<style>

</style>