type Props = {
  children: React.ReactNode,
  className?: String
}

const Title = ({ children, className }:Props) => {
  return <h1 className={`${className} flex items-center text-lg sm:text-3xl text-gray-1 tracking-widest uppercase font-bold`}>{children}</h1>
}
export default Title
