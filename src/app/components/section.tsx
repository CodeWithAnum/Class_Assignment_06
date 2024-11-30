import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"


function Section () {
    return (
        <section className="text-black body-font font-roboto px-4">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl lg:text-6xl line-height-[57.6px] font-bold title-font mb-4 text-black">
            Explore Courses By Category
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-normal">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
          </div>
          <div className="flex flex-wrap -m-2 lg:w-[1280px] lg:h-[636px]">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] lg:w-[410.67px] w-[330px] h-[132px]">
                <Image src={"/image/Frame 292.svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font font-bold lg:font-semibold lg:text-xl text-[15px] pl-6">
                  Design & Development
                  </h2>
                  <p className="text-black text-[15px] lg:text-lg font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] lg:w-[410.67px] w-[330px] h-[132px]">
              <Image src={"/image/Frame 292 (1).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font lg:font-semibold font-bold text-[15px] lg:text-xl pl-6">
                  Marketing
                  </h2>
                  <p className="text-black lg:text-lg text-15px font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] lg:w-[410.67px] w-[330px] h-[132px]">
              <Image src={"/image/Frame 292 (2).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font lg:font-semibold font-bold text-[15px] lg:text-xl pl-6">
                  Development
                  </h2>
                  <p className="text-black lg:text-lg text-[15px] font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full hidden sm:block">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] w-[410.67px] h-[132px]">
              <Image src={"/image/Frame 292 (4).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font font-semibold text-xl pl-6">
                    Communication
                    </h2>
                  <p className="text-black text-lg font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full hidden sm:block">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] w-[410.67px] h-[132px]">
              <Image src={"/image/Frame 292 (5).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font font-semibold text-xl pl-6">
                  Digital Marketing
                  </h2>
                  <p className="text-black text-lg font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full hidden sm:block">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] w-[410.67px] h-[132px]">
              <Image src={"/image/Frame 292 (6).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font font-semibold text-xl pl-6">
                  Self Development
                  </h2>
                  <p className="text-black text-lg font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full hidden sm:block">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] w-[410.67px] h-[132px]">
              <Image src={"/image/Frame 292 (10).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font font-semibold text-xl pl-6">
                  Business
                  </h2>
                  <p className="text-black text-lg font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full hidden sm:block">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] w-[410.67px] h-[132px]">
              <Image src={"/image/Frame 292 (7).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font font-semibold text-xl pl-6">
                    Finance
                    </h2>
                  <p className="text-black text-lg font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full hidden sm:block">
              <div className="h-full flex items-center border-[#F7F7F7] border p-4 bg-[#F7F7F7] w-[410.67px] h-[132px]">
              <Image src={"/image/Frame 292 (8).svg"} alt="hero-image" width={100} height={100} />

                <div className="flex-grow space-x-6">
                  <h2 className="text-black title-font font-semibold text-xl pl-6">
                  Consulting
                  </h2>
                  <p className="text-black text-lg font-normal">50+ Courses Available</p>
                </div>
              </div>
            </div>

             <div className="lg:mx-[585px] ml-[82px] lg:ml-[544px] mx-[138px] text-base font-normal border-[black] rounded-lg w-[155px] h-[48px] text-center p-3">
                <Button variant="outline" className="h-[48px] w-[155px] mx-[4px] flex border-black">View All Courses</Button>

             </div>

          </div>
        </div>
      </section>
      
    )
}

export default Section;