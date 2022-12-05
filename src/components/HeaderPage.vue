<template>
  <header class="bg-white">
    <nav>
      <ul class="container">
        <li>
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
    padding-bottom: 10rem;
  .container-text {
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
      }
    }
  }
}
}

.card-people {
  display: flex;
  justify-content: center;
  position: absolute;
  right: 7rem;
  top: 6rem;
  z-index: 10;
  width: 450px;
  height: 550px;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
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
    font-size: 1.5rem;
  }
  .description {
    color: lightgray;
  }
}
</style>
