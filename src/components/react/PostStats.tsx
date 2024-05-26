import { Fragment, useEffect, useState } from "react";
import { saveError } from "~services/api";

const PostStats = ({ slug }: { slug: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [views, setViews] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`/api/blog/views/${slug}.json`);
        const stat = await resp.json();
        setViews(stat.numViews);
      } catch (e) {
        if (import.meta.env.DEV) {
          console.error("Error fetching post views", e);
        }
        saveError(e as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Fragment>
      <span className="emdash">—</span>
      <span className="pr-1 mx-1 italic text-muted-light">
        {views || "~"} views
      </span>
    </Fragment>
  );
};
export default PostStats;
