<template>
  <div class="right-content">
    <!--    cart    -->
    <div class="cart-panel d-flex flex-row justify-content-center">
      <div class="cart-container">
        <h4 class="cart">購物籃</h4>
        <!--     shopping list       -->
        <div class="shopping-list mb-5">
          <div
            v-for="item in items"
            :key="item.id"
            class="item d-flex flex-row justify-content-around mt-5"
          >
            <div class="item-img">
              <img :src="item.img" />
            </div>
            <div class="count-panel">
              <div class="item-part">
                <span class="item-name">{{ item.name }}</span>
              </div>
              <div class="count d-flex align-items-center">
                <img
                  @click.stop.prevent="reduce(item)"
                  class="reduce-circle mr-2"
                  src="../assets/reduce.png"
                  alt=""
                />
                <div class="item-num">{{ item.amount }}</div>
                <img
                  @click.stop.prevent="add(item)"
                  class="add-circle ml-2"
                  src="../assets/add.png"
                  alt=""
                />
              </div>
              <div class="item-cost-1">${{ item.cost * item.amount }}</div>
            </div>
          </div>
        </div>
        <!--      deliver fee + total      -->
        <div class="sum">
          <div class="fee d-flex flex-row justify-content-between p-3">
            <span class="fee-name">運費</span>
            <span class="fee-cost">
              {{ delivery === "0" ? "免運" : "$" + delivery }}
            </span>
          </div>
          <div class="total d-flex flex-row justify-content-between p-3">
            <span class="total-name">小計</span>
            <span class="total-cost">${{ totalCost }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-content {
  width: 70%;
  margin: 100px 30px 30px 30px;
}

/* cart */
.cart-container {
  width: 100%;
  border: 1px gray solid;
  border-radius: 5px;
  padding: 20px 25px;
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
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.fee,
.total {
  border-top: 2px #a7aaaf solid;
}
</style>

<script>
export default {
  props: {
    initialItems: {
      type: Array,
      required: true,
    },
    delivery: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      items: this.initialItems,
      totalCost: 0,
    };
  },
  methods: {
    reduce(item) {
      if (item.amount === 0) {
        return item.amount = 0;
      } else {
        item.amount -= 1;
      }
    },
    add(item) {
      item.amount += 1;
    },
    totalCostChange() {
      this.totalCost = 0
      this.items.map((item) => {
        const itemCost = item.cost * item.amount;
        this.totalCost += itemCost;
      });
      this.totalCost += Number(this.delivery);
    },
  },
  created() {
    this.totalCostChange();
  },
  watch: { //監聽某個值，當有更動時觸發相對應的處理
    items: {
      handler: function() {
        this.totalCostChange()
      },
      deep: true, //監聽值為call by reference的特性，需要深度觀察，才能觸動到watch
    },
    delivery: {
      handler: function() {
        this.totalCostChange()
      },
    },
  },
};
</script>