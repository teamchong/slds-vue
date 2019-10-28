<template>
  <div class="slds-tabs_default">
    <ul class="slds-tabs_default__nav" role="tablist">
      <slot name="navs"></slot>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs"
};
</script>
