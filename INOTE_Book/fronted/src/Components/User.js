import { useContext, useEffect} from 'react'
import noteContext from '../Context/notes/noteContext'
export default function User() {
const a = useContext(noteContext)
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  } , [])
  return (
    <div>
      <h1>
        Welcome back to user screen {a.state.name}
      </h1>
    </div>
  )
}
