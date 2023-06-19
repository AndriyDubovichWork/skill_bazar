import NavBar from './components/NavBar/NavBar';
import './globals.scss';

export const metadata = {
  title: 'Skill Bazar',
  description: 'Skill Bazar best freelance platform ever',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
