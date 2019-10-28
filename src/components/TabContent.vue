<template>
  <div
    :class="[
      'slds-tabs_default__content',
      { 'slds-show': show, 'slds-hide': !show }
    ]"
    role="tabpanel"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabContent",
  props: {
    show: Boolean
  }
};
</script>
