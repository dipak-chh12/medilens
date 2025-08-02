import React from 'react';

const Feedback = ({ content }) => {
  const formatContent = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    let html = '';
    let inList = false;

    lines.forEach(line => {
      if (line.startsWith('* ')) {
        if (!inList) {
          html += '<ul>';
          inList = true;
        }
        const listItem = line.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html += `<li>${listItem}</li>`;
      } else {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        html += `<p>${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
      }
    });

    if (inList) {
      html += '</ul>';
    }

    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={formatContent(content)} />;
};

export default Feedback;