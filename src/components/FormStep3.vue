<template>
  <div id="form" class="form">
    <div class="form-container">
      <form action="" id="form-panel" class="form-panel">
        <!-- card -->
        <div class="part">
          <h2 class="form-title">付款資訊</h2>
          <div class="form-group">
            <label for="">持卡人姓名</label>
            <input
              v-model="cardHolder"
              id="card-holder"
              type="text"
              placeholder="Peter Chen"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">卡號</label>
            <input
              v-model="cardNumber"
              id="card-number"
              type="text"
              class="w-19 form-control"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div class="date-cvc form-row">
            <div class="col-2 mr-5 date">
              <label for="">有效期限</label>
              <input
                v-model="cardDate"
                id="card-date"
                type="text"
                placeholder="MM/YY"
                class="form-control"
              />
            </div>
            <div class="col-2 cvc">
              <label for="">CVC/CCV</label>
              <input
                v-model="cardCVC"
                id="card-cvc"
                type="text"
                placeholder="000"
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
          <button @click.stop.prevent="last" class="btn btn-outline">上一步</button>
          <button @click.stop.prevent="next" class="btn btn-next ml-4">
            完成訂單
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
  name: "FromStep3",
    props: {
    initialUser: {
      type: Object,
      default: () => ({
        cardHolder: "",
        cardNumber: "",
        cardDate: "",
        cardCVC: "",
        step: 3,
      }),
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    last() {
      this.$emit("last-step");
      this.$router.push({ name:'step2'})  
    }
},
}
</script>