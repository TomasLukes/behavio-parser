import BehavioLogo from "@/public/assets/icons/behavio_labs_logo.png";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex items-center gap-4">
      <Image src={BehavioLogo} alt="Behavio labs logo" className="size-20" />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">S-Expression visualization</h1>
        <p className="text-xl">
          Learn how your expressions{" "}
          <span className="relative">
            behave
            <span className="absolute -bottom-1 left-0 w-16 h-1 -skew-y-6 bg-blue-500" />
          </span>{" "}
          in just a minute ⏱️
        </p>
      </div>
    </section>
  );
};

export default Intro;
