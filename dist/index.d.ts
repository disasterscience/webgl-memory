export declare function wrapGetContext(Ctor: any): void;
export declare function WrapContexts(): void;
export interface GlMemoryStatistics {
    memory: {
        total: number;
        drawingbuffer: number;
        buffer: number;
        texture: number;
    };
    resources: {
        buffer: number;
        framebuffer: number;
        program: number;
        query: number;
        renderbuffer: number;
        sampler: number;
        shader: number;
        sync: number;
        texture: number;
        transformFeedback: number;
        vertexArray: number;
    };
}
