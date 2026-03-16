"use client";

import { clsx } from "clsx";

import { FormDropdown } from "@/components/form/dropdown";

import * as Components from "./components";
import * as Icons from "./icons";

import { languages } from "@/generated/languages";

import { useAsideActions } from "./aside-actions.hook";

export type AsideActionsProps = {
  className?: string;
  listenText: string;
  name: string;
};

export const AsideActions: React.FC<AsideActionsProps> = (
  props,
): React.JSX.Element => {
  const { listenTitle, audioRef, onToggle, onShare } = useAsideActions(props);

  return (
    <div
      className={clsx(
        props.className,
        "flex flex-wrap items-center gap-2 rounded-[11px] border border-[#E7EAF2] p-5",
      )}
    >
      <>
        <Components.Item
          title={listenTitle}
          IconComponent={<Icons.Listen />}
          onClick={onToggle}
        />
        <audio ref={audioRef} className="hidden" />
      </>

      <FormDropdown
        title="Translate"
        IconComponent={<Icons.Translate />}
        options={languages}
        onChange={() => {}}
      />

      <FormDropdown title="Share" options={shareOptions} onChange={onShare} />
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
