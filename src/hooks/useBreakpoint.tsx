import { useCallback, useEffect, useMemo, useState } from 'react'
import debounce from '~/utils/debounce'

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoints>()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateBreakpoint = useCallback(
    debounce(() => {
      setBreakpoint(determineBreakpoint())
    }, 15),
    [],
  )

  useEffect(() => {
    updateBreakpoint()

    window.addEventListener('resize', updateBreakpoint)
    return () => {
      window.removeEventListener('resize', updateBreakpoint)
    }
  }, [updateBreakpoint])

  const values = useMemo(() => {
    function isAndAbove(threshold: Breakpoints): boolean | undefined
    function isAndAbove<T>(threshold: Breakpoints, whenTrue: T): T | undefined
    function isAndAbove<T, F>(threshold: Breakpoints, whenTrue: T, whenFalse: F): T | F | undefined
    function isAndAbove<T, F, U>(
      threshold: Breakpoints,
      whenTrue?: T,
      whenFalse?: F,
      whenUndefined?: U,
    ): T | F | U
    function isAndAbove<T, F, U>(
      threshold: Breakpoints,
      whenTrue?: T,
      whenFalse?: F,
      whenUndefined?: U,
    ): T | F | U | undefined {
      return isAnd('above', breakpoint!, threshold, whenTrue, whenFalse, whenUndefined)
    }

    function isAndBelow(threshold: Breakpoints): boolean | undefined
    function isAndBelow<T>(threshold: Breakpoints, whenTrue: T): T | undefined
    function isAndBelow<T, F>(threshold: Breakpoints, whenTrue: T, whenFalse: F): T | F | undefined
    function isAndBelow<T, F, U>(
      threshold: Breakpoints,
      whenTrue?: T,
      whenFalse?: F,
      whenUndefined?: U,
    ): T | F | U
    function isAndBelow<T, F, U>(
      threshold: Breakpoints,
      whenTrue?: T,
      whenFalse?: F,
      whenUndefined?: U,
    ): T | F | U | boolean | undefined {
      return isAnd('below', breakpoint!, threshold, whenTrue, whenFalse, whenUndefined)
    }

    return {
      current: breakpoint,
      isAndAbove,
      isAndBelow,
    }
  }, [breakpoint])

  return values
}

const determineBreakpoint = () => {
  if (typeof window === 'undefined') return undefined
  const breakpointUnknown = '' as const

  const breakpointXS: 'xs' | null =
    document.getElementById('breakpoint-xs')?.offsetParent === null ? null : 'xs'

  const breakpointSM: 'sm' | null =
    document.getElementById('breakpoint-sm')?.offsetParent === null ? null : 'sm'

  const breakpointMD: 'md' | null =
    document.getElementById('breakpoint-md')?.offsetParent === null ? null : 'md'

  const breakpointLG: 'lg' | null =
    document.getElementById('breakpoint-lg')?.offsetParent === null ? null : 'lg'

  const breakpointXL: 'xl' | null =
    document.getElementById('breakpoint-xl')?.offsetParent === null ? null : 'xl'

  const breakpointLaptop: 'laptop' | null =
    document.getElementById('breakpoint-laptop')?.offsetParent === null ? null : 'laptop'

  const breakpoint2XL: '2xl' | null =
    document.getElementById('breakpoint-2xl')?.offsetParent === null ? null : '2xl'

  return (
    breakpointXS ??
    breakpointSM ??
    breakpointMD ??
    breakpointLG ??
    breakpointXL ??
    breakpointLaptop ??
    breakpoint2XL ??
    breakpointUnknown
  )
}

const breakpointMap = new Map<Breakpoints, number>([
  ['', 0],
  ['xs', 1],
  ['sm', 2],
  ['md', 3],
  ['lg', 4],
  ['xl', 5],
  ['laptop', 6],
  ['2xl', 7],
])

function isAnd(
  direction: 'above' | 'below',
  breakpoint: Breakpoints,
  threshold: Breakpoints,
): boolean | undefined
function isAnd<T>(
  direction: 'above' | 'below',
  breakpoint: Breakpoints,
  threshold: Breakpoints,
  whenTrue: T,
): T | undefined
function isAnd<T, F>(
  direction: 'above' | 'below',
  breakpoint: Breakpoints,
  threshold: Breakpoints,
  whenTrue: T,
  whenFalse: F,
): T | F | undefined
function isAnd<T, F, U>(
  direction: 'above' | 'below',
  breakpoint: Breakpoints,
  threshold: Breakpoints,
  whenTrue?: T,
  whenFalse?: F,
  whenUndefined?: U,
): T | F | U
function isAnd<T, F, U>(
  direction: 'above' | 'below',
  breakpoint: Breakpoints,
  threshold: Breakpoints,
  whenTrue?: T,
  whenFalse?: F,
  whenUndefined?: U,
): T | F | U | boolean | undefined {
  if (typeof window === 'undefined') return undefined
  if (typeof threshold === 'undefined') return whenUndefined ?? undefined
  if (typeof breakpoint === 'undefined') return whenUndefined ?? undefined

  const thresholdValue = breakpointMap.get(threshold)
  const breakpointValue = breakpointMap.get(breakpoint)

  if (typeof thresholdValue === 'undefined') throw new Error('Invalid threshold')
  if (typeof breakpointValue === 'undefined') throw new Error('Invalid breakpoint')

  if (
    typeof whenTrue === 'undefined' &&
    typeof whenFalse === 'undefined' &&
    typeof whenUndefined === 'undefined'
  ) {
    return direction === 'above'
      ? breakpointValue >= thresholdValue
      : breakpointValue <= thresholdValue
  }

  if (typeof whenFalse === 'undefined' && typeof whenUndefined === 'undefined') {
    return (
      direction === 'above' ? breakpointValue >= thresholdValue : breakpointValue <= thresholdValue
    )
      ? whenTrue
      : undefined
  }

  if (typeof whenUndefined === 'undefined') {
    return (
      direction === 'above' ? breakpointValue >= thresholdValue : breakpointValue <= thresholdValue
    )
      ? whenTrue
      : whenFalse
  }

  return (
    direction === 'above' ? breakpointValue >= thresholdValue : breakpointValue <= thresholdValue
  )
    ? whenTrue
    : whenFalse
}

type Breakpoints = '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'laptop' | '2xl'

export default useBreakpoint
