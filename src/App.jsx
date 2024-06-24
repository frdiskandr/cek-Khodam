import { useState } from 'react'
import Kodams from './util/kodams/randKodams'
import { hitGroq } from './util/Api/groq'

import './App.css'

function App() {
  const [name, setName] = useState("")
  const [kodam, setKodam] = useState("")
  const [deskription, setDescription] = useState("")

  function inputName(e) {
    setName(e.target.value)
  }

  const submit = async (e) => {
    e.preventDefault()
    setKodam(Kodams()) 
    setDescription("loading..")
    const Groq = await hitGroq(kodam)
    setDescription(Groq)
  }

  return (
    <>
      <div className="main">
        <h1>Cek Khodam</h1> 
        <img src="https://i.ytimg.com/vi/-r4CWnSJWNE/maxresdefault.jpg"
          alt="gambar" />
        <form onSubmit={submit}>
          <input type="text" name='inputName'
            onChange={inputName}
            placeholder='masukan nama anda' />
          <button type='submit'>Cek</button>
        </form>
        <p className='result'><b>{name}</b> anda dipilih oleh:</p>
        <h3> <b> khodam {kodam}</b></h3>
        <p>
        {deskription}
        </p>
     </div>
    </>
  )
}

export default App
