// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
    const data =useLoaderData(); 
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/codesofpreeti")
//       .then((res) => res.json())
//       .then((dat) => {
//         console.log(dat);
//         setData(dat);
//       });
//   }, []);

  return (
    <div className="text-center m-4 p-4 bg-pink-600 text-white text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
};

export default Github;

export const githubInfo = async() =>{
    const res = await fetch('https://api.github.com/users/codesofpreeti');
    return res.json();
}