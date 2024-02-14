import { VscSearch } from "react-icons/vsc";

export const Inputs = () => {
    return (
        <div className="flex items-center pb-8" >
            <VscSearch className="mr-2 text-2xl text-color1"/>
            <input className="bg-color10 text-center rounded-xl w-80 h-10 font-display hover:shadow-md outline-none border border-color4 hover:border-none"/>
        </div>
    )
}