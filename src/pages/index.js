import Head from "next/head";
import { motion } from "framer-motion";

const Fruits = ({ name, x, y, className }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold text-dark
      py-2 px-3 shadow-dark  cursor-pointer absolute ${className}
      sm:py-1 sm:text-xs`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Circle</title>
        <meta name="description" content="Animated Circle" />
      </Head>
      <main className="max-w-[800px] mx-auto flex flex-col justify-center items-center text-dark p-6 sm:p-2">
        <h1 className="text-6xl pb-12 sm:text-4xl sm:pb-3">Animated Circle</h1>
        <div
          className="w-full h-[80vh] relative flex items-center justify-center rounded-full bg-circleLight 
        sm:bg-circleLightSm sm:h-[50vh]"
        >
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-5 px-3
            sm:text-xs sm:py-2 sm:px-2"
            whileHover={{ scale: 1.05 }}
          >
            Fruits
          </motion.div>

          <Fruits name="Apple" x="-24vw" y="2vw" className="bg-[#ef4444] " />
          <Fruits name="Banana" x="-10vw" y="-10vw" className="bg-[#FFE135]" />
          <Fruits name="Orange" x="18vw" y="6vw" className="bg-[#FFA500]" />
          <Fruits name="Grape" x="16vw" y="18vw" className="bg-[#6F2DA8]" />
          <Fruits
            name="Strawberry"
            x="-18vw"
            y="-15vw"
            className="bg-[#FC5A8D]"
          />
          <Fruits
            name="Pineapple"
            x="21vw"
            y="-12vw"
            className="bg-[#563C0D]"
          />
          <Fruits name="Mango" x="8vw" y="-5vw" className="bg-[#fbbf24]" />
          <Fruits
            name="Watermelon"
            x="0vw"
            y="-19vw"
            className="bg-[#4CAF50]"
          />
          <Fruits name="Peach" x="-15vw" y="12vw" className="bg-[#FFCBA4]" />
          <Fruits name="Kiwi" x="4vw" y="13vw" className="bg-[#8EE53F]" />
        </div>
      </main>
    </>
  );
}
