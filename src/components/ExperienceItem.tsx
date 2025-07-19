import React from 'react';
interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
}
const ExperienceItem = ({
  role,
  company,
  period,
  location,
  achievements
}: ExperienceItemProps) => {
  return <div className="mb-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <h3 className="text-xl font-bold">{role}</h3>
        <span className="text-gray-500 text-sm mt-1 md:mt-0">{period}</span>
      </div>
      <div className="text-blue-600 font-medium mb-3">
        {company}{' '}
        {location && <span className="text-gray-500">| {location}</span>}
      </div>
      <ul className="list-disc list-outside ml-5 text-gray-600 space-y-1">
        {achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
      </ul>
    </div>;
};
export default ExperienceItem;