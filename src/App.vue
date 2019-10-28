<template>
  <Tabs id="app">
    <template #navs>
      <TabNav
        id="tab1"
        title="Upload"
        tabindex="0"
        :show="tab === 'tab1'"
        :switchTab="() => (tab = 'tab1')"
        :anchorProps="{ id: 'tab1__item', 'aria-controls': 'tab1' }"
      >
        <span class="slds-tabs__left-icon">
          <Icon
            class="slds-icon-standard-app"
            icon="#photo"
            title="Upload"
            :svgProps="{ class: 'slds-icon_small' }"
          />
        </span>
        Upload
      </TabNav>
      <TabNav
        id="tab2"
        title="Recognize"
        :show="tab === 'tab2'"
        :switchTab="() => (tab = 'tab2')"
        :anchorProps="{ id: 'tab2__item', 'aria-controls': 'tab2' }"
      >
        <span class="slds-tabs__left-icon">
          <Icon
            class="slds-icon_container slds-icon-standard-approval"
            icon="#approval"
            title="Recognize"
            :svgProps="{ class: 'slds-icon slds-icon_small' }"
          />
        </span>
        Recognize
      </TabNav>
    </template>
    <TabContent
      :show="tab === 'tab1'"
      id="tab1"
      aria-labelledby="tab1"
    ></TabContent>
    <TabContent
      :show="tab === 'tab2'"
      id="tab2"
      aria-labelledby="tab2"
    ></TabContent>
  </Tabs>
</template>

<script>
import Icon from "./components/Icon";
import TabContent from "./components/TabContent";
import TabNav from "./components/TabNav";
import Tabs from "./components/Tabs";

export default {
  name: "App",
  data() {
    return {
      tab: "tab1"
    };
  },
  components: {
    Icon,
    TabContent,
    TabNav,
    Tabs
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
