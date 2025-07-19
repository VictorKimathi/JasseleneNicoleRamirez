import React from 'react';
interface PortfolioItemProps {
  title: string;
  publisher: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}
const PortfolioItem = ({
  title,
  publisher,
  description,
  imageUrl,
  link,
  tags = []
}: PortfolioItemProps) => {
  return <div className="bg-white border border-gray-100 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {imageUrl && <div className="h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-blue-600 font-medium mb-3">{publisher}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        {tags.length > 0 && <div className="mb-4 flex flex-wrap gap-2">
            {tags.map(tag => <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {tag}
              </span>)}
          </div>}
        {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
            Read Article →
          </a>}
      </div>
    </div>;
};
export default PortfolioItem;