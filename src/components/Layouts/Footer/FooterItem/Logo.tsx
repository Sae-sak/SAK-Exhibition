import Image from "next/image";
import logo from "public/favicon/favicon.png";

export default function Logo() {
  return (
    <div className="font-medium text-gray-900 row-center title-font md:justify-start">
      <Image src={logo} alt="Home" width={32} height={32} />
      <h1 className="ml-3 text-xl">SAK Exhibtion</h1>
    </div>
  );
}
