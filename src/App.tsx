import { useState, ChangeEvent } from 'react'
import './App.css'

export default function App() {

  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<string | null>(null)

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

    setLoading(true)
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/bot2', {
        method: 'POST',
        body: formData
      })

      const data = await response.text();
      console.log(data);
      setQuestions(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h2>Generate Questions and Answers</h2>
      <div className='file-container'>
        <input type='file' onChange={handleFileChange}></input>
        <button onClick={handleFileUpload}>Send File</button>
      </div>
      {loading ? <p>Loading...</p> : null}
      {questions ? <p>{questions}</p> : null}
    </>
  )
}
