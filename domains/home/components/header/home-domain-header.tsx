import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { clsx } from "clsx";

export type HomeDomainHeaderProps = {
  className?: string;
};

export const HomeDomainHeader: React.FC<HomeDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      RightComponent={
        <PageLayoutHeaderSlides title="Choose your role:" data={slides} />
      }
    ></PageLayoutHeader>
  );
};

const slides = [
  {
    id: 1,
    label: "For individuals",
    avatar: {
      url: "/images/genereted/home/slide1.webp",
      width: 120,
      height: 120,
      alt: "For individuals",
    },
  },
  {
    id: 2,
    label: "For businesses",
    avatar: {
      url: "/images/genereted/home/slide2.webp",
      width: 120,
      height: 120,
      alt: "For businesses",
    },
  },
  {
    id: 3,
    label: "For investors",
    avatar: {
      url: "/images/genereted/home/slide3.webp",
      width: 120,
      height: 120,
      alt: "For investors",
    },
  },
];
