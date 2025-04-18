import { useState, useEffect } from 'react';
import { fetchImages } from './api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (!value) return;
      const loadImages = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchImages(value, page);
        setImages((prev) => (page === 1 ? data.results : [...prev, ...data.results]));
        setLoadMore(data.results.length > 0);
      } catch (err) {
        setError('Error loading images');
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, [value, page]);

  const handleSearch = (newValue) => {
    setValue(newValue);
    setPage(1);
    setImages([]);
  };
  const loadEvenMore = () => setPage((prev) => prev + 1);
  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={setSelectedImage} />
      {loading && <Loader />}
      {loadMore && !loading && <LoadMoreBtn onClick={loadEvenMore} />}
      <ImageModal image={selectedImage} isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default App;
