import { type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import './AnimateOnScroll.css'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  visibleClass?: string
}

export function AnimateOnScroll({
  children,
  className = '',
  visibleClass = 'visible',
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView({ rootMargin: '0px 0px -80px 0px', threshold: 0.1 })

  const combinedClass = [className, isInView ? visibleClass : ''].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={combinedClass}>
      {children}
    </div>
  )
}
