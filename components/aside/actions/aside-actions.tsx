"use client";

import { FormDropdown } from "@/components/form/dropdown";

import * as Components from "./components";
import * as Icons from "./icons";

import { clsx } from "clsx";

import { languages } from "@/generated/languages";

export type AsideActionsProps = {
  className?: string;
};

export const AsideActions: React.FC<AsideActionsProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex items-center gap-2.5 rounded-[11px] border border-[#E7EAF2] p-5",
      )}
    >
      <Components.Item title="Listen - 4:35" IconComponent={<Icons.Listen />} />

      <FormDropdown
        title="Translate"
        IconComponent={<Icons.Translate />}
        options={languages}
        onChange={() => {}}
      />

      <FormDropdown title="Share" options={shareOptions} onChange={() => {}} />
    </div>
  );
};

const shareOptions = [
  {
    label: "Facebook",
    value: "facebook",
  },
  {
    label: "LinkedIn",
    value: "linkedin",
  },
  {
    label: "Twitter",
    value: "twitter",
  },
];
