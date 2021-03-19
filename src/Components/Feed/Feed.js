import React from 'react'
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  // Função de scroll infinito de carregamento de novas imagens
  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const heightPage = document.body.offsetHeight - window.innerHeight;
        if (scroll > heightPage * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          // Função de callback para não ativar o scroll várias vezes seguidas
          setTimeout(() => {
            wait = false;
          }, 500);
        };
      }
    };

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map((page) => <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} /> )}
    </div>
  )
}

export default Feed
