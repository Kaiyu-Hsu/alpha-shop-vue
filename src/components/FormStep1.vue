<template>
  <div id="form" class="form">
    <div class="form-container">
      <form action="" id="form-panel" class="form-panel">
        <!--      寄送地址      -->
        <div class="part">
          <h2 class="form-title">寄送地址</h2>
          <div class="gender-name form-row">
            <div class="col-3 mb-3 gender">
              <label>稱謂</label>
              <select
                name="title"
                id="title"
                class="custom-select"
                v-model="user.gender"
                required
              >
                <option value="" disabled selected>請選擇稱謂</option>
                <option value="man">先生</option>
                <option value="female">小姐</option>
              </select>
            </div>
            <div class="col-9 mb-3 name">
              <label>姓名</label>
              <input
                v-model="user.name"
                id="name"
                type="text"
                placeholder="請輸入姓名"
                class="form-control"
              />
            </div>
          </div>
          <div class="phone-email form-row">
            <div class="col-6 mb-3 phone">
              <label for="">電話</label>
              <input
                v-model="user.phone"
                id="phone"
                type="text"
                placeholder="請輸入電話"
                class="form-control"
              />
            </div>
            <div class="col-6 mb-3 email">
              <label for="">Email</label>
              <input
                v-model="user.email"
                id="email"
                type="text"
                placeholder="請輸入電子郵件"
                class="form-control"
              />
            </div>
          </div>
          <div class="city-address form-row">
            <div class="col-3 mb-3 city">
              <label>縣市</label>
              <select
                name="city"
                id="city"
                class="custom-select"
                v-model="user.city"
                required
              >
                <option value="" disabled selected>請選擇縣市</option>
                <option value="taipei">台北</option>
                <option value="taichung">台中</option>
                <option value="tainan">台南</option>
              </select>
            </div>
            <div class="col-9 mb-3 address">
              <label for="">地址</label>
              <input
                v-model="user.address"
                id="address"
                type="text"
                placeholder="請輸入地址"
                class="form-control"
              />
            </div>
          </div>
        </div>
        <!-- btn -->
        <div
          id="btn-control"
          class="control-panel d-flex justify-content-around mt-3"
        >
          <!-- disabled -->
          <button disabled class="btn btn-outline">上一步</button>
          <button @click.stop.prevent="next" class="btn btn-next ml-4">
            下一步
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.btn-next,
.btn-outline {
  font-size: 16px;
  border-radius: 5px;
  height: 32px;
  width: 100%;
  padding: 0 16px;
  margin: 20px;
  box-shadow: 1px 1px 5px #a6a6a6;
}

.btn-next {
  color: white;
  background-color: #f67599;
}
</style>

<script>
export default {
  name: "FromStep1",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        gender: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
      }),
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    next() {
      this.$emit('next-step')
      this.$router.push({ name:'step2'}) //導向另一個子路由
    },
  },
};
</script>