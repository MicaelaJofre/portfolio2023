type Props = {
  children: React.ReactNode,
  className?: String
}

const Subtitle = ({ children, className }:Props) => {
  return <h2 className={`${className} text-gray-1 text-base sm:text-2xl font-bold pb-5`}>{children}</h2>
}

export default Subtitle
