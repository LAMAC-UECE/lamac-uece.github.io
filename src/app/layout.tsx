import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/styles.css';
import LamacNavbar from '../components/LamacNavbar/LamacNavbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LaMaC',
  description: 'Laboratório de Matemática Computacional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>LaMaC - Laboratório de Matemática Computacional</title>
        <meta name="description" content="Bem-vindo ao LaMaC - Laboratório de Matemática Computacional da UECE. Descubra nossos projetos e pesquisas." />
        <meta name="keywords" content="LaMaC, Matemática Computacional, UECE, Pesquisa, Projetos" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="LaMaC - Laboratório de Matemática Computacional" />
        <meta property="og:description" content="Bem-vindo ao LaMaC - Laboratório de Matemática Computacional da UECE. Descubra nossos projetos e pesquisas." />
        <meta property="og:url" content="https://lamac-uece.github.io/" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <LamacNavbar />
        {children}
      </body>
    </html>
  )
}
