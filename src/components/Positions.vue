<template>
  <div id="positions">
    <!-- Header  -->
    <lrMenu></lrMenu>
    <div class="positionsHeader overlay" v-bind:style="{ 'background-image': 'url(' + this.workTexts.headerImg.sizes.large + ')' }">
      <h3 class="responsiveHeading"> {{ this.workTexts.heading }}</h3>
    </div>
    <div class="positionsInfo container">
      <div class="main-text-container">
        <p class="mainText" v-html="this.workTexts.text">
        </p>
        <img v-if="this.workTexts.textImg" :src="this.workTexts.textImg.sizes.large" alt="Lr-Orebro staff">
      </div>
    </div>
    <div class="work-banner" v-if="this.workTexts.showBanner">
      <i class="fa fa-briefcase" aria-hidden="true"></i>
      <h3>{{ this.workTexts.bannerHeading }}</h3>
      <p class="leadText" v-html="this.workTexts.bannerText">
      </p>
      <a href="mailto:hej@lr-orebro.se" class="button is-primary is-outlined">
      SKICKA IN ANSÖKAN
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
    <!-- Footer here -->
    <lrFooter></lrFooter>
  </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrFooter from '@/components/lrFooter.vue'

export default {
  name: 'Positions',
  components: {
    lrMenu,
    lrFooter
  },
  computed: {
    pages() {
      return this.$store.state.pages
    },
    workTexts() {
      if (this.pages.length > 0) {
        return {
          headerImg: this.pages[2].acf.header_img,
          heading: this.pages[2].acf.heading,
          text: this.pages[2].acf.text,
          showBanner: this.pages[2].acf.show_banner,
          bannerHeading: this.pages[2].acf.banner_heading,
          bannerText: this.pages[2].acf.banner_text,
          textImg: this.pages[2].acf.img
        }
      } else {
        return {
          headerImg: {
            sizes: {
              large: '...'
            }
          },
          heading: '...',
          text: '...',
          banner: '',
          bannerHeading: '...',
          bannerText: '...',
          textImg: {
            sizes: {
              large: '...'
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.positionsHeader {
  margin-top: 67px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    position: relative;
    color: $white;
    z-index: 450;
    font-size: 35px;
  }
}
.positionsInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px;
  width: 100%;
  .main-text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .mainText {
      max-width: 930px;
      text-align: left;
    }
    img {
      margin-top: 20px;
      width: 70%;
    }
  }
  .lrHeaderLine {
    background-color: $red;
  }
  span {
    font-weight: bold;
    font-size: 20px;
  }
}
.work-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $grey;
  width: 100%;
  height: auto;
  padding: 40px 20px;
  .fa-briefcase {
    font-size: 30px;
  }
  h3 {
    text-align: center;
  }
  .leadText {
    width: 70%;
    max-width: 930px;
    text-align: center;
    margin: 20px 0 20px 0;
  }
  span {
    font-weight: 900;
  }
  i {
    margin-left: 5px;
  }
  a {
    z-index: 999;
  }
}
@media screen and (max-width: $tablet - 1px) {
  .positionsInfo {
    flex-direction: column;
    .main-text-container {
      width: 100%;
      flex-basis: 50%;
      img {
        display: none;
      }
    }
  }
  .work-banner {
    .leadText {
      width: 100%;
    }
    h3 {
      text-align: center;
    }
  }
}
</style>
