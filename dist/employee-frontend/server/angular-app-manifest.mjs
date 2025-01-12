
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 41649, hash: '85affe96606acd5f9db0e760bd3ac9c4f5f2657defffa2c34b162489e8e965da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 17512, hash: 'f48e1bd77fa80161e98593279177a6a6c58bf9bb5743b2c541db20b4df68b84e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-UWLES4MV.css', {size: 24811, hash: 'fT2e220vYAA', text: () => import('./assets-chunks/styles-UWLES4MV_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
