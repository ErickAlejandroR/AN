import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const VideoForm = ({ addVideo }) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoId = url.split('v=')[1];
    addVideo({ id: videoId, title });
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="video-form">
      <h2>Agregar Nuevo Video</h2>
      <input
        type="text"
        placeholder="URL del Video"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Título del Video"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Agregar Video</button>
    </form>
  );
};

export default VideoForm;
