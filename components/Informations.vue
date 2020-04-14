<template>
  <div class="infos">
    <h1 v-html="getCurrentContent.name"></h1>
    <p v-html="getCurrentContent.description"></p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapState({
      index: state => state.index
    }),
    ...mapGetters({
      getCurrentContent: "getCurrentContent"
    })
  }
};
</script>

<style lang="scss" scoped>
.infos {
  width: 31.81vw;
  height: 92vh;
  position: absolute;
  top: -2%;
  right: -2%;
  transform: rotate(2deg);
  background-color: blue;
  z-index: 9;

  h1 {
    position: relative;
    top: 2%;
  }
}
</style>
