<template>
  <main class="bg-white">
    <div class="container-support">
      <div
        v-if="open"
        class="message"
      >
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          @click="(open = !open)"
        />
        <div class="message-text">
          <!-- eslint-disable-next-line -->
          This is a free HubSpot live chat. You can create your own chat  flows and engage your flows and engage your customers with Avada & HubSpot!
        </div>
      </div>
      <button
        class="support"
        @click="(open = !open)"
      >
        <font-awesome-icon
          icon="fa-solid fa-message"
        />
      </button>
    </div>
    <div class="main-container">
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
      <!-- Brands -->
      <div class="container-bradns">
        <h1>Some Brands We Work With</h1>
        <h2>Quisque aliquet, libero consequat elementum convallis.</h2>
        <div class="flex-img-brands">
          <img
            src="@/assets/img/abstract.png"
            alt="abstract"
          ><img
            src="@/assets/img/cglobal.png"
            alt="cglobal"
          ><img
            src="@/assets/img/next.png"
            alt="next"
          ><img
            src="@/assets/img/hemisferio.png"
            alt="hemisfero"
          ><img
            src="@/assets/img/spaces.png"
            alt="spaces"
          ><img
            src="@/assets/img/digitalbox.png"
            alt="digitalbox"
          >
        </div>
      </div>
      <!-- Card-miss -->
      <div class="container-center">
        <div class="card-miss">
          <div class="img-size">
            <img
              src="@/assets/img/marketing-expert-cta.png"
              alt="marketing-expert-cta"
            >
            <div>
              <div class="name">
                Sabdy Reiff
                <p>Marketing Colsultant Expert</p>
              </div>
            </div>
          </div>
          <div class="description">
            Drive Leads and Sales with Avada
          </div>
          <div>
            <!-- eslint-disable-next-line -->
          <button class="mod-btn"><font-awesome-icon icon="fa-solid fa-phone" /> (555) 802-1234</button>
          </div>
        </div>
        <!-- Organizazzione di fiducia -->
        <div class="container-organisations">
          <h1>Trusted by Leading Organisations</h1>
          <div class="container-people">
            <div>
              <img
                src="@/assets/img/signora.jpg"
                alt="signora"
              >
              <h1>How Spaces attracted five million visitors by improving the content</h1>
              <div class="bold-num">
                200%
              </div>
              <div class="desciption">
                Higther revenue
              </div>
            </div>
            <div>
              <img
                src="@/assets/img/signore.jpg"
                alt="signore"
              >
              <h1>Creativity helped Hemisferio to increase their brand reach vertically</h1>
              <div class="bold-num">
                10X
              </div>
              <div class="desciption">
                Sales increase with the same ad spend
              </div>
            </div>
            <div>
              <img
                src="@/assets/img/signora2.jpg"
                alt="signore"
              >
              <h1>How DigitalBox used Al-powered data insight to boost sales</h1>
              <div class="bold-num">
                3-year
              </div>
              <div class="desciption">
                Partnership with Avada Consultant
              </div>
            </div>
          </div>
          <button class="mod-btn">
            Read More Case Studies
          </button>
        </div>
      </div>
    </div>
    <div class="bg-light-grey">
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
  </main>
</template>

<script>
export default {
  props: {
    arrMessage: Array,
  },
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-white {
  background-color: white;
  margin-top: 10rem;
  position: relative;
  .container-support {
    .message {
      position: fixed;
      bottom: 5.5rem;
      right: 4rem;
      padding: .8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 250px;
      height: 200px;
      font-size: 1.5rem;
      background-color: white;
      box-shadow: 3px 3px 10px 3px #EBEBEB;
      z-index: 100;
      cursor: pointer;
      .message-text {
        font-size: 1rem;
      }
    }
    .support {
      position: fixed;
      bottom: 1rem;
      right: .5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      border: 0;
      border-radius: 100%;
      background-color: var(--orange);
      color: white;
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
.main-container {
  max-width: 1200px;
  margin: 0 auto;
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
  .container-bradns {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
      font-size: 3.5rem;
      margin-top: 5rem;
    }

    h2{
      margin: 2rem 0;
      font-weight: normal;
    }
    .flex-img-brands{
      display: flex;
      gap: 3rem;

      img {
        width: 150px;
      }
    }
  }
  .container-center {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 8rem;
    .card-miss {
      width: 1100px;
      padding: 1rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 3px 3px 10px 3px #EBEBEB;
      .img-size {
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          overflow: hidden;
          width: 70px;
          width: 70px;
          object-fit: cover;
          border-radius: 100%;
        }
      }
    .name {
      font-weight: bold;
      font-size: 1.3rem;
      p {
        font-weight: normal;
        font-size: .9rem;
      }
    }
    .description {
      font-weight: bold;
      font-size: 1.5rem;
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
.container-organisations{
  text-align: center;
  h1 {
    font-size: 3rem;
    margin: 4rem 0;
  }
  .mod-btn {
    font-size: 1.2rem;
    border: 0;
    margin-bottom: 3rem;
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
  .container-people {
    display: flex;
    gap: 1rem;
    img {
      width: 400px;
    }
    h1 {
      font-size: 1.5rem;
      text-align: left;
      margin: 1rem 0;
      padding-bottom: 2rem;
      border-bottom: 1px dashed lightgray;
    }
    .bold-num {
      text-align: left;
      font-size: 3rem;
      font-weight: bold;
    }
    .desciption {
      text-align: left;
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }
  }
}
}
.bg-light-grey {
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
      h3 {
        font-weight: normal;
      }
    }
  }
}
</style>
