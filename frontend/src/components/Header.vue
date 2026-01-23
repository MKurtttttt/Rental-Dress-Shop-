<template>
  <header role="banner">
    <div class="header-content">
      <div class="logo">
        <h1>Joy Tienzo's Dress Shop</h1>
        <p class="tagline">Elegance Tailored for You</p>
      </div>
      <nav role="navigation" aria-label="Main navigation">
        <router-link to="/" aria-label="Home page">Home</router-link>
        <router-link to="/services" aria-label="Services page">Services</router-link>
        <router-link to="/gallery" aria-label="Gallery page">Gallery</router-link>
        <router-link to="/contact" aria-label="Contact page">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 25px 60px;
  box-shadow: 0 4px 20px var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.logo .tagline {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 300;
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 10px 16px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
}

nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  transform: scale(0);
  transition: transform 0.3s ease;
}

nav a:hover::before,
nav a.router-link-active::before {
  transform: scale(1);
}

nav a:hover,
nav a.router-link-active {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1000px) {
  header {
    padding: 20px 30px;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  nav a {
    margin: 5px;
    padding: 8px 14px;
  }
}
</style>
