<template>
  <span class="slds-icon_container">
    <svg
      aria-hidden="true"
      class="slds-icon"
      v-bind="svgProps"
      v-html="svgSprite"
    ></svg>
  </span>
</template>

<script>
import svgSprite from "../svgSprite";

export default {
  name: "Icon",
  props: {
    icon: String, // i.e. #photo or standard#photo
    svgProps: Object
  },
  computed: {
    svgSprite() {
      return svgSprite(this.icon);
    }
  }
};
</script>
