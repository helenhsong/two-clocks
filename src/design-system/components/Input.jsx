import { cx } from './cx.js'

export function Input({ className, type = 'text', ...props }) {
  return <input type={type} className={cx('pt-control', 'pt-input', className)} {...props} />
}

export function Textarea({ className, rows = 4, ...props }) {
  return <textarea rows={rows} className={cx('pt-control', 'pt-textarea', className)} {...props} />
}

/** A native select; pass <option> elements as children. */
export function Select({ className, ...props }) {
  return <select className={cx('pt-control', 'pt-select', className)} {...props} />
}

export function Checkbox({ label, className, ...props }) {
  return (
    <label className={cx('pt-checkbox', className)}>
      <input type="checkbox" className="pt-checkbox__box" {...props} />
      {label && <span>{label}</span>}
    </label>
  )
}
