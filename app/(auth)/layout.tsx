export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //no sidebar
    <main>
      {children}
    </main>
  );
}
