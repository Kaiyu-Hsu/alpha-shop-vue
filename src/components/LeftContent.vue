<template>
  <div class="left-content">
    <h2 class="main-title m-2">結帳</h2>
    <!--   stepper     -->
    <div id="step-control" class="stepper-panel m-2">
      <div class="stepper-container d-flex flex-row justify-content-around">
        <div class="step d-flex flex-row active">
          <div class="circle-container text-center mr-1">
              <span class="text-black">1</span>
          </div>
          <div class="label-container">寄送地址</div>
        </div>
        <div class="step d-flex flex-row">
          <div class="circle-container text-center mr-1">
              <span class="text-black">2</span>
          </div>
          <span class="connect-line active"></span>
          <div class="label-container">運送方式</div>
        </div>
        <div class="step d-flex flex-row">
          <div class="circle-container text-center mr-1">
              <span class="text-black">3</span>
          </div>
          <span class="connect-line"></span>
          <div class="label-container">付款資訊</div>
        </div>
      </div>
    </div>
    <!--     form     -->
    <div id="form" class="form">
      <div class="form-container">
        <form action="" id="form-panel" class="form-panel">
          <!--      寄送地址      -->
          <div class="part">
            <h2 class="form-title">寄送地址</h2>
            <div class="gender-name">
              <div class="form-row gender">
                <label>稱謂</label>
                <div class="select-wrapper">
                  <select name="title" id="title" required>
                    <option value="" disabled selected>請選擇稱謂</option>
                    <option value="man">先生</option>
                    <option value="female">小姐</option>
                  </select>
                </div>
              </div>
              <div class="form-row name">
                <label>姓名</label>
                <input id="name" type="text" placeholder="請輸入姓名" />
              </div>
            </div>
            <div class="phone-email">
              <div class="form-row phone">
                <label for="">電話</label>
                <input id="phone" type="text" placeholder="請輸入電話" />
              </div>
              <div class="form-row email">
                <label for="">Email</label>
                <input id="email" type="text" placeholder="請輸入電子郵件" />
              </div>
            </div>
            <div class="city-address">
              <div class="form-row city">
                <label>縣市</label>
                <div class="select-wrapper">
                  <select name="city" id="city" required>
                    <option value="" disabled selected>請選擇縣市</option>
                    <option value="taipei">台北</option>
                    <option value="taichung">台中</option>
                    <option value="tainan">台南</option>
                  </select>
                </div>
              </div>
              <div class="form-row address">
                <label for="">地址</label>
                <input id="address" type="text" placeholder="請輸入地址" />
              </div>
            </div>
          </div>
          <!--     運送方式     -->
          <div class="part d-none">
            <h2 class="form-title">運送方式</h2>
            <div class="delivery-panel">
              <div class="form-row delivery-way">
                <div class="delivery-container d-flex align-items-center">
                  <input
                    name="deliver-type"
                    type="radio"
                    value="normal"
                    id="normal"
                    calss="delivery-type"
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
                    name="deliver-type"
                    type="radio"
                    value="dhl"
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
          <!--     付款資訊     -->
          <div class="part d-none">
            <h2 class="form-title">付款資訊</h2>
            <div class="form-row">
              <label for="">持卡人姓名</label>
              <input id="card-holder" type="text" placeholder="Peter Chen" />
            </div>
            <div class="form-row">
              <label for="">卡號</label>
              <input
                id="card-number"
                type="text"
                class="w-19"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div class="date-cvc">
              <div class="form-row date">
                <label for="">有效期限</label>
                <input id="card-date" type="text" placeholder="MM/YY" />
              </div>
              <div class="form-row cvc">
                <label for="">CVC/CCV</label>
                <input id="card-cvc" type="text" placeholder="000" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-content {
    border: 1px green solid;
    width: 100%;
}

/* step */
.step {
    position: relative;
}
.circle-container {
      height: 24px;
      width: 24px;
      background-color: white;
      border-radius: 50%;
      border: 1px solid black;
      color: black;
      margin: 0 auto;
    }

.connect-line {
    display: block;
    height: 2px;
    background-color: rgb(12, 12, 12);
    position: absolute;
    top: 12px;
    right: calc(100% + 20px); 
    left: calc(-100% + 20px);
    /* &.active {
      background-color: black;
    } */
  }
</style>

<script>
export default {};
</script>