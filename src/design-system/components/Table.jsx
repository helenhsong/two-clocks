import { cx } from './cx.js'

/**
 * Data tables. Compose with the plain parts:
 * <Table><thead><tr><Th>…</Th></tr></thead><tbody><tr><Td>…</Td></tr></tbody></Table>
 * `numeric` right-aligns a column with tabular figures.
 */
export function Table({ caption, className, children, ...props }) {
  return (
    <div className="pt-table-wrap">
      <table className={cx('pt-table', className)} {...props}>
        {caption && <caption className="pt-table__caption">{caption}</caption>}
        {children}
      </table>
    </div>
  )
}

export function Th({ numeric, className, scope = 'col', ...props }) {
  return <th scope={scope} className={cx('pt-table__th', numeric && 'pt-table--numeric', className)} {...props} />
}

export function Td({ numeric, className, ...props }) {
  return <td className={cx('pt-table__td', numeric && 'pt-table--numeric', className)} {...props} />
}
