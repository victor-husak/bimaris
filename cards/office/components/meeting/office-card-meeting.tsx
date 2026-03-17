"use client";

import { OfficeCardItem } from "../item";

export type OfficeCardMeetingProps = {
  className?: string;
};

export const OfficeCardMeeting: React.FC<OfficeCardMeetingProps> = (
  props,
): React.JSX.Element => {
  return (
    <OfficeCardItem
      className={props.className}
      title="Schedule a meeting"
      onClick={() => {}}
    />
  );
};
