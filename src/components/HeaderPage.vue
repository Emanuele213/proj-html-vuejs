<template>
  <header class="bg-white">
    <nav>
      <ul class="container">
        <li class="flex-img">
          <img
            src="@/assets/img/avada-marketing-logo-2x-200x37.png"
            alt="logo"
          >
        </li>
        <li
          v-for="menu in arrHeader.slice()"
          :key="menu"
          class="mod-menu"
        >
          {{ menu }}
        </li>
        <button class="mod-btn">
          Free Quote
        </button>
      </ul>
    </nav>
    <div class="main-container">
      <div class="container-img">
        <div class="container-text">
          <h1>
            Unlock Your Online
            Growth Potential
          </h1>
          <h2>
            Online marketing to secure customer retention,
            leads, and sales. We focus on the bigger picture.
          </h2>
          <button class="mod-btn">
            <strong>Our Services </strong> <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
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
  </header>
</template>

<script>
export default {
  props: {
    arrHeader: Array,
  },
};
</script>

<style lang="scss" scoped>
.bg-white {
  background-color: white;
  width: 100%;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  .flex-img{
    display: flex;
  }
  .mod-menu {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    border-bottom: 2px solid white;
    &:hover{
      cursor: pointer;
      color: var(--orange);
      border-color: var(--orange);
    }
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
.main-container {
  background-image: url('@/assets/img/marketing-intro.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .container-img {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    position: relative;
    padding-bottom: 14rem;
  .container-text {
    margin-top: 5rem;
    h1 {
      color: white;
      width: 700px;
      font-size: 4rem;
    }
    h2 {
      color: white;
      width: 700px;
      font-size: 1.7rem;
    }
    .mod-btn {
      font-size: 1rem;
      margin-top: .8rem;
      padding: 1.2rem 2rem;
      border-radius: .5rem;
      border: 2px solid white;
      background-color: white;
      &:hover{
        cursor: pointer;
        background: none;
        color: white;
      }
    }
  }
}
}

.card-people {
  display: flex;
  justify-content: center;
  position: absolute;
  right: 10rem;
  top: 6rem;
  z-index: 10;
  width: 450px;
  height: 600px;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 3px 3px 10px 3px #EBEBEB;
  .img-size {
    display: flex;
    justify-content: center;
    img {
      overflow: hidden;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      border-radius: 100%;
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
    background-color: #FFE7DA;
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
</style>
