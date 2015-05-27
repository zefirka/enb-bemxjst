/**
 * bemtree
 * =======
 *
 * Склеивает *bemtree*-файлы по deps'ам, обрабатывает `bem-xjst`-транслятором,
 * сохраняет (по умолчанию) в виде `?.bemtree.js`.
 * **Внимание:** По умолчанию поддерживает только JS-синтаксис. Чтобы включить поддержку первоначального синтаксиса
 * используйте `compat` опцию.
 *
 * **Опции**
 *
 * * *String* **target** — Результирующий таргет. По умолчанию — `?.bemtree.js`.
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 * * *String* **sourceSuffixes** — суффиксы файлов, по которым строится `files`-таргет. По умолчанию — `['bemtree']`.
 * * *String* **exportName** — Имя переменной-обработчика BEMTREE. По умолчанию — `'BEMTREE'`.
 * * *Boolean* **compat** — Поддержка первоначального синтаксиса. По умолчанию — false.
 * * *Boolean* **devMode** — Development-режим. По умолчанию — true.
 * * *Object* **modulesDeps** — Хэш-объект, прокидывающий в генерируемую для скомпилированных шаблонов обвязку,
 *    необходимые YModules-модули.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech([ require('enb-bemxjst/techs/bemtree'), { devMode: false } ]);
 * ```
 */
module.exports = require('./bem-xjst').buildFlow()
    .name('bemtree')
    .target('target', '?.bemtree.js')
    .defineOption('exportName', 'BEMTREE')
    .defineOption('compat', false)
    .defineOption('devMode', true)
    .defineOption('modulesDeps')
    .useFileList(['bemtree'])
    .builder(function (sourceFiles) {
        return this._sourceFilesProcess(sourceFiles, this._compat);
    })
    .createTech();
