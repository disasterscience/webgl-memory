/**
 * Given a WebGL context replaces all the functions with wrapped functions
 * that call gl.getError after every command
 *
 * @param {WebGLRenderingContext|Extension} ctx The webgl context to wrap.
 * @param {string} nameOfClass (eg, webgl, webgl2, OES_texture_float)
 */
export function augmentAPI(ctx: WebGLRenderingContext | Extension, nameOfClass: string, options?: {}): any;
