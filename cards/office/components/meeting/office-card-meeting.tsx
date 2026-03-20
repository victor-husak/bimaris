"use client";

import { OfficeCardItem } from "../item";

import { useOfficeCardMeeting } from "./office-card-meeting.hook";

export type OfficeCardMeetingProps = {
  className?: string;
};

export const OfficeCardMeeting: React.FC<OfficeCardMeetingProps> = (
  props,
): React.JSX.Element => {
  const { onClick } = useOfficeCardMeeting();

  return (
    <OfficeCardItem
      className={props.className}
      title="Schedule a meeting"
      onClick={onClick}
    />
  );
};
