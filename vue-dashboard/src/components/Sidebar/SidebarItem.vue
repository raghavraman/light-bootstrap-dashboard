<template>
  <li>
    <router-link class="nav-link" :to="url">
      <i class="nc-icon" :class="icon"></i>
      <p>{{ title }}</p>
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    url: { type: String },
    title: { type: String },
    icon: { type: String }
  }
}
</script>
