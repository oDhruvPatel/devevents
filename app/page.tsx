import EventCard from "@/components/EventCard";
import ExploreButton from "@/components/ExploreButton";

const events = [
  {image: '/images/event1.png', title: 'React Summit 2024'},
  {image: '/images/event2.png', title: 'NodeConf EU 2024'},
]

const Page = ()=>{
  return (
    <>
    <section>
      <h1 className="text-center font-bold">The Hub for evey dev <br /> Events You cannot miss</h1>
      <p className="text-center mt-5">Hackathons, meetups, and conferences, All in one place</p>
       <ExploreButton />

            <div className="mt-20 space-y-7">
            <h3>Featured Events</h3>
  {events.map((event) => (
    <li key={event.title}> <EventCard {... event}/> </li>
  ))}
</div>
      </section>

  

    </>
  );
}
export default Page;