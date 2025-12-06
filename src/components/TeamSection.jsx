import React, { useState } from "react";
import Reveal from "../reveal";

// Import foto lokal
import daus from "/src/assets/person/daus.jpg";
import qisthi from "/src/assets/person/Qisthi.jpg";
import arin from "/src/assets/person/arin.jpg";
import ela from "/src/assets/person/ela.jpg";
import kokom from "/src/assets/person/kokom.jpg";
import noval from "/src/assets/person/noval.jpg";
import Zaky from "/src/assets/person/Zaky.jpg";

const team = [
  { id: 1, name: "Vikri Firdaus", role: "Founder", image: daus },
  { id: 2, name: "Qisthi Rahman", role: "Human Resource & Development", image: qisthi },
  { id: 3, name: "Ela Nur Ajijah", role: "Marketing Specialist", image: ela },
  { id: 4, name: "Marina Cinta Mentari", role: "Graphic Designer", image: arin },
  { id: 5, name: "Siti Nur Komariah", role: "Operations Staff", image: kokom },
  { id: 6, name: "Nauval Ramadan", role: "Operations Staff", image: noval },
  { id: 7, name: "Zaky Aulia Qolbi", role: "Full-Stack Developer", image: Zaky }
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((activeIndex + 1) % team.length);
  const prev = () => setActiveIndex((activeIndex - 1 + team.length) % team.length);

  return (
    <section className="team-section">
      <Reveal delay={100}>
        <h2 className="team-title">Our Team</h2>
      </Reveal>

      <Reveal delay={200}>
        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={prev}>‹</button>
          <div className="carousel">
            {team.map((person, index) => {
              const offset = index - activeIndex;
              const positionClass =
                offset === 0 ? "active" : offset === -1 ? "prev" : offset === 1 ? "next" : "hidden";

              return (
                <div
                  key={`${person.id}-${activeIndex}`} // key dinamis untuk trigger animasi
                  className={`carousel-card ${positionClass}`}
                >
                  <div className="team-img-box">
                    <img src={person.image} alt={person.name} />
                  </div>
                  <h3 className="team-name">{person.name}</h3>
                  <p className="team-role">{person.role}</p>
                </div>
              );
            })}
          </div>
          <button className="carousel-btn right" onClick={next}>›</button>
        </div>
      </Reveal>
    </section>
  );
};

export default TeamSection;