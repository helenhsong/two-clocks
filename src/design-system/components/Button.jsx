import { cx } from './cx.js'

/**
 * Buttons. `primary` marks the one main action on a screen; `secondary` is
 * everything else; `ghost` sits in toolbars and rows; `danger` destroys.
 */
export function Button({ variant = 'primary', size = 'md', className, type = 'button', ...props }) {
  return <button type={type} className={cx('pt-button', `pt-button--${variant}`, `pt-button--${size}`, className)} {...props} />
}
