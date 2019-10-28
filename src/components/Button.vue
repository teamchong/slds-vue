<template>
  <button class="slds-button">
    <template v-if="$slots.default || $scopedSlots.default">
      <svg
        class="slds-button__icon slds-button__icon_left"
        aria-hidden="true"
        v-if="leftIcon"
        v-html="leftSvgSprite"
      ></svg>
      <slot></slot>
      <svg
        class="slds-button__icon slds-button__icon_right"
        aria-hidden="true"
        v-if="rightIcon"
        v-html="rightSvgSprite"
      ></svg>
    </template>

    <span
      class="slds-text-not-selected"
      v-if="$slots.notSelected || $scopedSlots.notSelected"
    >
      <svg
        class="slds-button__icon slds-button__icon_left"
        aria-hidden="true"
        v-if="leftIcon"
        v-html="leftSvgSprite"
      ></svg>
      <slot name="notSelected"></slot>
      <svg
        class="slds-button__icon slds-button__icon_right"
        aria-hidden="true"
        v-if="rightIcon"
        v-html="rightSvgSprite"
      ></svg>
    </span>

    <span
      class="slds-text-selected"
      v-if="$slots.selected || $scopedSlots.selected"
    >
      <svg
        class="slds-button__icon slds-button__icon_left"
        aria-hidden="true"
        v-if="leftIcon"
        v-html="leftSvgSprite"
      ></svg>
      <slot name="selected"></slot>
      <svg
        class="slds-button__icon slds-button__icon_right"
        aria-hidden="true"
        v-if="rightIcon"
        v-html="rightSvgSprite"
      ></svg>
    </span>

    <span
      class="slds-text-selected-focus"
      v-if="$slots.selectedFocus || $scopedSlots.selectedFocus"
    >
      <svg
        class="slds-button__icon slds-button__icon_left"
        aria-hidden="true"
        v-if="leftIcon"
        v-html="leftSvgSprite"
      ></svg>
      <slot name="selectedFocus"></slot>
      <svg
        class="slds-button__icon slds-button__icon_right"
        aria-hidden="true"
        v-if="rightIcon"
        v-html="rightSvgSprite"
      ></svg>
    </span>

    <span
      class="slds-text-not-pressed"
      v-if="$slots.notPressed || $scopedSlots.notPressed"
    >
      <svg
        class="slds-button__icon slds-button__icon_left"
        aria-hidden="true"
        v-if="leftIcon"
        v-html="leftSvgSprite"
      ></svg>
      <slot name="notPressed"></slot>
      <svg
        class="slds-button__icon slds-button__icon_right"
        aria-hidden="true"
        v-if="rightIcon"
        v-html="rightSvgSprite"
      ></svg>
    </span>

    <span
      class="slds-text-pressed"
      v-if="$slots.pressed || $scopedSlots.pressed"
    >
      <svg
        class="slds-button__icon slds-button__icon_left"
        aria-hidden="true"
        v-if="leftIcon"
        v-html="leftSvgSprite"
      ></svg>
      <slot name="pressed"></slot>
      <svg
        class="slds-button__icon slds-button__icon_right"
        aria-hidden="true"
        v-if="rightIcon"
        v-html="rightSvgSprite"
      ></svg>
    </span>
  </button>
</template>

<script>
import svgSprite from "../svgSprite";
export default {
  name: "Button",
  props: {
    leftIcon: String,
    rightIcon: String
  },
  computed: {
    leftSvgSprite() {
      if (!this.leftIcon) {
        return "";
      }
      return svgSprite(this.leftIcon);
    },
    rightSvgSprite() {
      if (!this.rightIcon) {
        return "";
      }
      return svgSprite(this.rightIcon);
    }
  }
};
</script>
