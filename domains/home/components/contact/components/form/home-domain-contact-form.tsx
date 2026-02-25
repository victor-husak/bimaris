"use client";

import NextLink from "next/link";

import { Button } from "@/components";

import {
  FormRow,
  FormItem,
  FormInput,
  FormTextarea,
  FormCheckbox,
} from "@/components/form";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type HomeDomainContactFormProps = {
  className?: string;
};

export const HomeDomainContactForm: React.FC<HomeDomainContactFormProps> = (
  props,
): React.JSX.Element => {
  return (
    <form
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

        <div className="flex flex-col gap-[15px]">
          <FormRow>
            <FormItem required label="Name">
              <FormInput placeholder="-" />
            </FormItem>

            <FormItem required label="Surname">
              <FormInput placeholder="-" />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem required label="Company">
              <FormInput placeholder="-" />
            </FormItem>

            <FormItem required label="Country of origin">
              <FormInput placeholder="-" />
            </FormItem>
          </FormRow>

          <FormRow>
            <FormItem required label="Business email">
              <FormInput placeholder="-" />
            </FormItem>

            <FormItem required label="Phone number">
              <FormInput placeholder="-" />
            </FormItem>
          </FormRow>

          <FormItem label="Message">
            <FormTextarea placeholder="-" />
          </FormItem>
        </div>

        <div
          className="group my-5 flex cursor-pointer items-center gap-4"
          // onClick={props.onClick}
        >
          {/* Inner */}
          <FormCheckbox
            className={clsx("group-hover:shadow-[0_0_0_1px_#d6d8dc]")}
            value={false}
          />

          {/* Label */}
          <span
            className={clsx(
              "text-[13px]/[17px] tracking-[.024em] text-[#838891] transition-all",
              "group-hover:text-foreground",
            )}
          >
            I agree to receive occasional updates, insights, and relevant
            information from Bimaris.
          </span>
        </div>

        <Button
          className="font-sf-pro mt-auto tracking-[.008em]"
          size="large"
          animation="darken"
        >
          Send
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-[#FCFCFC] px-[35px] py-5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
        <p className="text-[12px]/[18px] tracking-[.028em] text-[#838891]">
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
    </form>
  );
};
