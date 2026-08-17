export interface AIProvider {
  analyze(input: {
    company: unknown;
    opportunity: unknown;
  }): Promise<unknown>;
}

// Implementaciones concretas de proveedores de IA se agregarán después.
// Mantener esta interfaz desacoplada del proveedor.
