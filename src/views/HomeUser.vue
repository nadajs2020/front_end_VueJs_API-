<template>
  <MainLayout />
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in users" :key="index">
              <th>{{ index + 1 }}</th>
              <td>{{ row.email }}</td>
              <td>{{ row.password }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MainLayout from "@/components/Layouts/MainLayout.vue";
import axios from "axios";
export default {
  name: "HomeUser",
  components: {
    MainLayout,
  },
  data() {
    return {
      users: [],
    };
  },
  async created() {
    // GET request for remote image in node.js
    const response = await axios.get("http://localhost:9000/api/user/getuser");
    this.users = response.data;
    console.log(response.data);
  },
};
</script>
