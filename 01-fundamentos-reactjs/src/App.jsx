import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="João" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta totam nam impedit recusandae fugit accusamus ipsa, dolorem dolor id ducimus vero, voluptate perspiciatis molestiae magnam facilis, consequatur reprehenderit cumque!"
          />
          <Post 
            author="Paulo Muzy" 
            content="Nunca tomei bomba"
          />
        </main>
      </div>
    </div>
  )
}

export default App

