import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export function SingleCountryError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <p className="text-6xl mt-40">
        {error.data} ({error.status}). Try again.
      </p>
    );
  }
  return (
    <p className="text-6xl mt-40">Something went wrong loading this country.</p>
  );
}
