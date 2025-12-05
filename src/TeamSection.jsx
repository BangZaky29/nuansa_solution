import React from "react";

// Import foto lokal
import daus from "./assets/person/daus.jpg";
import arin from "./assets/person/arin.jpg";
import ela from "./assets/person/ela.jpg";
import kokom from "./assets/person/kokom.jpg";
import noval from "./assets/person/noval.jpg";
import Zaky from "./assets/person/Zaky.jpg";



const TeamSection = () => {
  const team = [
    {
        id: 1,
        name: "Vikri Firdaus",
        role: "Founder",
        image: daus
    },
    {
      id: 2,
      name: "Ela Nur Ajijah",
      role: "Marketing Specialist",
      image: ela
    },
    {
      id: 3,
      name: "Marina Cinta Mentari",
      role: "Graphic Designer",
      image: arin
    },
    {
      id: 4,
      name: "Siti Nur Komariah",
      role: "Operations Staff",
      image: kokom
    },
    {
      id: 5,
      name: "Nauval Ramadan",
      role: "Operations Staff",
      image: noval
    },
    {
      id: 6,
      name: "Zaky Aulia Qolbi",
      role: "Full-Stack Developer",
      image: Zaky
    }

  ];

  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>

      <div className="team-grid">
        {team.map((person) => (
          <div className="team-card" key={person.id}>
            <div className="team-img-box">
              <img src={person.image} alt={person.name} />
            </div>

            <h3 className="team-name">{person.name}</h3>
            <p className="team-role">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
