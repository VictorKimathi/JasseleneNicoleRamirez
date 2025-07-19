import React from 'react';
import { Link } from 'react-router-dom';
interface ArticleCardProps {
  title: string;
  category: string;
  image: string;
  publication: string;
  readTime: string;
  link?: string;
}
const ArticleCard = ({
  title,
  category,
  image,
  publication,
  readTime,
  link = '#'
}: ArticleCardProps) => {
  return <Link to={link} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-64 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute top-4 left-4">
            <span className="bg-adventure-orange text-white text-sm font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-forest mb-2 group-hover:text-adventure-orange transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{publication}</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>;
};
export default ArticleCard;