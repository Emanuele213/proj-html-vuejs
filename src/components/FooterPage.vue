<template>
  <footer class="bg-white">
    <div class="container">
      <div class="container-flex">
        <div class="text-width">
          <h1>Grow Your Online Business Strategically, and Improve Customer Retention.</h1>
          <div class="social-container">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <font-awesome-icon icon="fa-brands fa-youtube" />
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            <font-awesome-icon icon="fa-brands fa-tiktok" />
          </div>
        </div>
        <ul>
          <h3>Services</h3>
          <li
            v-for="service in arrServices"
            :key="service"
          >
            {{ service }}
          </li>
        </ul>
        <ul>
          <h3>Resources</h3>
          <li
            v-for="resource in arrResources"
            :key="resource"
          >
            {{ resource }}
          </li>
        </ul>
        <ul>
          <h3>Company</h3>
          <li
            v-for="company in arrCompany"
            :key="company"
          >
            {{ company }}
          </li>
        </ul>
      </div>
      <div class="container-down">
        <div>© 2020 + Avada Consultant + Powered by WordPress.</div>
        <div>Call Us (555) 802-1234</div>
        <div>info@yourcompany.com</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    arrServices: Array,
    arrResources: Array,
    arrCompany: Array,
  },
};
</script>

<style lang="scss" scoped>
.bg-white {
  background-color: white;
  margin-top: 6rem;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    .container-flex {
      display: flex;
      justify-content: space-between;
      li {
        font-size: 1.2rem;
      }
      .text-width {
        width: 35%;
      }
      h1 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
      }
      .social-container {
        display: flex;
        font-size: 1.2rem;
        gap: 1rem;
      }
    }
    .container-down {
      margin: 5rem 0;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
