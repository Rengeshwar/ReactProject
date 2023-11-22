import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaUser,
  FaMapMarkerAlt,
  FaLanguage,
  FaSignInAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaQuestionCircle,
  FaRupeeSign,
} from 'react-icons/fa';

const Navbar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [atmBranchLocation, setAtmBranchLocation] = useState(null);

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);

    if (itemName === 'Find ATM/Branch') {
      setAtmBranchLocation({ lat: 40.7128, lng: -74.0060 }); // Example coordinates for New York City
    }
  };

  const navbarStyle = {
    backgroundColor: 'skyBlue',
    padding: '10px',
  };
  const navigate = useNavigate();
  const logg = (event) => {
    event.preventDefault();
    navigate('/Sign');
    
  };
  const ulStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const liStyle = {
    display: 'inline',
    cursor: 'pointer',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
  };

  const linkHoverStyle = {
    borderBottom: '2px solid white',
  };
  const back={
    backgroundImage:'url("https://s44650.pcdn.co/wp-content/uploads/2023/07/big-bank-comeback-1200-1667308252-1.jpg")',
   //backgroundColor:'#4CAF50',
    backgroundSize:'cover',
    color:'white',
  }
  const about={
    backgroundImage:'url("https://s44650.pcdn.co/wp-content/uploads/2023/07/big-bank-comeback-1200-1667308252-1.jpg")',
  // backgroundColor:'#4CAF50',
    backgroundSize:'cover',
    color:'white',
  }
  const lang={
    backgroundImage:'url("https://s44650.pcdn.co/wp-content/uploads/2023/07/big-bank-comeback-1200-1667308252-1.jpg")',
   //backgroundColor:'#4CAF50',
    backgroundSize:'cover',
    color:'white',
  }
  const cont={
    backgroundImage:'url("https://s44650.pcdn.co/wp-content/uploads/2023/07/big-bank-comeback-1200-1667308252-1.jpg")',
   //backgroundColor:'#4CAF50',
    backgroundSize:'cover',
    color:'white',
  }

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'Home':
        return (
          <div style={back}>

          <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the content for the Home page.</p>
            <p>Feel free to explore our services and products.</p>
            <p>Contact us if you have any questions.</p>

            <div>
              <h2>Loan Plans</h2>

              <div>
                <h3>Personal Loans</h3>
                <p>
                  Explore our flexible personal loan options tailored to meet your financial needs.
                </p>
                <p>
                  <FaInfoCircle /> Low-interest rates and easy repayment plans.
                </p>
                <p>
                  <FaRupeeSign /> Interest Percentage: 8% per annum
                </p>
              </div>

              <div>
                <h3>Home Mortgages</h3>
                <p>
                  Find the perfect home mortgage solution with competitive rates and expert guidance.
                </p>
                <p>
                  <FaInfoCircle /> Options for first-time buyers and existing homeowners.
                </p>
                <p>
                  <FaRupeeSign /> Interest Percentage: 6.5% per annum
                </p>
              </div>

              <div>
                <h3>Business Loans</h3>
                <p>
                  Fuel your business growth with our specialized business loan programs.
                </p>
                <p>
                  <FaInfoCircle /> Tailored solutions for startups and established enterprises.
                </p>
                <p>
                  <FaRupeeSign /> Interest Percentage: 9.5% per annum
                </p>
              </div>
            </div>
          </div>
          </div>
        );
      case 'About Us':
        return (
          <div style={about}>
      <h2>About Our Company</h2>
      <p>Learn more about our company and its mission.</p>
      <p>Discover the values that drive our business.</p>
      <p>Meet the team behind our success.</p>

      <div>
        <h3>Our Mission</h3>
        <p>
          At Our Bank, our mission is to provide financial solutions that empower
          individuals and businesses to achieve their goals.
        </p>
        <p>
          <FaInfoCircle /> Committed to delivering excellence in banking services.
        </p>
      </div>

      <div>
        <h3>Our Values</h3>
        <p>
          We uphold the values of integrity, customer focus, innovation, and
          community engagement in everything we do.
        </p>
        <p>
          <FaQuestionCircle /> Learn more about our values <a href="#">here</a>.
        </p>
      </div>

      <div>
        <h3>Meet Our Team</h3>
        <p>
          Get to know the dedicated professionals who make Our Bank a trusted
          financial partner.
        </p>
        <p>
          <FaUser /> Explore our <a href="#">team page</a>.
        </p>
      </div>
    </div>
        );
      case 'Customer Care':
        return (
          <div style={cont}>
            <h2>Customer Care Information</h2>
            <p>Get assistance and support from our dedicated customer care team.</p>
            <p>Contact us through phone, email, or our support portal.</p>
            <p>We are here to help you with any inquiries or issues you may have.</p>

            <div>
              <h3>Contact Information:</h3>
              <p>
                <FaPhone /> Phone: 123-456-7890
              </p>
              <p>
                <FaEnvelope /> Email: support@yourbank.com
              </p>
            </div>

            <div>
              <h3>Service Hours:</h3>
              <p>
                <FaClock /> Monday to Friday: 9 AM - 5 PM
              </p>
            </div>

            <div>
              <h3>Frequently Asked Questions:</h3>
              <p>
                <FaQuestionCircle /> Visit our <a href="#">FAQ page</a> for common queries.
              </p>
            </div>
          </div>
        );

        case 'Find ATM/Branch':
        return (
          <div>
            <h2>Locate ATM/Branch</h2>
            <p>Find the nearest ATM or branch location for your convenience.</p>
            <p>Access our banking services in person at one of our branches.</p>
            <p>Use our ATMs for quick and secure transactions.</p>

            {atmBranchLocation && (
              <iframe
                title="ATM/Branch Location"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-73.98765432109876!3d40.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ3JzQ5LjkiTiA3M8KwMjUnMzguMCJX!5e0!3m2!1sen!2sus!4v1609459204589!5m2!1sen!2sus"
                allowFullScreen
              ></iframe>
            )}
          </div>
        );
        case 'Language':
  return (
    <div style={lang}>
      <h2>Language Options</h2>
      <p>Explore language preferences for a personalized banking experience.</p>
      <p>Select your preferred language from the options below:</p>

      <div>
        <h3>English</h3>
        <p>Our default language for a seamless banking experience.</p>
        <p>
          <FaLanguage /> Fluent in English? Stick with our default language.
        </p>
      </div>

      <div>
        <h3>Spanish</h3>
        <p>¡Hola! Choose Spanish for a language-friendly banking journey.</p>
        <p>
          <FaLanguage /> ¿Hablas español? Explore our services in Spanish.
        </p>
      </div>

      <div>
        <h3>French</h3>
        <p>Bienvenue! Opt for French for a sophisticated banking experience.</p>
        <p>
          <FaLanguage /> Parlez-vous français? Enjoy our services in French.
        </p>
      </div>

      <div>
        <h3>Other Languages</h3>
        <p>Discover additional language options to suit your preferences.</p>
        <p>
          <FaLanguage /> Explore more language choices tailored for you.
        </p>
      </div>
    </div>
  );

      // ... (existing cases)
      default:
        return <div>Select a navigation item</div>;
    }
  };

  const Login = () => {
    return (
      <div style={liStyle} onClick={() => handleNavItemClick('Login')}>
        <FaSignInAlt />
        <a href="#" style={linkStyle} onClick={logg}>
          Sign Up
        </a>
      </div>
    );
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <ul style={ulStyle}>
          <li style={liStyle} onClick={() => handleNavItemClick('Home')}>
            <FaHome />
            <a href="#" style={linkStyle}>
              Home
            </a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('About Us')}>
            <FaInfoCircle />
            <a href="#" style={linkStyle}>
              About Us
            </a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('Customer Care')}>
            <FaUser />
            <a href="#" style={linkStyle}>
              Customer Care
            </a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('Find ATM/Branch')}>
            <FaMapMarkerAlt />
            <a href="#" style={linkStyle}>
              Find ATM/Branch
            </a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('Language')}>
            <FaLanguage />
            <a href="#" style={{ ...linkStyle, ...linkHoverStyle }}>
              Language
            </a>
          </li>
          <Login />
        </ul>
      </nav>

      <div style={{ padding: '20px' }}>{renderContent()}</div>
    </div>
  );
};

export default Navbar;
