export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard 
          title="Siding Installation"
          description="Professional installation of various siding materials including vinyl, fiber cement, and wood."
        />
        <ServiceCard 
          title="Siding Repair"
          description="Expert repair services for damaged or worn siding to maintain your home's protection and appearance."
        />
        <ServiceCard 
          title="Maintenance"
          description="Regular maintenance and inspection services to ensure your siding remains in optimal condition."
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 