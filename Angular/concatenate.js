const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const fileses5 = [
        './dist/Template-Application/runtime-es5.js',
        './dist/Template-Application/polyfills-es5.js',
        './dist/Template-Application/scripts.js',
        './dist/Template-Application/main-es5.js'
      ];

      const fileses2015 = [
        './dist/Template-Application/runtime-es2015.js',
        './dist/Template-Application/polyfills-es2015.js',
        './dist/Template-Application/scripts.js',
        './dist/Template-Application/main-es2015.js'
      ];

      await fs.ensureDir('output');
      await concat(fileses5, 'output/root-componentes5.js');
      await concat(fileses2015, 'output/root-componentes2015.js');
}
concatenate();