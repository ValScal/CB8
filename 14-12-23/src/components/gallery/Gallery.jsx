import './index.css';

const imgGallery = [
  {
    id: 1,
    img: 'https://picsum.photos/300/200?11',
    title: 'Image Gallery',
  },
  {
    id: 2,
    img: 'https://picsum.photos/300/200?12',
    title: 'Image Gallery',
  },
  {
    id: 3,
    img: 'https://picsum.photos/300/200?13',
    title: 'Image Gallery',
  },
  {
    id: 4,
    img: 'https://picsum.photos/300/200?14',
    title: 'Image Gallery',
  },
];

const Gallery = () => {
  return (
    <div className='gallery'>
      <hr />
      <h2>Gallery</h2>
      <div className='imgs__wrapper'>
        {imgGallery.map((array) => (
          <img src={array.img} alt={array.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;