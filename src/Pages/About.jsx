import React from "react";
import "../CSS/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import the icons you need
import Ab from "../Assets/Ab-pic.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const About = () => {
  // Define information about team members
  const teamMembers = [
    {
      photo: "src/Assets/Araku.jpg",
      name: "Chandra Kiran",
      role: "Admin",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      name: "Abhinav Mars",
      role: "Member",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      name: "Manikanta Rayudu",
      role: "Member",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      name: "S V S Apparao",
      role: "Member",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      name: "Nagaram Akash",
      role: "Member",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="about-us">
        <div
          style={{ backgroundImage: `url(${Ab})` }}
          className="about-content"
        >
          <h1>About Us</h1>
          <p>
            Welcome to <b>Pack your Bags</b>, your gateway to unforgettable
            adventures and unparalleled travel experiences. Our journey began
            with a shared passion for exploration and a commitment to sharing
            the world's wonders with you. At our Pack your Bags, we believe in
            the transformative power of travel. Our dedicated team of
            professionals, including expert tour guides, creative minds, and
            customer support enthusiasts, works tirelessly to curate exceptional
            trips that go beyond ordinary sightseeing. We aim to provide you
            with immersive experiences that leave lasting memories.
          </p>
          <p>
            Join us in discovering the beauty of our planet, one destination at
            a time. Explore, learn, and create cherished memories with us.
            Welcome to the world of [Your Website Name], where every journey is
            an opportunity to connect with diverse cultures, explore stunning
            landscapes, and embrace the thrill of travel.
          </p>
        </div>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <FontAwesomeIcon icon={faUser} className="team-member-icon" />

              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
