"use client";

import { useEffect, useState } from "react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="page-loader">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PageRender;
