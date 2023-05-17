type Props = {
  children: React.ReactNode,
  className?: String
}

const Title = ({ children, className }:Props) => {
  return <h1 className={`${className} text-2x1 sm:text-3xl text-gray-icon tracking-widest uppercase font-bold`}>{children}</h1>
}
export default Title
