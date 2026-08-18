import { useState, useEffect } from "react";

function Home() {
  /* 1. State for input search */
  const [search, setSearch] = useState("");

  /* 2. Counting chapters & Articles logic */
  const [counts, setCounts] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts(([chapters, articles]) => {
        const nextChapters = chapters < 18 ? chapters + 1 : 18;
        const nextArticles = articles < 264 ? articles + 4 : 264;

        return [nextChapters, nextArticles];
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  /* 3. Array to scan offences & their corresponding consequences */
  const OFFENSES_DATA = [
    {
      title: "Capital Offenses",
      type: "capital", // Red border CSS
      description: "Serious offenses carrying maximum legal penalties.",
      crimes: [
        "Murder",
        "Robbery with Violence",
        "Treason",
        "Attempted Murder",
      ],
    },
    {
      title: "Medium Offenses",
      type: "medium", // Orange border CSS
      description: "Serious crimes requiring formal court prosecution.",
      crimes: ["Theft", "Assault", "Fraud", "Burglary", "Bestiality"],
    },
    {
      title: "Petty Offenses",
      type: "petty", // Green border CSS
      description: "Minor legal violations and public nuisances.",
      crimes: [
        "Traffic Infractions",
        "Public Nuisance",
        "Trespassing",
        "Littering",
      ],
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <p>SHERIA</p>
          <h1>
            Ignorance of the law is no defense. Every citizen has a
            constitutional duty to respect, uphold, and defend the Constitution
            of Kenya.
          </h1>
        </div>

        <div className="hero-bottom">
          <div>
            <p className="small-title">YOUR RIGHTS MATTER</p>
            <p>
              <i>
                Understanding the law empowers you to know your rights,
                responsibilities and duties as a Kenyan citizen.
              </i>
            </p>
          </div>

          <img
            src="https://judiciary.go.ke/wp-content/uploads/2023/05/Judiciary-2-568x568.png"
            alt="Justice"
          />
        </div>
      </section>

      {/* WHY IT MATTERS SECTION */}
      <section className="why">
        <div className="heading">
          <p>
            <i>Why does it matter ?</i>
          </p>
          <h2>Why constitutional literacy matters</h2>
        </div>

        <div className="description">
          <p>
            Understanding the Constitution helps citizens understand their
            rights and responsibilities.
          </p>
          <p>
            It also promotes justice, accountability and responsible
            citizenship.
          </p>
        </div>
      </section>

      {/* CONSEQUENCES / OFFENSES SECTION */}
      <section className="consequences">
        <p>KNOW YOUR RIGHTS</p>
        <h2>The legal scale of consequences</h2>
        <p className="intro">
          The law affects every aspect of our lives. Understanding it helps us
          make better decisions.
        </p>

        {/* SEARCH BOX */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Type a crime (e.g., Murder, Theft, Littering)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CARDS LIST */}
        <div className="cards">
          {/* CARDS LIST */}
          <div className="cards">
            {OFFENSES_DATA.map((card) => {
              // 1. Filter crimes in this category that match what the user typed
              const matchedCrimes =
                search.trim() === ""
                  ? []
                  : card.crimes.filter((crime) =>
                      crime.toLowerCase().includes(search.toLowerCase()),
                    );

              const hasMatch = matchedCrimes.length > 0;

              return (
                <div
                  key={card.title}
                  className={`card card-${card.type} ${hasMatch ? "lift" : "empty"}`}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  {/* 2. List stays empty until a match is typed */}
                  <ul>
                    {matchedCrimes.map((crime) => (
                      <li key={crime} className="highlight">
                        {crime}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSTITUTION SECTION */}
      <section className="constitution">
        <div>
          <p>THE SUPREME LAW</p>
          <h2>
            The Constitution of Kenya 2010 is the ultimate shield for all
            citizens.
          </h2>
          <p>
            The Constitution protects fundamental rights and freedoms while
            establishing the responsibilities of every citizen.
          </p>

          <div className="numbers">
            <strong>2010</strong>
            <strong>{counts[0]} Chapters</strong>
            <strong>{counts[1]} Articles</strong>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1555374018-13a8994ab246"
          alt="Kenyan Constitution"
        />
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <p>YOUR RIGHTS. YOUR RESPONSIBILITY.</p>
        <h2>Equip yourself with legal wisdom today.</h2>
        <p>
          Knowing the law is the first step toward protecting your rights and
          becoming a responsible citizen.
        </p>

        <div>
          <button>EXPLORE THE LAW</button>
          <button className="outline">LEARN YOUR RIGHTS</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <h3>SHERIA</h3>
          <p>
            Promoting constitutional awareness and Constitutionalism makes a
            better Kenya .
          </p>
        </div>
        <div>
          <h3>Copy Right ©.</h3>
          <p> sheria kenya all rights reserved</p>
        </div>

        <div>
          <h4>LEGAL</h4>
          <p>Privacy Policy & terms</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
