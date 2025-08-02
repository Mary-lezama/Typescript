

export function capitalizarNombre(nombre: string): string {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}