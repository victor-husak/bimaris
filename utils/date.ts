export const getDateRange = (value: string) => {
  const now = new Date();

  switch (value) {
    case "last-30-days": {
      const from = new Date();
      from.setDate(now.getDate() - 30);
      return { from, to: now };
    }

    case "last-3-months": {
      const from = new Date();
      from.setMonth(now.getMonth() - 3);
      return { from, to: now };
    }

    case "last-6-months": {
      const from = new Date();
      from.setMonth(now.getMonth() - 6);
      return { from, to: now };
    }

    case "this-year": {
      const from = new Date(now.getFullYear(), 0, 1);
      const to = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
      return { from, to };
    }

    default:
      return null;
  }
};
