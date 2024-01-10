import { useParams } from "react-router-dom"
const User = () => {
    const {userid} = useParams();
  return (
    <div className="text-center bg-pink-400 p-4 text-xl">User: {userid}</div>
  )
}

export default User