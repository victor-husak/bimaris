"use client";

import NextLink from "next/link";

import { ContactForm } from "@/forms/contact";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type ContactSectionFormProps = {
  className?: string;
};

export const ContactSectionForm: React.FC<ContactSectionFormProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex flex-col overflow-hidden rounded-2xl",
      )}
    >
      {/* Content */}
      <div className="flex flex-1 flex-col bg-white p-[35px] pb-5">
        {/* Tag */}
        <div className="mr-auto mb-[35px] flex items-center gap-2.5 rounded-full bg-[#EFF2F7] px-2.5 py-1 text-[#2D3A52]">
          <ArrowRightIcon className="[&>path]:stroke-[#2D3A52]" />

          <span className="text-[12px]/[15px] tracking-[.028em]">
            Fill out the form
          </span>
        </div>

        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="bg-[#FCFCFC] px-[35px] py-5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
        <p className="text-[13px]/[18px] tracking-[.028em] text-[#838891]">
          By clicking send, you confirm that you’ve read the{" "}
          <NextLink
            className={clsx(
              "text-secondary underline transition-all",
              "hover:opacity-70",
            )}
            href="/privacy-statement"
          >
            privacy statement
          </NextLink>{" "}
          and consent to the processing of your personal data for the purposes
          described in the statement.
        </p>
      </footer>
    </div>
  );
};
