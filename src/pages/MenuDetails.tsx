import { useSelector } from "react-redux"
import { RootState } from "../store"
import { Navigate, useNavigate } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import { BiArrowBack } from "react-icons/bi";

function MenuDetails() {
  const { menuDetail } = useSelector((state: RootState) => state.menu);
  const navigate = useNavigate();

  if(menuDetail) {
    return (
      <div className="w-full flex flex-col md:flex-row gap-4 relative pt-10">
        <button onClick={() => navigate(-1)} className="absolute top-0 left-0 py-1 px-4 bg-white rounded-lg">
          <BiArrowBack size={25} />
        </button>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <MenuCard menu={menuDetail}/>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3">
          <p><span className="font-semibold">Description: </span>{menuDetail.description}</p>
        </div>
      </div>
    )
  } else {
    return <Navigate to={'/'} replace={true} />
  }

}

export default MenuDetails