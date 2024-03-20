import React from "react";
import EffectText from "../../EffectText";


const Fifth = () => {
  function scrollToBottom() {
    window.scrollTo({
      top: 10000,
      behavior: 'smooth'
  });
}

  return (
    <div className=' bg-[url("/area_bg2.jpg")] bg-cover bg-center text-white font-barlow'>
      <div className=" flex flex-col-reverse  lg:flex-row py-40  xl:py-40 2xl:py-40">
        <div className=" w-full flex flex-col items-end md:items-center">
          <div className="w-[90%] md:w-[60%] lg:w-[80%] 2xl:w-2/3">
            <div className=" text-3xl md:text-5xl font-bold mb-5">
              THE JOURNEY OF CJ-MIXIFY
            </div>
            <div className=" h-0  border-t-8 border-t-orange border-l-transparent border-l-8  border-r-transparent border-r-8 w-32 self-center mb-10"></div>
            <div className=" text-gray xs:text-lg mb-7 2xl:mb-10">
              We're thrilled to announce that we're gearing up to bring you a
              brand new and captivating mUSIC experience on our website. Get
              ready to embark on thrilling adventures, explore exciting worlds,
              and immerse yourself in the beautiful world of music.
            </div>
            <div className=" flex justify-between">
              <div className=" w-[60%] flex flex-col justify-between">
                <div className=" flex text-center justify-between w-[90%] mb-5 2xl:w-[60%]">
                  <div>
                    <div className=" xs:text-2xl font-bold">
                      <EffectText words={"50K"} />
                    </div>
                    <div className="text-xs xs:text-base font-bold text-gray">
                      Artists
                    </div>
                  </div>
                  <div>
                    <div className="  xs:text-2xl  font-bold">
                      <EffectText words={"5K+"} />
                    </div>
                    <div className="text-xs xs:text-base  font-bold text-gray">
                      ALBUM
                    </div>
                  </div>
                  <div>
                    <div className="  xs:text-2xl font-bold">
                      <EffectText words={"1+"} />
                    </div>
                    <div className="text-xs xs:text-base  font-bold text-gray">
                      SONGS
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" w-[70%] xs:w-1/2 rounded-sm overflow-hidden">
                    <div className="  text-center w-full py-3 bg-orange font-semibold" onClick={scrollToBottom}>JOIN US</div>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" w-[90px] h-[90px] 2xl:w-[137px] 2xl:h-[137px] relative ml-[30px] mr-[50px] my-0 animate-[spins_12s_linear_infinite] transition-all cursor-pointer">
                  <img src="/images/circle.svg" />
                  <svg
                    className=" overflow-visible absolute w-20 h-20 -translate-x-2/4 -translate-y-2/4 rotate-[-33deg] left-2/4 top-2/4 lg:w-[60px] lg:h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path
                      className=" fill-none"
                      id="textPath"
                      d="M 0,75 a 75,75 0 1,1 0,1 z"
                    ></path>
                    <text className=" fill-[#fff] uppercase text-[28px]  font-semibold tracking-[3px] ">
                      <textPath href="#textPath">africa comic house</textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:block flex justify-center " >
          <div className="lg:pl-5 xl:pl-20">
              <div
                className="group relative w-[140px] h-[160px] xs:w-[290px] xs:h-[300px] md:w-[450px] lg:w-[350px]  xl:w-[400px]  2xl:w-[500px] md:h-[400px] 2xl:h-[450px]"
              >
                <div className=" h-full bg-orange absolute z-10 bottom-12 -right-12 group-hover:rotate-0 transition-all duration-500 group-hover:bottom-0 group-hover:right-0 rotate-12 w-full"></div>
                <div className='  bg-[url("/images/_shape.png")] bg-cover bg-center absolute z-20 w-full h-full '>
                  <img
                    src="/images/fun.png"
                    className=" absolute bottom-10 left-[10%] z-30 w-[600px]"
                  />
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
