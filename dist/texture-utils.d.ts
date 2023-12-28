/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */
export function getBytesPerElementForInternalFormat(internalFormat: number, type: number): number;
export function getBytesForMip(internalFormat: any, width: any, height: any, depth: any, type: any): number;
export type TextureFormatDetails = {
    /**
     * format to pass texImage2D and similar functions.
     */
    textureFormat: number;
    /**
     * true if you can render to this format of texture.
     */
    colorRenderable: boolean;
    /**
     * true if you can filter the texture, false if you can ony use `NEAREST`.
     */
    textureFilterable: boolean;
    /**
     * Array of possible types you can pass to texImage2D and similar function
     */
    type: number[];
    /**
     * A map of types to bytes per element
     */
    bytesPerElementMap: {
        [x: number]: number;
    };
};
