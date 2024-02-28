import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderIcon = ({icon}) => {
  return (
    <div className="flex items-center justify-center bg-gray-700 p-2 w-7 h-7 rounded-full cursor-pointer relative before:absolute before:contnet-[''] before:top-0 before:right-0 before:w-2 before:h-2 before:rounded-full before:bg-red-700 ">
        <FontAwesomeIcon icon={icon}/>
    </div>
  )
}

export default HeaderIcon