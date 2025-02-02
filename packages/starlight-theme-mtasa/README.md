# Starlight theme for Multi Theft Auto

This repository contains the [Starlight](https://starlight.astro.build/) theme used by [Multi Theft Auto](https://multitheftauto.com/).

## Installation

1. Install the package
    ```
    npm i @multitheftauto/starlight-theme-mtasa
    ```

2. Edit your `astro.config.mjs`
    ```diff
      import starlight from '@astrojs/starlight'
      import { defineConfig } from 'astro/config'
      import starlightVersions from 'starlight-versions'
    + import mtasaStarlightThemePlugin from '@multitheftauto/starlight-theme-mtasa';

      export default defineConfig({
          integrations: [
              starlight({
                  title: 'My Docs',
    +             plugins: [mtasaStarlightThemePlugin()],
              }),
          ],
      })
    ```

## License

Copyright (c) 2025 Multi Theft Auto team and contributors.

Permission is granted to copy, distribute and/or modify these source files under the terms of the [MIT License](LICENSE). A copy of the [license](LICENSE) is included in the root directory of the repository.
