<template>
  <section>
    <div class="container">
      <h2 class="section-title">Our Creations</h2>

      <p class="gallery-intro">
        Explore a selection of our rental gowns, custom-made dresses, and
        professionally tailored uniforms. Each piece reflects our commitment
        to quality, elegance, and craftsmanship.
      </p>

      <div class="gallery" role="list">
        <img 
          v-for="(image, index) in galleryImages" 
          :key="index"
          :src="image.src" 
          :alt="image.alt"
          loading="lazy"
          role="listitem"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      galleryImages: [
        { src: '/assets/images/Wedding Gown.png', alt: 'Wedding gown rental' },
        { src: '/assets/images/Debutant Gown.png', alt: 'Debut gown design' },
        { src: '/assets/images/Costume.png', alt: 'Costume for kids and teens' },
        { src: '/assets/images/dress2.png', alt: 'Evening gown rental' },
        { src: '/assets/images/Barong.png', alt: 'Elegant barong tagalog' },
        { src: "/assets/images/Teacher's Uniform.png", alt: 'Tailored teacher uniform' },
        { src: '/assets/images/Student Uniform.png', alt: 'School uniform tailoring' }
      ]
    }
  }
}
</script>

<style scoped>
.gallery-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 45px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.gallery img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
}

.gallery img:hover {
  transform: scale(1.03);
}
</style>
