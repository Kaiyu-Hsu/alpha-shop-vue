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
    <RightContent 
    :initial-items="items"
    :delivery="user.delivery"
    />
  </main>
</template>

<style>
#main-content {
  width: 90%;
  height: 100%;
  margin: auto auto;
}

.left-content {
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
        delivery: "0",
        cardHolder: "",
        cardNumber: "",
        cardDate: "",
        cardCVC: "",
        step: "",
      },
      items: [
        {
          id: 1,
          name: "破洞補釘牛仔褲",
          amount: 1,
          cost: 3999,
          img: "https://i.ibb.co/vXLmvf0/1.jpg",
        },
        {
          id: 2,
          name: "刷色直筒牛仔褲",
          amount: 1,
          cost: 1999,
          img: "https://i.ibb.co/qYnKGs7/2.jpg",
        },
      ],
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
  updated() { //已有data需要重新渲染畫面
      this.startStep()
  }
};
</script>