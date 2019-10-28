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
      aria-selected="show?'true':'false'"
      v-bind="anchorProps"
      @click="handleClick"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: "TabNav",
  methods: {
    handleClick() {
      this.switchTab(this.id);
    }
  },
  props: {
    id: String,
    tab: String,
    switchTab: Function,
    anchorProps: Object
  },
  computed: {
    show() {
      return this.id === this.tab;
    }
  }
};
</script>
