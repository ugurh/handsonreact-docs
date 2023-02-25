import React, { useEffect, useState } from "react";
import { photoAPI } from "./PhotosApi";

const PhotoList = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const data = {
    albumId: 1,
    title: "New Photo",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    photoAPI
      .getAllPhoto(1, 5)
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <h3>{photo.title}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default PhotoList;
