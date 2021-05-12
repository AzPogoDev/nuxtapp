<template>
  <div class="searchbar">
    <div class="searchbar__box">
      <form class="searchbar__box__form">
        <b-form-input
          placeholder="Rechercher un projet"
          type="search"
          class="searchbar__box__form__input shadow-sm"
        ></b-form-input>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      text: "Test"
    };
  }
};
</script>

<style lang="scss">
.searchbar {
  &__box {
    &__form {
      &__input {
        padding: $spacer * 2;
        border-radius: $spacer * 1.5;
      }
    }
  }
}
</style>
