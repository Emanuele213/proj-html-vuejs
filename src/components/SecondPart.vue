<template>
  <div class="bg-light-gray">
    <div class="container">
      <div class="left-part">
        <h1>We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential.</h1>
        <!-- eslint-disable-next-line -->
          <p>Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.</p>
        <button class="mod-btn">
          Why Work With Us
        </button>
      </div>
      <div>
        <img
          src="@/assets/img/team-work.jpg"
          alt="gruppo di lavoro"
          class="mod-img-team"
        >
      </div>
    </div>
    <div class="second-container">
      <div class="container-half">
        <h2>We Build Relationships</h2>
        <!-- eslint-disable-next-line -->
          <p>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
        <h2>Proprietary Processes</h2>
        <!-- eslint-disable-next-line -->
          <p>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
      </div>
      <div class="container-half-2">
        <div class="use-flex">
          <img
            src="@/assets/img/cerca.png"
            alt="cerca"
          >
          <div>
            <h1>Accountability</h1>
            <p>Curabitur ac leo nurc vestibulum</p>
          </div>
        </div>
        <div class="use-flex">
          <div>
            <img
              src="@/assets/img/piu.png"
              alt="piu'"
            >
          </div>
          <div>
            <h1>Transparency</h1>
            <p>Curabitur ac leo nurc vestibulum</p>
          </div>
        </div>
        <div class="use-flex">
          <img
            src="@/assets/img/conessione.png"
            alt="conessione"
          >
          <div>
            <h1>Investment</h1>
            <p>Curabitur ac leo nurc vestibulum</p>
          </div>
        </div>
      </div>
    </div>
    <div class="awards-container">
      <h2>Awards</h2>
      <div class="container-awards-in">
        <div>
          <img
            src="@/assets/img/award-a-200x191.png"
            alt="premio 1"
          >
          <h3>Winner Seo Master MAGT</h3>
          <h3>Smart Start Award 2017</h3>
        </div>
        <div>
          <img
            src="@/assets/img/award-b-200x191.png"
            alt="premio 1"
          >
          <h3>Top Social Media Agencies</h3>
          <h3>Next Partner 2018</h3>
        </div>
        <div>
          <img
            src="@/assets/img/award-c-200x191.png"
            alt="premio 1"
          >
          <h3>10 Fastest Growing Abstract</h3>
          <h3>Solution Providers 2019</h3>
        </div>
        <div>
          <img
            src="@/assets/img/award-d-200x191.png"
            alt="premio 1"
          >
          <h3>National Excellence Agencie</h3>
          <h3>Award Winner 2020</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .bg-light-gray {
  background-color: #F5F5F7;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-part {
      h1 {
        font-size: 3rem;
        text-align: left;
        width: 500px;
      }
      p {
        font-size: 1.5rem;
        text-align: left;
        width: 500px;
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
  .mod-img-team {
    width: 550px;
    margin-top: 5rem;
    margin-bottom: 5rem;
    border-radius: .5rem;
  }
  .second-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .container-half {
      width: 40%;
      h2 {
        margin: 2rem 0;
      }
    }
      h2:first-child {
        margin: 0 0 2rem 0 ;
      }
    .container-half-2 {
      width: 40%;
    }
    .use-flex {
    display: flex;
  }
  }
  .awards-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    h2 {
      margin-top: 5rem;
      margin-bottom: 2rem;
    }
    .container-awards-in{
      display: flex;
      justify-content: space-between;
      img {
        width: 150px;
      }
      h3 {
        font-weight: normal;
      }
      h3:last-child{
        margin-bottom: 4rem;
      }
    }
  }
}
</style>
