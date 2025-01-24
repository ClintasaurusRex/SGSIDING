import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";

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
  );
}

function CarouselSlide({ slide }) {
  return (
    <CarouselItem>
      <div className="p-1">
        <img
          src={slide.src}
          alt={slide.alt}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
    </CarouselItem>
  );
}
