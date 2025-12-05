import React from "react";

// Import foto lokal
import daus from "./assets/person/daus.jpg";
import arin from "./assets/person/arin.jpg";
import ela from "./assets/person/ela.jpg";
import kokom from "./assets/person/kokom.jpg";
import noval from "./assets/person/noval.jpg";



const TeamSection = () => {
  const team = [
    {
        id: 1,
        name: "Daus",
        role: "Direktur Utama",
        image: daus
    },
    {
      id: 2,
      name: "Arin",
      role: "Staff Designer",
      image: arin
    },
    {
      id: 3,
      name: "Ela",
      role: "Staff Marketing",
      image: ela
    },
    {
      id: 4,
      name: "Kokom",
      role: "Staff Operational",
      image: kokom
    },
    {
      id: 5,
      name: "Noval",
      role: "Staff Operational",
      image: noval
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
