import { clients } from "../content";

// Repeat the list enough to overflow wide screens, then the row is rendered
// twice and scrolled by -50% for a seamless loop regardless of how many
// clients there are.
const track = Array.from({ length: 3 }, () => clients).flat();

export default function LogoMarquee() {
  return (
    <section className="border-y border-line bg-surface py-8">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 px-8">
          {[...track, ...track].map((c, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {c.logo ? (
                // Plain <img>: logos have arbitrary aspect ratios, so fixed
                // height + auto width keeps them undistorted. `brightness-0
                // invert` renders every logo as a uniform white silhouette so
                // dark logos stay visible on the dark strip.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-10 w-auto object-contain opacity-70 brightness-0 invert transition duration-300 hover:opacity-100"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-xl font-semibold text-muted/60">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
