export class Schedule {
    id?: number;
    scheduledDate?: Date;
    cronExpression?: string;
    uniqueName?: string;
    cancelled?: boolean;
    taskParameters?: string;
}
