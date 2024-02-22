import { VscSearch } from "react-icons/vsc";
import { useContext } from "react";
import { ShoppingCardContext } from "../Context";

export const Inputs = () => {
    const context = useContext(ShoppingCardContext)
    return (
        <div className="flex items-center pb-8" >
            <VscSearch className="mr-2 text-2xl text-color1"/>
            <input className="bg-color10 text-center rounded-xl w-80 h-10 font-display hover:shadow-md outline-none border border-color4 hover:border-none" onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        </div>
    )
}