
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="logo">
            <img src="/printforge-logo.svg" alt="logo" />
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
