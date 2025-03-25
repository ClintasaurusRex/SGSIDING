import '../styles/Siding.css';
import { intro } from '../../assets/sidingImages';

export default function Siding() {
  return (
    <section className='hero-section'>
      <div className='hero-background'>
        <img src='/sgsiding5.jpeg' alt='SG Siding Hero' />
      </div>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <h1 className='hero-title'>S.G Custom Interiors</h1>
          <p className='hero-text'>{intro}</p>
        </div>
      </div>
    </section>
  );
}
