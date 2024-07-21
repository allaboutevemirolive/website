import React, { useState } from 'react';

const FilterList = () => {
  const [activeFilter, setActiveFilter] = useState('Web design');
  const filters = ['All', 'Web design', 'Applications', 'Web development'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <ul className="filter-list">
      {filters.map((filter, index) => (
        <li key={index} className="filter-item">
          <button
            data-filter-btn=""
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
