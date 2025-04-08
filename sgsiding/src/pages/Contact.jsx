import '../components/styles/Contact.css';
import { useState } from 'react';

export default function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  // Email is split to make it harder for scrapers
  const emailParts = ['shaungersthof', 'er@gm', 'ail.com'];
  const blurredEmail = 'shaun•••••••••@gmail.com';

  const revealEmail = (e) => {
    e.preventDefault();
    setEmailRevealed(true);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-md mx-auto'>
        <div className='contact-card p-6 rounded-lg shadow-md'>
          <p className='mb-4'>You can reach us at:</p>

          <div className='space-y-2'>
            {emailRevealed ? (
              <a
                href={`mailto:${emailParts.join('')}`}
                target='_blank'
                rel='noopener noreferrer'
                className='block text-lg bg-white text-black hover:text-blue transition email-rev'
              >
                Email: {emailParts.join('')}
              </a>
            ) : (
              <button
                onClick={revealEmail}
                className='block text-sm text-gray-300 hover:text-white transition cursor-pointer focus:outline-none'
              >
                Email:{' '}
                <span className='filter blur-[2px] hover:blur-0 transition-all duration-300'>
                  {blurredEmail}
                </span>
                <span className='ml-2 text-xs text-black'>
                  (click to reveal)
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
