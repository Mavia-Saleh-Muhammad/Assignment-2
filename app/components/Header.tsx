import React from "react";
import Link from "next/link";

const Header = ()=>{
    return(
        <div>
            <ul className="flex justify-center bg-slate-500 p-5 font-bold text-white">
                <li className="mr-20 hover:bg-yellow-600 ..."><Link href="#">Home</Link></li>
                <li className="mr-20 hover:bg-yellow-600..."><Link href="#">Contact</Link></li>
                <li className="mr-20 hover:bg-yellow-600..."><Link href="#">About</Link></li>
            </ul>
        </div>
    )
}

export default Header