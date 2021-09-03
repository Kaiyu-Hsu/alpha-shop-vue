<template>
    <div class="left-content">
      <h2 class="main-title mt-5">結帳</h2>
      <!--   stepper     -->
      <div id="step-control" class="stepper-panel">
        <div class="stepper-container">
          <div class="step active">
            <div class="circle-container"></div>
            <div class="label-container">寄送地址</div>
          </div>
          <div class="step">
            <div class="circle-container"></div>
            <span class="connect-line active"></span>
            <div class="label-container">運送方式</div>
          </div>
          <div class="step">
            <div class="circle-container"></div>
            <span class="connect-line"></span>
            <div class="label-container">付款資訊</div>
          </div>
        </div>
      </div>
      <!--     form     -->
      <div id="form" class="form ">
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
                  <input id="name" type="text" placeholder="請輸入姓名">
                </div>
              </div>
              <div class="phone-email">
                <div class="form-row phone">
                  <label for="">電話</label>
                  <input id="phone" type="text" placeholder="請輸入電話">
                </div>
                <div class="form-row email">
                  <label for="">Email</label>
                  <input id="email" type="text" placeholder="請輸入電子郵件">
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
                  <input id="address" type="text" placeholder="請輸入地址">
                </div>
              </div>
            </div>
            <!--     運送方式     -->
            <div class="part d-none">
              <h2 class="form-title">運送方式</h2>
              <div class="delivery-panel">
                <div class="form-row delivery-way">
                  <div class="delivery-container d-flex align-items-center">
                    <input name="deliver-type" type="radio" value="normal" id="normal" calss="delivery-type" checked>
                    <label for="normal" class="normal">
                      <div class="deliver-name">標準運送</div>
                      <div class="deliver-date">約3-7個工作天</div>
                    </label>
                    <div class="deliver-price">免費</div>
                  </div>
                </div>
                <div class="form-row delivery-way">
                  <div class="delivery-container d-flex align-items-center">
                    <input name="deliver-type" type="radio" value="dhl" id="dhl" calss="delivery-type ">
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
                <input id="card-holder" type="text" placeholder="Peter Chen">
              </div>
              <div class="form-row">
                <label for="">卡號</label>
                <input id="card-number" type="text" class="w-19" placeholder="0000 0000 0000 0000">
              </div>
              <div class="date-cvc">
                <div class="form-row date">
                  <label for="">有效期限</label>
                  <input id="card-date" type="text" placeholder="MM/YY">
                </div>
                <div class="form-row cvc">
                  <label for="">CVC/CCV</label>
                  <input id="card-cvc" type="text" placeholder="000">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>