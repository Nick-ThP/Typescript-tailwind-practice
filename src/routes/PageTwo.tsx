import { useState } from "react"

const PageTwo = () => {
    const [name, setName] = useState('')

    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log(`Form submitted, ${name}`);    
    }

    return (
      <>
        <div className="p-5 bg-slate-500">
          <h1 className="p-5 bg-red-900">{name}</h1>
          <form className="p-5" onSubmit = {handleSubmit}>
            <input className="m-4" onChange = {(e) => setName(e.target.value)} value={name}></input>
            <button type='submit'>Click to submit</button>
          </form>
        </div>
      </>
    )
}

export default PageTwo
