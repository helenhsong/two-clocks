import { cloneElement, useId } from 'react'
import { cx } from './cx.js'

/**
 * A label, one control, and optional hint or error text. The control gets
 * its id and aria-describedby wired up, and aria-invalid when there is an error.
 */
export function Field({ label, hint, error, children, className }) {
  const id = useId()
  const controlId = children.props.id ?? id
  const noteId = hint || error ? `${controlId}-note` : undefined
  return (
    <div className={cx('pt-field', className)}>
      {label && <label className="pt-field__label" htmlFor={controlId}>{label}</label>}
      {cloneElement(children, {
        id: controlId,
        'aria-describedby': noteId,
        'aria-invalid': error ? true : children.props['aria-invalid'],
      })}
      {(error || hint) && (
        <p id={noteId} className={cx('pt-field__note', error && 'pt-field__note--error')}>{error || hint}</p>
      )}
    </div>
  )
}
