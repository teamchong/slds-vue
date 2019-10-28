<template>
  <li
    :class="['slds-tabs_default__item', { 'slds-is-active': show }]"
    role="presentation"
  >
    <a
      class="slds-tabs_default__link"
      href="javascript:void(0);"
      role="tab"
      tabindex="-1"
      aria-selected="show ? 'true' : 'false'"
      v-bind="anchorProps"
      @click="switchTab"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: "TabNav",
  props: {
    show: Boolean,
    switchTab: Function,
    anchorProps: Object
  }
};
</script>
