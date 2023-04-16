type Props = {
  children: React.ReactNode,
  className?: String
}

const Title = ({ children, className }:Props) => {
  return <h1 className={`${className} text-3xl lg:text-6xl text-gray-icon tracking-wide uppercase font-bold`}>{children}</h1>
}
export default Title
