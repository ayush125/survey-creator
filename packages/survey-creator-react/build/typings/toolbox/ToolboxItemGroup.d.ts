/// <reference types="react" />
import { Base } from "survey-core";
import { CreatorModelElement } from "../ModelElement";
import { ISurveyCreatorToolboxItemProps } from "./ToolboxItem";
export declare class SurveyCreatorToolboxItemGroup extends CreatorModelElement<ISurveyCreatorToolboxItemProps, any> {
    constructor(props: any);
    protected getUpdatedModelProps(): string[];
    get item(): import("survey-creator-core").QuestionToolboxItem;
    get creator(): import("survey-creator-core").SurveyCreatorModel;
    get isCompact(): boolean;
    get parentModel(): import("survey-core").ActionContainer<import("survey-core").Action>;
    protected getStateElement(): Base;
    render(): JSX.Element;
}
