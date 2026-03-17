"use client";

import { NextLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";

import { Button, Loading } from "@/components";

import * as Components from "./components";

import { ArrowRightIcon } from "@/icons";

import {
  FormRow,
  FormItem,
  FormInput,
  FormSelect,
  FormTextarea,
  FormCheckbox,
} from "@/components/form";

import { useContactForm } from "./contact-form.hook";
import { countries } from "@/generated/countries";
import { Controller } from "react-hook-form";

export type ContactFormProps = {
  className?: string;
  withHeader?: boolean;
};

export const ContactForm: React.FC<ContactFormProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("sections.contact.form");

  const { formRef, loading, isSubmited, country, formMethods, onSubmit } =
    useContactForm();

  return (
    <div className={clsx(props.className, "flex flex-col rounded-2xl")}>
      {/* Content */}
      <div
        className={clsx(
          "relative flex flex-1 flex-col rounded-t-2xl bg-white p-[25px] pb-5",
          "xl:p-[35px]",
          {
            "pt-[40px]": props.withHeader === false,
          },
        )}
      >
        {isSubmited ? (
          <Components.ThankYou className=" min-h-[250px]" />
        ) : (
          <>
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

            <form
              ref={formRef}
              className="flex flex-col"
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd1000009Ooz0"
              method="POST"
              onSubmit={formMethods.handleSubmit(onSubmit)}
            >
              <input type="hidden" name="oid" value="00Dd1000009Ooz0" />
              {/* <input
                type="hidden"
                name="retURL"
                value="https://your-site.com/thank-you"
              /> */}

              <input type="hidden" name="debug" value="1" />
              <input
                type="hidden"
                name="debugEmail"
                value="prod+vertex@synebo.io"
              />

              <input
                type="hidden"
                name="country_code"
                value={country?.data?.code || ""}
              />

              <div className="relative flex flex-col gap-[15px]">
                <FormRow>
                  <FormItem required label={t("name.label")}>
                    <FormInput
                      {...formMethods.register("first_name")}
                      invalid={
                        !!formMethods.formState.errors.first_name?.message
                      }
                      defaultValue={
                        formMethods.formState.defaultValues?.first_name
                      }
                      placeholder="-"
                    />
                  </FormItem>

                  <FormItem required label={t("surname.label")}>
                    <FormInput
                      {...formMethods.register("last_name")}
                      invalid={
                        !!formMethods.formState.errors.last_name?.message
                      }
                      defaultValue={
                        formMethods.formState.defaultValues?.last_name
                      }
                      placeholder="-"
                    />
                  </FormItem>
                </FormRow>

                <FormRow>
                  <FormItem required label={t("company.label")}>
                    <FormInput
                      {...formMethods.register("company")}
                      invalid={!!formMethods.formState.errors.company?.message}
                      defaultValue={
                        formMethods.formState.defaultValues?.company
                      }
                      placeholder="-"
                    />
                  </FormItem>

                  <FormItem required label={t("country.label")}>
                    <Controller
                      name="country"
                      control={formMethods.control}
                      render={({ field: { onChange, value } }) => (
                        <FormSelect
                          withSearch
                          invalid={
                            !!formMethods.formState.errors.country?.message
                          }
                          value={value}
                          options={countries}
                          onChange={onChange}
                        />
                      )}
                    />
                  </FormItem>

                  <FormItem required label={t("phone.label")}>
                    <FormInput
                      {...formMethods.register("phone")}
                      invalid={!!formMethods.formState.errors.phone?.message}
                      defaultValue={formMethods.formState.defaultValues?.phone}
                      placeholder={country ? country.data.phonePrefix : "-"}
                    />
                  </FormItem>
                </FormRow>

                <FormRow>
                  <FormItem label={t("company.label")}>
                    <FormInput
                      {...formMethods.register("companyName")}
                      invalid={
                        !!formMethods.formState.errors.companyName?.message
                      }
                      defaultValue={
                        formMethods.formState.defaultValues?.companyName
                      }
                      placeholder="-"
                    />
                  </FormItem>

                  <FormItem required label={t("email.label")}>
                    <FormInput
                      {...formMethods.register("email")}
                      invalid={!!formMethods.formState.errors.email?.message}
                      defaultValue={formMethods.formState.defaultValues?.email}
                      placeholder="example@gmail.com"
                    />
                  </FormItem>
                </FormRow>

                <FormItem required label={t("message.label")}>
                  <FormTextarea
                    {...formMethods.register("description")}
                    invalid={
                      !!formMethods.formState.errors.description?.message
                    }
                    defaultValue={
                      formMethods.formState.defaultValues?.description
                    }
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

              <pre>{JSON.stringify(country)}</pre>

              <Button
                className={clsx("font-sf-pro mt-auto tracking-[.008em]")}
                size="large"
                animation="scale-small"
                type="submit"
              >
                {t("action")}
              </Button>
            </form>
          </>
        )}

        {/* <div className="absolute inset-0 z-10 flex items-center justify-center rounded-t-2xl bg-white/70"> */}
        <Loading active={loading} />
        {/* </div> */}
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
