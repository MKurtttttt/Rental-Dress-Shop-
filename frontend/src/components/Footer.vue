<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Joy Tienzo's Dress Shop</h3>
        <p>Elegance Tailored for Every Occasion</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Phone">Call Us</a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Services</h4>
        <ul>
          <li>Gown Rental</li>
          <li>Custom-Made Gowns</li>
          <li>Uniform Tailoring</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Brgy. San Nicolas, Tarlac City</p>
        <p>0906-470-7230</p>
        <p>tienzojoy15@gmail.com</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2026 Joy Tienzo's Dress Shop. All rights reserved.</p>
      <p>Made with passion for elegant moments</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, var(--dark), #1a1a1a);
  color: var(--light);
  padding: 60px 30px 30px;
  margin-top: 80px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  color: var(--secondary);
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.footer-section h4 {
  color: var(--secondary);
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 15px;
}

.footer-section p {
  margin-bottom: 12px;
  opacity: 0.9;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-links a {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(151, 188, 98, 0.2);
  border-radius: 20px;
  color: var(--secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.social-links a:hover {
  background: var(--secondary);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(151, 188, 98, 0.3);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
  opacity: 0.9;
  position: relative;
  padding-left: 20px;
}

.footer-section li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--secondary);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(181, 201, 154, 0.2);
  text-align: center;
}

.footer-bottom p {
  margin-bottom: 8px;
  opacity: 0.8;
  font-size: 0.9rem;
}

@media (max-width: 1000px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-section li::before {
    display: none;
  }
  
  .footer-section li {
    padding-left: 0;
  }
}
</style>
