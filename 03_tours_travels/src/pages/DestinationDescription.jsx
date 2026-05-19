import { useParams } from "react-router"

const DestinationDescription = () => {
    const { slug } = useParams();
  return (
    <div>
        <h1 className="text-4xl text-center">Welcome to {slug}</h1>
    </div>
  )
}

export default DestinationDescription