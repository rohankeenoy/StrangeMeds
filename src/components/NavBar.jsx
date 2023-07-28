import { useState,useEffect } from "react";
import "./NavBarStyle.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    useEffect(() => {
      function handleScroll() {
        const navigation = document.querySelector(".navigation");
        const scrollTop = window.scrollY;
  
        if (scrollTop === 0) {
          navigation.style.backgroundColor = "transparent";
          navigation.style.animation = "easeOut 1s";
        } else {
          navigation.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          navigation.style.animation = "easeInOut 2s";
        }
      }
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <nav className="navigation">
        <Link to = "/" className="brand-name">
          Strange Medicine
          </Link>
        
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to ="/Home"> Home </Link>
            </li>
            <li>
            <Link to ="/Listen"> Listen </Link>
            </li>
            <li>
            <Link to ="/Gallery"> Gallery </Link>
            </li>
            <li>
              <Link to="/Shows">Shows </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }