import { useCallback } from "react";

import { useScrollToSection } from "@/hooks";

export const useOfficeCardMeeting = () => {
  const { onScrollToSection } = useScrollToSection({ offset: -120 });

  const onClick = useCallback(() => {
    onScrollToSection("contact-form");
  }, [onScrollToSection]);

  return { onClick };
};
