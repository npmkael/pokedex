import React from "react";

type TitleProps = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="text-center mx-auto mt-12 mb-[44px] font-inter">
      <h1 className="sm:text-[48px] text-[36px] font-bold dark:text-[#FAFAFA]">
        {title}
      </h1>
      {subtitle && (
        <p className="sm:text-[20px] text-[16px] dark:text-[#FAFAFA]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
