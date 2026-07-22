import Reveal from "./Reveal";
import WorkMedia from "./WorkMedia";
import type { WorkItem } from "../content";

export default function ProjectCard({
  item,
  delay = 0,
  aspect = "aspect-[3/4]",
  showCaption = true,
}: {
  item: WorkItem;
  delay?: number;
  aspect?: string;
  showCaption?: boolean;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full overflow-hidden rounded-2xl border border-line bg-surface-raised transition-colors hover:border-accent/50">
        {/* Media: video → embed → image → placeholder (see content.ts).
            `contain` fit shows any orientation/format fully. */}
        <div
          className={`relative flex ${aspect} items-center justify-center overflow-hidden bg-gradient-to-br from-surface-raised to-line`}
        >
          <WorkMedia item={item} />
        </div>
        {showCaption && (
          <div className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {item.category}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold">
              {item.title}
            </h3>
            {item.result && (
              <p className="mt-2 text-sm text-muted">{item.result}</p>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}
