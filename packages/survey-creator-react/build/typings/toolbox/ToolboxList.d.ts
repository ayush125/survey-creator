/// <reference types="react" />
import { ListModel } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
import { QuestionToolbox } from "survey-creator-core";
interface IListProps {
    model: ListModel;
    toolbox: QuestionToolbox;
}
export declare class ToolboxList extends SurveyElementBase<IListProps, any> {
    constructor(props: any);
    get model(): ListModel;
    get toolbox(): QuestionToolbox;
    getStateElement(): ListModel<import("survey-core").Action>;
    render(): JSX.Element;
    renderItems(): JSX.Element[];
}
export {};
