import './globals.css';

export const metadata = {
  title: 'Nexus Studio',
  description: 'Portafolio de Nexus Studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="home-personal">{children}</body>
    </html>
  );
}