import Image from "next/image";
import Profile from "../../public/next.svg";
export default function Home() {
  console.log(Profile);
  return (
    <main>
      <h1>Image Optimization in Next js</h1>
      {/* <Image src={Profile} />
      <img src={Profile.src} /> */}
      <Image 
      src="https://as2.ftcdn.net/v2/jpg/07/23/14/93/1000_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg" 
      width={700} height={500} alt=""
      />
    </main>
  );
}
