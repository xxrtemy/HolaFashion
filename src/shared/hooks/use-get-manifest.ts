import { useLayoutEffect } from 'react';

export function useManifest() {
  useLayoutEffect(() => {
    const manifest = {
      name: "Hola",
      icons: [
        {
          "src": `${window.location.origin}/HolaFashion/icons/icon-144x144.png`,
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": `${window.location.origin}/HolaFashion/icons/icon-192x192.png`,
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": `${window.location.origin}/HolaFashion/icons/icon-512x512.png`,
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
  start_url: `${window.location.origin}/HolaFashion/`,
  // id: `/v1`,
  scope: `${window.location.origin}`,
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#000000"
};
    const content = JSON.stringify(manifest);
    const blob = new Blob ([content],{
      type: 'application/manifest+json'
    })
    // const url = "data:application/manifest+json," + content;

    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'manifest');
    linkEl.setAttribute('href', URL.createObjectURL(blob));

    document.head.appendChild(linkEl);

    // Опционально: очистка при размонтировании компонента
    return () => {
      if (linkEl.parentNode) {
        linkEl.parentNode.removeChild(linkEl);
      }
    };
  }, []);

}

