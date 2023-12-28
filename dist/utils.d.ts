export function isWebGL2(gl: any): boolean;
export function isTypedArray(v: any): boolean;
export function isBufferSource(v: any): boolean;
export function getBindingQueryEnumForBindPoint(bindPoint: any): number;
export function getBytesPerValueForGLType(type: any): number;
export function glTypeToTypedArray(type: any): Uint8ArrayConstructor;
export function getDrawingbufferInfo(gl: any): {
    samples: any;
    depthBits: any;
    stencilBits: any;
    contextAttributes: any;
};
export function computeDrawingbufferSize(gl: any, drawingBufferInfo: any): number;
export function isNumber(v: any): boolean;
