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

  return (
    <main className="main-container">
      <span className="text-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
        dolor, consequatur neque sunt vero? Sed architecto labore officiis
        doloremque odit! Quas exercitationem sed distinctio molestiae at quam
        enim nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Odio accusantium dolorum reiciendis expedita ullam hic. Sequi molestias
        cum accusantium dolor officiis minima explicabo. Dolorum, distinctio
        aut? Praesentium modi nisi alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat repellendus sequi quia facere nam ratione
        unde culpa deleniti impedit placeat, sit exercitationem facilis
        perspiciatis porro consequuntur dolore eos numquam minus!
      </span>
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
