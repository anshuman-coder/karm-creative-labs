// debouncing waits for reset window size,
// preventing re-render on every pixel change
export const debounce = (fn: () => void, ms: number) => {
  let timer: NodeJS.Timeout | null
  return () => {
    // clear timeout if debounce is fired again before the time is up
    clearTimeout(timer!)
    // set the timer to trigger the function
    timer = setTimeout((...rest: []) => {
      timer = null
      fn.apply(this, rest)
    }, ms)
  }
}
export default debounce
