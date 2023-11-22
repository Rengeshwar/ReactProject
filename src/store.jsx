import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaUser, FaMapMarkerAlt, FaLanguage, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  const navbarStyle = {
    backgroundColor: '#4CAF50',
    padding: '10px',
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
    cursor: 'pointer', // Add cursor pointer to indicate clickable
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
  };

  const linkHoverStyle = {
    borderBottom: '2px solid white',
  };

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'Home':
        return (
          <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the content for the Home page.</p>
            <p>Feel free to explore our services and products.</p>
            <p>Contact us if you have any questions.</p>
          </div>
        );
      case 'About Us':
        return (
          <div>
            <h2>About Our Company</h2>
            <p>Learn more about our company and its mission.</p>
            <p>Discover the values that drive our business.</p>
            <p>Meet the team behind our success.</p>
          </div>
        );
      case 'Customer Care':
        return (
          <div>
            <h2>Customer Care Information</h2>
            <p>Get assistance and support from our dedicated customer care team.</p>
            <p>Contact us through phone, email, or our support portal.</p>
            <p>We are here to help you with any inquiries or issues you may have.</p>
          </div>
        );
      case 'Find ATM/Branch':
        return (
          <div>
            <h2>Locate ATM/Branch</h2>
            <p>Find the nearest ATM or branch location for your convenience.</p>
            <p>Access our banking services in person at one of our branches.</p>
            <p>Use our ATMs for quick and secure transactions.</p>
          </div>
        );
      case 'Language':
        return (
          <div>
            <h2>Language Options</h2>
            <p>Explore language preferences and settings for our platform.</p>
            <p>Select your preferred language for a personalized experience.</p>
            <p>We aim to provide a seamless experience for users worldwide.</p>
          </div>
        );
      default:
        return <div>Select a navigation item</div>;
    }
  };

  const Login = () => {
    return (
      <div style={liStyle} onClick={() => handleNavItemClick('Login')}>
        <FaSignInAlt />
        <a href="#" style={linkStyle}>Login</a>
      </div>
    );
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <ul style={ulStyle}>
          <li style={liStyle} onClick={() => handleNavItemClick('Home')}>
            <FaHome />
            <a href="#" style={linkStyle}>Home</a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('About Us')}>
            <FaInfoCircle />
            <a href="#" style={linkStyle}>About Us</a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('Customer Care')}>
            <FaUser />
            <a href="#" style={linkStyle}>Customer Care</a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('Find ATM/Branch')}>
            <FaMapMarkerAlt />
            <a href="#" style={linkStyle}>Find ATM/Branch</a>
          </li>
          <li style={liStyle} onClick={() => handleNavItemClick('Language')}>
            <FaLanguage />
            <a href="#" style={{ ...linkStyle, ...linkHoverStyle }}>Language</a>
          </li>
          <Login />
        </ul>
      </nav>

      <div style={{ padding: '20px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Navbar;
