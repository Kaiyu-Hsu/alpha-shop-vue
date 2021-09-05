<template>
  <main id="main-content" class="d-flex flex-row justify-content-around">
    <div class="left-content">
      <h2 class="main-title">結帳</h2>
      <!--   left-side   -->
      <!-- stepper -->
      <StepperPanel />
      <!-- form -->
      <router-view 
        :initial-user="user"
        @next-step="nextStep"
        @last-step="lastStep"
      />
    </div>
    <!--   right-side    -->
    <RightContent />
  </main>
</template>

<style>
#main-content {
  /* border: 1px black solid; */
  width: 90%;
  height: 100%;
  margin: auto auto;
}

.left-content {
  border: 1px green solid;
  width: 100%;
  margin: 30px 80px 30px 30px;
}

h2 {
  margin: 10px 0px 20px 0px;
}
</style>

<script>
import StepperPanel from "../components/StepperPanel.vue";
import RightContent from "../components/RightContent.vue";

export default {
  name: "Main",
  components: {
    StepperPanel,
    RightContent,
  },
  data() {
    return {
      user: {
        gender: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        delivery: 0,
        cardHolder: "",
        cardNumber: "",
        cardDate: "",
        cardCVC: "",
        step: -1,
      },
    };
  },
  methods: {
      nextStep() {
        this.user.step += 1
      }
  }
};
</script>