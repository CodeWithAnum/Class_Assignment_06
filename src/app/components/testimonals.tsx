import React from "react";
import Image from "next/image";

function Testimonals () {
    return (
        <div className="bg-[#F7F7F7] lg:w-[1280px] lg:h-[830.89] lg:gap-[80px] h-[681.89px] w-[428px] gap-[48px] text-black font-roboto">
            <div className="px-[64px]">
                <h1 className="my-[18px] font-bold text-5xl hidden sm:block">Customer testimonials</h1>
                <h1 className="my-[18px] text-center font-bold text-[32px] ml-[-34px] lg:hidden">What Our Student Say</h1>
                <p className="my-[88px] mt-[34px] font-normal text-lg hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="my-[78px] mt-[24px] ml-[-52px] font-normal justify-center w-[361px] h-[54px] text-center text-[18px] lg:hidden">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div>

            <div className="flex gap-[32px] justify justify-center items-center">
            <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0 lg:w-[362.67px] lg:h-[321.89px] ml-[-48px] w-[330px] h-[318px]">
            <Image src={"/image/Content.svg"} alt="hero-image" width={362.67} height={321.89}/>

          </a>

          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0 hidden sm:block">
            <Image src={"/image/Content (1).svg"} alt="hero-image" width={362.67} height={321.89}/>

          </a>

          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0 hidden sm:block">
            <Image src={"/image/Content (2).svg"} alt="hero-image" width={362.67} height={321.89}/>

          </a>

            </div>

            <div>
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0 lg:w-[1312px] lg:h-[48px] w-[572px] h-[8px] lg:p-[64px] p-[34px]">
            <Image src={"/image/Slider Dots.svg"} alt="hero-image" width={72} height={8}/>

          </a>

          <a className="flex title-font font-medium items-center ml-[246px] text-black mb-4 md:mb-0 lg:w-[111px] lg:h-[48px] ml-[302px] m-[-64px] lg:ml-[1128px] lg:m-[-84px]">
            <Image src={"/image/Slider Buttons.svg"} alt="hero-image" width={72} height={8}/>

          </a>

          </div>

        </div>
    )
}

export default Testimonals;