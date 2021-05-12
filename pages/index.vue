<template>
  <div class="index">
    <HomeHero />
    <div class="index__content row">
      <b-col cols="3">
        <NavSideBar />
      </b-col>
      <b-col cols="6"
        ><section class="index__content__posts">
          <SearchBar />
          <RecentsProjects /></section
      ></b-col>
      <b-col cols="3">
        <FilterSideBar />
      </b-col>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FilterSideBar from "../components/home/FilterSideBar.vue";
import NavSideBar from "../components/home/NavSideBar.vue";

export default Vue.extend({
  components: { NavSideBar, FilterSideBar }
});
</script>

<style lang="scss" scope>
.index {
   background: #f7d794;
  min-height: 100vh;
  padding-top: 15vh;
  &__content {
    padding: $spacer * 2;
    
    &__posts {
      background: #fab1a0;  
    }
  }
}
</style>
