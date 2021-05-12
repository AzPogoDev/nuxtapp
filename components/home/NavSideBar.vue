<template>
  <section class="navSideBar">
    <div class="navSideBar__top"></div>
    <div class="navSideBar__content">
      <div class="navSideBar__content__menu">
        <div class="navSideBar__content__menu__icon icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h3 class="navSideBar__content__menu__title">Dashboard</h3>
      </div>
      <div class="navSideBar__content__menu">
        <div class="navSideBar__content__menu__icon icon">
          <i class="far fa-bell"></i>
        </div>
        <h3 class="navSideBar__content__menu__title">Mon compte</h3>
      </div>
      <div class="navSideBar__content__menu">
        <div class="navSideBar__content__menu__icon icon">
          <i class="fas fa-book"></i>
        </div>
        <h3 class="navSideBar__content__menu__title">Espace membre</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navSideBar {
  background: #786fa6;
  &__content {
    &__menu {
      margin: $spacer * 2;
      display: flex;
      align-items: center;
      &__icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $dark;
        margin: $spacer;
      }
      &__title {
        margin: 0;
        font-weight: 400;
        font-size: 18px;
      }
    }
  }
}
</style>
