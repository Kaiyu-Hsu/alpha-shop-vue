<template>
  <div id="step-control" class="stepper-panel">
    <div class="stepper-container d-flex flex-row justify-content-between">
      <div class="step d-flex flex-row">
        <div v-if="step === 1" class="circle-container text-center mr-1">
          <span class="text-black">1</span>
        </div>
        <img
          v-if="step === 2 || step === 3"
            src="https://lh3.googleusercontent.com/fife/AAWUweXA3etkf2Wz3aEPxOX38jFhcxidY2Hw_u-ImU1VS9HdQmM3YDNJi0D4wukqXKsX8404hS7PM2FUXwAcNOtJuUSoIj2ss6X7hWEBmi9n5gxjuaB0mG_2LcIFjfVGqf3WBFn_akHDEA0Tkbr_6-db0idr_PQcJ6uQ3u9UDBilCupj_bFGQyoCSpUL8fmZP0uuquMKKXebdX-EmCnDRt1bkJACY-9z1HcOnrnjAu40-svfJMLUOHaaqIRnQM6W-ptvYiLR0kVuoFjhppA8NZpe4kOf0zBM5DgK0cTYCKiK2x8jQycNSSnthJIVAxhxEOu-3TjIE9W_QWV9xqqaCq4VjnWA87yB2TT-K95U6jCkK9AN_GMxEkOCtnJSC5mQNShwlejNjWAF6-E2JOc6ii6sxZRNbOu0LiLXDQ849aEDNlHgatkgpMSCXOdPdr7B9mMkWlPZbE1UNMAYZlqYWJdUV-U2qHgETllFeoF6YcWoFemH0g0jhgN4sngtc4Q-0mI1jNG7J5w6mtwddfRCYfys5oq4Wt5anFrfZrmR3qQ7N1jCxQo8th1_JrCUKs6FirQb8otASn_ufJK2iT98p6TBCbiG8hxtMzNMKVrDNUL1_PSKRdugV8Wut8JtXQvuNzDm0_DDyonfNw__A9vS9T0U0ukVDDI6oRojZBtgDW6uTO9ViHx9ERyDMTj4RBY8biVjZ0DkCQWDdl2-TQ1mv_5LYzGjDfswxQ4WjDBmtLcI4Yh9D19sLXYNJJPVuZUC3JQBJK6a7I6Z1HLlzrRezYNTXyDE5U44O31HHi5utCj60mUlsKtVfVL1QSocNawNB5rPT4FOQc715J2aY-JIVR4Yg15Sc0-vsTvowPsaJSjBSaDrkUuxmi8uJhtz4v1ACosPcOnc_NHHlRQkOv_Iv6SQ0v8a8YzXWXaDfQFEq7p-FuwUarR9paIqAOqapY8DrdZV9c0Y2CIsRbGEz_MbDctU5phpK5mnG4NxH_VEzhYlohAN4glOSgMqiaWZIPj4lPWp1hsdTOZiVuR_FOYKqWlBvjIsAOQibqJ4rBnyDBXMr6J3G0Z1UtT0BwypaJiZtRiniqaNET8oX5ZmQT48FhezYppU8Mj-8UUMRFTdFz3hQ875NGD4Ubmv6xr8JzEq-ZvuG_uoj5QvU3qVE6tBRwhKnh9iT8ymHq8L3f0K-oLViLf8LBqMX5mcdHh1Q7ZiVuqKWIcfgWeQi6y-GlJKk8fBr65NbMhCTuaOTTG58046czCYWORR4fuEOwAwGiv9gSL1Bnjj9Yb6eZDPMXXBG4Adqkuq5SY3mzKYyhpVRT3F6xtv_lGY2oAU2_MIdCGf2RssAxwRzQRUOgX7jQRTWUUd40Q1rtgmwTLx6fy51idfuGGVEf9qd944jybF6KVBAYmYobAa7r_rL8S899vkgekJeKyjd2nDuQqtk4Vged5VDhOQZFXo_iq53TFh7jJgG0KoUj-BOYd5jNSO_zGy0mtSn1hxGB2QNS8H91gqdbGPaVDlOvIqRi31iz4nBatIQHi4TTGuPlHgdqHmIFOhCVfwpqOZyysVMRpjWuxVNDqQeCHOdtzpSO1L2OT1Lc-vfllftDPLtvLI4vWKduQzp6-NXm3oQeVdMKPkJHf85VBJtB1-nIsbQukSOumj9ZOgpRQ0DwUTiVR9mXL8Va9zvJw8OQg3oC1HNDoKYFJVOQBb5K-B5NeScrlRnODA_SuevsbniReFg5-_GvwNoz8_sa8QIc8wuPFp6eRaJZTUFWM1NtUUjaOGyftzT84tpPZt6lU00h1j6RMxkXXNZkNefpr0HOSwstgSuMK57AWJpafCGd18vFsTpvjR5LtOQcAW_aTPumH3eWX3zkHN3c-GT1zAIWWh4CL6MV12ZHKZE1PbwjqjW5KA6SdKQtwZYfuAtMBB19hUFBxC-Q8G9_azgcb6MFh_Q70Awlo0ha9C5TjmLWADBGmncCllhJP8RfjzXZ_CsqVXO5ok4EtDyEuqquuhS4cXsj4b9Uoewbn63lmNcfAeMTn4JdsaivM_Rys8sviUFrohjx-LWEQA8MLOAnOSOScr2VkVOnawlBzplYS8ZLDgJa6N1hacweRYL8ccgQa5Rz0ZSBDIRa5Gi0DOHdleIMgAswavpFlrKEMzXN-YBQ5KAewd1BgXGScY7foMqwEXgLDD3xEdPRZLbiKyJHtI3CMA2nOtB87y1Um9e8GOZSkEQxuXKOKY9sduw6NUHf-YgVZ0cxTZzZT0WO39VZiFqaMscr1BItLmqh6Qu6PKpNij7shIg0bgosCxh5i7dILmwD3zyTPocCcHXLPHs35aekKRBMiiAY-Unf-l0qn7V5hEsS9bSXmModt3RwZp3ADQpvHHgZbKa_gaXz9hUZUWOAEgZVK3Jc4QUr4SbPracwyHjZocpc2Wgz9LzhdBwWL0ve5-Om1pK45Ejxrm_MMWt40iukStTjxagcALrMtaGhJ_xq0UEnDSAleCRI4Bc6-7FnImEHh2I9LWCk00Jv9C9XTYjyb9CAOKftLuaVX7jlsQDtg-FJqOdOTue6lF7fYk-J2yvdAy-THGVt8OAh0pSohEaHuXDHQwWOItmOQulDxHRj6-Xyts0sV3RGky_qlgz8MYEumJ_HHEf-DWBN4ColY7EMFeS7GirtkqgmhifJ9HAd-idWBi_bf7D2lfwb2QeyBoCkNZDAe6949jsDLJtfMBdmwvYYcGUzetQ5fUdsFkEiw54rkBnzgWtYIWW33lAmm0trpe3Z1q_4p45JPB7CtF_dlvZxEJZPMVNtR0g0ytdMpn3SgzARqWR0-5W6UOd92hyTIxObBcuae3GU8hZ3fVydz4lfw2sKbpYPhWzYuSFpM06_Y8tkQbi__2ORf1sHzG30hX55OrV8uOuin2GmBDNmH2jCV9Plz6wR8ma7hjtyBBWiahk4hOOuQk9pA9R_i_D3stbJ5gX-CLvSC8leRIzc2EGtjBtidpzE-nBPZfJ3T4Ys7G93wKqLOEFXffwXm3OKD9pCtMMqUqsoRIOqbnGFz5xWa56cD3uKkVZejFaMUEWUt0cHIG9e67rp9fs3zxH2OFhE_MKn_CPPuOK2qz6zN_JpyevYiat0VX7rLib6LkSSavYnYGq69TooA9mIa0flQ6rADiM8hLQkq9dCsNbN7e7whxTePng8NV5IX2tADFJD4X4BBQYjfJoiILkuQEGg6DpSxh9FXLbAzS3HAFpNTAfiPBespycyT-XLQlTV0AgU8k1sYx0GFe-mpzum9IpI_ctp8paogKlSUfNHKYEgC-Yxv7pclJLcnusbBPEWBqr1yGskrQk5L02Q5P-aMud8WbdVCCtmghPWfVtERR5XX5df6rzoxTglOiHGqkik8ngMMA1AmB5jQcQ1qzSfmjIKSY-7zeS-Lwh-ZsXRFfD48wrzgqli2cQbb1Xd94irfVFTKKEaJ8O_yxrmxDOtZpQat6XMTcr7ly7dMoW6KW0zuIK2_7YFotKOrQ5wo1EDVo4HsNZ4sQrdMAM6RzyFbGolXzBJUm6ccdZeUV-UjDRApb8cKhbPC6f5zybBjbOmjcMifqnkPBCwrj-fQy5spN15_ZB33ISCZ5QfkBWZV6ZU4S_lqO79MzEokYOOKLFcKobXrAV9K7Z-KhlHY7nEOC1R7U57tlEqYCcvI2V3o6NoPzvK6hy97HKe1CmMe16ieeycCtEIBizFINn2A5EasgOEcHaWiHyQ=s24-no?authuser=0"
          />
        <div class="label-container">寄送地址</div>
      </div>
      <div class="step d-flex flex-row">
        <div v-if="step === 1 || step === 2" class="circle-container text-center mr-1">
          <span class="text-black">2</span>
        </div>
        <img v-if="step === 3"
            src="https://lh3.googleusercontent.com/fife/AAWUweXA3etkf2Wz3aEPxOX38jFhcxidY2Hw_u-ImU1VS9HdQmM3YDNJi0D4wukqXKsX8404hS7PM2FUXwAcNOtJuUSoIj2ss6X7hWEBmi9n5gxjuaB0mG_2LcIFjfVGqf3WBFn_akHDEA0Tkbr_6-db0idr_PQcJ6uQ3u9UDBilCupj_bFGQyoCSpUL8fmZP0uuquMKKXebdX-EmCnDRt1bkJACY-9z1HcOnrnjAu40-svfJMLUOHaaqIRnQM6W-ptvYiLR0kVuoFjhppA8NZpe4kOf0zBM5DgK0cTYCKiK2x8jQycNSSnthJIVAxhxEOu-3TjIE9W_QWV9xqqaCq4VjnWA87yB2TT-K95U6jCkK9AN_GMxEkOCtnJSC5mQNShwlejNjWAF6-E2JOc6ii6sxZRNbOu0LiLXDQ849aEDNlHgatkgpMSCXOdPdr7B9mMkWlPZbE1UNMAYZlqYWJdUV-U2qHgETllFeoF6YcWoFemH0g0jhgN4sngtc4Q-0mI1jNG7J5w6mtwddfRCYfys5oq4Wt5anFrfZrmR3qQ7N1jCxQo8th1_JrCUKs6FirQb8otASn_ufJK2iT98p6TBCbiG8hxtMzNMKVrDNUL1_PSKRdugV8Wut8JtXQvuNzDm0_DDyonfNw__A9vS9T0U0ukVDDI6oRojZBtgDW6uTO9ViHx9ERyDMTj4RBY8biVjZ0DkCQWDdl2-TQ1mv_5LYzGjDfswxQ4WjDBmtLcI4Yh9D19sLXYNJJPVuZUC3JQBJK6a7I6Z1HLlzrRezYNTXyDE5U44O31HHi5utCj60mUlsKtVfVL1QSocNawNB5rPT4FOQc715J2aY-JIVR4Yg15Sc0-vsTvowPsaJSjBSaDrkUuxmi8uJhtz4v1ACosPcOnc_NHHlRQkOv_Iv6SQ0v8a8YzXWXaDfQFEq7p-FuwUarR9paIqAOqapY8DrdZV9c0Y2CIsRbGEz_MbDctU5phpK5mnG4NxH_VEzhYlohAN4glOSgMqiaWZIPj4lPWp1hsdTOZiVuR_FOYKqWlBvjIsAOQibqJ4rBnyDBXMr6J3G0Z1UtT0BwypaJiZtRiniqaNET8oX5ZmQT48FhezYppU8Mj-8UUMRFTdFz3hQ875NGD4Ubmv6xr8JzEq-ZvuG_uoj5QvU3qVE6tBRwhKnh9iT8ymHq8L3f0K-oLViLf8LBqMX5mcdHh1Q7ZiVuqKWIcfgWeQi6y-GlJKk8fBr65NbMhCTuaOTTG58046czCYWORR4fuEOwAwGiv9gSL1Bnjj9Yb6eZDPMXXBG4Adqkuq5SY3mzKYyhpVRT3F6xtv_lGY2oAU2_MIdCGf2RssAxwRzQRUOgX7jQRTWUUd40Q1rtgmwTLx6fy51idfuGGVEf9qd944jybF6KVBAYmYobAa7r_rL8S899vkgekJeKyjd2nDuQqtk4Vged5VDhOQZFXo_iq53TFh7jJgG0KoUj-BOYd5jNSO_zGy0mtSn1hxGB2QNS8H91gqdbGPaVDlOvIqRi31iz4nBatIQHi4TTGuPlHgdqHmIFOhCVfwpqOZyysVMRpjWuxVNDqQeCHOdtzpSO1L2OT1Lc-vfllftDPLtvLI4vWKduQzp6-NXm3oQeVdMKPkJHf85VBJtB1-nIsbQukSOumj9ZOgpRQ0DwUTiVR9mXL8Va9zvJw8OQg3oC1HNDoKYFJVOQBb5K-B5NeScrlRnODA_SuevsbniReFg5-_GvwNoz8_sa8QIc8wuPFp6eRaJZTUFWM1NtUUjaOGyftzT84tpPZt6lU00h1j6RMxkXXNZkNefpr0HOSwstgSuMK57AWJpafCGd18vFsTpvjR5LtOQcAW_aTPumH3eWX3zkHN3c-GT1zAIWWh4CL6MV12ZHKZE1PbwjqjW5KA6SdKQtwZYfuAtMBB19hUFBxC-Q8G9_azgcb6MFh_Q70Awlo0ha9C5TjmLWADBGmncCllhJP8RfjzXZ_CsqVXO5ok4EtDyEuqquuhS4cXsj4b9Uoewbn63lmNcfAeMTn4JdsaivM_Rys8sviUFrohjx-LWEQA8MLOAnOSOScr2VkVOnawlBzplYS8ZLDgJa6N1hacweRYL8ccgQa5Rz0ZSBDIRa5Gi0DOHdleIMgAswavpFlrKEMzXN-YBQ5KAewd1BgXGScY7foMqwEXgLDD3xEdPRZLbiKyJHtI3CMA2nOtB87y1Um9e8GOZSkEQxuXKOKY9sduw6NUHf-YgVZ0cxTZzZT0WO39VZiFqaMscr1BItLmqh6Qu6PKpNij7shIg0bgosCxh5i7dILmwD3zyTPocCcHXLPHs35aekKRBMiiAY-Unf-l0qn7V5hEsS9bSXmModt3RwZp3ADQpvHHgZbKa_gaXz9hUZUWOAEgZVK3Jc4QUr4SbPracwyHjZocpc2Wgz9LzhdBwWL0ve5-Om1pK45Ejxrm_MMWt40iukStTjxagcALrMtaGhJ_xq0UEnDSAleCRI4Bc6-7FnImEHh2I9LWCk00Jv9C9XTYjyb9CAOKftLuaVX7jlsQDtg-FJqOdOTue6lF7fYk-J2yvdAy-THGVt8OAh0pSohEaHuXDHQwWOItmOQulDxHRj6-Xyts0sV3RGky_qlgz8MYEumJ_HHEf-DWBN4ColY7EMFeS7GirtkqgmhifJ9HAd-idWBi_bf7D2lfwb2QeyBoCkNZDAe6949jsDLJtfMBdmwvYYcGUzetQ5fUdsFkEiw54rkBnzgWtYIWW33lAmm0trpe3Z1q_4p45JPB7CtF_dlvZxEJZPMVNtR0g0ytdMpn3SgzARqWR0-5W6UOd92hyTIxObBcuae3GU8hZ3fVydz4lfw2sKbpYPhWzYuSFpM06_Y8tkQbi__2ORf1sHzG30hX55OrV8uOuin2GmBDNmH2jCV9Plz6wR8ma7hjtyBBWiahk4hOOuQk9pA9R_i_D3stbJ5gX-CLvSC8leRIzc2EGtjBtidpzE-nBPZfJ3T4Ys7G93wKqLOEFXffwXm3OKD9pCtMMqUqsoRIOqbnGFz5xWa56cD3uKkVZejFaMUEWUt0cHIG9e67rp9fs3zxH2OFhE_MKn_CPPuOK2qz6zN_JpyevYiat0VX7rLib6LkSSavYnYGq69TooA9mIa0flQ6rADiM8hLQkq9dCsNbN7e7whxTePng8NV5IX2tADFJD4X4BBQYjfJoiILkuQEGg6DpSxh9FXLbAzS3HAFpNTAfiPBespycyT-XLQlTV0AgU8k1sYx0GFe-mpzum9IpI_ctp8paogKlSUfNHKYEgC-Yxv7pclJLcnusbBPEWBqr1yGskrQk5L02Q5P-aMud8WbdVCCtmghPWfVtERR5XX5df6rzoxTglOiHGqkik8ngMMA1AmB5jQcQ1qzSfmjIKSY-7zeS-Lwh-ZsXRFfD48wrzgqli2cQbb1Xd94irfVFTKKEaJ8O_yxrmxDOtZpQat6XMTcr7ly7dMoW6KW0zuIK2_7YFotKOrQ5wo1EDVo4HsNZ4sQrdMAM6RzyFbGolXzBJUm6ccdZeUV-UjDRApb8cKhbPC6f5zybBjbOmjcMifqnkPBCwrj-fQy5spN15_ZB33ISCZ5QfkBWZV6ZU4S_lqO79MzEokYOOKLFcKobXrAV9K7Z-KhlHY7nEOC1R7U57tlEqYCcvI2V3o6NoPzvK6hy97HKe1CmMe16ieeycCtEIBizFINn2A5EasgOEcHaWiHyQ=s24-no?authuser=0"
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