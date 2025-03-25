import '../components/styles/About.css';

export default function About() {
  return (
    <div className='about-container'>
      <h1 className='about-title'>About Us</h1>

      <div className='about-content'>
        {/* Introduction */}
        <section className='about-intro'>
          <div className='intro-card'>
            <p className='intro-text'>
              At SG Siding, we're more than just a siding company—we're a team
              of dedicated professionals committed to enhancing homes and
              businesses across the Cowichan Valley and surrounding areas. With
              years of experience and a passion for excellence, we've built a
              reputation for delivering top-tier siding solutions that combine
              durability, functionality, and aesthetic appeal.
            </p>

            <p className='intro-text'>
              Our skilled crew takes pride in every project, whether it's a
              small residential update or a large-scale commercial installation.
              We work closely with our clients to ensure their vision comes to
              life, offering expert guidance, quality craftsmanship, and
              superior materials that stand the test of time.
            </p>

            <div className='certification-badge'>
              <p>
                S.G Exteriors is fully covered with liability insurance and WCB.
              </p>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className='features-section'>
          <h2 className='features-title'>What Sets Us Apart?</h2>
          <div className='title-underline'></div>

          <div className='features-grid'>
            <FeatureCard
              title='Quality You Can Trust'
              description='We use only the finest siding products, ensuring your property is not only beautiful but also protected against the elements.'
            />
            <FeatureCard
              title='Expertise & Precision'
              description='Our team is highly trained and detail-oriented, guaranteeing a flawless finish on every job.'
            />
            <FeatureCard
              title='Customer-Centric Approach'
              description="From start to finish, your satisfaction is our top priority. We're here to listen, advise, and exceed your expectations."
            />
            <FeatureCard
              title='Local Commitment'
              description="As proud members of the Cowichan Valley community, we're invested in making our region even more beautiful."
            />
          </div>
        </section>

        {/* Closing Statement */}
        <section className='closing-section'>
          <div className='closing-card'>
            <p className='closing-text'>
              Whether you're looking to boost curb appeal, improve energy
              efficiency, or protect your home with siding built to last, SG
              Siding is the name you can count on. We bring passion,
              professionalism, and unparalleled craftsmanship to every project
              we undertake.
            </p>

            <div className='cta-section'>
              <p className='cta-text'>
                Contact us today to learn more about how we can transform your
                property into something truly extraordinary.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className='feature-card'>
      <div className='feature-content'>
        <h3 className='feature-title'>{title}</h3>
        <p className='about-description'>{description}</p>
      </div>
    </div>
  );
}
