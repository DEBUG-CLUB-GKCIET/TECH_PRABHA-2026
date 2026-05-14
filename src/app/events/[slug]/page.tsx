import PageLayout from "@/components/PageLayout";
import { events } from "@/data/events";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import RegisterButton from "@/components/RegisterButton";

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const event = events.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  return (
    <PageLayout title={event.title} subtitle={event.category}>
      <div className="flex flex-col max-w-4xl mx-auto w-full">
        {/* Back link */}
        <Link 
          href="/events"
          className="text-gray-400 hover:text-white mb-8 inline-flex items-center text-sm font-medium tracking-widest uppercase transition-colors"
        >
          ← Return to Schedule
        </Link>

        {/* Hero Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <Calendar className="mb-3" style={{ color: event.color }} size={28} />
            <span className="text-white font-bold tracking-widest">{event.date}</span>
            <span className="text-gray-400 text-sm tracking-wider uppercase">{event.day}</span>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <Clock className="mb-3" style={{ color: event.color }} size={28} />
            <span className="text-white font-bold tracking-widest text-sm md:text-base">{event.time}</span>
            <span className="text-gray-400 text-xs tracking-wider uppercase">IST</span>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <MapPin className="mb-3" style={{ color: event.color }} size={28} />
            <span className="text-white font-bold tracking-widest text-sm md:text-base">TBA</span>
            <span className="text-gray-400 text-xs tracking-wider uppercase">Venue</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-black/30 border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
          {/* Subtle glow bg */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20 filter blur-[80px] rounded-full pointer-events-none"
               style={{ backgroundColor: event.color }}></div>

          <h3 className="text-2xl text-white font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
            Mission Brief
          </h3>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
            {event.description}
          </p>

          {/* Sub-Events if applicable */}
          {event.subEvents && event.subEvents.length > 0 && (
            <div className="mb-10">
              <h4 className="text-lg text-white font-bold uppercase tracking-widest mb-4">
                Exhibition Domains:
              </h4>
              <div className="flex flex-wrap gap-3">
                {event.subEvents.map((sub, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-sm text-gray-300 font-medium tracking-wider"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Registration CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center border-t border-white/10 pt-10">
            <RegisterButton color={event.color} />
            {/* <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors tracking-widest text-sm uppercase">
              <Share2 size={16} />
              Share Event
            </button> */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
