

<template>
  <router-view/>
</template> 

<script>
import Confirmado from './services/confirmados'

export default {

  data() {
    return {
      confirmados: []
    }
  },
  mounted() {
    Confirmado.listar().then(resposta => {
      this.confirmados = resposta.data
    })
  }
}
</script>

