type MarqueeProps = {
  items: readonly string[];
};

/**
 * Seamless ticker. The list is rendered twice and the track slides exactly half
 * its width, so the second copy lands where the first began. Pauses on hover.
 */
export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="marquee-mask relative overflow-hidden py-1">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 items-center gap-2.5 pr-2.5"
          >
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs whitespace-nowrap text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
