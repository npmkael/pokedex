import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="flex flex-col w-[50%] items-center justify-center">
        <div className="leading-[1.1] mb-16 max-[400px] w-[400px]">
          <h1 className="font-bold text-[12vw] text-center">404</h1>
          <p className="text-[0.9vw] text-center text-[#555555]">
            The page you are looking for was moved, removed renamed or might
            never existed.
          </p>
        </div>
        <Link to="/" className="flex items-center font-semibold gap-1 group">
          <ArrowLeft
            className="group-hover:-translate-x-1 transition-all duration-150"
            size={19}
          />
          Go back
        </Link>
      </div>
      <div className="w-[50%]">
        <img src="/error-not-found.jpg" alt="" />
      </div>
    </div>
  );
};

export default PageNotFound;
