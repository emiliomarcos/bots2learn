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
    if (!file) {
      console.log('Please select file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/bot2', {
        method: 'POST',
        body: formData
      })

      const data = await response.text();
      console.log(data);

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h2>Generate Questions and Answers</h2>
      <div className='file-container'>
        <input type='file' onChange={handleFileChange}></input>
        <button onClick={handleFileUpload}>Send File</button>
      </div>
    </>
  )
}
