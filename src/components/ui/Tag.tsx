type TagProps = {
  label: string
}

function Tag({ label }: TagProps) {
  return <span className="ui-tag">{label}</span>
}

export default Tag