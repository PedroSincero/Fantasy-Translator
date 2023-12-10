import './App.css'
import { createRef, useState } from "react"
import { createFileName, useScreenshot } from 'use-react-screenshot'

function App() {

  const ref = createRef(null);
  const [text, setText] = useState('');
  const [image, takeScreenshot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0
  });

  const download = (image, { name = 'sampleimage', extension = 'png' } = {}) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  }

  const downloadScreenshot = () => {
    takeScreenshot(ref.current).then(download)
  }

  return (
    <div>
      <h1>Tradutor de Codigo Chuthulo</h1>
        <textarea name="text" id="text" onChange={({target: {value}}) => setText(value)} />
      
      <div>
        <button type="button" onClick={downloadScreenshot}>Screenshot</button>
        <div className='dragonAlphabet' ref={ref}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default App
