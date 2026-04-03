import { ReactNode } from 'react'
import clsx from 'clsx'

export default function ShimmerText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <span className={clsx('text-shimmer', className)}>{children}</span>
}
