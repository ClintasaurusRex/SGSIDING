import '../components/styles/Services.css';
import {
  sidingInstall,
  sidingRepair,
  sidingMaintenance,
} from '../assets/serviceInfo';

export default function Services() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Our Services</h1>
      <div className='flex flex-col gap-6'>
        <ServiceCard
          title={sidingInstall.title}
          description={sidingInstall.description}
          services={sidingInstall.services}
          conclusion={sidingInstall.conclusion}
        />
        <ServiceCard
          title={sidingRepair.title}
          description={sidingRepair.description}
          services={sidingRepair.services}
          conclusion={sidingRepair.conclusion}
        />
        <ServiceCard
          title={sidingMaintenance.title}
          description={sidingMaintenance.description}
          services={sidingMaintenance.services}
          conclusion={sidingMaintenance.conclusion}
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, description, services, conclusion }) {
  return (
    <div className='p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow services-grid'>
      <div className='service-title'>
        <h2 className='text-xl font-semibold mb-3 '>{title}</h2>
        <p className='text-white'>{description}</p>
      </div>

      <div className='flex flex-col gap-6'>
        {services.map((service, index) => (
          <div key={index} className='p-4 border rounded-lg'>
            <h3 className='font-semibold mb-2'>{service.title}</h3>
            <p className='text-xl text-white'>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='service-conclusion'>
        <p className='text-white'>{conclusion}</p>
      </div>
    </div>
  );
}
