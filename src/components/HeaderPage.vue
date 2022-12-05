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
          v-for="menu in arrHeader"
          :key="menu"
          class="mod-menu"
        >
          {{ menu }}<font-awesome-icon icon="fa-solid fa-angle-down" />
        </li>
        <button class="mod-btn">
          Free Quote
        </button>
      </ul>
    </nav>
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
      color: #F86011;
      border-color: #F86011;
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
      background-color: #F86011;
    }
  }
}
</style>
