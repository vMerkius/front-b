import { useEffect, useState } from "react";
import Filter from "./filter";
import Coaches from "./coaches";
import { ICoach } from "../../types/coach-type";
import { IFilter } from "../../types/filter-type";
import { getCoachesPageAPI } from "../../server/server";
import InfiniteScroll from "react-infinite-scroll-component";
import EndMessage from "../loading/end-message";
import Loading from "../loading/loading";
const CoachingWrapper = () => {
  const [filterOptions, setFilterOptions] = useState<IFilter>({
    name: "",
    game: "",
    rank: "",
    price: "",
    rating: "",
    lane: "",
    champion: "",
    language: "",
  });
  const [coaches, setCoaches] = useState<ICoach[]>([]);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 16;

  const fetchCoaches = async (page: number) => {
    try {
      const response = await getCoachesPageAPI(page, limit, filterOptions);
      const fetchedCoaches = response.data.responseCoaches;
      if (
        fetchedCoaches.length < limit ||
        (page - 1) * limit + fetchedCoaches.length >= response.data.total
      ) {
        setHasMore(false);
      }

      setCoaches((prevCoaches) => {
        const newCoaches = [...prevCoaches];
        fetchedCoaches.forEach((coach: ICoach) => {
          if (
            !newCoaches.some((existingCoach) => existingCoach._id === coach._id)
          ) {
            newCoaches.push(coach);
          }
        });
        return newCoaches;
      });
    } catch (error) {
      console.error("Fetching coaches failed:", error);
    }
  };

  useEffect(() => {
    fetchCoaches(1);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    fetchCoaches(nextPage);
    setPage(nextPage);
  };

  useEffect(() => {
    if (filterOptions.name && filterOptions.name.length <= 3) return;
    setPage(1);
    setHasMore(true);
    setCoaches([]);
    fetchCoaches(1);
  }, [filterOptions]);

  return (
    <section className="coaching">
      <Filter
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <InfiniteScroll
        dataLength={coaches.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={<EndMessage description="No more coaches to load" />}
      >
        <Coaches coaches={coaches} />
      </InfiniteScroll>
    </section>
  );
};

export default CoachingWrapper;
