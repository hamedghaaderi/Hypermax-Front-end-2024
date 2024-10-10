import { Link } from "react-router-dom"

const MobileSubCategory = ({name}:any) => {
  return (
    <>
    <li className="leading-9 text-heading transition-colors duration-300 hover:text-primary">
        <Link to="/">{name}</Link>
    </li>
    </>
  )
}

export default MobileSubCategory