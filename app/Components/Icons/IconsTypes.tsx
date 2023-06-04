export type svgProps = {
  width: number
  height: number
  id?: string
}
export type IconProps = ({ width, height }: svgProps) => JSX.Element
