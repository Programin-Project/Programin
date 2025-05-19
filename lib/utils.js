/**
 * Combina classes condicionalmente
 * @param {...string} classes - Classes a serem combinadas
 * @returns {string} - Classes combinadas
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
