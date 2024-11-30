import React from "react";
import Image from "next/image";

function MobileHeader () {
    return (
        <header className="h-[72px] w-[359px] pr-[24px] pl-[24px] border-b border-black bg-[#F7F7F7] lg:hidden ">
            <div className="flex justify-between items-center p-4">
            <div>
                <a>
                <Image src={"/image/Ddsgnr Library.svg"} className="ml-[-22px]" alt="hero-image" width={130.6} height={41}/>
                </a>
            </div>
            
            <div>
                <a>
                <Image src={"/image/Icon.svg"} alt="hero-image" width={48} height={48}/>
                </a>
            </div>
            </div>

        </header>
    )
}

export default MobileHeader;