export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //anything here is permanent throughout. Acts as the home page
    <main>
        SIDEBAR
        {children}
    </main>
  );
}
