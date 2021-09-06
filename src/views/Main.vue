<template>
  <main id="main-content" class="d-flex flex-row justify-content-around">
    <div class="left-content">
      <h2 class="main-title">結帳</h2>
      <!--   left-side   -->
      <!-- stepper -->
      <StepperPanel :step="user.step" />
      <!-- form -->
      <router-view
        :initial-user="user"
        @next-step="nextStep"
        @previous-step="previousStep"
      />
    </div>
    <!--   right-side    -->
    <RightContent />
  </main>
</template>

<style>
#main-content {
  width: 90%;
  height: 100%;
  margin: auto auto;
}

.left-content {
  /* border: 1px green solid; */
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
        step: "",
      },
    };
  },
  methods: {
      startStep() {
        if(this.$route.name === 'step1') {
            this.user.step = 1
        } else if (this.$route.name === 'step2') {
          this.user.step = 2  
        } else if (this.$route.name === 'step3') {
           this.user.step = 3 
        }
      },
      nextStep() {
        this.user.step += 1
      },
      previousStep() {
        this.user.step -= 1
      },

  },
  created() {
      this.startStep()
  },
  updated() {
      this.startStep()
  }
};
</script>