import { Post } from './Post'

function App() {
  return (
    <div>
      <Post 
        author="João" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta totam nam impedit recusandae fugit accusamus ipsa, dolorem dolor id ducimus vero, voluptate perspiciatis molestiae magnam facilis, consequatur reprehenderit cumque!"
      />
      <Post 
        author="Paulo Muzy" 
        content="Nunca tomei bomba"
      />
    </div>
  )
}

export default App
