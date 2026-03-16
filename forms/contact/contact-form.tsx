"use client";

import { NextLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";

import { Button } from "@/components";

import { ArrowRightIcon } from "@/icons";

import {
  FormRow,
  FormItem,
  FormInput,
  FormTextarea,
  FormCheckbox,
} from "@/components/form";

import { useContactForm } from "./contact-form.hook";

export type ContactFormProps = {
  className?: string;
  withHeader?: boolean;
};

export const ContactForm: React.FC<ContactFormProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("sections.contact.form");

  const { loading, isSubmited, country, formMethods, onSubmit } =
    useContactForm();

  return (
    <div className={clsx(props.className, "flex flex-col rounded-2xl")}>
      {/* Content */}
      <div
        className={clsx(
          "flex flex-1 flex-col rounded-t-2xl bg-white p-[25px] pb-5",
          "xl:p-[35px]",
          {
            "pt-[40px]": props.withHeader === false,
          },
        )}
      >
        {/* Tag */}
        {props.withHeader !== false && (
          <div
            className={clsx(
              "mr-auto mb-[25px] flex items-center gap-2.5 rounded-full bg-[#EFF2F7] px-2.5 py-1 text-[#2D3A52]",
              "xl:mb-[35px]",
            )}
          >
            <ArrowRightIcon className="[&>path]:stroke-[#2D3A52]" />

            <span className="text-[12px]/[15px] tracking-[.028em]">
              {t("tag")}
            </span>
          </div>
        )}

        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="flex flex-col gap-[15px]">
            <FormRow>
              <FormItem required label={t("name.label")}>
                <FormInput
                  {...formMethods.register("name")}
                  invalid={!!formMethods.formState.errors.name?.message}
                  defaultValue={formMethods.formState.defaultValues?.name}
                  placeholder="-"
                />
              </FormItem>

              <FormItem required label={t("surname.label")}>
                <FormInput
                  {...formMethods.register("surname")}
                  invalid={!!formMethods.formState.errors.surname?.message}
                  defaultValue={formMethods.formState.defaultValues?.surname}
                  placeholder="-"
                />
              </FormItem>
            </FormRow>

            <FormRow>
              <FormItem required label={t("company.label")}>
                <FormInput
                  {...formMethods.register("companyName")}
                  invalid={!!formMethods.formState.errors.companyName?.message}
                  defaultValue={
                    formMethods.formState.defaultValues?.companyName
                  }
                  placeholder="-"
                />
              </FormItem>

              <FormItem required label={t("country.label")}>
                <FormInput
                  {...formMethods.register("country")}
                  invalid={!!formMethods.formState.errors.country?.message}
                  defaultValue={formMethods.formState.defaultValues?.country}
                  placeholder="-"
                />
              </FormItem>
            </FormRow>

            <FormRow>
              <FormItem required label={t("email.label")}>
                <FormInput
                  {...formMethods.register("email")}
                  invalid={!!formMethods.formState.errors.email?.message}
                  defaultValue={formMethods.formState.defaultValues?.email}
                  placeholder="example@gmail.com"
                />
              </FormItem>

              <FormItem required label={t("phone.label")}>
                <FormInput
                  {...formMethods.register("phone")}
                  invalid={!!formMethods.formState.errors.phone?.message}
                  defaultValue={formMethods.formState.defaultValues?.phone}
                  placeholder="+38"
                />
              </FormItem>
            </FormRow>

            <FormItem required label={t("message.label")}>
              <FormTextarea
                {...formMethods.register("message")}
                invalid={!!formMethods.formState.errors.message?.message}
                defaultValue={formMethods.formState.defaultValues?.message}
                placeholder={t("message.placeholder")}
              />
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
              {t("consent")}
            </span>
          </div>

          <Button
            className={clsx("font-sf-pro mt-auto tracking-[.008em]")}
            size="large"
            animation="scale-small"
          >
            {t("action")}
          </Button>
        </form>
      </div>

      {/* Footer */}
      <footer
        className={clsx(
          "rounded-b-2xl bg-[#FCFCFC] px-[25px] py-5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]",
          "xl:px-[35px]",
        )}
      >
        <p className="text-[13px]/[18px] tracking-[.028em] text-[#838891]">
          {t("footer.description.part1")}{" "}
          <NextLink
            className={clsx(
              "text-secondary underline transition-all",
              "hover:opacity-70",
            )}
            href="/privacy-statement"
          >
            {t("footer.link")}
          </NextLink>{" "}
          {t("footer.description.part2")}
        </p>
      </footer>
    </div>
  );
};
