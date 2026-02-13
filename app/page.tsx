import EventCard from "@/components/EventCard";
import ExploreButton from "@/components/ExploreButton";
import { events } from "@/lib/Constants";
import { time } from "console";



const Page = ()=>{
  return (
    <>
    <section>
      <h1 className="text-center font-bold mt-20">The Hub for evey dev <br /> Events You cannot miss</h1>
      <p className="text-center mt-5">Hackathons, meetups, and conferences, All in one place</p>
       <ExploreButton />
            <h3 className="mt-10">Featured Events</h3>
            <div className="mt-10 space-y-12 flex flex-row flex-wrap justify-left lg:justify-between sm:justify-center">
            
  {events.map((event) => (
    <li key={event.title} className="list-none"> <EventCard {... event}/> </li>
  ))}
</div>
      </section>

    </>
  );
}
export default Page;