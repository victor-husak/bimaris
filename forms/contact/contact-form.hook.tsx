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
  country: yup.string(),
  // country: yup.object({
  //   label: yup.string().required(),
  //   value: yup.string().required(),
  //   data: yup.object({
  //     phonePrefix: yup.string().required(),
  //     code: yup.string().required(),
  //   }),
  // }),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .required()
    .test(
      "is-valid-phone",
      "Phone number is not valid for the selected country",
      async function (value) {
        const { isValidPhoneNumber } = await import("libphonenumber-js");

        // const country = this.parent.country?.data.code;

        if (!value) return false;

        try {
          return isValidPhoneNumber(value, "UA");
        } catch {
          return false;
        }
      },
    ),
  message: yup.string().required(),
});

// type FormData = yup.InferType<typeof schema>;

export const useContactForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const formMethods = useForm({
    resolver: yupResolver(schema),
  });

  const country = useWatch({ control: formMethods.control, name: "country" });

  // useDidMountEffect(() => {
  //   if (isSubmited) {
  //     setIsSubmited(false);
  //   }
  // }, []);

  const onSubmit = formMethods.handleSubmit(async (data) => {
    try {
      setLoading(true);

      const body: { data: Record<string, string | undefined> } = {
        data: {
          name: data.name,
          surname: data.surname,
          companyName: data.companyName,
          country: data.country,
          email: data.email,
          phone: data.phone,
          message: data.message.replace(/[<>]/g, ""),
        },
      };

      console.log("body", body);

      // if (data.country) body.data.surname = data.surname;

      // if (data.jobTitle) body.data.jobTitle = data.jobTitle;

      // if (data.companyName) body.data.companyName = data.companyName;

      // await cteateContactRequest(JSON.stringify(body));

      setIsSubmited(true);

      setLoading(false);
      // formMethods.reset();
    } catch (error) {
      console.error(error);

      toast("Something went wrong. Try again", { type: "warning" });

      setLoading(false);
    }
  });

  return { loading, isSubmited, country, formMethods, onSubmit };
};
