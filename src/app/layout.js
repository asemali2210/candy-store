import 'bootstrap/dist/css/bootstrap.min.css';
import '@/sass/main.scss';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
