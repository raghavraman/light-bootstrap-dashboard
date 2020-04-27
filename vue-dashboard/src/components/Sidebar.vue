<template>
  <div class="sidebar" data-image="../../static/img/sidebar-5.jpg" data-color="blue">
    <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

        Tip 2: you can also add an image using data-image tag
    -->
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text">
         Raghav Raman
        </a>
      </div>
      <ul class="nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/dashboard">
            <i class="nc-icon nc-chart-pie-35"></i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="./user">
            <i class="nc-icon nc-circle-09"></i>
            <p>User Profile</p>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="./table">
            <i class="nc-icon nc-notes"></i>
            <p>Table List</p>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="./typography">
            <i class="nc-icon nc-paper-2"></i>
            <p>Typography</p>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="./icons">
            <i class="nc-icon nc-atom"></i>
            <p>Icons</p>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="./maps">
            <i class="nc-icon nc-pin-3"></i>
            <p>Maps</p>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="./notifications">
            <i class="nc-icon nc-bell-55"></i>
            <p>Notifications</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
