/**
 * @see https://mermaid.js.org/syntax/flowchart.html#direction
 */
export enum Orientation {
    Descending = 'TB',
    Ascending = 'BT',
    RightToLeft = 'RL',
    LeftToRight = 'LR'
}

export enum Edges {
    Normal = '--',
    Arrow = '-->',
    Thick = '===',
    ThickArrow = '===>',
    Dotted = '-.-'
}

/**
 * @see https://mermaid.js.org/syntax/flowchart.html#direction
 */
export type NodeShape = {
    type: Shapes;
    label?: string;
}

export enum Shapes {
    // a full list of shapes using the short name: https://mermaid.js.org/syntax/flowchart.html#complete-list-of-new-shapes
}