import React from "react";
import Reveal from '../reveal';

// Import foto lokal
import daus from "/src/assets/person/daus.jpg";
import qisthi from "/src/assets/person/Qisthi.jpg";
import arin from "/src/assets/person/arin.jpg";
import ela from "/src/assets/person/ela.jpg";
import kokom from "/src/assets/person/kokom.jpg";
import noval from "/src/assets/person/noval.jpg";
import Zaky from "/src/assets/person/Zaky.jpg";

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
      name: "Qisthi Azzahra",
      role: "Human Resource & Development",
      image: qisthi
    },
    {
      id: 3,
      name: "Ela Nur Ajijah",
      role: "Marketing Specialist",
      image: ela
    },
    {
      id: 4,
      name: "Marina Cinta Mentari",
      role: "Graphic Designer",
      image: arin
    },
    {
      id: 5,
      name: "Siti Nur Komariah",
      role: "Operations Staff",
      image: kokom
    },
    {
      id: 6,
      name: "Nauval Ramadan",
      role: "Operations Staff",
      image: noval
    },
    {
      id: 7,
      name: "Zaky Aulia Qolbi",
      role: "Full-Stack Developer",
      image: Zaky
    }
  ];

  return (
    <section className="team-section">
      
      {/* Reveal untuk Judul */}
      <Reveal delay={100}>
        <h2 className="team-title">Our Team</h2>
      </Reveal>

      {/* Reveal untuk Grid */}
      <Reveal delay={200}>
        <div className="team-grid">
          {team.map((person, index) => (
            
            // Reveal untuk setiap card (dengan delay berurutan)
            <Reveal key={person.id} delay={300 + index * 150}>
              <div className="team-card">
                <div className="team-img-box">
                  <img src={person.image} alt={person.name} />
                </div>

                <h3 className="team-name">{person.name}</h3>
                <p className="team-role">{person.role}</p>
              </div>
            </Reveal>

          ))}
        </div>
      </Reveal>
      
    </section>
  );
};

export default TeamSection;
