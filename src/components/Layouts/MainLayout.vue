<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">User Management System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
            <router-link to="/home" class="btn btn-default menu-control home">
              <span class="text-white bg-dark">Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ViewUser" class="btn btn-default menu-control home">
              <span class="text-white bg-dark">View User</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/MyProduct" class="btn btn-default menu-control home">
              <span class="text-white bg-dark">Product</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "MainLayout",
  props: {
    title: String,
  },
};
</script>
