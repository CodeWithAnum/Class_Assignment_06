import React from "react";

function Achivement () {
    return (
        <section className="text-black body-font font-roboto h-auto">
          <div className="container px-5 py-24 mx-auto sm:px-2 sm:py-10">
         <div className="h-[136px] text-center">
          
            <h1 className="font-bold lg:text-4xl text-2xl line-height-[57.6px]">Our Achivements</h1>
            <p className="font-normal lg:text-lg hidden mt-[32px] sm:block mt-[44px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <p className="text-base font-normal mt-[32px] font-roboto lg:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
         </div>

  <div className="flex flex-wrap sm:flex-col text-center mt-[44px]">
    <div className="p-4 w-full">
      
        <h2 className="title-font font-bold text-4xl sm:text-2xl text-black">
          +200
        </h2>
        <p className="leading-relaxed font-normal">Courses</p>
      </div>
      <div className="p-4 sm:w-full">
        <h2 className="title-font font-bold text-4xl sm:text-2xl text-black">
          50K
        </h2>
        <p className="leading-relaxed font-normal">Mentors</p>
      </div>
      <div className="p-4 sm:w-full">
        <h2 className="title-font font-bold text-4xl sm:text-2xl text-black">
          370K
        </h2>
        <p className="leading-relaxed font-normal">Students</p>
      </div>
      <div className="p-4 sm:w-full">
        <h2 className="title-font font-bold text-4xl sm:text-2xl text-black">
          100+
        </h2>
        <p className="leading-relaxed font-normal">Recognition</p>
      </div>
    </div>
  </div>
</section>

    )
}

export default Achivement;