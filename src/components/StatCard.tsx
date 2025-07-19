import React from 'react';
interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}
const StatCard = ({
  value,
  label,
  icon
}: StatCardProps) => {
  return <div className="bg-white border border-gray-100 p-6 rounded shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        {icon && <div className="text-blue-600 mr-3">{icon}</div>}
      </div>
      <div className="text-3xl font-bold text-black mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>;
};
export default StatCard;