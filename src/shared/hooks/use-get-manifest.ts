import { useLayoutEffect } from 'react';

export function useManifest() {
  useLayoutEffect(() => {
    const manifest = {
      name: "Hola",
      icons: [
    {
        src: `${window.location.origin}/HolaFashion/icons/icon-144x144.webp`,
        sizes: "144x144",
        type: "image/webp"
    }
  ],
  start_url: `${window.location.origin}/HolaFashion/`,
  id: `/v1`,
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#000000"
};
    const content = encodeURIComponent(JSON.stringify(manifest));
    const url = "data:application/manifest+json," + content;

    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'manifest');
    linkEl.setAttribute('href', url);

    document.head.appendChild(linkEl);

    // Опционально: очистка при размонтировании компонента
    return () => {
      if (linkEl.parentNode) {
        linkEl.parentNode.removeChild(linkEl);
      }
    };
  }, []);

}

