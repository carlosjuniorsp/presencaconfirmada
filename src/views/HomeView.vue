
<template>
  <div class="column-center">
    <div class="columns is-mobile">
      <div class="column"> <img alt="Vue logo" class="logo" src="@/img/convite.jpg" /></div>
      <div class="column">
        <div class="field">
          <label class="label">Nome Completo</label>
          <div class="control">
            <input class="input" type="text" placeholder="Seu nome Completo">
          </div>
        </div>

        <div class="field">
          <label class="label">Nº de crianças</label>
          <div class="control">
            <input class="input" type="number" placeholder="Número de crianças que irão à festa">
          </div>
        </div>

        <div class="field">
          <label class="label">WhatsApp</label>
          <div class="control">
            <input class="input" type="tel" placeholder="(11) 9999-9999">
          </div>
        </div>

        <div class="field">
          <label class="label">Observação</label>
          <div class="control">
            <textarea class="textarea" placeholder="Observação, caso tenha!"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              Estou de acordo com os <a href="#">termos e condições da festa</a>
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Confirmar Presença</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
</script>