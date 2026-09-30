import { cx } from './cx.js'

/** A surface-000 panel with a hairline border. Depth comes from borders, not shadows. */
export function Card({ title, className, children, ...props }) {
  return (
    <section className={cx('pt-card', className)} {...props}>
      {title && <h2 className="pt-card__title">{title}</h2>}
      {children}
    </section>
  )
}

/**
 * Small status labels. `accent` is for "new" and "live" markers only and
 * always carries ink text.
 */
export function Badge({ tone = 'neutral', className, ...props }) {
  return <span className={cx('pt-badge', `pt-badge--${tone}`, className)} {...props} />
}
