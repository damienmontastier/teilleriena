<template>
  <div id="app">
    <div class="paper">
      <h1 class="paper__title">Teillery</h1>
      <Map></Map>
      <Measured></Measured>
      <picture class="paper__scotch--top-left">
        <img draggable="false" src="~/assets/img/SCOTCH-1.png" />
      </picture>
      <picture class="paper__scotch--bottom-left">
        <img draggable="false" src="~/assets/img/SCOTCH-3.png" />
      </picture>
      <picture class="paper__scotch--bottom-right">
        <img draggable="false" src="~/assets/img/SCOTCH-4.png" />
      </picture>
    </div>
    <Informations></Informations>
  </div>
</template>

<script>
export default {
  components: {
    Map: () => import("@/components/Map"),
    Measured: () => import("@/components/Measured"),
    Informations: () => import("@/components/Informations")
  }
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  display: block;

  .paper {
    width: 68%;
    height: 87%;
    position: absolute;
    display: block;
    top: 50%;
    left: 5%;
    transform: rotate(-2deg) translateY(-50%);
    background-color: yellow;

    &__scotch {
      &--top-left {
        position: absolute;
        left: -60px;
        top: -45px;
      }
      &--bottom-left {
        position: absolute;
        left: -60px;
        bottom: 0;
      }
      &--bottom-right {
        position: absolute;
        right: -60px;
        bottom: -60px;
      }
    }

    &__title {
      position: relative;
      display: inline-block;
      top: 40px;
      left: 65px;
    }
  }
}
</style>
