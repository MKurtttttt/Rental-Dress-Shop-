<template>
  <section class="hero fade-in-up" role="banner">
    <h2>Elegance Tailored for Every Occasion</h2>
    <p>
      From stunning gown rentals to custom-made designs and professional
      uniform tailoring, Joy Tienzo's Dress Shop delivers elegance, quality,
      and perfect fit for every client.
    </p>
    <router-link to="/contact" class="btn" aria-label="Book a consultation">Book a Consultation</router-link>
  </section>

  <section class="fade-in-up">
    <div class="container">
      <div class="features">
        <div class="card hover-lift">
          <h3>Gown Rentals</h3>
          <p>
            Choose from a beautiful collection of gowns perfect for weddings,
            proms, pageants, and special events.
          </p>
        </div>
        <div class="card hover-lift">
          <h3>Custom Gowns</h3>
          <p>
            Have your dream gown designed and crafted to match your style,
            size, and occasion.
          </p>
        </div>
        <div class="card hover-lift">
          <h3>Uniform Tailoring</h3>
          <p>
            Professional uniform creation and tailoring for schools,
            businesses, and organizations.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="fade-in-up">
    <div class="container">
      <div class="about">
        <img 
          src="/img/about.png" 
          alt="Custom tailoring process at Joy Tienzo's Dress Shop"
          loading="lazy"
          class="hover-lift"
        />
        <div>
          <h2>About Joy Tienzo's Dress Shop</h2>
          <p>
            Joy Tienzo's Dress Shop was established with a passion for
            fashion, craftsmanship, and service excellence. What started as a
            small tailoring service has grown into a trusted destination for
            gown rentals, custom designs, and uniform tailoring.
          </p>
          <p>
            Every piece we create or rent is carefully selected and tailored
            to ensure comfort, quality, and confidence for our clients.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="fade-in-up">
    <div class="container">
      <h2 class="section-title">What Our Clients Say</h2>
      <div class="features">
        <div class="card hover-lift">
          <p>"Thank you, mommy Joy Dela Cruz Tienzo!! THE BEST!"</p>
          <strong>
            <a
              href="https://www.facebook.com/share/p/1C2Witg7CH/"
              target="_blank"
              rel="noopener noreferrer"
            >
              — Quina P., Wedding Client
            </a>
          </strong>
        </div>

        <div class="card hover-lift">
          <p>
            "Thank you so much sissy Joy Tienzo for these stunning gowns for
            Nhyca."
          </p>
          <strong>
            <a
              href="https://www.facebook.com/joyce2212/posts/pfbid0cTU7ZxED266LKE3xj4pq5scfe2wnoz9rHJp5U9LWJL7RKGJ5x2MzJGva8RdaA8n9l?__cft__[0]=AZZT4T1eVbajT-mAm-KUALV7EwA4ChPJ_cAXc9PDakW0EcplQF5--f7PZsIHdNsAScQzVf1Pg93dKBvRC4WDHWh6sCcncKjVcaEksQD3fB79Sw&__tn__=%2CO%2CP-R"
              target="_blank"
              rel="noopener noreferrer"
            >
              — Joyce S., Custom Gown
            </a>
          </strong>
        </div>

        <div class="card hover-lift">
          <p>
            "Our school uniforms were delivered on time and with great
            quality. Highly recommended."
          </p>
          <strong>
            <a href="#" target="_blank" rel="noopener noreferrer">
              — School Administrator
            </a>
          </strong>
        </div>
      </div>
    </div>
  </section>

  <section class="cta fade-in-up">
    <h2>Ready to Look Your Best?</h2>
    <p>
      Contact us today and let us help you find or create the perfect outfit.
    </p>
    <router-link to="/contact" class="btn btn-primary">Get Started</router-link>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hero {
  padding: 140px 60px;
  background: linear-gradient(135deg, rgba(44, 95, 45, 0.7), rgba(151, 188, 98, 0.6)),
    url("/img/header.png") center/cover;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(249, 228, 183, 0.2), transparent);
  pointer-events: none;
}

.hero h2 {
  font-size: 3.5rem;
  margin-bottom: 25px;
  font-weight: 300;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.hero p {
  max-width: 600px;
  margin: 0 auto 40px;
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.95;
  position: relative;
  z-index: 1;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.features .card {
  text-align: center;
  padding: 40px 30px;
  position: relative;
  overflow: hidden;
}

.features .card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient);
  border-radius: 20px 20px 0 0;
}

.card strong a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s;
}

.card strong a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin: 80px 0;
}

.about img {
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 20px 40px var(--shadow);
  transition: transform 0.3s ease;
}

.about img:hover {
  transform: scale(1.02);
}

.about h2 {
  color: var(--primary);
  margin-bottom: 25px;
  font-size: 2.2rem;
  font-weight: 300;
}

.cta {
  background: var(--gradient);
  text-align: center;
  padding: 100px 60px;
  position: relative;
  border-radius: 30px;
  margin: 60px 0;
  box-shadow: 0 15px 35px var(--shadow);
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--secondary), var(--accent));
  border-radius: 30px;
  opacity: 0.1;
}

.cta h2 {
  color: var(--primary);
  margin-bottom: 25px;
  font-size: 2.5rem;
  font-weight: 300;
  position: relative;
  z-index: 1;
}

@media (max-width: 1000px) {
  .features,
  .about {
    grid-template-columns: 1fr;
  }
  
  .hero h2 {
    font-size: 2.2rem;
  }
}
</style>
