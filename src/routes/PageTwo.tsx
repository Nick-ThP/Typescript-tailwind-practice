import { useState } from "react"

const PageTwo = () => {
    const [name, setName] = useState('')

    const submitHandler = (e: any) => {
      setName(e.target.value)
      e.preventDefault()
    }

    return (
      <>
        <div className="p-5">
          <h1>{name}</h1>
          <form onSubmit={submitHandler}>
            <input type="text" name="name" />
            <button type="submit" value="submit">Submit</button> 
          </form>
        </div>
      </>
    )
}

export default PageTwo
