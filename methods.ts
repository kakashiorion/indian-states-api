export function getErrorMessage(e: unknown) {
  if (typeof e === "string") {
    return e.toUpperCase(); // works, `e` narrowed to string
  } else if (e instanceof Error) {
    return e.message; // works, `e` narrowed to Error
  }
}
