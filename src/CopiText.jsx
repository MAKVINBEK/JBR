import React from 'react';

const CopyToClipboardButton = ({ textToCopy }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('Текст скопирован в буфер обмена!');
    } catch (err) {
      console.error('Ошибка при копировании текста: ', err);
    }
  };

  return (
    <button onClick={handleCopy}>
      Скопировать текст
    </button>
  );
};

export default CopyToClipboardButton;