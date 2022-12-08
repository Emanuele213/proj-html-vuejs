<template>
  <main class="bg-white">
    <div class="container-support">
      <div
        v-if="open"
        class="message"
      >
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="close"
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
    <FirstPart />
    <SecondPart />
    <ThirdPart />
    <div class="bg-light-gray">
      <div class="container">
        <div class="container-flex">
          <h1>Marketing Resources: Insider Advice on How to Increase Online Sales</h1>
          <button class="mod-btn">
            Explore All Resources
          </button>
        </div>
      </div>
      <div class="container">
        <div class="container-flex-img">
          <div>
            <div class="pc-img" />
            <h2>Marketing Tips And Tricks For Your Website</h2>
          </div>
          <div>
            <div class="pen-img" />
            <h2>How to Write Stunning Blog Post Titles</h2>
          </div>
          <div>
            <div class="phone-img" />
            <h2>Techniques to Reduce Facebook Ads Spend</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="container">
        <div class="container-flex">
          <div class="title-width">
            <h1>Let's Make Things Happen</h1>
            <!-- eslint-disable-next-line -->
            <h2>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</h2>
            <hr>
            <!-- eslint-disable-next-line -->
            <p>“The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”.</p>
            <h3>George Anderson</h3>
            <p>Digialbox CEO</p>
          </div>
          <div class="card-people">
            <div>
              <div class="img-size">
                <img
                  src="@/assets/img/marketing-consultant-expert.jpg"
                  alt="consulente esperto"
                >
              </div>
              <div class="name-consulant">
                Richard Madsen
              </div>
              <div class="description">
                Marketing Consultant Expert
              </div>
              <div class="number">
                <font-awesome-icon icon="fa-solid fa-phone" /> (555) 802-1234
              </div>
              <label
                for="name-email-number"
                class="container-form"
              >
                <!-- eslint-disable-next-line -->
                <input type="text" name="name-email-number" id="name-email-number" placeholder="Your Name*">
                <!-- eslint-disable-next-line -->
                <input type="text" name="name-email-number" id="name-email-number" placeholder="Your Email*">
                <!-- eslint-disable-next-line -->
                <input type="number" name="name-email-number" id="name-email-number" placeholder="Your Phone Number*">
                <button class="mod-btn">
                  Get a Callback
                </button>
              </label>
              <div class="paragraph">
                By submitting my data | agree to be contacted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FirstPart from '@/components/FirstPart.vue';
import SecondPart from '@/components/SecondPart.vue';
import ThirdPart from '@/components/ThirdPart.vue';

export default {
  components: {
    FirstPart,
    SecondPart,
    ThirdPart,
  },
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
  z-index: 0;
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
      .close {
        &:hover {
          color: red;
        }
      }
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
      z-index: 100;
      cursor: pointer;
    }
  }
}
.bg-light-gray {
  background-color: #F5F5F7;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    .container-flex {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      h1 {
      width: 55%;
      font-size: 3rem;
      margin: 4rem 0;
    }
    .mod-btn {
      font-size: 1.2rem;
      border: 0;
      padding: 1rem 2rem;
      border-radius: 1rem;
      margin-bottom: 4rem;
      color: #F96C23;
      background-color: #FFE7DA;
      cursor: pointer;
      &:hover{
        color: white;
        background-color: var(--orange);
      }
    }
    }
    .container-flex-img {
      display: flex;
      gap: 1rem;
      .pc-img {
        width: 400px;
        height: 267px;
        background-image: url('@/assets/img/blog-posts-6-400x267.jpg');
        background-size: cover;
        &:hover {
          background: linear-gradient( to bottom , transparent, 60%, orange),
          url('@/assets/img/blog-posts-6-400x267.jpg');
          background-size: cover;
        }
      }
      .pen-img {
        width: 400px;
        height: 267px;
        background-image: url('@/assets/img/blog-posts-5-400x267.jpg');
        background-size: cover;
        &:hover {
          background: linear-gradient( to bottom , transparent, 60%, orange),
          url('@/assets/img/blog-posts-5-400x267.jpg');
          background-size: cover;
        }
      }
      .phone-img {
        width: 400px;
        height: 267px;
        background-image: url('@/assets/img/blog-posts-4-400x267.jpg');
        background-size: cover;
        &:hover {
          background: linear-gradient( to bottom , transparent, 60%, orange),
          url('@/assets/img/blog-posts-4-400x267.jpg');
          background-size: cover;
        }
      }
      h2 {
        font-size: 1.7rem;
        margin-bottom: 7rem;
      }
    }
  }
}
.bg-black {
  background: black;
  color: white;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    .container-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title-width {
        width: 50%;
        h1 {
          font-size: 4rem;
        }
        h2{
          margin-top: 2rem;
        }
        hr {
          margin: 3rem 0;
          width: 20%;
          border-top: 1px solid lightgray;
        }
        h3 {
          margin-top: 2rem;
          font-weight: normal;
        }
        p {
          font-size: 1.3rem;
        }
        p:last-child {
          font-size: .7rem;
        }
    }
    }
  }
  .card-people {
  display: flex;
  justify-content: center;
  width: 450px;
  height: 600px;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 3px 3px 10px 3px #EBEBEB;
  color: black;
  margin: 6rem 0;
  .img-size {
    display: flex;
    justify-content: center;
    img {
      overflow: hidden;
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 100%;
      margin: 0;
    }
  }
  .name-consulant {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
  }
  .description {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    color: lightgray;
  }
  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    gap: 1rem;
    margin-top: 1rem;
    color: var(--orange);
  }
  .container-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    input{
      font-size: 1.2rem;
      padding: 1.1rem 1rem;
      width: 400px;
      border: 1px solid #DCDCDC;
      border-radius: .5rem;
      margin: .5rem 0;
    }
  }
  .mod-btn {
    font-size: 1.2rem;
    border: 0;
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: #F96C23;
    background-color: var(--light_orange);
    cursor: pointer;
    &:hover{
      color: white;
      background-color: var(--orange);
    }
  }
  .paragraph {
    display: flex;
    justify-content: center;
    margin-top: .5rem;
    font-size: .8rem;
    color: #C5A491;
  }
}
}
</style>
