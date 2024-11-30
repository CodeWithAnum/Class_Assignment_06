import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"


function Courses () {
    return (
      <section className="mx-auto w-full w-[1280px] h-[1742px]">
            <div> 
              <div>

             <div>
              <h1 className="h-[67px] w-[768px] lg:px-[550px] px-[164px] ml-[-40px] mb-[30px] font-black lg:text-[56px] text-[32px] font-bold leading-[67.2px] font-roboto ">Courses</h1>
              <p className="w-[824px] h-[27px] font-normal font-roboto ml-[-40px] text-lg lg:pl-[542px] pl-[92px] mb-[44px]">Your Ultimate Guide to learning</p>
              <ul className="font-roboto w-[844px] h-[40px] text-base font-normal flex gap-8 lg:pl-[512px] pl-[72px]"> 
                <li className="underline decoration-black underline-offset-8 ml-[-30px]">Popular</li>
                <li>Recommended</li>
                <li>Best Price</li>
              </ul>
             </div>
                
                <div className="w-[2152px] h-[1132px] gap-[64px]">
                  <ul>
                    <li className="lg:flex gap-[38px]">
                <a>
                <Image className="my-[46px] lg:w-[416px] lg:h-[534px] w-[366px] h-[524px]" 
                src={"/image/Card.svg"} alt="hero-image" width={416} height={534}/>
                </a>

                <a>
                <Image className="my-[46px] lg:w-[416px] lg:h-[534px] w-[366px] h-[524px]" 
                src={"/image/Card (1).svg"} alt="hero-image" width={416} height={534}/>
                </a>

                <a>
                <Image className="my-[46px] lg:w-[416px] lg:h-[534px] w-[366px] h-[524px]" 
                src={"/image/Card (2).svg"} alt="hero-image" width={416} height={534}/>
                </a>
                </li>
                <li className="flex gap-[38px]">
                <a>
                <Image className="my-[46px] hidden sm:block" 
                src={"/image/Card (3).svg"} alt="hero-image" width={416} height={534}/>
                </a>

                <a>
                <Image className="my-[46px] hidden sm:block" 
                src={"/image/Card (4).svg"} alt="hero-image" width={416} height={534}/>
                </a>

                <a>
                <Image className="my-[46px] hidden sm:block" 
                src={"/image/Card (5).svg"} alt="hero-image" width={416} height={534}/>
                </a>

                </li>
                </ul>
                </div>

               <div className="lg:mt-[134px] lg:ml-[584px] mt-[564px] ml-[104px]">
                <Button variant="outline" className="h-[48px] w-[155px] border-black">View All Courses</Button>


             </div>

              </div>
            </div>

    </section>
    

    )
}

export default Courses;