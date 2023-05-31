import { InView } from 'react-intersection-observer'

export default function Waypoints({ target, children }) {
  return (
    <>
      <InView
        as="div"
        onChange={(inView, entry) => {
          const el = document.getElementById(target).classList
          if (inView) {
            el.remove('bg-gray-50')
            el.add('bg-yellow-500')
          } else {
            el.remove('bg-yellow-500')
            el.add('bg-gray-50')
          }
        }}
      >
        {children}
      </InView>
    </>
  )
}
