import { Button, Loading, Empty } from "@/components";

import { clsx } from "clsx";

import { useListLayoutGrid } from "./list-layout-grid.hook";

export type ListLayoutGridProps = {
  className?: string;
  pagination?: StrapiCollectionPagination;
  hasMore?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onLoadMore?: () => void;
};

export const ListLayoutGrid: React.FC<ListLayoutGridProps> = (
  props,
): React.JSX.Element => {
  const { countMore } = useListLayoutGrid(props);

  return (
    <div
      className={clsx(
        props.className,
        "relative flex flex-col gap-[50px] border-b border-[#E7EBF2] pb-15",
      )}
    >
      {!!props.children ? (
        <div
          className={clsx(
            "grid grid-cols-1 gap-x-[30px] gap-y-[30px]",
            "md:grid-cols-2 md:gap-y-[60px]",
            "2xl:grid-cols-3",
          )}
        >
          {props.children}
        </div>
      ) : (
        <Empty
          showPreview
          title="Nothing found"
          description="No results were found for your search parameters. Adjust your search criteria or browse all products."
        />
      )}

      {/* Action */}
      {props.hasMore && countMore > 0 && (
        <Button
          className="mx-auto"
          title={`Show more (+${countMore})`}
          animation="scale"
          onClick={props.onLoadMore}
        />
      )}

      <Loading active={props.loading} />
    </div>
  );
};
