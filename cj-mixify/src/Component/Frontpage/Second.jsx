import React from "react";
import { Link } from "react-router-dom";


const Second = ({ album }) => {
  const Tab = ({ e }) => {
    return (
      <div className=" mx-10 relative cursor-pointer border-[1px] border-darkgray rounded-sm overflow-hidden">
        <div className=" absolute top-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-0"></div>
        <div
          style={{ backgroundImage: `url(${e.images[0].url})` }}
          className=" bg-cover w-[200px] h-[200px]"
        ></div>
      </div>
    );
  };
  return (
    <div className=" pb-20 bg-black text-white flex flex-col items-center justify-start pt-20">
      <div className=" w-full flex flex-col items-center mb-10">
        <h1 className=" text-4xl font-bold">TOP MUSIC ALBUM</h1>
      </div>
      <div className=" flex flex-col md:flex-row">
        {album?.albums.map((e) => {

          return (
            <Link to={e.external_urls.spotify} className=" mb-5 md:mb-0" key={e.id}><div >
              <Tab e={e} />
            </div></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Second;
