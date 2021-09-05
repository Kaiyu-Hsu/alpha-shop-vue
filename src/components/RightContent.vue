<template>
  <div class="right-content">
    <!--    cart    -->
    <div class="cart-panel d-flex flex-row justify-content-center">
      <div class="cart-container">
        <!-- <h4 class="cart">購物籃</h4> -->
        <!--     shopping list       -->
        <div class="shopping-list mb-5">
          <div class="item d-flex flex-row justify-content-around">
            <div class="item-img">
              <img src="https://i.ibb.co/vXLmvf0/1.jpg" />
            </div>
            <div class="count-panel">
              <div class="item-part">
                <span class="item-name">破洞補釘牛仔褲</span>
              </div>
              <div class="count d-flex align-items-center">
                <bottom class="reduce-circle" id="reduce-circle">-</bottom>
                <div class="item-num">1</div>
                <bottom class="add-circle">+</bottom>
              </div>
              <div class="item-cost-1">3999</div>
            </div>
          </div>
          <div class="item d-flex flex-row justify-content-around mt-5">
            <div class="item-img">
              <img src="https://i.ibb.co/qYnKGs7/2.jpg" />
            </div>
            <div class="count-panel">
              <div class="item-part">
                <span class="item-name">刷色直筒牛仔褲</span>
              </div>
              <div class="count d-flex align-items-center">
                <bottom class="reduce-circle">-</bottom>
                <div class="item-num">1</div>
                <bottom class="add-circle">+</bottom>
              </div>
              <div class="item-cost-2">1999</div>
            </div>
          </div>
        </div>
        <!--      deliver fee + total      -->
        <div class="sum">
          <div class="fee d-flex flex-row justify-content-between p-3">
            <span class="fee-name">運費</span>
            <span class="fee-cost">免費</span>
          </div>
          <div class="total d-flex flex-row justify-content-between p-3">
            <span class="total-name">小計</span>
            <span class="total-cost">$5298</span>
          </div>
        </div>
      </div>
    </div>
    <!--    bottom    -->
    <div
      id="btn-control"
      class="control-panel d-flex justify-content-around mt-3"
    >
    <!-- disabled -->
      <button disabled class="btn btn-outline">上一步</button>
      <button 
      @click.stop.prevent="next"
      class="btn btn-next ml-4">
      下一步
      </button>
    </div>
  </div>
</template>

<style scoped>
.right-content {
  /* border: 1px red solid; */
  width: 70%;
  margin: 130px 30px 30px 30px;
}

/* cart */
.cart-container {
  width: 100%;
  border: 1px gray solid;
  border-radius: 5px;
  padding: 40px 25px;
}

img {
  border-radius: 5px;
  width: 100px;
  height: 100px;
}

.count-panel {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
}

.add-circle,
.reduce-circle {
  font-size: 20px;
  height: 20px;
  width: 20px;
  background-color: gray;
  border-radius: 50%;
  margin: 10px;
  text-align: center;
  cursor: pointer;
}

.fee, .total {
  border-top: 2px #a7aaaf solid;
}

/* btn */
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
  methods: {
    next(e) {
    console.log(e.target)
    this.$emit("next-step")
    },

  }
}
</script>