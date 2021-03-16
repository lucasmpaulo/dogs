import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    // Esta função identifica o tamanho da tela e retorna verdadeiro ou falso se tem mais ou menos de 40rem (640px)
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    // Executa a função ao carregar o site no inicio
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  }, [media]);

  return match;
}

export default useMedia
