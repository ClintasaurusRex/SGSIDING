import "../components/styles/About.css";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className="ladder"></div> */}
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <section className="prose lg:prose-lg about-us">
          <p className="text-lg leading-relaxed">
            At SG Siding, we're more than just a siding company—we're a team of dedicated professionals committed to enhancing homes and businesses across the Cowichan Valley and surrounding areas. With years of experience and a passion for excellence, we've built a reputation for delivering top-tier siding solutions that combine durability, functionality, and aesthetic appeal.
          </p>
          
          <p className="text-lg leading-relaxed mt-4">
            Our skilled crew takes pride in every project, whether it's a small residential update or a large-scale commercial installation. We work closely with our clients to ensure their vision comes to life, offering expert guidance, quality craftsmanship, and superior materials that stand the test of time.
          </p>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="bg-white/10 rounded-lg p-8 backdrop-blur-sm about-bg">
          <h2 className="text-2xl font-semibold mb-6">What Sets Us Apart?</h2>
          <div className="grid md:grid-cols-2 gap-6 ">
            <div className="space-y-4 ">
              <div className="feature-card p-4 rounded-lg bg-white/5 about-grid">
                <h3 className="text-xl font-medium mb-2">Quality You Can Trust</h3>
                <p>We use only the finest siding products, ensuring your property is not only beautiful but also protected against the elements.</p>
              </div>
              <div className="feature-card p-4 rounded-lg bg-white/5 about-grid">
                <h3 className="text-xl font-medium mb-2">Expertise & Precision</h3>
                <p>Our team is highly trained and detail-oriented, guaranteeing a flawless finish on every job.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="feature-card p-4 rounded-lg bg-white/5 about-grid">
                <h3 className="text-xl font-medium mb-2">Customer-Centric Approach</h3>
                <p>From start to finish, your satisfaction is our top priority. We're here to listen, advise, and exceed your expectations.</p>
              </div>
              <div className="feature-card p-4 rounded-lg bg-white/5 about-grid">
                <h3 className="text-xl font-medium mb-2">Local Commitment</h3>
                <p>As proud members of the Cowichan Valley community, we're invested in making our region even more beautiful.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center space-y-4 about-close">
          <p className="text-lg leading-relaxed">
            Whether you're looking to boost curb appeal, improve energy efficiency, or protect your home with siding built to last, SG Siding is the name you can count on. We bring passion, professionalism, and unparalleled craftsmanship to every project we undertake.
          </p>
          
          <div className="mt-8">
            <p className="text-xl font-medium">
              Contact us today to learn more about how we can transform your property into something truly extraordinary.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 