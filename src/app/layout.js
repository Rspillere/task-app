import { TaskProviver } from '@/context/TasksContext'
import Toaster from './Toaster'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Layout } from '@/components/Layaout'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TaskProviver>
        <body>
          <Navbar />
          <Layout>{children}</Layout>
          <Toaster/>
        </body>
      </TaskProviver>
    </html>
  )
}
