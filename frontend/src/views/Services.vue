<template>
  <section>
    <div class="container">
      <div class="intro">
        <h2>Our Services</h2>
        <p>
          Joy Tienzo's Dress Shop provides elegant, high-quality attire
          solutions for special events, personal celebrations, and
          professional needs. From stunning gown rentals to custom designs and
          uniform tailoring, every piece is crafted with precision and care.
        </p>
      </div>

      <div class="services">
        <div class="card">
          <h3>Gown Rental</h3>
          <p>
            Perfect for weddings, proms, pageants, and formal events, our gown
            rental service offers a wide selection of elegant designs that
            suit different styles and occasions.
          </p>
          <ul>
            <li>Evening gowns and formal wear</li>
            <li>Affordable rental packages</li>
            <li>Fitting and minor adjustments included</li>
          </ul>
          <router-link to="/contact" class="btn-cta">Rent a Gown</router-link>
        </div>

        <div class="card">
          <h3>Custom-Made Gowns</h3>
          <p>
            We specialize in custom gown creation tailored to your
            measurements, preferences, and event requirements. From concept to
            final fitting, we bring your vision to life.
          </p>
          <ul>
            <li>Personal design consultation</li>
            <li>High-quality fabrics and detailing</li>
            <li>Perfect fit guaranteed</li>
          </ul>
          <router-link to="/contact" class="btn-cta">Request Custom Design</router-link>
        </div>

        <div class="card">
          <h3>Uniform Tailoring</h3>
          <p>
            Our uniform tailoring service caters to schools, businesses, and
            organizations requiring professional and consistent attire.
          </p>
          <ul>
            <li>School and corporate uniforms</li>
            <li>Bulk orders available</li>
            <li>Durable and comfortable materials</li>
          </ul>
          <router-link to="/contact" class="btn-cta">Inquire About Uniforms</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 70px;
}

.intro h2 {
  color: var(--primary);
  margin-bottom: 15px;
  font-size: 2.5rem;
}

.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.services .card p {
  margin-bottom: 20px;
}

.services .card ul {
  padding-left: 18px;
  margin-bottom: 25px;
}

.services .card li {
  margin-bottom: 10px;
}

.btn-cta {
  display: inline-block;
  padding: 12px 28px;
  background: var(--secondary);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: 0.3s;
}

.btn-cta:hover {
  background: var(--primary);
}

@media (max-width: 1000px) {
  .services {
    grid-template-columns: 1fr;
  }
}
</style>
