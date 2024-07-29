/// <reference types="react" />
import { Action, Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
export declare class TranslateFromAction extends SurveyElementBase<{
    item: Action;
}, any> {
    get item(): Action;
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
}
