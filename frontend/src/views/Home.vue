<template>
  <section class="hero" role="banner">
    <h2>Elegance Tailored for Every Occasion</h2>
    <p>
      From stunning gown rentals to custom-made designs and professional
      uniform tailoring, Joy Tienzo's Dress Shop delivers elegance, quality,
      and perfect fit for every client.
    </p>
    <router-link to="/contact" class="btn" aria-label="Book a consultation">Book a Consultation</router-link>
  </section>

  <section>
    <div class="container">
      <div class="features">
        <div class="card">
          <h3>Gown Rentals</h3>
          <p>
            Choose from a beautiful collection of gowns perfect for weddings,
            proms, pageants, and special events.
          </p>
        </div>
        <div class="card">
          <h3>Custom Gowns</h3>
          <p>
            Have your dream gown designed and crafted to match your style,
            size, and occasion.
          </p>
        </div>
        <div class="card">
          <h3>Uniform Tailoring</h3>
          <p>
            Professional uniform creation and tailoring for schools,
            businesses, and organizations.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="about">
        <img 
          src="/assets/images/about.png" 
          alt="Custom tailoring process at Joy Tienzo's Dress Shop"
          loading="lazy"
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

  <section>
    <div class="container">
      <h2 class="section-title">What Our Clients Say</h2>
      <div class="features">
        <div class="card">
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

        <div class="card">
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

        <div class="card">
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

  <section class="cta">
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
  padding: 120px 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url("/assets/images/header.png") center/cover;
  color: white;
  text-align: center;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.features .card {
  text-align: center;
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
}

.about img {
  width: 100%;
  border-radius: 20px;
}

.about h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.cta {
  background: var(--accent);
  text-align: center;
}

.cta h2 {
  color: var(--primary);
  margin-bottom: 20px;
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
