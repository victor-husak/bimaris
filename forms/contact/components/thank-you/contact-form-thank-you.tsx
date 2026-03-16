import { clsx } from "clsx";

export type ContactFormThankYouProps = {
  className?: string;
};

export const ContactFormThankYou: React.FC<ContactFormThankYouProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex flex-1 flex-col pb-[27px]")}>
      {/* Content */}
      <div className="my-auto flex flex-col pb-3.5">
        {/* Title */}
        <span className="font-sagona mb-[19px] text-[20px]/[24px] tracking-[.008em] text-[#33383C]">
          Thank you!
        </span>
        {/* Description */}
        <p className="max-w-[404px] text-[14px]/[19px] tracking-[.012em] text-[#828891]">
          Your message has been sent successfully. Our team will review your
          request and get in touch you as soon as possible -{" "}
          <span className="link-dashed text-[#33383C]">
            usually within one business day.
          </span>
        </p>
      </div>

      {/* Description */}
      <p className="text-[12px]/[12px] tracking-[.012em] text-[#828891]">
        We will reply to the email address you provided in the form. Please also
        check your spam or promotions folder, as email filters can sometimes be
        unpredictable.
      </p>
    </div>
  );
};
