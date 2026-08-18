function Home() {
  return (
    <>
      {/* HERO */}
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

      {/* WHY IT MATTERS */}
      <section className="why">
        <div className="heading">
          <p><i>Why does it matter ?</i></p>
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

      {/* CONSEQUENCES */}
      <section className="consequences">
        <p>KNOW YOUR RIGHTS</p>

        <h2>The legal scale of consequences</h2>

        <p className="intro">
          The law affects every aspect of our lives. Understanding it helps us
          make better decisions.
        </p>

        <div className="cards">
          <div className="card">
            <h3>Health Policies</h3>

            <p>Know your rights when accessing healthcare services.</p>

            <ul>
              <li>Right to healthcare</li>
              <li>Patient rights</li>
              <li>Access to information</li>
            </ul>
          </div>

          <div className="card">
            <h3>Criminal Policies</h3>

            <p>Understand how criminal law protects citizens and society.</p>

            <ul>
              <li>Right to a fair trial</li>
              <li>Presumption of innocence</li>
              <li>Legal representation</li>
            </ul>
          </div>

          <div className="card">
            <h3>Justice Policies</h3>

            <p>
              Learn how the justice system works and how citizens can access it.
            </p>

            <ul>
              <li>Access to justice</li>
              <li>Equality before the law</li>
              <li>Protection of rights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONSTITUTION */}
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
            <strong>6 Chapters</strong>
            <strong>264 Articles</strong>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1555374018-13a8994ab246"
          alt="Kenyan Constitution"
        />
      </section>

      {/* CTA */}
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
      <footer>
        <div>
          <h3>SHERIA</h3>
          <p>
            Promoting constitutional awareness and responsible citizenship in
            Kenya.
          </p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <p>About</p>
          <p>Resources</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>LEGAL</h4>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
