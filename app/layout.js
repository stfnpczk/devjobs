import './globals.css';
import { Kumbh_Sans } from 'next/font/google';
import Header from './shared/Header';

import { JobProvider } from './context/JobContext';
import { ThemeProvider } from './context/ThemeContext';

export const kumbhSans = Kumbh_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Devjobs Web App',
  description:
    'This is a solution to the Devjobs web app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={`${kumbhSans.className} bg-background antialiased`}>
        <JobProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </JobProvider>
      </body>
    </html>
  );
}
