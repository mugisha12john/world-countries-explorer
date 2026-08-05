import Skeleton from "./Skeleton";

export default function Loading() {
  return (
    <div className="mt-10 ml-8 grid grid-cols-1  gap-10 md:grid-cols-3 lg:grid-cols-4">
      {new Array(4).fill(0).map((_, index) => {
        return (
          <div key={index}>
            <Skeleton />
          </div>
        );
      })}
    </div>
  );
}
