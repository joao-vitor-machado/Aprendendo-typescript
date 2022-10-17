export function logarTempoDeExecução() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args : Array<any>) { // aqui ele pega os parâmetros que foram enviados para a função originalmente
            const t1 = performance.now();
            const retornoMetodoOriginal = metodoOriginal.apply(this); // esse apply permite passar o contexto "this", já que o contexto não é trazido automaticamente para o decorator
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000}`);
            retornoMetodoOriginal;
        }

        return descriptor;
    }
}