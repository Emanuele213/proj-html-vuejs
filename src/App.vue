<template>
  <div>
    <HeaderPage :arr-header="arrHeader" />
    <MainPage />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
  data() {
    // Header
    return {
      arrHeader: [
        {
          text: 'Home',
          prefix: 'fa-solid',
          icon: ' fa-angle-down',
        },
        {
          text: 'Service',
          prefix: 'fa-solid',
          icon: ' fa-angle-down',
        },
        {
          text: 'Why Us',
          prefix: 'fa-',
          icon: '',
        },
        {
          text: 'Case Studies',
          prefix: 'fa-',
          icon: '',
        },
        {
          text: 'About',
          prefix: 'fa-',
          icon: '',
        },
        {
          text: 'Blog',
          prefix: 'fa-',
          icon: '',
        },
        {
          text: '(555) 802-1234',
          prefix: 'fa-solid',
          icon: ' fa-phone',
        },
      ],
      // Footer
      arrServices: [
        'Marketing Plan',
        'Sales Development',
        'Digital Marketing',
        'Pricing',
        'Why Us',
        'Case Studies',
      ],
      arrResources: [
        'Learning',
        'Video Tutorials',
        'Customers',
        'Blog',
      ],
      arrCompany: [
        'Who We Are',
        'Contact Us',
        'Careers',
      ],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

ul {
  list-style: none;
}

:root {
  --orange: #F86011;
  --light_orange: #FFE7DA;
}
// Scroll bar
/* width */
::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--orange);
}
</style>
