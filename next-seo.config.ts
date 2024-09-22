import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    title: 'Fork Code Camp - Clone do Twitter',
    description:
      'Uma equipe de desenvolvedores front-end e back-end experientes está criando um projeto educacional - um clone do Twitter que permite aos usuários compartilhar seus pensamentos e ideias.',
    url: 'http://localhost:3000/',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/130981921?s=200&v=4',
        width: 200,
        height: 200,
        alt: 'Imagem do Clone do Twitter',
        type: 'image/jpeg',
      },
      {
        url: 'https://i.imgur.com/7oRcoh7.jpg',
        width: 1200,
        height: 630,
        alt: 'Destaque do Clone do Twitter',
        type: 'image/jpeg',
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
  ],
};

export default config;
