<template>
  <section>
    <div class="container">
      <h2 class="section-title">Get in Touch</h2>

      <p class="contact-intro">
        Have questions or want to book a rental or custom order? Fill out the
        form below and we'll get back to you as soon as possible.
      </p>

      <div v-if="successMessage" class="success-message" role="alert" aria-live="polite">
        <strong>Success!</strong> {{ successMessage }}
      </div>

      <div v-if="errorMessage" class="error-message" role="alert" aria-live="assertive">
        <strong>Error:</strong> {{ errorMessage }}
      </div>

      <div class="contact-grid">
        <form @submit.prevent="submitInquiry">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Your name"
            required
          />

          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="your@email.com"
            required
          />

          <label for="service">Service Type</label>
          <select id="service" v-model="form.serviceType" required>
            <option value="">Select a service</option>
            <option>Gown Rental</option>
            <option>Custom-Made Gown</option>
            <option>Uniform Tailoring</option>
          </select>

          <label for="message">Message / Inquiry Details</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Tell us about your event, size, quantity, or design ideas"
            required
          ></textarea>

          <button type="submit" :disabled="loading" :aria-busy="loading">
            <span v-if="loading">Sending...</span>
            <span v-else>Send Inquiry</span>
          </button>
        </form>

        <div class="info">
          <h3>Visit or Contact Us</h3>
          <p><strong>Business Name:</strong> Joy Tienzo's Dress Shop</p>
          <p>
            <strong>Services:</strong> Gown Rental, Custom Gowns, Uniform
            Tailoring
          </p>
          <p><strong>Location:</strong> Brgy. San Nicolas, Tarlac City</p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+639064707230">0906-470-7230</a>
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:tienzojoy15@gmail.com">tienzojoy15@gmail.com</a>
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.8!2d120.59!3d15.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzQ4LjAiTiAxMjDCsDM1JzI0LjAiRQ!5e0!3m2!1sen!2sph!4v1600000000000!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            title="Location Map"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      serviceType: '',
      message: ''
    })

    const loading = ref(false)
    const successMessage = ref('')
    const errorMessage = ref('')

    const submitInquiry = async () => {
      loading.value = true
      successMessage.value = ''
      errorMessage.value = ''

      try {
        const response = await fetch('/api/inquiries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form.value)
        })

        if (!response.ok) {
          throw new Error('Failed to submit inquiry')
        }

        const data = await response.json()
        successMessage.value = 'Thank you! Your inquiry has been submitted successfully. We will get back to you soon.'
        
        // Reset form
        form.value = {
          name: '',
          email: '',
          serviceType: '',
          message: ''
        }
      } catch (error) {
        errorMessage.value = 'Sorry, there was an error submitting your inquiry. Please try again or contact us directly.'
        console.error('Error submitting inquiry:', error)
      } finally {
        loading.value = false
      }
    }

    return {
      form,
      loading,
      successMessage,
      errorMessage,
      submitInquiry
    }
  }
}
</script>

<style scoped>
.contact-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--dark);
  opacity: 0.8;
}

.success-message {
  background: linear-gradient(135deg, var(--secondary), var(--accent));
  color: var(--white);
  padding: 18px 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 8px 20px var(--shadow);
  border: 1px solid rgba(181, 201, 154, 0.2);
}

.error-message {
  background: linear-gradient(135deg, #f8d7da, #f5c6cb);
  color: #721c24;
  padding: 18px 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(248, 215, 218, 0.3);
  border: 1px solid rgba(245, 198, 203, 0.3);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

form {
  background: var(--white);
  padding: 45px;
  border-radius: 20px;
  box-shadow: 0 15px 35px var(--shadow);
  border: 1px solid rgba(181, 201, 154, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--primary);
  font-size: 0.95rem;
}

input,
select,
textarea {
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 2px solid rgba(124, 152, 133, 0.2);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: var(--light);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px rgba(181, 201, 154, 0.1);
}

textarea {
  resize: vertical;
}

form button {
  background: var(--secondary);
  border: none;
  color: var(--white);
  padding: 16px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px var(--shadow);
}

form button:hover:not(:disabled) {
  background: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow);
}

form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.info {
  padding: 30px;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0 15px 35px var(--shadow);
  border: 1px solid rgba(181, 201, 154, 0.1);
}

.info h3 {
  color: var(--primary);
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 300;
}

.info p {
  margin-bottom: 15px;
  line-height: 1.7;
  color: var(--dark);
  opacity: 0.8;
}

.info a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.info a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

iframe {
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 0;
  margin-top: 25px;
  box-shadow: 0 10px 25px var(--shadow);
}

@media (max-width: 1000px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
