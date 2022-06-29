/**
 * Return a slugified copy of a string.
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
export function toSlug(str: string): string {
  let s = str;
  if (!s) {
    return "nil";
  }
  s = s.toLowerCase().trim();
  s = s.replace(/ & /g, " + ");
  s = s.replace(/[ ]+/g, " - ");
  s = s.replace(/[-]+/g, " - ");
  s = s.replace(/[^a-z0-9-]+/g, "");
  return s;
}
