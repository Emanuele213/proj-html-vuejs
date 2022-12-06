<template>
  <main class="main-container">
    <!-- Prima immagine -->
    <div class="container-1">
      <div>
        <img
          src="@/assets/img/main1.png"
          alt="Brand"
          class="mod-img"
        >
      </div>
      <div class="container-column">
        <div class="flex-img">
          <img
            src="@/assets/img/business-growth.png"
            alt="businesss"
          >
          <h3>Business Growth</h3>
        </div>
        <div class="container-text">
          <h1> Increase Brand Awareness </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed auctor placerat
            luctus. Nullam sit amet ante sed orci
            convallis gravida et at massa.
          </p>
          <button class="mod-btn">
            Get a Consultation
          </button>
        </div>
      </div>
    </div>
    <!-- Seconda Immagine -->
    <div class="container-2">
      <div>
        <img
          src="@/assets/img/Tranin.png"
          alt="Brand"
          class="mod-img"
        >
      </div>
      <div class="container-column">
        <div class="flex-img">
          <img
            src="@/assets/img/Investor (1).png"
            alt="businesss"
          >
          <h3>Investors in People</h3>
        </div>
        <div class="container-text">
          <h1>In-House Sales Traning</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed auctor placerat
            luctus. Nullam sit amet ante sed orci
            convallis gravida et at massa.
          </p>
          <button class="mod-btn">
            Get a Consultation
          </button>
        </div>
      </div>
    </div>
    <!-- Terza Immagine -->
    <div class="container-1">
      <div>
        <img
          src="@/assets/img/socila-proof.png"
          alt="Brand"
          class="mod-img"
        >
      </div>
      <div class="container-column">
        <div class="flex-img">
          <img
            src="@/assets/img/analysis.png"
            alt="businesss"
          >
          <h3>Investors in People</h3>
        </div>
        <div class="container-text">
          <h1>In-House Sales Traning</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed auctor placerat
            luctus. Nullam sit amet ante sed orci
            convallis gravida et at massa.
          </p>
          <button class="mod-btn">
            Get a Consultation
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  margin-top: 10rem;
  .container-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mod-img {
      width: 580px;
    }
  }
  .container-column {
    width: 500px;
    .flex-img {
    display: flex;
    align-items: center;
  }
  .container-text {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    .mod-btn {
    font-size: 1.2rem;
    border: 0;
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: #F96C23;
    background-color: #FFE7DA;
    cursor: pointer;
    &:hover{
      color: white;
      background-color: var(--orange);
    }
  }
  }
  }
  .container-2{
    margin: 8rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    .mod-img {
      width: 580px;
    }
  }
}
</style>
