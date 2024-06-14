import './globals.scss';
import StoreProvider from './StoreProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Мультимедийный центр теплоэнергетики</title>
      <body>
        <main>
          <StoreProvider>{children}</StoreProvider>
        </main>
        <div id="modals" />
      </body>
    </html>
  );
}
