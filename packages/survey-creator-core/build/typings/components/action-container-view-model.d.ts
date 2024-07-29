import { Base, AdaptiveActionContainer, Action, SurveyElement, ActionContainer } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { DesignerStateManager } from "./tabs/designer-state-manager";
export declare class SurveyElementActionContainer extends AdaptiveActionContainer {
    private needToShrink;
    private setModeForActions;
    private calcItemSize;
    fit(dimension: number, dotsItemSize: number): void;
}
export declare class SurveyElementAdornerBase<T extends SurveyElement = SurveyElement> extends Base {
    creator: SurveyCreatorModel;
    protected surveyElement: T;
    actionContainer: SurveyElementActionContainer;
    topActionContainer: ActionContainer;
    protected designerStateManager: DesignerStateManager;
    allowDragging: boolean;
    collapsed: boolean;
    renderedCollapsed: boolean;
    private allowEditOption;
    private selectedPropPageFunc;
    private sidebarFlyoutModeChangedFunc;
    constructor(creator: SurveyCreatorModel, surveyElement: T);
    protected detachElement(surveyElement: T): void;
    protected attachElement(surveyElement: T): void;
    protected setSurveyElement(surveyElement: T): void;
    protected checkActionProperties(): void;
    dispose(): void;
    protected onElementSelectedChanged(isSelected: boolean): void;
    protected updateActionsProperties(): void;
    protected updateElementAllowOptions(options: any, operationsAllow: boolean): void;
    protected isOperationsAllow(): boolean;
    protected updateActionVisibility(id: string, isVisible: boolean): void;
    getActionById(id: string): Action;
    protected buildActions(items: Array<Action>): void;
    isDisableSelecting: boolean;
    protected disableActionFocusing(isMouse: boolean, event: any): void;
    protected canSelectElement(): boolean;
    get allowEdit(): boolean;
    get showAddQuestionButton(): boolean;
    protected setShowAddQuestionButton(val: boolean): void;
    protected duplicate(): void;
    protected delete(): void;
}
