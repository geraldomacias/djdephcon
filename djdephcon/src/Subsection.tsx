import * as React from 'react';

interface SubsectionProps {
  id: string;
  title: string;
  content: string;
};

const Subsection: React.FC<SubsectionProps> = ({ id, title, content }) => {
  return (
    <div className="subsection" id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Subsection;
