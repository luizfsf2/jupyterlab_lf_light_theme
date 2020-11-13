import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for myorg/jupyterlab_lf_light_theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@myorg/jupyterlab_lf_light_theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@myorg/jupyterlab_lf_light_theme/index.css';

    manager.register({
      name: 'jupyterlab_lf_light_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
