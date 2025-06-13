import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '40px 0 20px',
      fontFamily: 'Arial, sans-serif'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      flexWrap: 'wrap'
    },
    column: {
      flex: 1,
      minWidth: '150px',
      marginBottom: '30px',
      padding: '0 15px'
    },
    heading: {
      fontSize: '16px',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    listItem: {
      marginBottom: '10px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '5px'
    },
    thumb: {
      backgroundColor: '#34495e',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    contactSection: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '30px auto 0',
      padding: '0 20px',
      borderTop: '1px solid #34495e',
      paddingTop: '30px',
      flexWrap: 'wrap'
    },
    contactInfo: {
      flex: 2,
      minWidth: '300px'
    },
    contactText: {
      margin: '5px 0',
      fontSize: '14px',
      lineHeight: '1.5'
    },
    socialSection: {
      flex: 1,
      minWidth: '200px'
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      marginTop: '15px'
    },
    icon: {
      fontSize: '24px',
      cursor: 'pointer',
      transition: 'color 0.3s'
    },
    bottom: {
      textAlign: 'center',
      padding: '20px',
      fontSize: '12px',
      backgroundColor: '#1a252f',
      marginTop: '30px'
    }
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <div style={footerStyles.column}>
          <h3 style={footerStyles.heading}>USEFUL LINKS</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={footerStyles.listItem}><Link to="/" style={linkStyle}>Home</Link></li>
            <li style={footerStyles.listItem}><Link to="/about" style={linkStyle}>About Us</Link></li>
            <li style={footerStyles.listItem}><Link to="/category" style={linkStyle}>Category</Link></li>
            <li style={footerStyles.listItem}>VIDEOS</li>
          </ul>
        </div>

        <div style={footerStyles.column}>
          <h3 style={footerStyles.heading}>PRIVACY POLICY</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={footerStyles.listItem}>Terms & Conditions</li>
            <li style={footerStyles.listItem}>Cookie Policy</li>
            <li style={footerStyles.listItem}>GDPR Compliance</li>
          </ul>
        </div>

        <div style={footerStyles.column}>
          <h3 style={footerStyles.heading}><Link to="/category" style={linkStyle}>Category</Link></h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={footerStyles.listItem}>Menu 1</li>
            <li style={footerStyles.listItem}>Menu 2</li>
            <li style={footerStyles.listItem}>Menu 3</li>
            <li style={footerStyles.listItem}>Menu 4</li>
          </ul>
        </div>

        <div style={footerStyles.column}>
          <h3 style={footerStyles.heading}><Link to="/service" style={linkStyle}>Services</Link></h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={footerStyles.listItem}>Service 1</li>
            <li style={footerStyles.listItem}>Service 2</li>
            <li style={footerStyles.listItem}>Service 3</li>
          </ul>
        </div>

        <div style={footerStyles.column}>
          <h3 style={footerStyles.heading}>Gallery</h3>
          <div style={footerStyles.gallery}>
            <div style={footerStyles.thumb}>
              <img
                src="https://img.freepik.com/premium-photo/indoor-plants-pot-isolated-white-background_158502-323.jpg?w=2000"
                alt="Plant 1"
                width="100%"
                height="100%"
              />
            </div>
            <div style={footerStyles.thumb}>
              <img
                src="https://th.bing.com/th/id/OIP.N_j5gmsfocSRJyUmdbBiSgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
                alt="Plant 2"
                width="100%"
                height="100%"
              />
            </div>
            <div style={footerStyles.thumb}>
              <img
                src="https://th.bing.com/th?id=OPAC.GKLrpl44Fs%2bvPw474C474&o=5&pid=21.1&w=160&h=220&dpr=1.3"
                alt="Plant 3"
                width="100%"
                height="100%"
              />
            </div>
            <div style={footerStyles.thumb}>
              <img
                src="https://images-cdn.ubuy.co.in/6350013de29af55b5f54e827-jc-nateva-16-34-tall-fake-plants.jpg"
                alt="Plant 4"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={footerStyles.contactSection}>
        <div style={footerStyles.contactInfo}>
          <h3 style={footerStyles.heading}><Link to="/contact" style={linkStyle}>Contact</Link></h3>
          <p style={footerStyles.contactText}>#501, 2nd Floor, 20th Main</p>
          <p style={footerStyles.contactText}>Marenahalli Main Road</p>
          <p style={footerStyles.contactText}>Opposite to Food Land</p>
          <p style={footerStyles.contactText}>Vijayanagar, Bengaluru, 560040</p>
          <p style={footerStyles.contactText}>+91-6362186496</p>
          <p style={footerStyles.contactText}>leafnownursery@gmail.com</p>
        </div>

        <div style={footerStyles.socialSection}>
          <h3 style={footerStyles.heading}>Connect</h3>
          <div style={footerStyles.socialIcons}>
            <FaFacebook style={footerStyles.icon} />
            <FaTwitter style={footerStyles.icon} />
            <FaInstagram style={footerStyles.icon} />
            <FaLinkedin style={footerStyles.icon} />
          </div>
        </div>
      </div>

      <div style={footerStyles.bottom}>
        <p>&copy; {new Date().getFullYear()} Leaf-Now Nursery. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
