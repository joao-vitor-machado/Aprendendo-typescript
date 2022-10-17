export function logarTempoDeExecução() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retornoMetodoOriginal = metodoOriginal.apply(this);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000}`);
            retornoMetodoOriginal;
        };
        return descriptor;
    };
}
