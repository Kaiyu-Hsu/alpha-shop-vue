<template>
  <div id="step-control" class="stepper-panel">
    <div class="stepper-container d-flex flex-row justify-content-between">
      <div class="step d-flex flex-row">
        <div v-if="step === 1" class="circle-container text-center mr-1">
          <span class="text-black">1</span>
        </div>
        <img
          v-if="step === 2 || step === 3"
            src="../assets/check.jpg"
          />
        <div class="label-container">寄送地址</div>
      </div>
      <div class="step d-flex flex-row">
        <div v-if="step === 1 || step === 2" class="circle-container text-center mr-1">
          <span class="text-black">2</span>
        </div>
        <img v-if="step === 3"
            src="../assets/check.jpg"
          />
        <span 
        :class="step === 2 || step === 3 ? 'active': ''"
        class="connect-line"></span>
        <div class="label-container">運送方式</div>
      </div>
      <div class="step d-flex flex-row">
        <div class="circle-container text-center mr-1">
          <span class="text-black">3</span>
        </div>
        <span 
        :class="step === 3 ? 'active': ''"
        class="connect-line"></span>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stepper-panel {
  margin: 50px 0 50px 0;
}
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
  background-color: rgb(134, 131, 131);
  position: absolute;
  top: 12px;
  right: calc(90% + 20px);
  left: -140%;
}
.active {
  background-color: black;
}
</style>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true
    }
  }
}
</script>