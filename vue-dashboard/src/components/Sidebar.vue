<template>
  <div class="sidebar" data-image="../../static/img/sidebar-5.jpg" data-color="blue">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text">
         Raghav Raman
        </a>
      </div>
      <ul class="nav">
        <SidebarItem url="/dashboard" title="dashboard" icon="nc-chart-pie-35" />
        <SidebarItem url="/user" title="User Profile" icon="nc-circle-09" />
        <SidebarItem url="/table" title="Table List" icon="nc-notes" />
        <SidebarItem url="/typography" title="typography" icon="nc-paper-2" />
        <SidebarItem url="/icons" title="icons" icon="nc-atom" />
        <SidebarItem url="/maps" title="maps" icon="nc-pin-3" />
        <SidebarItem url="/notifications" title="notifications" icon="nc-bell-55" />
      </ul>
    </div>
  </div>
</template>
<script>
import SidebarItem from '@/components/Sidebar/SidebarItem'
export default {
  name: 'Sidebar',
  props: {
    active: String
  },
  components: { SidebarItem }
}
</script>
<style>
</style>
