import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li>Pricing</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SUPPORT</h4>
          <ul>
            <li>Help Center</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMMUNITY</h4>
          <ul>
            <li>Forum</li>
            <li>Events</li>
            <li>Partners</li>
            <li>Affiliates</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/157careers.in?igsh=bnlzaTg4MnpnYWxw" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="https://whatsapp.com/channel/0029Vb6XhUcAu3aUGdCvsa0f" target="_blank" rel="noopener noreferrer"> WhatsApp Channel</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/157enterprises/?fbclid=PAQ0xDSwLSB5ZleHRuA2FlbQIxMQABp-2vYKn6RzTiKFzAy6gIq7AKdKdxRf1YwmDnLIPEsMdgWw0nj9jg2HbzTR_U_aem_hViuD0G_PYipQbUAzrCuJA"
                target="_blank" rel="noopener noreferrer"> Linkedin</a>
            </li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 157 Industries. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
