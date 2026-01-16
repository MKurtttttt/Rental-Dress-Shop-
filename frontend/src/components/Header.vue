<template>
  <header role="banner">
    <h1>Joy Tienzo's Dress Shop</h1>
    <nav role="navigation" aria-label="Main navigation">
      <router-link to="/" aria-label="Home page">Home</router-link>
      <router-link to="/services" aria-label="Services page">Services</router-link>
      <router-link to="/gallery" aria-label="Gallery page">Gallery</router-link>
      <router-link to="/contact" aria-label="Contact page">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background: var(--primary);
  color: white;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.8rem;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover,
nav a.router-link-active {
  text-decoration: underline;
  opacity: 0.9;
}

@media (max-width: 1000px) {
  header {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  
  nav {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  nav a {
    margin: 0 10px;
  }
}
</style>
