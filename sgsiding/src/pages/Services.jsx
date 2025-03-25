import '../components/styles/Services.css';
import {
  sidingInstall,
  sidingRepair,
  sidingMaintenance,
} from '../assets/serviceInfo';

export default function Services() {
  return (
    <div className='services-container'>
      <h1 className='services-title'>Our Professional Services</h1>
      <div className='services-layout'>
        <ServiceCard
          title={sidingInstall.title}
          description={sidingInstall.description}
          services={sidingInstall.services}
          conclusion={sidingInstall.conclusion}
        />
        <div className='service-divider' />
        <ServiceCard
          title={sidingRepair.title}
          description={sidingRepair.description}
          services={sidingRepair.services}
          conclusion={sidingRepair.conclusion}
        />
        <div className='service-divider' />
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
    <div className='service-card'>
      <div className='service-card-header'>
        <h2 className='service-card-title'>{title}</h2>
        <div className='title-underline' />
        <p className='service-card-description'>{description}</p>
      </div>

      <div className='service-features'>
        {services.map((service, index) => (
          <div key={index} className='service-feature-item'>
            <div className='feature-header'>
              <div className='feature-icon'>•</div>
              <h3 className='feature-title'>{service.title}</h3>
            </div>
            <p className='feature-description'>{service.description}</p>
          </div>
        ))}
      </div>

      <div className='service-card-footer'>
        <div className='conclusion-border' />
        <p className='conclusion-text'>{conclusion}</p>
      </div>
    </div>
  );
}
