import React, { useState, useEffect } from 'react';
import IceCreamLogo from '../assets/Ice Cream (3).png';

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'fixed',
    top: '1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
  },
  navContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.5rem 1.5rem',
    background: 'rgba(10, 10, 10, 0.7)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '999px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
    transition: 'all 0.3s ease',
  },
  logo: {
    height: '40px',
    width: '40px',
  },
  brandName: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '1rem',
    color: 'var(--color-foreground)',
  },
};

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={{ ...styles.navContent, opacity: scrolled ? 1 : 0.8 }}>
        <img src={IceCreamLogo} alt="MRVS Logo" style={styles.logo} />
        <span style={styles.brandName}>Kuya Cris Lechon House</span>
      </div>
    </nav>
  );
};
