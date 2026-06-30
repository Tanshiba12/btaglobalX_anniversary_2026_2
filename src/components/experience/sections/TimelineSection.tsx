import { Clock3 } from "lucide-react";
import { eventDetails, itinerary } from "@/data";
import { SafeIcon } from "../ui/SafeIcon";

export function TimelineSection() {
  return (
    <section className="site-section timeline-section" id="timeline">
      <div className="section-inner timeline-table-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Timeline / Itinerary</p>
          <h2>Event Day Programme at a Glance</h2>
          <span>MYT {eventDetails.time}</span>
        </div>

        <div className="timeline-table-wrap" data-animate="card">
          <table className="timeline-table">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Programme</th>
                <th scope="col">Experience</th>
                <th scope="col">Highlights</th>
              </tr>
            </thead>
            <tbody>
              {itinerary.map((segment) => (
                <tr key={segment.time}>
                  <td data-label="Time">
                    <span>
                      <SafeIcon aria-hidden="true" icon={Clock3} />
                      {segment.time}
                    </span>
                  </td>
                  <td data-label="Programme">
                    <strong>{segment.title}</strong>
                  </td>
                  <td data-label="Experience">{segment.scene}</td>
                  <td data-label="Highlights">
                    <ul>
                      {segment.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
