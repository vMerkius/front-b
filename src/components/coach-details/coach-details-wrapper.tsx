import { useParams } from "react-router-dom";
import { ICoach } from "../../types/coach-type";
import { useEffect, useState } from "react";
import { getCoachAPI } from "../../server/server";
import CoachInfo from "./coach-info.tsx";
import BreadcrumbArea from "../breadcrumb/breadcrumb-area.tsx";
import CoachOrder from "./coach-order.tsx";

const CoachDetailsWrapper = () => {
  const [coach, setCoach] = useState<ICoach>();
  const [error, setError] = useState<string>("");

  const { id } = useParams<{ id: string }>();

  const fetchCoach = async (id: string) => {
    try {
      const response = await getCoachAPI(id);
      const fetchedCoach = response.data.responseCoach;
      setCoach(fetchedCoach);
    } catch (error) {
      console.error("Fetching coach failed:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCoach(id);
    } else {
      setError("Invalid coach ID.");
    }
  }, [id]);
  if (coach)
    return (
      <section className="coaching-details">
        {error && <p>{error}</p>}
        <BreadcrumbArea
          title={coach.name}
          subtitle="COACH DETAILS"
          bg="/assets/img/bg/breadcrumb_bg01.jpg"
          brd_img={coach.imageUrl !== null ? coach.imageUrl : ""}
        />
        <CoachInfo coach={coach} />
        <CoachOrder coach={coach} />
      </section>
    );
  else {
    return <h2>There is no such coach</h2>;
  }
};

export default CoachDetailsWrapper;
