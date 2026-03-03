import NextImage from "next/image";

import { Button } from "@/components";

import { clsx } from "clsx";

export type AboutUsDomainInformationProps = {
  className?: string;
};

export const AboutUsDomainInformation: React.FC<
  AboutUsDomainInformationProps
> = (props): React.JSX.Element => {
  return (
    <section className={clsx(props.className, "container-full flex gap-25")}>
      {/* Preview */}
      <div className="group h-[530px] w-[480px] overflow-hidden rounded-2xl">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-cover",
            "group-hover:transform-[scale(1.03)]",
          )}
          src="/images/genereted/information.webp"
          alt="Preview"
          width={1440}
          height={1590}
        />
      </div>

      {/* Content */}
      <div className="flex max-w-[640px] flex-col items-start gap-[50px]">
        {/* Title */}
        <h2 className="text-[30px]/[42px] font-light text-[#507FEB]">
          Our mission is to guide individuals and businesses through the
          complexities of immigration law
        </h2>

        {/* Description */}
        <p className="mt-auto text-[16px]/[25px] tracking-[.028em] text-[#8A91A2]">
          That’s why we provide expert legal support to help you achieve your
          dreams of living and working in a new country. At our firm, we pride
          ourselves on being more than just lawyers – we are dedicated partners
          in your journey. With extensive experience, we have successfully
          assisted over 1,000 businesses in navigating the complexities of
          immigration to Ukraine. Our team is here to provide you with
          personalized guidance and support every step of the way. Let us help
          you achieve your goals and make your transition to Ukraine as smooth
          as possible!
        </p>

        {/* Action */}
        <Button href="/">Open case studies</Button>
      </div>
    </section>
  );
};
