export default function Card({ title, children, actions }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm">
      {title && <div className="px-4 py-3 border-b font-medium">{title}</div>}
      <div className="p-4">{children}</div>
      {actions && <div className="px-4 py-3 border-t bg-gray-50">{actions}</div>}
    </div>
  )
}