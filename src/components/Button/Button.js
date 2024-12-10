export function Button({ backgroundColor = "red", ...props }) {
  return <button style={{ backgroundColor }} {...props} />;
}
