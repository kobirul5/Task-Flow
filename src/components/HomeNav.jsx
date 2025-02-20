import { Link } from "react-router-dom";

const HomeNav=() =>{
  return (
    <div className="flex justify-between items-center">
        <Link className="bg-green-400 w-full p-5 text-white"> Todo </Link>
        <Link className="bg-green-700 w-full p-5 text-white"> Progress </Link>
        <Link className="bg-green-900 w-full p-5 text-white"> Done </Link>
    </div>
  )
}
export default HomeNav;