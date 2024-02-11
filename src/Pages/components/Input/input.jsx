import { VscSearch } from "react-icons/vsc";

export const Inputs = () => {
    return (
        <div className="flex items-center pb-8" >
            <input className="bg-color10 text-center rounded-xl w-80 h-10 font-display shadow-xl outline-none"/>
            <VscSearch className="fixed ml-2"/>
        </div>
    )
}