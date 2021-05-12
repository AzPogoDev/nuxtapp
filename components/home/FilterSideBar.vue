<template>
  <section class="filterSideBar">
    <div class="filterSideBar__top">
      <h2 class="filterSideBar__top__title">
        Filtres
      </h2>
    </div>
    <hr />
    <div class="filterSideBar__content my-5">
      <h3 class="filterSideBar__content__title title my-4">
        Localisation
      </h3>
      <div class="filterSideBar__content__menu">
        <div class="filterSideBar__content__menu__case">
          <b-form-checkbox
            size="lg"
            id="checkbox-1"           
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            class="filterSideBar__content__menu__title"
          >
            Dashboard (4)
          </b-form-checkbox>
        </div>
      </div>

      <div class="filterSideBar__content__menu">
        <div class="filterSideBar__content__menu__case">
          <b-form-checkbox
            size="lg"
            id="checkbox-2"           
            name="checkbox-2"
            value="accepted"
            unchecked-value="not_accepted"
            class="filterSideBar__content__menu__title"
          >
            Dashboard
          </b-form-checkbox>
        </div>
      </div>

      <div class="filterSideBar__content__menu">
        <div class="filterSideBar__content__menu__case">
          <b-form-checkbox
            size="lg"
            id="checkbox-3"           
            name="checkbox-3"
            value="accepted"
            unchecked-value="not_accepted"
            class="filterSideBar__content__menu__title"
          >
            Dashboard (2)
          </b-form-checkbox>
        </div>
      </div>

       <h3 class="filterSideBar__content__title title my-4">
        Catégorie
      </h3>
      <div class="filterSideBar__content__menu">
        <div class="filterSideBar__content__menu__case">
          <b-form-checkbox
            size="lg"
            id="checkbox-1"           
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            class="filterSideBar__content__menu__title"
          >
            Humanitaire
          </b-form-checkbox>
        </div>
      </div>

      <div class="filterSideBar__content__menu">
        <div class="filterSideBar__content__menu__case">
          <b-form-checkbox
            size="lg"
            id="checkbox-2"           
            name="checkbox-2"
            value="accepted"
            unchecked-value="not_accepted"
            class="filterSideBar__content__menu__title"
          >
            Social (7)
          </b-form-checkbox>
        </div>
      </div>

      <div class="filterSideBar__content__menu">
        <div class="filterSideBar__content__menu__case">
          <b-form-checkbox
            size="lg"
            id="checkbox-3"           
            name="checkbox-3"
            value="accepted"
            unchecked-value="not_accepted"
            class="filterSideBar__content__menu__title"
          >
            Voyage (9)
          </b-form-checkbox>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filterSideBar {
  background: #786fa6;  
  &__content {
    &__menu {
      margin-bottom: $spacer * 2;
      display: flex;
      align-items: center;
      &__title {
      
        font-weight: 300;
        
  
      }
      &__case {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
