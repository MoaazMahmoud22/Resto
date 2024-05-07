import React from 'react'; // Import React for JSX syntax

interface ErrorProps {
  title: string;
  message: string;
}

const Error: React.FC<ErrorProps> = ({ title, message }) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
