<template>
  <section>
    <div class="container">
      <h2 class="section-title">Our Creations</h2>

      <p class="gallery-intro">
        Explore a selection of our rental gowns, custom-made dresses, and
        professionally tailored uniforms. Each piece reflects our commitment
        to quality, elegance, and craftsmanship.
      </p>

      <div class="gallery-categories">
        <div class="category-section">
          <h3>Wedding & Formal Gowns</h3>
          <div class="gallery" role="list">
            <img 
              v-for="(image, index) in weddingGowns" 
              :key="'wedding-' + index"
              :src="image.src" 
              :alt="image.alt"
              loading="lazy"
              role="listitem"
            />
          </div>
        </div>

        <div class="category-section">
          <h3>Special Occasion Dresses</h3>
          <div class="gallery" role="list">
            <img 
              v-for="(image, index) in specialDresses" 
              :key="'special-' + index"
              :src="image.src" 
              :alt="image.alt"
              loading="lazy"
              role="listitem"
            />
          </div>
        </div>

        <div class="category-section">
          <h3>Professional Uniforms</h3>
          <div class="gallery" role="list">
            <img 
              v-for="(image, index) in uniforms" 
              :key="'uniform-' + index"
              :src="image.src" 
              :alt="image.alt"
              loading="lazy"
              role="listitem"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      weddingGowns: [
        { src: '/img/wedding-gown.png', alt: 'Elegant wedding gown rental' },
        { src: '/img/debutant-gown.png', alt: 'Beautiful debut gown design' },
        { src: '/img/principal-sponsor-gown.png', alt: 'Principal sponsor gown' }
      ],
      specialDresses: [
        { src: '/img/dress1.png', alt: 'Evening gown rental' },
        { src: '/img/dress2.png', alt: 'Cocktail dress design' },
        { src: '/img/dress3.png', alt: 'Formal evening dress' },
        { src: '/img/dress4.png', alt: 'Special occasion gown' },
        { src: '/img/dress5.png', alt: 'Custom designed dress' },
        { src: '/img/costume.png', alt: 'Costume for kids and teens' }
      ],
      uniforms: [
        { src: '/img/barong.png', alt: 'Elegant barong tagalog' },
        { src: '/img/teachers-uniform.png', alt: 'Professional teacher uniform' },
        { src: '/img/student-uniform.png', alt: 'School uniform tailoring' }
      ]
    }
  }
}
</script>

<style scoped>
.gallery-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--dark);
  opacity: 0.8;
}

.gallery-categories {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.category-section h3 {
  text-align: center;
  color: var(--primary);
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 40px;
  position: relative;
}

.category-section h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: var(--secondary);
  border-radius: 2px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.gallery img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 35px var(--shadow);
  cursor: pointer;
  transition: all 0.4s ease;
  border: 1px solid rgba(181, 201, 154, 0.1);
}

.gallery img:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 20px 45px var(--shadow);
}
</style>
