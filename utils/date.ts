import { UTCDate } from "@date-fns/utc/date";
import { startOfISOWeek, startOfMonth, startOfYear } from "date-fns";

export const getDateRange = (value: string) => {
  const to = new UTCDate(new UTCDate().setHours(23, 59, 59, 999)).toISOString();

  switch (value) {
    case "today": {
      const from = new UTCDate(
        new UTCDate().setHours(0, 0, 0, 0),
      ).toISOString();

      return { from, to };
    }

    case "this-week": {
      const from = new UTCDate(
        startOfISOWeek(new UTCDate()).setHours(0, 0, 0, 0),
      ).toISOString();
      return { from, to };
    }

    case "this-month": {
      const from = new UTCDate(
        startOfMonth(new UTCDate()).setHours(0, 0, 0, 0),
      ).toISOString();
      return { from, to };
    }

    case "this-year": {
      const from = new UTCDate(
        startOfYear(new UTCDate()).setHours(0, 0, 0, 0),
      ).toISOString();
      return { from, to };
    }

    default:
      return null;
  }
};
