<template>
    <div class="right-content">
      <!--    cart    -->
      <div class="cart-panel">
        <div class="cart-container">
          <h4 class="cart">購物籃</h4>
          <!--     shopping list       -->
          <div class="shopping-list">
            <div class="item">
              <div class="item-img">
                <img src="https://i.ibb.co/vXLmvf0/1.jpg">
              </div>
              <div class="count-panel">
                <div class="item-part">
                  <span class="item-name">破洞補釘牛仔褲</span>
                </div>
                <div class="count">
                  <bottom class="reduce-circle" id="reduce-circle">-</bottom>
                  <div class="item-num">1</div>
                  <bottom class="add-circle">+</bottom>
                </div>
                <div class="item-cost-1">
                  3999
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-img">
                <img src="https://i.ibb.co/qYnKGs7/2.jpg">
              </div>
              <div class="count-panel">
                <div class="item-part">
                  <span class="item-name">刷色直筒牛仔褲</span>
                </div>
                <div class="count">
                  <bottom class="reduce-circle">-</bottom>
                  <div class="item-num">1</div>
                  <bottom class="add-circle">+</bottom>
                </div>
                <div class="item-cost-2">
                  1999
                </div>
              </div>
            </div>
          </div>
          <!--      deliver fee + total      -->
          <div class="sum">
            <div class="fee">
              <span class="fee-name">運費</span>
              <span class="fee-cost">免費</span>
            </div>
            <div class="total">
              <span class="total-name">小計</span>
              <span class="total-cost">$5298</span>
            </div>
          </div>
        </div>
      </div>
      <!--    bottom    -->
      <div id="btn-control" class="control-panel d-flex justify-content-between">
        <button disabled class="btn btn-outline">上一步</button>
        <button class="btn btn-primary ml-4">下一步</button>
      </div>
    </div>
</template>

<style scoped>
.right-content {
    border: 1px red solid
}
</style>