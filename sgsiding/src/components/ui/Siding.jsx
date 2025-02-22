// import { Button } from "./button";
import '../styles/Siding.css';
import { slides, intro } from '../../assets/sidingImages';
// import { useNavigate } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel';

export default function Siding() {
  return (
    <main className='main-container'>
      <span className='text-content '>{intro}</span>

      <div className='carousel-items'>
        <Carousel className='w-full max-w-5xl mx-auto'>
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselSlide key={slide.id} slide={slide} />
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
      <div className='p-1'>
        <img src={slide.src} alt={slide.alt} className='rounded-lg mx-auto' />
      </div>
    </CarouselItem>
  );
}
