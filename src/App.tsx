import { useEffect,useState } from "react"
type PostProps={
  slip:{
    id:number,
    advice:string
  }
}

const App=()=> {
  const dummy:PostProps={
    slip:{
      id:1,
      advice:"...",
    }
  }
  const handleClick=()=>{
    getData()
  }
  const [advice,setAdvice]=useState(dummy)
    const getData=async():Promise<PostProps>=>{
      const res= await fetch("https://api.adviceslip.com/advice")
      const data=await res.json()
      setAdvice(data)
      return data
  }
    useEffect(()=>{
      getData()
    },[])
  return (
    <section className="advice-card">
      <h4>Advice <span>{advice.slip.id}</span></h4>
      <p><q>{advice?advice.slip.advice:"Loading..."}</q></p>
      <div className="pattern-divider">
         <svg id="desktop-img" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
         <svg id="mobile-img" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
      </div>
      <div onClick={handleClick} className="dice-div">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
      </div>
    </section>
  )
}

export default App
