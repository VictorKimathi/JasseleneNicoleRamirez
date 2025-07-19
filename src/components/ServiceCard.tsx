import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const ServiceCard = ({
  title,
  description,
  icon
}: ServiceCardProps) => {
  return <div className="bg-white border border-gray-100 p-6 rounded shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
export default ServiceCard;