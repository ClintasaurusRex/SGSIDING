import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";
import "../styles/Siding.css";

export default function Siding() {
  const slides = [
    { id: 1, src: "../public/assets/sgsiding.jpeg", alt: "Slide 1" },
    { id: 2, src: "../public/assets/sgsiding2.jpeg", alt: "Slide 2" },
    { id: 3, src: "../public/assets/sgsiding3.jpeg", alt: "Slide 3" },
    { id: 4, src: "../public/assets/sgsiding4.jpeg", alt: "Slide 3" },
    { id: 5, src: "../public/assets/sgsiding5.jpeg", alt: "Slide 3" },
    { id: 6, src: "../public/assets/sgsiding6.jpeg", alt: "Slide 3" },
    { id: 6, src: "../public/assets/sgsiding7.jpeg", alt: "Slide 3" },
    { id: 7, src: "../public/assets/sgsiding8.jpeg", alt: "Slide 3" },
    { id: 8, src: "../public/assets/sgsiding9.jpeg", alt: "Slide 3" },
  ];

  const intro =
    "At Sg-Siding, we specialize in delivering top-notch siding services designed to protect and beautify your home or commercial property. With years of experience in the industry, our team is committed to providing exceptional craftsmanship, durable materials, and personalized service to meet your unique needs. \nWhether you're looking to enhance curb appeal, improve energy efficiency, or safeguard your property against the elements, we’re here to bring your vision to life. From consultation to installation, our process is seamless, reliable, and tailored to exceed your expectations.";

  return (
    <main className="main-container">
      <span className="text-content">{intro}</span>
      <div className="carousel-items">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselSlide
                key={slide.id}
                slide={slide}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}

function CarouselSlide({ slide }) {
  return (
    <CarouselItem>
      <div className="p-1">
        <img
          src={slide.src}
          alt={slide.alt}
          className="w-[441px] h-[332px] object-cover rounded-lg mx-auto"
        />
      </div>
    </CarouselItem>
  );
}
