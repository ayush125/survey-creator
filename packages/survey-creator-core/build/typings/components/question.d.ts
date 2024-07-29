import { SurveyElement, SurveyTemplateRendererTemplateData, Action, DragTypeOverMeEnum, IAction } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { IPortableEvent } from "../utils/events";
import { SurveyElementAdornerBase } from "./action-container-view-model";
export interface QuestionBannerParams {
    text: string;
    actionText: string;
    onClick: () => void;
}
export declare class QuestionAdornerViewModel extends SurveyElementAdornerBase {
    templateData: SurveyTemplateRendererTemplateData;
    isDragged: boolean;
    currentAddQuestionType: string;
    placeholderComponent: string;
    placeholderComponentData: any;
    private dragOrClickHelper;
    constructor(creator: SurveyCreatorModel, surveyElement: SurveyElement, templateData: SurveyTemplateRendererTemplateData);
    get element(): SurveyElement<any>;
    protected canSelectElement(): boolean;
    select(model: QuestionAdornerViewModel, event: IPortableEvent): boolean;
    rootCss(): string;
    css(): string;
    get isDragMe(): boolean;
    get dragTypeOverMe(): DragTypeOverMeEnum;
    get isBannerShowing(): boolean;
    private get isUsingCarryForward();
    private get isUsingRestfull();
    private get isMessagePanelVisible();
    createBannerParams(): QuestionBannerParams;
    private createCarryForwardParams;
    private createUsingRestfulParams;
    private createCustomMessagePanel;
    dispose(): void;
    get isDraggable(): boolean;
    hover(event: MouseEvent, element: HTMLElement | any): void;
    protected updateActionsProperties(): void;
    protected updateElementAllowOptions(options: any, operationsAllow: boolean): void;
    private updateActionVisibilityByProp;
    get isEmptyElement(): boolean;
    get isEmptyTemplate(): boolean;
    get placeholderText(): string;
    private get dragDropHelper();
    get isRequired(): any;
    set isRequired(newVal: any);
    onPointerDown(pointerDownEvent: PointerEvent): void;
    startDragSurveyElement: (event: PointerEvent) => boolean;
    private getConvertToTypes;
    getConvertToTypesActions(parentAction?: Action): Array<IAction>;
    private get currentType();
    private createConvertToAction;
    private createConvertInputType;
    private getSelectedItem;
    private createDropdownModel;
    private createRequiredAction;
    protected getUpdatedPropertyValue(propName: string, newValue: any): any;
    protected buildActions(items: Array<Action>): void;
    protected duplicate(): void;
    addNewQuestion(): void;
    questionTypeSelectorModel: Action;
    get addNewQuestionText(): string;
}