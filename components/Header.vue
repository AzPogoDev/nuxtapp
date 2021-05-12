<template>
  <header class="header container">
    <div class="header__logo">
      <nuxt-link to="/">
        <img src="" />
      </nuxt-link>
    </div>
    <div class="header__nav">
      <b-navbar>
        <b-navbar-nav>
          <b-nav-item
            ><nuxt-link class="btn" to="/">Nos services</nuxt-link></b-nav-item
          >
          <b-nav-item
            ><nuxt-link class="btn" to="/">Ressources</nuxt-link></b-nav-item
          >
          <b-nav-item
            ><nuxt-link class="btn" to="/"
              >Qui sommes nous ?</nuxt-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="header__buttons">
      <a class="header__buttons__login btn btn-primary" href="#">Connexion</a>
    </div>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  max-width: 1110px;
  height: 80px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    img {
      width: 100px;
    }
  }
}
</style>
