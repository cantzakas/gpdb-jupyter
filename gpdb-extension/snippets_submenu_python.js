define([
    "require",
    "./snippets_submenus_python/gpdb",
], function (requirejs, numpy, scipy, matplotlib, sympy, pandas, astropy, h5py, numba, python) {
    return {
        numpy:gpdb,
    };
});