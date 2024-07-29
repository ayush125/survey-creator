/// <reference types="react" />
import { SurveyCreatorModel, QuestionToolboxItem } from "survey-creator-core";
import { ToolboxToolViewModel } from "survey-creator-core";
import { ActionContainer, Base } from "survey-core";
import { CreatorModelElement } from "../ModelElement";
export interface ISurveyCreatorToolboxItemProps {
    creator: SurveyCreatorModel;
    item: QuestionToolboxItem;
    parentModel: ActionContainer;
    isCompact: boolean;
}
export declare class SurveyCreatorToolboxTool extends CreatorModelElement<ISurveyCreatorToolboxItemProps, any> {
    model: ToolboxToolViewModel;
    constructor(props: any);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    get item(): QuestionToolboxItem;
    get creator(): SurveyCreatorModel;
    get isCompact(): boolean;
    protected getStateElement(): Base;
    render(): JSX.Element;
}
export declare class SurveyCreatorToolboxItem extends CreatorModelElement<ISurveyCreatorToolboxItemProps, any> {
    model: ToolboxToolViewModel;
    constructor(props: any);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    get item(): QuestionToolboxItem;
    get creator(): SurveyCreatorModel;
    protected getStateElement(): Base;
    render(): JSX.Element;
}
