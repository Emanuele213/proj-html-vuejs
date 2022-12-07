<template>
  <div class="bg-white">
    <div class="container-flex">
      <div>
        <img
          src="@/assets/img/signora rossa.jpg"
          alt="signora rossa"
        >
      </div>
      <div class="text-width">
        <!-- eslint-disable-next-line -->
          <h1>“The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”</h1>
        <h2>Kata Schadler</h2>
        <p>Marketing Consultant - Abstract</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .bg-white {
    background-color: white;
  .container-flex{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      border-radius: .5rem;
      margin-bottom: 4rem;
    }
    .text-width {
      font-size: .9rem;
      width: 40%;
       h2 {
        margin-top: 3rem;
       }
    }
  }
}
</style>
