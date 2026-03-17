import { useTranslations } from "next-intl";
import { clsx } from "clsx";

import { Section, Button } from "@/components";

import { Banner, BannerList, BannerImage, Support } from "@/ui";

export type RolesServiceProps = {
  className?: string;
  HeaderComponent?: React.JSX.Element;
};

export const RolesService: React.FC<RolesServiceProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("sections.roles");

  return (
    <Section
      className={clsx(props.className, "")}
      id="section-roles"
      HeaderComponent={props.HeaderComponent}
    >
      {/* Content */}
      <div
        className={clsx(
          "grid grid-cols-1 gap-5",
          "2xl:grid-cols-2",
          // "md:grid-cols-2",
          // "xl:grid-cols-2 xl:grid-rows-[minmax(413px,auto)_auto]",
        )}
      >
        <Banner
          className="bg-[#EAF0F8] text-[#314B48]"
          classNameDescription="text-[#818796] sm:max-w-[310px]"
          title={t("individuals.title")}
          description={t("individuals.description")}
          ListComponent={
            <BannerList
              className="[--link-dashed-border-color:#88A7F0]"
              items={[
                t("individuals.list.item1"),
                t("individuals.list.item2"),
                t("individuals.list.item3"),
              ]}
            />
          }
          ImageComponent={
            <BannerImage
              withOverlay
              className="[--overlay-bg:#F4F6F9]"
              media={{
                url: "/images/genereted/home/role-individuals.webp",
                alt: "Individuals",
                width: 582,
                height: 960,
              }}
            />
          }
          ActionComponent={
            <Button
              className="font-medium before:bg-[#233041]"
              animation="scale"
              href="/roles/individuals"
            >
              {t("action")}
            </Button>
          }
        />

        <Banner
          className="bg-[#507FEB] text-[#FFFFFF]"
          classNameDescription="text-white/70 sm:max-w-[340px]"
          title={t("businesses.title")}
          description={t("businesses.description")}
          ListComponent={
            <BannerList
              className="[--link-dashed-border-color:#88A7F0]"
              items={[
                t("businesses.list.item1"),
                t("businesses.list.item2"),
                t("businesses.list.item3"),
              ]}
            />
          }
          ImageComponent={
            <BannerImage
              className="[--overlay-bg:#6F92E2]"
              withOverlay
              media={{
                url: "/images/genereted/home/role-businesses.webp",
                alt: "Businesses",
                width: 582,
                height: 960,
              }}
            />
          }
          ActionComponent={
            <Button
              className="font-medium text-[#507FEB]"
              animation="scale"
              variant="white"
              href="/roles/businesses"
            >
              {t("action")}
            </Button>
          }
        />

        <Banner
          className={clsx("bg-[#D9EAE7] text-[#2F4B40]", "2xl:col-span-2")}
          classNameDescription="text-[#768480] max-w-[720px]"
          title={t("investors.title")}
          description={t("investors.description")}
          ListComponent={
            <BannerList
              className="[--link-dashed-border-color:#A7BAB7]"
              items={[
                t("investors.list.item1"),
                t("investors.list.item2"),
                t("investors.list.item3"),
              ]}
            />
          }
          ImageComponent={
            <div className="relative z-1 flex shrink-0">
              <BannerImage
                className={clsx(
                  "absolute! -left-[71px] -z-2 hidden border-[5px] border-[#D9EAE7]",
                  "2xl:flex",
                )}
                media={{
                  url: "/images/genereted/home/role-investors.webp",
                  alt: "Investors and market entry",
                  width: 582,
                  height: 960,
                }}
              />

              <BannerImage
                className={clsx(
                  "absolute! -left-[32px] -z-1 hidden border-[5px] border-[#D9EAE7]",
                  "2xl:flex",
                )}
                media={{
                  url: "/images/genereted/home/role-investors.webp",
                  alt: "Investors and market entry",
                  width: 582,
                  height: 960,
                }}
              />

              <BannerImage
                className={clsx(
                  "[--overlay-bg:[#D9EAE7]",
                  "2xl:border-[5px] 2xl:border-[#D9EAE7]",
                )}
                media={{
                  url: "/images/genereted/home/role-investors.webp",
                  alt: "Investors and market entry",
                  width: 582,
                  height: 960,
                }}
              />
            </div>
          }
          ActionComponent={
            <Button
              className="font-medium before:bg-[#233041]"
              animation="scale"
              href="/roles/investors"
            >
              {t("action")}
            </Button>
          }
        />
      </div>

      {/* Footer */}
      <Support />
    </Section>
  );
};
