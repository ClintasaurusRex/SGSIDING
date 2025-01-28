import { Button } from "./button";
import "../styles/Siding.css";
import { slides, intro } from "../../assets/sidingImages";
import { useNavigate } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";

export default function Siding() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <main className="main-container">
      <span className="text-content">
        {intro} 
        <div className="service-contact">
          <Button onClick={() => handleNavigation('/services')}>
            Services
          </Button>
          <Button onClick={() => handleNavigation('/contact')}>
            Contact
          </Button>
        </div>
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
