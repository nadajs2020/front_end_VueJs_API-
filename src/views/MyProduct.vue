<template>
  <MainLayout />
  <div class="container pt-5 pb-5">
    <div class="row d-flex">
      <div class="col-sm-3 pt-3" v-for="(row, index) in myProducts" :key="index">
        <div class="card" style="width: 18rem">
          <img src="{{row.imagePath}}" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ row.productName }}</h5>
            <p class="card-text">{{ row.information }}</p>
            <div class="d-flex justify-content-between">
              <div class="d-inline p-2 text-bg-primary">
                <div class="price float-start">{{ row.price }}</div>
              </div>
              <a href="#" class="btn btn-success float-end">Go Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainLayout from "@/components/Layouts/MainLayout.vue";
import axios from "axios";
export default {
  name: "MyProduct",
  components: {
    MainLayout,
  },
  data() {
    return {
      myProducts: 0,
    };
  },
  async created() {
    // GET request for remote image in node.js
    const response = await axios.get("http://localhost:9000/api/getProducts");
    this.myProducts = response.data;
    console.log(response.data);
  },

  // GET request for remote image in node.js
};
</script>
