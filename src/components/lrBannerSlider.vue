<template>
<div class="bannerSliderContainer">
  <div class="bannerSlider section">
      <div class="bannerItem">
        <vue-slider ref="slider" :min="1" :interval="1" :max="100" v-model="valueOne"></vue-slider>
        <h5>Hur stor årsomsättning har ni? (mKr)</h5>
      </div>
      <div class="bannerItem">
        <vue-slider ref="slider" v-model="valueTwo"></vue-slider>
        <h5>Hur många anställda har ni?</h5>
      </div>
    </div>
  <div class="bannerButton">
    <a class="button is-primary is-outlined lr-button-fortnox" @click='openModal()'>
      ÅTERKOM MED EN OFFERT
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </a>
  </div>
  <contactModal :activate="addActive" @closeRequest="close" :valueOne="valueOne" :valueTwo="valueTwo" ></contactModal>
</div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import contactModal from '@/components/contactModal'

export default {
  name: 'lrBannerSlider',
  components: {contactModal, vueSlider},
  data: function () {
    return {
      isOpen: false,
      addActive: '',
      valueOne: 50,
      valueTwo: 50,
      value: false
    }
  },
  computed: {
    valueOneMsg () {
      return this.valueOne
    },
    valueTwoMsg () {
      return this.valueTwo
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    openModal: function () {
      this.addActive = 'is-active'
    },
    close () {
      this.addActive = ''
    }
  }
}
</script>

<style lang="scss">
  .bannerSlider {
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    position: relative;
  }
  .bannerButton {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    i {
      margin-left:10px;
    }
  }
  .bannerSliderContainer {
    background-color:$grey;
    width: 100%;
    height: auto;
    min-height: 270px;
    padding-bottom: 40px;
  }
  .bannerItem {
    margin-top: 30px;
  }
  /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: $tablet - 1px) {
    .bannerSlider {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .bannerItem {
      margin-bottom: 30px;
    }
    .bannerSlider {
      padding-bottom: 10px;
    }
  }
</style>
