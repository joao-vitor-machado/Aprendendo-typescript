export function escape() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginal.apply(this, args);
            if (typeof retorno === 'string') {
                retorno.replace(/<script>[\S\s]*?<\/script>/, '');
            }
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=escape.js.map