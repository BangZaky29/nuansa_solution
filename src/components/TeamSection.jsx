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
  { id: 1, name: "FIrdaus", role: "Founder", image: daus },
  { id: 2, name: "Qisthi", role: "Human Resource & Development", image: qisthi },
  { id: 3, name: "Ela", role: "Marketing Specialist", image: ela },
  { id: 4, name: "Marina", role: "Graphic Designer", image: arin },
  { id: 5, name: "Siti", role: "Operations Staff", image: kokom },
  { id: 6, name: "Nauval", role: "Operations Staff", image: noval },
  { id: 7, name: "Zaky", role: "Full-Stack Developer", image: Zaky }
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((activeIndex + 1) % team.length);
  const prev = () => setActiveIndex((activeIndex - 1 + team.length) % team.length);

  return (
    <section className="team-section-halimoon">
      <Reveal delay={100}>
        <div className="section-badge">
          👥 Tim Profesional
        </div>
      </Reveal>

      <Reveal delay={140}>
        <h2 className="team-title-halimoon">Tim Kami</h2>
      </Reveal>

      <Reveal delay={180}>
        <p className="team-subtitle">
          Bertemu dengan para profesional berpengalaman yang siap membantu kesuksesan bisnis Anda
        </p>
      </Reveal>

      <Reveal delay={220}>
        <div className="carousel-wrapper-halimoon">
          <button 
            className="carousel-btn-halimoon left" 
            onClick={prev}
            aria-label="Previous team member"
          >
            ‹
          </button>
          <div className="carousel-halimoon">
            {team.map((person, index) => {
              const offset = index - activeIndex;
              const positionClass =
                offset === 0 ? "active" : offset === -1 ? "prev" : offset === 1 ? "next" : "hidden";

              return (
                <div
                  key={`${person.id}-${activeIndex}`}
                  className={`carousel-card-team-halimoon ${positionClass}`}
                >
                  <div className="team-img-box-halimoon">
                    <img src={person.image} alt={person.name} />
                  </div>
                  <h3 className="team-name-halimoon">{person.name}</h3>
                  <p className="team-role-halimoon">{person.role}</p>
                </div>
              );
            })}
          </div>
          <button 
            className="carousel-btn-halimoon right" 
            onClick={next}
            aria-label="Next team member"
          >
            ›
          </button>
        </div>
      </Reveal>
    </section>
  );
};

export default TeamSection;