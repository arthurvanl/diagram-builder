export * from './entity_relation';
export * from './flowchart';
export * from './sequence';

export enum DiagramType {
    FlowChart = 'flowchart',
    Sequence = 'sequenceDiagram',
    Class = 'classDiagram',
    EntityRelation = 'erDiagram',
    UserJourney = 'journey',
    Gantt = 'gantt',
    Pie = 'pie'
}