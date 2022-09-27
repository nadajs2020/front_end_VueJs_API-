<template>
  <div>
    <MainLayout />

    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-11 col-xs-11">
          <div class="form-floating mb-3">
            <input
              type="username"
              class="form-control"
              id="floatingInput"
              v-model="username"
              placeholder="username"
            />
            <label for="floatingInput"> username</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              v-model="password"
              placeholder="Password"
            />
            <label for="floatingInput">password</label>
          </div>
          <div class="col-12 d-grid">
            <button class="btn btn-primary" @click="addNewUser">Submit</button>
          </div>
        </div>
        <!-- <div class="container pt-5 pb-5">
          <div class="row">
            <div class="col">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>email</th>
                    <th>Password</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in users" :key="index">
                    <th>{{ index + 1 }}</th>
                    <td>{{ row.username }}</td>
                    <td>{{ row.password }}</td>
                    <td>
                      <a
                        href="#"
                        v-on:click="deleteUser(row.id)"
                        class="label label-danger label-btn"
                        >Delete</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import MainLayout from "@/components/Layouts/MainLayout.vue";
// import axios from "axios";
import AllProdect from "@/api/AllProdect.js";
import $ from 'jquery';
export default {
  name: "AddUser",
  components: {
    MainLayout,
  },
  data() {
    return {
      username: "",
      password: "",
      users: null,
    };
  },
  methods: {
    async login() {
      await AllProdect.login({
        username: this.username,
        password: this.password
      })
    },
    addNewUser(event) {
      let e = event.target;
      let mypost = $(e).serializeArray();
      let myreq = $.post(this.login, { bank_reports: mypost });
      myreq.done((data) => {
        console.log(data);
        this.BankReportsResult = JSON.parse(data);
      });
    },

  },
}
</script>
