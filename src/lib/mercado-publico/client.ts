export interface MercadoPublicoClient {
  search(params: Record<string, unknown>): Promise<unknown[]>;
  getById(id: string): Promise<unknown>;
}

// Implementar después de validar documentación oficial, autenticación,
// límites y estructura real de la API de Mercado Público.
