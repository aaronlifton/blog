import clsx from "clsx";
import type { FC } from "react";
interface Props {
  baseUrl: string;
  currentPage: number;
  totalPages: number;
}
const Pages: FC<Props> = ({ baseUrl, currentPage, totalPages }) => {
  const prevPage = `${baseUrl}/${currentPage - 1}`;
  const nextPage = `${baseUrl}/${currentPage + 1}`;
  const pageUrl = (page: number) => `${baseUrl}/${page}`;
  const pages = Array.from({ length: totalPages });

  return (
    <nav className="flex justify-center my-4 w-full">
      {currentPage > 1
        && <a href={prevPage}>prev</a>}

      {pages.map((_, i) => {
        const href = pageUrl(i + 1);
        return (
          <a
            key={href}
            href={href}
            className={clsx(
              "mx-2 rounded-lg px-3 py-1 text-muted",
              { "bg-primary text-white": currentPage === i + 1 },
            )}
          >
            {i + 1}
          </a>
        );
      })}

      {currentPage < totalPages
        && <a href={nextPage}>next</a>}
    </nav>
  );
};
