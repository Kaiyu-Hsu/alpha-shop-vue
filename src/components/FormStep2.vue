<template>
  <div id="form" class="form">
    <div class="form-container">
      <form action="" id="form-panel" class="form-panel">
        <!-- delivery-way -->
        <div class="part">
          <h2 class="form-title">運送方式</h2>
          <div class="delivery-panel">
            <div class="form-row delivery-way">
              <div class="delivery-container d-flex align-items-center">
                <input
                  v-model="user.delivery"
                  name="deliver-type"
                  type="radio"
                  value= 0
                  id="normal"
                  calss="delivery-type mr-3"
                  checked
                />
                <label for="normal" class="normal">
                  <div class="deliver-name">標準運送</div>
                  <div class="deliver-date">約3-7個工作天</div>
                </label>
                <div class="deliver-price">免費</div>
              </div>
            </div>
            <div class="form-row delivery-way">
              <div class="delivery-container d-flex align-items-center">
                <input
                  v-model="user.delivery"
                  name="deliver-type"
                  type="radio"
                  value= 500
                  id="dhl"
                  calss="delivery-type "
                />
                <label for="dhl" class="dhl">
                  <div class="deliver-name">DHL貨運</div>
                  <div class="deliver-date">48小時內送達</div>
                </label>
                <div class="deliver-price">$500</div>
              </div>
            </div>
          </div>
        </div>
        <!-- btn -->
        <div
          id="btn-control"
          class="control-panel d-flex justify-content-around mt-3"
        >
          <!-- disabled -->
          <button @click.stop.prevent="previous" class="btn btn-outline">
            上一步
          </button>
          <button @click.stop.prevent="next" class="btn btn-next ml-4">
            下一步
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.delivery-way {
  border: 1px gray solid;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 15px;
}

.normal,
.dhl {
  margin: 0px 420px 0px 20px;
}

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
  name: "FromStep2",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        delivery: 0,
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
      this.$emit("next-step");
      this.$router.push({ name: "step3" });
    },
    previous() {
      this.$emit("previous-step");
      this.$router.push({ name: "step1" });
    },
  },
};
</script>