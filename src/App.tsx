import { useState, ChangeEvent } from 'react'
import './App.css'

export default function App() {

  const [file, setFile] = useState<File | null>(null)

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      console.error('Invalid file');
      setFile(null);
    }
  }

  async function handleFileUpload() {
    if (file) {
      const formData = new FormData();
      formData.append('file', file)

    } else {
      console.log('Please select file')
    }
    try {
      fetch('https://localhost:5000/bot2')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h2>Generate Questions and Answers</h2>
      <div className='file-container'>
        <input type='file' onChange={handleFileChange}></input>
        <button>Send File</button>
      </div>
    </>
  )
}
