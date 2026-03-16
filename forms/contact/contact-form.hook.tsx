import { useState } from "react";

// import { cteateContactRequest } from "@/lib/strapi/queries/contact-requests";

import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import { isValidPhoneNumber } from "libphonenumber-js";

// import type { ContactFormProps } from "./contact-form";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string(),
  companyName: yup.string(),
  country: yup.object({
    label: yup.string().required(),
    value: yup.string().required(),
    data: yup.object({
      phonePrefix: yup.string().required(),
      code: yup.string().required(),
    }),
  }),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .required()
    .test(
      "is-valid-phone",
      "Phone number is not valid for the selected country",
      async function (value) {
        const { isValidPhoneNumber } = await import("libphonenumber-js");

        const country = this.parent.country?.data.code;

        if (!value || !country) return false;

        try {
          return isValidPhoneNumber(value, country);
        } catch {
          return false;
        }
      },
    ),
  message: yup.string().required(),
});

export const useContactForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const formMethods = useForm({
    resolver: yupResolver(schema),
  });

  const country = useWatch({ control: formMethods.control, name: "country" });

  const onSubmit = formMethods.handleSubmit(async (data) => {
    try {
      setLoading(true);

      const body: { data: Record<string, string | undefined> } = {
        data: {
          name: data.name,
          surname: data.surname,
          companyName: data.companyName,
          country: data.country.label,
          email: data.email,
          phone: data.phone,
          message: data.message.replace(/[<>]/g, ""),
        },
      };

      console.log("body", body);

      // await cteateContactRequest(JSON.stringify(body));

      setIsSubmited(true);

      setLoading(false);

      formMethods.reset();
    } catch (error) {
      console.error(error);

      toast("Something went wrong. Try again", { type: "warning" });

      setLoading(false);
    }
  });

  return { loading, isSubmited, country, formMethods, onSubmit };
};
