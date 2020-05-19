<template>
  <div v-if="getCurrentContent == null" class="infos">
    <div class="infos__inner">
      <p>undefined</p>
    </div>
  </div>
  <div v-else class="infos">
    <div class="infos__inner">
      <h1 v-html="getCurrentContent.name"></h1>
      <h2 v-html="getCurrentContent.name_latin"></h2>

      <div class="infos__slider">
        <div class="slider__left">
          <span></span>
        </div>
        <div class="slider__right">
          <span></span>
        </div>
      </div>

      <p class="bold key-information">
        Divsion:
        <span class="light" v-html="getCurrentContent.division" />
      </p>
      <p class="bold key-information">
        Classe:
        <span class="light" v-html="getCurrentContent.class" />
      </p>
      <p class="bold key-information">
        Ordre:
        <span class="light" v-html="getCurrentContent.order" />
      </p>
      <p class="bold key-information">
        Famille:
        <span class="light" v-html="getCurrentContent.family" />
      </p>
      <p class="description" v-html="getCurrentContent.description"></p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    console;
  },
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
  width: 30vw;
  height: 92vh;
  position: absolute;
  top: -10px;
  right: -5px;
  z-index: 9;
  transform: rotate(2deg);
  background-image: url("~assets/img/grid.png");
  background-repeat: no-repeat;
  background-size: cover;

  &__inner {
    position: relative;
    margin: 40px 45px;

    .infos__slider {
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;

      .slider__left,
      .slider__right {
        width: 50%;
        height: 160px;
        background: red;
        border-radius: 50%;
      }
    }

    h1,
    h2 {
      margin-bottom: 20px;
    }

    h1 {
      font-family: var(--font-agrandir-wideBlack);
      font-size: 2.5em;
      text-decoration: underline;
    }

    h2 {
      font-family: var(--font-agrandir-grandThin);
      font-size: 1.6em;
    }

    .key-information {
      margin-bottom: 10px;
    }

    .description {
      font-family: var(--font-agrandir-grandThin);
      font-size: 0.8em;
      margin-top: 40px;
      line-height: 1.1em;
    }
  }
}

.bold {
  font-family: var(--font-agrandir-wideBlack);
  font-size: 1.2em;
}

.light {
  font-family: var(--font-agrandir-grandThin);
  font-size: 1em;
}
</style>
