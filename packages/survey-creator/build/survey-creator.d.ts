/*
* Type definition for Survey Creator library v1.11.8
* Copyright (c) 2015-2024 Devsoft Baltic OÜ  - https://surveyjs.io/
* License: https://surveyjs.io/Licenses#SurveyCreator
*/
import { IAction, ISurvey, IElement, HashTable, IQuestion } from "survey-knockout";

export { editorLocalization as localization };

export enum ObjType {
  Unknown,
  Survey,
  Page,
  Panel,
  Question
}
export interface ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean;
  maximumColumnsCount: number;
  getObjectDisplayName(obj: any, reason: string, displayName: string): string;
  onCanShowPropertyCallback(object: any, property: any, showMode: string, parentObj: any, parentProperty: any): boolean;
  onIsPropertyReadOnlyCallback(obj: any, property: any, readOnly: boolean, parentObj: any, parentProperty: any): boolean;
  onCanDeleteItemCallback(object: any, item: any, allowDelete: boolean): boolean;
  onCollectionItemDeletingCallback(obj: any, property: any, collection: any, item: any): boolean;
  onItemValueAddedCallback(obj: any, propertyName: string, itemValue: any, itemValues: any): any;
  onMatrixDropdownColumnAddedCallback(matrix: any, column: any, columns: any): any;
  onSetPropertyEditorOptionsCallback(propertyName: string, obj: any, editorOptions: any): any;
  onGetErrorTextOnValidationCallback(propertyName: string, obj: any, value: any): string;
  onValueChangingCallback(options: any): any;
  onPropertyValueChanged(property: any, obj: any, newValue: any): any;
  onGetElementEditorTitleCallback(obj: any, title: string): string;
  startUndoRedoTransaction(): any;
  stopUndoRedoTransaction(): any;
  createSurvey(json: any, reason: string, surveyType?: any): any;
  onConditionQuestionsGetListCallback(propertyName: string, obj: any, editor: any, list: any): any;
}
export interface IUndoRedoChange {
  object: any;
  propertyName: string;
  oldValue: any;
  newValue: any;
}
export interface SurveyElementSelectorItem {
  name: string;
  text: string;
  element: any;
  koDisabled: any;
}
export interface ISurveyObjectEditorOptions extends ISurveyCreatorOptions {
  showApplyButtonInEditors: boolean;
  useTabsInElementEditor: boolean;
  onIsEditorReadOnlyCallback(obj: any, editor: SurveyPropertyEditorBase, readOnly: boolean): boolean;
  onPropertyEditorObjectSetCallback(propertyName: string, obj: any, editor: SurveyPropertyEditorBase): any;
  onPropertyEditorKeyDownCallback(propertyName: string, obj: any, editor: SurveyPropertyEditorBase, event: any): any;
  onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: any): any;
  onConditionValueSurveyCreatedCallBack(valueQuestionName: string, propertyName: string, obj: any, editor: SurveyPropertyEditorBase, survey: any): any;
}
export interface ISurveyQuestionEditorDefinition {
  title?: string;
  properties?: any;
  tabs?: any;
}
export interface IConditionEditorItemOwner {
  allConditionQuestions: any;
  getQuestionValueJSON(questionName: string, operator: string): any;
  getQuestionByName(questionName: any): any;
  onConditionItemChanged(): any;
  isClassContains(qType: string, contains: any, notContains: any): boolean;
  isWideMode: boolean;
  options: ISurveyObjectEditorOptions;
  readOnly(): boolean;
}
export interface ISurveyLogicType {
  name: string;
  baseClass: string;
  propertyName: string;
  templateName?: string;
  showInUI?: boolean;
  showIf?: (survey: any) => boolean;
  createNewElement?: (survey: any) => any;
  saveElement?: (survey: any, action: SurveyLogicAction) => void;
  createTemplateObject?: (element: any) => any;
  isUniqueItem?: boolean;
  questionNames?: any;
  getDisplayText?: (element: any, formatStr: string, lt: SurveyLogicType) => string;
  getDisplayTextName?: (element: any) => string;
}
export interface ISurveyLogicItemOwner {
  readOnly: boolean;
  editItem(item: SurveyLogicItem): any;
  removeItem(item: SurveyLogicItem): any;
  getExpressionAsDisplayText(expression: string): string;
}
export interface ICreatorOptions {
}
/*
* The Toolbox item description.
*/
export interface IQuestionToolboxItem extends IAction {
  /*
  * A unique name
  */
  name: string;
  /*
  * Icon name
  */
  iconName: string;
  /*
  * The JSON that used to create a new question/panel. The 'type' attribute is required.
  */
  json: any;
  /*
  * Toolbox item title
  */
  title: string;
  /*
  * Toolbox item tooltip. It equals to title if it is empty
  */
  tooltip?: string;
  /*
  * True, if an end user added this item into Toolbox from the survey.
  */
  isCopied: boolean;
  /*
  * Toolbox item category. If it is empty, it goes to 'General' category.
  */
  category: string;
}
export interface ISurveyObjectMenuItem {
  name: string;
  text: any;
  title?: string;
  visible?: any;
  onClick: (obj: any) => any;
  icon?: any;
  hasTitle?: boolean;
  template?: string;
}
export interface ITranslationLocales {
  koLocales: any;
  showAllStrings: boolean;
  koReadOnly: any;
  getLocaleName(loc: string): string;
  availableTranlationsChangedCallback: any;
  tranlationChangedCallback: (locale: string, name: string, value: string, context: any) => void;
  translateItemAfterRender(item: TranslationItem, el: any, locale: string): any;
  canShowProperty(obj: any, prop: any, isEmpty: boolean): boolean;
}
export interface IMultipleValuesCategory {
  koCategory: any;
  koTitleVisible: any;
  koItems: any;
}
export interface IAccordionItemData {
  name: any;
  title: any;
  onExpand: any;
  onCollapse: any;
  doOnExpanded(): any;
  htmlTemplate: string;
  templateObject: any;
  koAfterRender?: any;
}
export declare class AccordionItemModel {
  constructor(data: IAccordionItemData);
  data: IAccordionItemData;
  collapsed: any;
  toggle: any;
  get title(): any;
}
export declare class AccordionViewModel {
  constructor(params: any);
  tabs: any;
  showHeader: any;
}
export declare class Action {
  constructor(_propertyName: string, _oldValue: any, _newValue: any, _sender: any);
  apply(): void;
  rollback(): void;
  get changes(): IUndoRedoChange;
}
export declare class ArrayAction {
  constructor(_propertyName: string, _sender: any, arrayChanges: any);
  _index: number;
  _itemsToAdd: any;
  _deletedItems: any;
  apply(): void;
  rollback(): void;
  get changes(): IUndoRedoChange;
}
export declare class ButtonViewModel {
  constructor(item: any);
  item: any;
  get disabled(): boolean;
  get hint(): any;
  get showTitle(): boolean;
  action(model: ButtonViewModel): void;
}
export declare class Commands {
  constructor(creator: any);
  commands: any;
  getCommands(): any;
}
export declare class ConditionEditorItem {
  constructor(owner: IConditionEditorItemOwner);
  survey: any;
  get conjunction(): string;
  set conjunction(val: string);
  get questionName(): string;
  set questionName(val: string);
  get operator(): string;
  set operator(val: string);
  get value(): any;
  set value(val: any);
  get isFirst(): boolean;
  set isFirst(val: boolean);
  get isReady(): boolean;
  get conjunctionQuestion(): any;
  get nameQuestion(): any;
  get operatorQuestion(): any;
  get valueQuestion(): any;
  toString(): string;
}
export declare class CreatorBaseEvent<T> {
}
/*
* Survey Creator is WYSIWYG editor.
*/
export declare class CreatorEvent {
}
export declare class DesignerContainerViewModel {
  constructor(params: any, componentInfo: any);
  static iconRightOpenName: string;
  static iconRightCloseName: string;
  static iconLeftOpenName: string;
  static iconLeftCloseName: string;
  _changedSubscription: any;
  _prevWidth: any;
  _prevSurfaceWidth: any;
  _element: any;
  toggle: any;
  activeTab: any;
  tabs: any;
  context: any;
  className: string;
  visible: any;
  isOpen: any;
  getLocString(str: string): any;
  size: any;
  dispose(): void;
  get iconRightOpen(): string;
  get iconRightClose(): string;
  get iconLeftOpen(): string;
  get iconLeftClose(): string;
}
export declare class DesignerHContainerViewModel {
  constructor(params: any, componentInfo: any);
  items: any;
  context: any;
  className: string;
}
export declare class DragDropHelper {
  constructor(data: ISurvey, onModifiedCallback: (options?: any) => any, parent: any, undoRedoManager: UndoRedoManager);
  data: ISurvey;
  static edgeHeight: number;
  static nestedPanelDepth: number;
  static dataStart: string;
  static dragData: any;
  static prevEvent: any;
  onModifiedCallback: (options?: any) => any;
  scrollableElement: any;
  ddTarget: DragDropTargetElement;
  prevCoordinates: any;
  static counter: number;
  id: number;
  attachToElement(domElement: any, surveyElement: any): void;
  get survey(): any;
  startDragQuestion(event: any, element: any): void;
  startDragToolboxItem(event: any, elementName: string, elementJson: any): void;
  isSurveyDragging(event: any): boolean;
  doDragDropOver(event: any, element: any, isEdge?: boolean): void;
  doDragDropOverFlow(event: any, element: any): boolean;
  end(): void;
  get isMoving(): boolean;
  doDrop(event: any, prevedDefault?: boolean): void;
  doLeavePage(event: any): void;
  isScrollStop: boolean;
  static ScrollDelay: number;
  static ScrollOffset: number;
  readOnly: boolean;
}
export declare class DragDropTargetElement {
  constructor(page: any, target: any, source: any, nestedPanelDepth: number, undoRedoManager: UndoRedoManager);
  page: any;
  target: any;
  source: any;
  moveTo(destination: any, isBottom: boolean, isEdge?: boolean): boolean;
  doDrop(): any;
  clear(): void;
}
export declare class DropdownViewModel {
  constructor(items: any, action: any, optionsValue: string, optionsText: string, afterRender: any, valueAllowUnset: any, optionsCaption: any, ariaLabel: any, title: any, disable: any, hasFocus: any, select3: any);
  items: any;
  action: any;
  optionsValue: string;
  optionsText: string;
  afterRender: any;
  valueAllowUnset: any;
  optionsCaption: any;
  ariaLabel: any;
  title: any;
  disable: any;
  hasFocus: any;
  select3: any;
}
export declare class EditableObject {
  constructor(obj: any);
  static isCopyObject(obj: any): boolean;
  static getSurvey(object: any): any;
  static getOriginalObject(object: any): any;
  static getOriginalSurvey(survey: any): any;
  objValue: any;
  editableObjValue: any;
  get obj(): any;
  get editableObj(): any;
  isPropertyChanged(propertyName: string): boolean;
  apply(propertyName: string): void;
  reset(): void;
  applyAll(excludedProps?: any): void;
  protected createEditableObj(): any;
}
export declare class ElementSelectorViewModel {
  constructor(model: SurveyElementSelector, koValue: any, optionsCaption: string, koHasFocus: any, koElements: any);
  model: SurveyElementSelector;
  koValue: any;
  optionsCaption: string;
  koHasFocus: any;
  koElements: any;
}
export declare class ExpressionRemoveVariable {
  constructor();
  wasRemoved: boolean;
  remove(expression: string, variable: string): string;
}
export declare class ExpressionToDisplayText {
  constructor(survey: any, options?: any);
  survey: any;
  currentQuestion: any;
  showTitles: boolean;
  toDisplayText(expression: string): string;
  static operatorText: any;
}
export declare class Extentions {
  static registerCustomPropertyEditor(name: string, widgetJSON: any): void;
  static unregisterCustomPropertyEditor(name: string): void;
  static registerPropertyEditor(name: string, creator: (property: any) => SurveyPropertyEditorBase): void;
}
export declare class ImageInplaceEditor {
  constructor(input: any, allowDelete: boolean, editor: any);
  allowDelete: boolean;
  chooseImage(model: any, event: any): void;
  deleteImage(model: any, event: any): void;
  imageChosen: (files: any) => void;
  getLocString(str: string): any;
  valueChanged: (newVal: any) => void;
}
export declare class ImageItemInplaceEditor {
  constructor(name: string, question: any, item: any, rootElement: any, editor: SurveyCreator, itemsRoot: any);
  deleteItem(model: ImageItemInplaceEditor, event: any): void;
  get isLastItem(): boolean;
  chooseImage(model: any, event: any): void;
  imageChosen: (files: any) => void;
  getLocString(str: string): any;
  valueChanged: (newVal: any) => void;
}
export declare class ObjectEditorContentViewModel {
  constructor(useTabsInElementEditor: any, koTabs: any, koActiveTab: any, onTabClick: any);
  useTabsInElementEditor: any;
  koTabs: any;
  koActiveTab: any;
  onTabClick: any;
  get activeTab(): any;
}
export declare class ObjectEditorOldTableContentViewModel {
  constructor(koProperties: any, koTab: any, componentInfo: any);
  koProperties: any;
  koTab: any;
}
export declare class ObjectEditorTabViewModel {
  constructor(name: string, editorProperties: any, koAfterRenderProperty: any, afterRender: any);
  name: string;
  editorProperties: any;
  koAfterRenderProperty: any;
  afterRender: any;
}
export declare class ObjectEditorViewModel {
  constructor(koIsOldTableAppearance: any, koElementEditor: any, koHasObject: any);
  koIsOldTableAppearance: any;
  koElementEditor: any;
  koHasObject: any;
}
export declare class PagesEditor {
  constructor(creator: SurveyCreator);
  creator: SurveyCreator;
  prevPagesForSelector: any;
  _selectedPage: any;
  selectionSubscription: any;
  _readOnly: any;
  koSurvey: any;
  isSelectingPage: boolean;
  get pages(): any;
  getDisplayText: (page: any) => string;
  blockPagesRebuilt: any;
  pagesForSelection: any;
  addPageSelectorIntoToolbar(): void;
  isAllowedForSelectedPage(what: string): boolean;
  get canAddPage(): boolean;
  addPage: any;
  get canCopyPage(): boolean;
  copyPage: (page: any) => void;
  get canDeletePage(): boolean;
  deletePage: any;
  movePage: (page: any, indexFrom: number) => void;
  get canEditPage(): boolean;
  showPageSettings(page: any): void;
  selectedPage: any;
  showActions: (page: any) => boolean;
  isLastPage(): boolean;
  isActive(): boolean;
  /*
  * A boolean property, false by default. Set it to true to deny pages editing.
  */
  get readOnly(): any;
  set readOnly(val: any);
  hasDropdownSelector: any;
  dispose(): void;
}
export declare class PagesEditorViewModel {
  constructor(model: PagesEditor, element: any);
  model: PagesEditor;
  pageSelectionChanged: any;
  updateScroller: any;
  isNeedAutoScroll: boolean;
  moveLeft(model: any, event: any): void;
  moveRight(model: any, event: any): void;
  scrollToSelectedPage: any;
  onWheel(model: any, event: any): void;
  updateMenuPosition(): void;
  getLocString(str: string): any;
  getPageClass: (page: any) => string;
  getPageMenuIconClass: (page: any) => string;
  onPageClick: (pageModel: any, event: any) => void;
  movingPage: any;
  movedFrom: number;
  get sortableOptions(): any;
  hasScroller: any;
  dispose(): void;
}
export declare class PropertyEditorBindingsViewModel {
  constructor(items: any, afterRender: any);
  items: any;
  afterRender: any;
}
export declare class PropertyEditorBooleanViewModel {
  constructor(koValue: any, readOnly: boolean, isDisplayNameVisible: boolean, displayName: string, afterRender: any);
  koValue: any;
  readOnly: boolean;
  isDisplayNameVisible: boolean;
  displayName: string;
  afterRender: any;
}
export declare class PropertyEditorCellsViewModel {
  constructor(koCanEdit: any, getLocString: (name: string) => any, koColumns: any, koRows: any, afterRender: any);
  koCanEdit: any;
  getLocString: (name: string) => any;
  koColumns: any;
  koRows: any;
  afterRender: any;
}
export declare class PropertyEditorColorViewModel {
  constructor(koValue: any, readOnly: boolean, koMaxValue: any, koMinValue: any, afterRender: any);
  koValue: any;
  readOnly: boolean;
  koMaxValue: any;
  koMinValue: any;
  afterRender: any;
}
export declare class PropertyEditorConditionViewModel {
  constructor(koShowExpressionHeader: any, onShowHideEditor: any, koConditionDisplayText: any, koIsEditorShowing: any, koIsEditorHidingDisabled: any, koShowTabs: any, koCanParseExpression: any, koActiveView: any, onChangeViewClick: any, getLocString: any, koSetupText: any, koIsWideMode: any, koEditorItems: any, readOnly: any, koCanAddItem: any, onRemoveConditionClick: any, removeConditionText: any, addCondition: any, addConditionText: string, hasAceEditor: boolean, koTextValue: any, availableQuestions: any, editingObject: any, model: SurveyPropertyConditionEditor, afterRender: any);
  koShowExpressionHeader: any;
  onShowHideEditor: any;
  koConditionDisplayText: any;
  koIsEditorShowing: any;
  koIsEditorHidingDisabled: any;
  koShowTabs: any;
  koCanParseExpression: any;
  koActiveView: any;
  onChangeViewClick: any;
  getLocString: any;
  koSetupText: any;
  koIsWideMode: any;
  koEditorItems: any;
  readOnly: any;
  koCanAddItem: any;
  onRemoveConditionClick: any;
  removeConditionText: any;
  addCondition: any;
  addConditionText: string;
  hasAceEditor: boolean;
  koTextValue: any;
  availableQuestions: any;
  editingObject: any;
  model: SurveyPropertyConditionEditor;
  afterRender: any;
}
export declare class PropertyEditorCustomViewModel {
  constructor(model: SurveyPropertyCustomEditor, afterRender: any);
  model: SurveyPropertyCustomEditor;
}
export declare class PropertyEditorDropdownViewModel {
  constructor(koValue: any, readOnly: boolean, optionsCaption: string, koChoices: any, koHasFocus: any, displayName: string, afterRender: any);
  koValue: any;
  readOnly: boolean;
  optionsCaption: string;
  koChoices: any;
  koHasFocus: any;
  displayName: string;
  afterRender: any;
}
export declare class PropertyEditorErrorViewModel {
  constructor(koDisplayError: any, getLocString: any, koErrorText: any);
  koDisplayError: any;
  getLocString: any;
  koErrorText: any;
}
export declare class PropertyEditorExpressionViewModel {
  constructor(hasAceEditor: boolean, getLocString: (name: string) => any, koValue: any, availableQuestions: any, editingObject: any, model: SurveyPropertyConditionEditor, koTextValue: any, showHelpText: any, afterRender: any);
  hasAceEditor: boolean;
  getLocString: (name: string) => any;
  koValue: any;
  availableQuestions: any;
  editingObject: any;
  model: SurveyPropertyConditionEditor;
  koTextValue: any;
  showHelpText: any;
  afterRender: any;
}
export declare class PropertyEditorFileViewModel {
  constructor(rootElement: any, editor: any, koValue: any, readOnly: boolean, isDisplayNameVisible: boolean, displayName: string, afterRender: any);
  koValue: any;
  readOnly: boolean;
  isDisplayNameVisible: boolean;
  displayName: string;
  afterRender: any;
  get fileContent(): any;
  getLocString(str: string): any;
  chooseFile: (model: PropertyEditorFileViewModel, event: any) => void;
  deleteFile: (model: PropertyEditorFileViewModel, event: any) => void;
}
export declare class PropertyEditorHTMLViewModel {
  constructor(koValue: any, readOnly: boolean, afterRender: any);
  koValue: any;
  readOnly: boolean;
  afterRender: any;
}
export declare class PropertyEditorItemValuesViewModel {
  constructor(koIsList: any, koShowTextView: any, koActiveView: any, changeToFormViewClick: any, changeToTextViewClick: any, getLocString: any, koItemsText: any, readOnly: any, model: SurveyPropertyItemValuesEditor, afterRender: any);
  koIsList: any;
  koShowTextView: any;
  koActiveView: any;
  changeToFormViewClick: any;
  changeToTextViewClick: any;
  getLocString: any;
  koItemsText: any;
  readOnly: any;
  model: SurveyPropertyItemValuesEditor;
  afterRender: any;
}
export declare class PropertyEditorModalContent {
  constructor(koHtmlTop: any, koHtmlBottom: any, editorTypeTemplate: string, model: SurveyPropertyModalEditor, afterRender: any);
  koHtmlTop: any;
  koHtmlBottom: any;
  editorTypeTemplate: string;
  model: SurveyPropertyModalEditor;
  afterRender: any;
}
export declare class PropertyEditorModalViewModel {
  constructor(isEditable: boolean, onShowModal: any, modalNameTarget: string, koText: any, getLocString: any, koValue: any, readOnly: any, modalName: string, koIsShowingModal: any, onResetClick: any, koTitleCaption: any, koShowApplyButton: any, onApplyClick: any, onOkClick: any, model: SurveyPropertyModalEditor, afterRender: any);
  isEditable: boolean;
  onShowModal: any;
  modalNameTarget: string;
  koText: any;
  getLocString: any;
  koValue: any;
  readOnly: any;
  modalName: string;
  koIsShowingModal: any;
  onResetClick: any;
  koTitleCaption: any;
  koShowApplyButton: any;
  onApplyClick: any;
  onOkClick: any;
  model: SurveyPropertyModalEditor;
  afterRender: any;
}
export declare class PropertyEditorMultipleValuesViewModel {
  constructor(koCategories: any, componentInfo: any, koAfterRender: any, afterRender: any);
  koCategories: any;
  componentInfo: any;
  koAfterRender: any;
  afterRender: any;
}
export declare class PropertyEditorNestedItemViewModel {
  constructor(editor: any, model: SurveyNestedPropertyEditorItem, koCanDeleteItem: any, dragIcon: string, deleteIcon: string, obj: any, koHasDetails: any, rootElement: any);
  editor: any;
  model: SurveyNestedPropertyEditorItem;
  koCanDeleteItem: any;
  dragIcon: string;
  deleteIcon: string;
  obj: any;
  koHasDetails: any;
  get cells(): any;
  onEditItemClick(): void;
}
export declare class PropertyEditorNestedItemsViewModel {
  constructor(koIsList: any, getLocString: any, koShowHeader: any, columns: any, sortableOptions: any, model: SurveyNestedPropertyEditor, koAllowAddRemoveItems: any, readOnly: any, onAddClick: any, onClearClick: any, koAllowRemoveAllItems: any, koCanAddItem: any, addItemText: any, afterRender: any);
  koIsList: any;
  getLocString: any;
  koShowHeader: any;
  columns: any;
  sortableOptions: any;
  model: SurveyNestedPropertyEditor;
  koAllowAddRemoveItems: any;
  readOnly: any;
  onAddClick: any;
  onClearClick: any;
  koAllowRemoveAllItems: any;
  koCanAddItem: any;
  addItemText: any;
  afterRender: any;
  get originalValue(): any;
}
export declare class PropertyEditorNestedViewModel {
  constructor(_onReturnToListClick: any, koEditorName: any, koEditItem: any, model: SurveyNestedPropertyEditor, afterRender: any);
  _onReturnToListClick: any;
  koEditorName: any;
  koEditItem: any;
  model: SurveyNestedPropertyEditor;
  afterRender: any;
  onReturnToListClick(): void;
}
export declare class PropertyEditorNumberViewModel {
  constructor(koValue: any, readOnly: boolean, koMaxValue: any, koMinValue: any, afterRender: any);
  koValue: any;
  readOnly: boolean;
  koMaxValue: any;
  koMinValue: any;
  afterRender: any;
}
export declare class PropertyEditorOneSelectedViewModel {
  constructor(koAvailableClasses: any, koAllowAddRemoveItems: any, readOnly: any, onAddClick: any, koSelected: any, getLocString: any, getItemText: (item: any, counter?: any) => any, koChangeCounter: any, model: SurveyPropertyOneSelectedEditor, onDeleteClick: any, componentInfo: any, afterRender: any);
  koAvailableClasses: any;
  koAllowAddRemoveItems: any;
  readOnly: any;
  onAddClick: any;
  koSelected: any;
  getLocString: any;
  getItemText: (item: any, counter?: any) => any;
  koChangeCounter: any;
  model: SurveyPropertyOneSelectedEditor;
  onDeleteClick: any;
  componentInfo: any;
  afterRender: any;
  availableClassesContainer: any;
  get originalValue(): any;
  get selectedObjectEditor(): any;
  setupAvailableClassesContainer: (rootElement: any) => void;
  toggleClassesContainer(): void;
}
export declare class PropertyEditorRestfullViewModel {
  constructor(koContentEditor: any, getLocString: any, question: any, componentInfo: any, koAfterRender: any, afterRender: any);
  koContentEditor: any;
  getLocString: any;
  question: any;
  componentInfo: any;
  koAfterRender: any;
  afterRender: any;
}
export declare class PropertyEditorStringViewModel {
  constructor(koValue: any, readOnly: boolean, koInputType: any, defaultValue: any, koMaxLength: any, displayName: string, listName: string, dataList: any, koDisplayError: any, getLocString: any, koErrorText: any, onKeydown: any, afterRender: any);
  koValue: any;
  readOnly: boolean;
  koInputType: any;
  defaultValue: any;
  koMaxLength: any;
  displayName: string;
  listName: string;
  dataList: any;
  koDisplayError: any;
  getLocString: any;
  koErrorText: any;
  onKeydown: any;
  afterRender: any;
}
export declare class PropertyEditorStringsViewModel {
  constructor(koTextValue: any, readOnly: boolean, displayName: string, koDisplayError: any, koErrorText: any, onKeydown: any, afterRender: any);
  koTextValue: any;
  readOnly: boolean;
  displayName: string;
  koDisplayError: any;
  koErrorText: any;
  onKeydown: any;
  afterRender: any;
}
export declare class PropertyEditorSwitchViewModel {
  constructor(koValue: any, readOnly: boolean, displayName: string, afterRender: any);
  koValue: any;
  readOnly: boolean;
  displayName: string;
  afterRender: any;
}
export declare class PropertyEditorTextViewModel {
  constructor(koValue: any, readOnly: boolean, isDisplayNameVisible: boolean, koMaxLength: any, displayName: string, onBlur: any, onFocus: any, onKeydown: any, afterRender: any);
  koValue: any;
  readOnly: boolean;
  isDisplayNameVisible: boolean;
  koMaxLength: any;
  displayName: string;
  onBlur: any;
  onFocus: any;
  onKeydown: any;
  afterRender: any;
}
export declare class PropertyEditorValueViewModel {
  constructor(koSurvey: any, resetValue: (model: SurveyPropertyDefaultValueEditor) => void, resetText: any, refreshSurvey: (model: SurveyPropertyDefaultValueEditor) => void, refreshText: any, model: SurveyPropertyDefaultValueEditor, componentInfo: any, koAfterRender: any, afterRender: any);
  koSurvey: any;
  resetValue: (model: SurveyPropertyDefaultValueEditor) => void;
  resetText: any;
  refreshSurvey: (model: SurveyPropertyDefaultValueEditor) => void;
  refreshText: any;
  model: SurveyPropertyDefaultValueEditor;
  componentInfo: any;
  koAfterRender: any;
  afterRender: any;
}
export declare class PropertyEditorViewModel {
  constructor(showDisplayNameOnTop: boolean, displayName: string, contentTemplateName: string, helpText: string, model: SurveyPropertyEditorBase, afterRender: any);
  showDisplayNameOnTop: boolean;
  displayName: string;
  contentTemplateName: string;
  helpText: string;
  model: SurveyPropertyEditorBase;
  afterRender: any;
  showHelpText: any;
  toggleShowHelpText: any;
}
export declare class PropertyGridObjectEditorModel {
  constructor(propertyEditorOptions?: ISurveyObjectEditorOptions);
  propertyEditorOptions: ISurveyObjectEditorOptions;
  selectedObjectValue: any;
  koElementEditor: any;
  koHasObject: any;
  onAfterRenderCallback: (object: any, htmlElement: any, property: SurveyObjectProperty) => any;
  onSortPropertyCallback: (object: any, property1: any, property2: any) => number;
  onPropertyChanged: (obj: any, prop: any, oldValue: any) => void;
  onCorrectValueBeforeSet: (obj: any, prop: any, newValue: any) => any;
  koIsOldTableAppearance: any;
  objectChanged(): void;
  get selectedObject(): any;
  set selectedObject(val: any);
  getPropertyEditorByName(propertyName: string): SurveyObjectProperty;
  focusEditor(): void;
  hasErrors(): boolean;
  protected createSurveyElementEditor(value: any): SurveyElementEditorContentModel;
}
export declare class PropertyGridViewModel {
  constructor(koObjects: any, koSelectedObject: any, propertyGridObjectEditorModel: PropertyGridObjectEditorModel);
  koObjects: any;
  koSelectedObject: any;
  propertyGridObjectEditorModel: PropertyGridObjectEditorModel;
  getLocString(str: string): any;
}
export declare class QuestionActionsAdorner {
  constructor(question: any, editor: any);
  question: any;
  actions: any;
  getStyle(model: ISurveyObjectMenuItem): any;
  localize(entryString: any): any;
}
export declare class QuestionConverter {
  static convertInfo: any;
  static addConvertInfo(className: string, convertToClassName: string): void;
  static getConvertToClasses(className: string, availableTypes?: any): Array<any>;
  static convertObject(obj: any, convertToClass: string): any;
}
/*
* The list of Toolbox items.
*/
export declare class QuestionToolbox {
  constructor(supportedQuestions?: any, creator?: any);
  creator: any;
  _orderedQuestions: any;
  _questionDefaultSettings: any;
  /*
  * Modify this array to change the toolbox items order.
  */
  get orderedQuestions(): any;
  set orderedQuestions(val: any);
  /*
  * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
  */
  copiedItemMaxCount: number;
  allowExpandMultipleCategoriesValue: boolean;
  keepAllCategoriesExpandedValue: boolean;
  itemsValue: any;
  koItems: any;
  koCategories: any;
  koActiveCategory: any;
  koHasCategories: any;
  koCanCollapseCategories: any;
  /*
  * The Array of Toolbox items as Text JSON.
  */
  get jsonText(): string;
  set jsonText(val: string);
  /*
  * The Array of copied Toolbox items as Text JSON.
  */
  get copiedJsonText(): string;
  set copiedJsonText(val: string);
  /*
  * The Array of Toolbox items.
  */
  get items(): any;
  get itemNames(): any;
  /*
  * The Array of copied Toolbox items
  */
  get copiedItems(): any;
  /*
  * Add toolbox items into the Toolbox
  */
  addItems(items: any, clearAll?: boolean): void;
  /*
  * Add a copied Question into Toolbox
  */
  addCopiedItem(question: any, options?: any): void;
  /*
  * Add a toolbox item
  */
  addItem(item: IQuestionToolboxItem, index?: number): void;
  /*
  * Add a new toolbox item, add delete the old item with the same name
  */
  replaceItem(item: IQuestionToolboxItem): boolean;
  /*
  * Remove a toolbox item by its name
  */
  removeItem(name: string): boolean;
  /*
  * Remove all toolbox items.
  */
  clearItems(): void;
  /*
  * Remove all copied toolbox items.
  */
  clearCopiedItems(): void;
  /*
  * Returns toolbox item by its name. Returns null if there is no toolbox item with this name
  */
  getItemByName(name: string): IQuestionToolboxItem;
  /*
  * Set it to true, to allow end-user to expand more than one category. There will no active category in this case
  */
  get allowExpandMultipleCategories(): boolean;
  set allowExpandMultipleCategories(val: boolean);
  /*
  * Set it to true to expand all categories and hide expand/collapse category buttons
  */
  get keepAllCategoriesExpanded(): boolean;
  set keepAllCategoriesExpanded(val: boolean);
  /*
  * Change the category of the toolbox item
  */
  changeCategory(name: string, category: string): void;
  /*
  * Change categories for several toolbox items.
  */
  changeCategories(changedItems: any): void;
  /*
  * Set and get and active category. This property doesn't work if allowExpandMultipleCategories is true. Its default value is empty.
  */
  get activeCategory(): string;
  set activeCategory(val: string);
  /*
  * Expand a category by its name. If allowExpandMultipleCategories is false (default value), all other categories become collapsed
  */
  expandCategory(categoryName: string): void;
  /*
  * Collapse a category by its name. If allowExpandMultipleCategories is false (default value) this function does nothing
  */
  collapseCategory(categoryName: string): void;
  /*
  * Expand all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
  */
  expandAllCategories(): void;
  /*
  * Collapse all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
  */
  collapseAllCategories(): void;
  protected onItemsChanged(): void;
  dispose(): void;
}
export declare class SplitterComponentViewModel {
  constructor(params: any, componentInfo: any);
  updateSplitter: any;
  dispose(): void;
}
export declare class StylesManager {
  static ThemeVariablesMap: any;
  static ThemeColors: any;
  static currentTheme: any;
  static applyTheme(themeName?: string): void;
}
export declare class SurveyCreatorProperties {
  static instanceValue: SurveyCreatorProperties;
  static get instance(): SurveyCreatorProperties;
  hideCategory(categoryName: string): void;
  hideProperty(propertyName: string, objType?: string): void;
  showProperty(propertyName: string, objType?: string, options?: any): void;
  moveProperty(propertyName: string, objType: string, options: any): void;
}
export declare class SurveyElementEditorContentModel {
  constructor(obj: any, className?: string, options?: ISurveyObjectEditorOptions, useAsPropertyGrid?: boolean, _readOnly?: boolean);
  className: string;
  options: ISurveyObjectEditorOptions;
  onCorrectValueBeforeSet: (prop: any, newValue: any) => any;
  onPropertyChanged: (prop: any, oldValue: any) => void;
  onAfterRenderCallback: (object: any, htmlElement: any, property: SurveyObjectProperty) => any;
  koTabs: any;
  koActiveTab: any;
  protected properties: SurveyQuestionProperties;
  originalObjValue: any;
  get readOnly(): boolean;
  getLocString(name: string): any;
  setParentList(parentList: any): void;
  protected setOriginalObjValue(obj: any): void;
  protected get originalObj(): any;
  get obj(): any;
  get editableObj(): any;
  hasError(): boolean;
  getPropertyEditorByName(propertyName: string): SurveyObjectProperty;
  getTabByName(tabName: string): SurveyElementEditorTabModel;
  focusEditor(): void;
  protected assignPropertiesToEditor(propEditor: SurveyObjectProperty): void;
  protected addPropertiesTabs(tabs: any): void;
  protected createNewTab(tabItem: SurveyQuestionEditorTabDefinition, properties: any): SurveyElementEditorTabModel;
  get useTabsInElementEditor(): boolean;
}
export declare class SurveyElementEditorTabModel {
  constructor(obj: any, properties: any, _name: any, options: ISurveyObjectEditorOptions, _readOnly?: boolean);
  obj: any;
  options: ISurveyObjectEditorOptions;
  editorPropertiesValue: any;
  titleValue: string;
  htmlElements: any;
  onExpand: any;
  onCollapse: any;
  onAfterRenderCallback: (htmlElement: any, property: SurveyObjectProperty) => any;
  koAfterRenderProperty: any;
  koAfterRender: any;
  expand(doSetup?: boolean): void;
  collapse(): void;
  doOnExpanded(doSetup?: boolean): void;
  focusEditor(): void;
  get name(): string;
  get title(): string;
  set title(val: string);
  get editorProperties(): any;
  get htmlTemplate(): string;
  get templateObject(): any;
  hasError(): boolean;
  beforeShow(): void;
  reset(): void;
  applyToObj(obj: any): void;
  getPropertyEditorByName(propertyName: string): SurveyObjectProperty;
  protected getValue(property: any): any;
}
export declare class SurveyElementSelector {
  constructor(survey: any, elementType?: string, showTitle?: boolean, optionsCaptionName?: string);
  survey: any;
  showTitle: boolean;
  optionsCaptionValue: string;
  disableCallback: boolean;
  selectedValues: any;
  koElements: any;
  koValue: any;
  koHasFocus: any;
  koErrorText: any;
  koDisplayError: any;
  onValueChangedCallback: (val: string) => void;
  disabledPropertyName: string;
  koAfterRender: any;
  get value(): string;
  set value(val: string);
  get element(): any;
  set element(val: any);
  get optionsCaption(): string;
  updateItems(): void;
  hasError(): boolean;
  getLocString(name: string): any;
}
export declare class SurveyEmbedingWindow {
  constructor();
  jsonValue: any;
  surveyEmbedingHead: any;
  surveyEmbedingJava: any;
  surveyEmbedingBody: any;
  koHeadText: any;
  koBodyText: any;
  koJavaText: any;
  surveyId: string;
  surveyPostId: string;
  generateValidJSON: boolean;
  surveyJSVersion: string;
  surveyCDNPath: string;
  koShowAsWindow: any;
  koThemeName: any;
  koHasIds: any;
  koLoadSurvey: any;
  koLibraryVersion: any;
  koVisibleHtml: any;
  platformCompleteCode: any;
  platformJSonPage: any;
  platformJSonWindow: any;
  platformHtmlonPage: any;
  platformHtmlonWindow: any;
  getLocString(name: string): any;
  get json(): any;
  set json(val: any);
  get hasAceEditor(): boolean;
  show(): void;
  dispose(): void;
}
export declare class SurveyEvent {
}
export declare class SurveyForDesigner {
  constructor(jsonObj?: any, renderedElement?: any, css?: any);
  selectedElementValue: any;
  editQuestionClick: any;
  onSelectedElementChanged: SurveyEvent;
  onEditButtonClick: SurveyEvent;
  onGetMenuItems: SurveyEvent;
  onElementDoubleClick: SurveyEvent;
  onUpdateElementAllowingOptions: (options: any) => any;
  getEditor: any;
  emptyPageTemplate: string;
  emptyPageTemplateData: any;
  dragDropHelper: any;
  updateElementAllowingOptions(obj: any): void;
  getMenuItems(obj: any): Array<ISurveyObjectMenuItem>;
  get selectedElement(): any;
  set selectedElement(val: any);
  doElementDoubleClick(obj: any): void;
  getEditorLocString(value: string): string;
  get _isLogoBefore(): boolean;
  get _isLogoAfter(): boolean;
  static isTitleLogoEditable: any;
  get hasLogo(): boolean;
  get isLogoBefore(): boolean;
  get isLogoAfter(): boolean;
  isLogoImageChoosen(): any;
  koShowHeader: any;
  isReadOnly: any;
}
export declare class SurveyForTextWorker {
  constructor(jsonObj: any);
  get isDesignMode(): boolean;
}
export declare class SurveyHelper {
  static getNewPageName(objs: any): string;
  static getNewQuestionName(objs: any): string;
  static getNewPanelName(objs: any): string;
  static generateNewName(name: string): string;
  static getNewName(objs: any, baseName: string): string;
  static getObjectType(obj: any): ObjType;
  static getObjectTypeStr(obj: any): string;
  static getObjectName(obj: any, showObjectTitle?: boolean): string;
  static getElements(element: any, includeHidden?: boolean): Array<any>;
  static isPropertyVisible(obj: any, property: any, options?: ISurveyCreatorOptions, showMode?: string, parentObj?: any, parentProperty?: any): boolean;
  static isCanModifyProperty(obj: any, propertyName: string, options?: ISurveyCreatorOptions): boolean;
  static scrollIntoViewIfNeeded(el: any): void;
  static getScrollableDiv(el: any): any;
  static moveItemInArray(list: any, obj: any, newIndex: number): boolean;
  static applyItemValueArray(dest: any, src: any): void;
  static disableSelectingObj(obj: any): void;
  static enableSelectingObj(obj: any): void;
  static canSelectObj(obj: any): boolean;
  static updateQuestionJson(questionJson: any): void;
  static convertMatrixRowsToText(rows: any): string;
  static convertItemValuesToText(items: any): string;
  static convertTextToItemValues(text: string, properties: any, className: string): Array<ItemValue>;
}
export declare class SurveyJSON5 {
  constructor(parseType?: number);
  static positionName: string;
  static escapee: any;
  static ws: any;
  endAt: number;
  at: number;
  ch: any;
  text: string;
  parseType: number;
  parse(source: any, reviver?: any, startFrom?: number, endAt?: number): any;
  replacer: any;
  indentStr: string;
  objStack: any;
  stringify(obj: any, replacer?: any, space?: any): any;
  static cx: any;
  static escapable: any;
  static meta: any;
}
export declare class SurveyJSONEditor {
  constructor();
  static updateTextTimeout: number;
  static showToolbar: boolean;
  static aceBasePath: string;
  isProcessingImmediately: boolean;
  aceEditor: any;
  textWorker: SurveyTextWorker;
  aceCanUndo: any;
  aceCanRedo: any;
  isJSONChanged: boolean;
  isInitialJSON: boolean;
  koText: any;
  koErrors: any;
  /*
  * The list of toolbar items. You may add/remove/replace them.
  */
  toolbarItems: any;
  protected addToolbarItems(): void;
  init(editorElement: any): void;
  get hasAceEditor(): boolean;
  get text(): string;
  set text(val: string);
  show(value: string): void;
  get isJsonCorrect(): boolean;
  get survey(): any;
  timeoutId: number;
  _readOnly: any;
  /*
  * A boolean property, false by default. Set it to true to deny editing.
  */
  get readOnly(): any;
  set readOnly(val: any);
  dispose(): void;
}
export declare class SurveyLiveTester {
  constructor(surveyProvider: any);
  json: any;
  updatingLanguages: boolean;
  koIsRunning: any;
  selectTestClick: any;
  selectPageClick: any;
  survey: any;
  koSurvey: any;
  koPages: any;
  koActivePage: any;
  setPageDisable: any;
  koLanguages: any;
  koActiveLanguage: any;
  koShowInvisibleElements: any;
  onGetObjectDisplayName: (obj: any) => string;
  koShowPagesInTestSurveyTab: any;
  showSimulator: any;
  koShowDefaultLanguageInTestSurveyTab: any;
  koShowInvisibleElementsInTestSurveyTab: any;
  /*
  * The list of toolbar items. You may add/remove/replace them.
  */
  toolbarItems: any;
  onSurveyCreatedCallback: (survey: any) => any;
  setJSON(json: any): void;
  show(options?: any): void;
  getLocString(name: string): any;
  get testSurveyAgainText(): any;
  get localeText(): any;
  koEventAfterRender(element: any, survey: any): void;
  dispose(): void;
}
export declare class SurveyLogicAction {
  constructor(logicType: SurveyLogicType, element: any, survey: any);
  koElement: any;
  koLogicType: any;
  koDisplayError: any;
  koErrorText: any;
  koTemplateObject: any;
  koTemplate: any;
  koLogicTypes: any;
  onLogicTypeChanged: any;
  itemSelectorValue: SurveyElementSelector;
  koAfterRender: any;
  get logicType(): SurveyLogicType;
  set logicType(val: SurveyLogicType);
  get template(): string;
  get templateObject(): any;
  get koTemplateAfterRender(): any;
  get element(): any;
  set element(val: any);
  get itemSelector(): SurveyElementSelector;
  apply(expression: string, isRenaming?: boolean): void;
  renameQuestion(oldName: string, newName: string): void;
  equals(action: SurveyLogicAction): boolean;
  get name(): string;
  get logicTypeName(): string;
  get text(): string;
  get deleteActionText(): string;
  hasError(): boolean;
  get errorText(): string;
  set errorText(val: string);
  getLocString(name: string): any;
}
export declare class SurveyLogicEvent {
}
export declare class SurveyLogicItem {
  constructor(owner: ISurveyLogicItemOwner, expression?: string);
  expression: string;
  koActions: any;
  static counter: number;
  id: number;
  removedActions: any;
  get name(): string;
  get title(): string;
  edit(): void;
  remove(): void;
  get isReadOnly(): boolean;
  get actions(): any;
  addNewAction(action: SurveyLogicAction): void;
  removeAction(action: SurveyLogicAction): void;
  apply(expression: string): void;
  renameQuestion(oldName: string, newName: string): void;
  removeQuestion(name: string): void;
  get expressionText(): string;
  get editText(): string;
  get deleteText(): string;
}
export declare class SurveyLogicType {
  constructor(logicType: ISurveyLogicType, survey: any, options?: ISurveyObjectEditorOptions);
  survey: any;
  options: ISurveyObjectEditorOptions;
  static expressionToDisplayText(survey: any, options: ISurveyObjectEditorOptions, expression: string): string;
  get name(): string;
  get baseClass(): string;
  get propertyName(): string;
  get templateName(): string;
  get visible(): boolean;
  get showTitlesInExpression(): boolean;
  get hasItemSelector(): boolean;
  createItemSelector(): SurveyElementSelector;
  get showInUI(): boolean;
  createNewElement(survey: any): any;
  saveElement(action: SurveyLogicAction): void;
  createTemplateObject(element: any): any;
  get isUniqueItem(): boolean;
  get questionNames(): any;
  get displayName(): string;
  get description(): string;
  getDisplayText(element: any): string;
  formatElName(name: string): string;
  formatExpression(expression: string): string;
}
export declare class SurveyNestedPropertyEditorColumn {
  constructor(property: any);
  property: any;
  get text(): string;
}
export declare class SurveyNestedPropertyEditorEditorCell {
  constructor(obj: any, property: any, options?: ISurveyObjectEditorOptions, listObj?: any, parentReadOnly?: boolean, parentObj?: any, parentProperty?: any);
  obj: any;
  property: any;
  objectPropertyValue: SurveyObjectProperty;
  options: ISurveyObjectEditorOptions;
  get objectProperty(): SurveyObjectProperty;
  get editor(): SurveyPropertyEditorBase;
  get koValue(): any;
  get value(): any;
  set value(val: any);
  get hasError(): boolean;
  updateValue(): void;
}
export declare class SurveyNestedPropertyEditorItem {
  constructor(obj: any, getColumns: any, options: ISurveyObjectEditorOptions, getItemClassName?: (item: any) => string, canDeleteItem?: boolean, parentList?: any, isReadOnly?: boolean, parentObj?: any, parentProperty?: any);
  obj: any;
  static dragIconName: string;
  static deleteIconName: string;
  get dragIcon(): string;
  get deleteIcon(): string;
  koHasDetails: any;
  koCanDeleteItem: any;
  protected options: ISurveyObjectEditorOptions;
  koCellsValue: any;
  itemEditorValue: SurveyElementEditorContentModel;
  protected getClassName(): string;
  get columns(): any;
  protected hasDetailsProperties(): boolean;
  hideItemEditor(): void;
  get itemEditor(): SurveyElementEditorContentModel;
  get cells(): any;
  hasError(): boolean;
  protected updateValues(): void;
  protected createSurveyQuestionEditor(): SurveyElementEditorContentModel;
  focus(): void;
}
export declare class SurveyObjectItem {
  value: any;
  text: any;
  level: number;
}
export declare class SurveyObjectProperty {
  constructor(property: any, propertyEditorOptions?: ISurveyObjectEditorOptions, isCellEditor?: boolean);
  property: any;
  objectValue: any;
  onCorrectValueBeforeSet: (propEditor: SurveyObjectProperty, newValue: any) => boolean;
  onChanged: (propEditor: SurveyObjectProperty, oldValue: any) => void;
  name: string;
  disabled: boolean;
  editor: SurveyPropertyEditorBase;
  editorType: string;
  editorTypeTemplate: string;
  baseEditorType: string;
  getObjectPropertyByName: (name: string) => SurveyObjectProperty;
  isHiddenValue: boolean;
  koVisible: any;
  get displayName(): string;
  get title(): string;
  get koValue(): any;
  get koText(): any;
  get koIsDefault(): any;
  get object(): any;
  set object(val: any);
  beforeShow(): void;
  hasError(): boolean;
  applyToObj(obj: any): void;
  get isInPropertyGrid(): boolean;
  set isInPropertyGrid(val: boolean);
  reset(): void;
  updateDynamicProperties(): void;
  get isHidden(): boolean;
  set isHidden(val: boolean);
  protected isVisible(): boolean;
  protected onEditorValueChanged(newValue: any): void;
}
export declare class SurveyObjects {
  constructor(koObjects: any, koSelected: any, getObjectDisplayName?: (obj: any, reason: string) => string);
  koObjects: any;
  koSelected: any;
  static intend: string;
  surveyValue: any;
  getItemTextCallback: (obj: any, text: string) => string;
  get survey(): any;
  set survey(val: any);
  hasObject(obj: any): boolean;
  addPage(page: any): void;
  addElement(element: any, parent: any): void;
  selectObject(obj: any): void;
  getSelectedObjectPage(obj?: any): any;
  removeObject(obj: any): void;
  nameChanged(obj: any): void;
  selectNextQuestion(isUp: boolean): any;
}
export declare class SurveyPropertyBindingsItem {
  constructor(property: any, displayName: string, obj: any);
  property: any;
  displayName: string;
  elementSelectorValue: SurveyElementSelector;
  get value(): string;
  set value(val: string);
  setElementSelector(survey: any, showTitle: boolean): void;
  get elementSelector(): SurveyElementSelector;
}
export declare class SurveyPropertyEditorBase {
  constructor(property: any);
  objectValue: any;
  parentListValue: any;
  parentReadOnlyValue: boolean;
  valueUpdatingCounter: number;
  optionsValue: ISurveyObjectEditorOptions;
  property_: any;
  isRequiredValue: boolean;
  titleValue: string;
  showDisplayNameValue: boolean;
  _displayNameValue: any;
  showHelpText: boolean;
  parentObj: any;
  parentProperty: any;
  koValue: any;
  koText: any;
  koIsDefault: any;
  koHasError: any;
  koErrorText: any;
  koDisplayError: any;
  isInplaceProperty: boolean;
  readOnly: any;
  koMaxLength: any;
  koMaxValue: any;
  koMinValue: any;
  onChanged: (newValue: any) => any;
  onGetLocale: any;
  onValueUpdated: (newValue: any) => any;
  setup(): void;
  beforeShow(): void;
  get editingValue(): any;
  set editingValue(val: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  get property(): any;
  get defaultValue(): any;
  get editablePropertyName(): string;
  get title(): string;
  isInPropertyGridValue: boolean;
  get isInPropertyGrid(): boolean;
  set isInPropertyGrid(val: boolean);
  get isDisplayNameVisible(): boolean;
  protected isShowingModal(): boolean;
  get displayName(): string;
  get showDisplayName(): boolean;
  set showDisplayName(val: boolean);
  get showDisplayNameOnTop(): boolean;
  get canShowDisplayNameOnTop(): boolean;
  protected getPropertyHelpLocName(): string;
  get propertyHelpText(): string;
  get contentTemplateName(): string;
  protected get isModal(): boolean;
  get originalObject(): any;
  get object(): any;
  set object(val: any);
  get parentList(): any;
  set parentList(val: any);
  get parentReadOnly(): boolean;
  set parentReadOnly(val: boolean);
  get originalValue(): any;
  protected getOriginalValue(): any;
  protected setObjectCore(value: any): void;
  getValueText(value: any): string;
  hasError(): boolean;
  getLocString(name: string): any;
  hasLocString(name: string): boolean;
  protected get isCurrentValueEmpty(): boolean;
  protected checkForErrors(): boolean;
  get isRequired(): boolean;
  protected setIsRequired(): void;
  protected setTitleAndDisplayName(): void;
  protected getPropertyDisplayName(prop: any): string;
  apply(): boolean;
  protected performApply(): void;
  get locale(): string;
  getLocale(): string;
  getMarkdownHtml(text: string): string;
  getProcessedText(text: string): string;
  getRenderer(name: string): string;
  getRendererContext(locStr: any): any;
  get options(): ISurveyObjectEditorOptions;
  set options(val: ISurveyObjectEditorOptions);
  protected onOptionsChanged(): void;
  setObject(value: any): void;
  protected createEditorOptions(): any;
  protected onSetEditorOptions(editorOptions: any): void;
  protected onValueChanged(): void;
  protected getCorrectedValue(value: any): any;
  protected beginValueUpdating(): void;
  protected endValueUpdating(): void;
  updateValue(): void;
  updatePropertyValue(newValue: any): void;
  protected getValue(): any;
  iskoValueChanging: boolean;
  protected doOnChanged(newValue: any): void;
  protected isValueEmpty(val: any): boolean;
  updateDynamicProperties(): void;
  keyDownHandler(property: any, event: any): boolean;
  element: any;
  koAfterRender: (componentInfo: any) => void;
  focus(): void;
  onInputKeydown(model: any, event: any): boolean;
}
export declare class SurveyPropertyEditorFactory {
  static defaultEditor: string;
  static get operators(): any;
  static set operators(val: any);
  static creatorList: any;
  static creatorByClassList: any;
  static widgetRegisterList: any;
  static cellTypes: any;
  static getOperators(): Array<any>;
  static registerTypeForCellEditing(typeName: string, cellTypeName: string): void;
  static registerEditor(name: string, creator: (property: any) => SurveyPropertyEditorBase, editableClassName?: string): void;
  static registerCustomEditor(name: string, widgetJSON: any): void;
  static unregisterCustomEditor(name: string): void;
  static createEditor(property: any, isCellEditor?: boolean): SurveyPropertyEditorBase;
}
export declare class SurveyPropertyEditorShowWindow {
  constructor();
  koVisible: any;
  koEditor: any;
  show(question: any, elWindow: any, onChanged: (question: any) => any, options?: ISurveyObjectEditorOptions, onClosed?: any, onEditorAfterRenderCallback?: (obj: any, htmlElement: any, prop: SurveyObjectProperty) => void): void;
}
export declare class SurveyPropertyModalEditorCustomWidget {
  constructor(json: any);
  json: any;
  static customWidgetId: number;
  static customWidgetName: string;
  afterRender(editor: SurveyPropertyModalEditor, el: any): void;
  destroy(editor: SurveyPropertyModalEditor, el: any): void;
}
export declare class SurveyPropertyResultfullEditorItem {
  constructor(name: string, val: string, onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any);
  name: string;
  onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any;
  koValue: any;
  isSetttingValue: boolean;
  setValue(val: string): void;
}
export declare class SurveyQuestionEditorDefinition {
  static definition: any;
}
export declare class SurveyQuestionEditorPropertyDefinition {
  property: any;
  title: string;
  category: string;
  createdFromTabName: boolean;
  get name(): string;
}
export declare class SurveyQuestionEditorTabDefinition {
  name: string;
  title: string;
  visible: boolean;
  index: number;
  properties: any;
}
export declare class SurveyQuestionProperties {
  constructor(obj: any, options?: ISurveyCreatorOptions, className?: string, showMode?: string, parentObj?: any, parentProperty?: any);
  obj: any;
  options: ISurveyCreatorOptions;
  showModeValue: string;
  properties: any;
  propertiesHash: any;
  tabs: any;
  getProperty(propertyName: string): any;
  get showMode(): string;
  get isEmpty(): boolean;
  getTabByName(tabName: string): SurveyQuestionEditorTabDefinition;
  getTabs(): Array<SurveyQuestionEditorTabDefinition>;
  getProperties(tab: SurveyQuestionEditorTabDefinition): Array<JsonObjectProperty>;
}
export declare class SurveyResultsModel {
  constructor(survey: any);
  koResultViewType: any;
  koResultText: any;
  koResultData: any;
  getLocString(name: string): any;
  get surveyResultsText(): any;
  get resultsTitle(): any;
  get resultsName(): any;
  get resultsValue(): any;
  get resultsDisplayValue(): any;
  selectTableClick(model: SurveyResultsModel): void;
  selectJsonClick(model: SurveyResultsModel): void;
}
export declare class SurveySimulatorComponent {
  constructor(_toolbarHolder: any, _options?: any);
  simulator: any;
  simulatorOptions: any;
  get survey(): any;
  _simulatorEnabled: any;
  get simulatorEnabled(): boolean;
  set simulatorEnabled(val: boolean);
  _simulatorScaleEnabled: any;
  get simulatorScaleEnabled(): boolean;
  set simulatorScaleEnabled(val: boolean);
  get activeDevice(): string;
  set activeDevice(val: string);
  koDevices: any;
  get landscapeOrientation(): boolean;
  set landscapeOrientation(val: boolean);
  koHasFrame: any;
  koSimulatorFrame: any;
}
export declare class SurveyTextWorker {
  constructor(text: string);
  text: string;
  static newLineChar: string;
  errors: any;
  surveyValue: any;
  jsonValue: any;
  surveyObjects: any;
  get survey(): any;
  get isJsonCorrect(): boolean;
  protected process(): void;
}
export declare class TitleActionsViewModel {
  constructor(survey: SurveyForDesigner, input: any, rootElement: any, allowImageChooser?: boolean);
  survey: SurveyForDesigner;
  uploadFiles: (files: any) => void;
  getLocString(str: string): any;
  getStyle(model: ISurveyObjectMenuItem): any;
  getIcon(model: ISurveyObjectMenuItem): any;
  actions: any;
}
export declare class TitleInplaceEditor {
  constructor(target: any, name: string, rootElement: any, placeholder: string, editor: SurveyCreator);
  placeholder: string;
  editor: SurveyCreator;
  _valueSubscription: any;
  draggableElement: any;
  property: any;
  editingName: any;
  prevName: any;
  isEditing: any;
  _needSelectTargetOnStartEdit: boolean;
  protected forNeibours(func: (el: any, index?: number) => void): void;
  onValidateSelectedElement: (creator: any, options: any) => void;
  getInputElement(): any;
  get maxLength(): number | "";
  get readOnly(): boolean;
  valueChanged: (newVal: any) => string;
  getLocString(str: string): any;
  protected updatePrevName(): void;
  error: any;
  hasErrors(): boolean;
  hideEditor: any;
  findDraggableElement(el: any): any;
  startEdit: (model: TitleInplaceEditor, event: any) => void;
  postEdit: any;
  isCompositionSessionOpen: boolean;
  shouldCloseCompositionSession: boolean;
  cancelEdit: any;
  compositionStart: (model: any, event: any) => void;
  compositionEnd: (model: any, event: any) => void;
  nameEditorKeypress: (model: any, event: any) => boolean;
  nameEditorKeydown: (model: any, event: any) => boolean;
  dispose(): void;
}
export declare class Toolbar {
  constructor(items: any);
  items: any;
  get hasItems(): boolean;
}
export declare class ToolboxItemViewModel {
  constructor(item: IQuestionToolboxItem, _creator: SurveyCreator);
  item: IQuestionToolboxItem;
  get ariaLabel(): string;
  click: any;
  dragstart: (el: any, e: any) => boolean;
  dragend: (el: any, e: any) => void;
}
export declare class Transaction {
  constructor(_name: string);
  _actions: any;
  apply(): void;
  rollback(): void;
  addAction(action: any): void;
  isEmpty(): boolean;
  get actions(): any;
}
export declare class TranslationItemBase {
  constructor(name: string);
  name: string;
  get isGroup(): boolean;
  fillLocales(locales: any): void;
  mergeLocaleWithDefault(loc: string): void;
}
export declare class TranslationViewModel {
  constructor(creator: SurveyCreator);
  model: Translation;
}
export declare class UndoRedoAction {
  apply(): void;
  rollback(): void;
  get changes(): IUndoRedoChange;
}
export declare class UndoRedoManager {
  constructor();
  onQuestionNameChangedCallback: (obj: any, oldName: string) => any;
  onPropertyValueChanged(name: string, oldValue: any, newValue: any, sender: any, arrayChanges: any): void;
  _ignoreChanges: boolean;
  _preparingTransaction: Transaction;
  _transactions: any;
  _currentTransactionIndex: number;
  isCopyObject(sender: any): void;
  canUndoRedoCallback(): void;
  transactionCounter: number;
  startTransaction(name: string): void;
  stopTransaction(): void;
  get isProcessingUndoRedo(): boolean;
  canUndo(): boolean;
  undo(): void;
  canRedo(): boolean;
  redo(): void;
  changesFinishedCallback: (changes: IUndoRedoChange) => void;
}
/*
* Base class for Survey Creator.
*/
export declare class CreatorBase<T> implements ISurveyCreatorOptions {
  constructor(options: ICreatorOptions);
  showDesignerTabValue: any;
  showJSONEditorTabValue: any;
  showTestSurveyTabValue: any;
  showEmbeddedSurveyTabValue: any;
  showTranslationTabValue: any;
  showLogicTabValue: any;
  isRTLValue: boolean;
  haveCommercialLicenseValue: any;
  alwaySaveTextInPropertyEditorsValue: boolean;
  showDropdownPageSelectorValue: any;
  protected surveyValue: any;
  newQuestions: any;
  newPanels: any;
  newQuestionChangedNames: any;
  koAutoSave: any;
  koShowOptions: any;
  koGenerateValidJSON: any;
  koShowState: any;
  koViewType: any;
  /*
  * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.element an instance of the deleting element
  * <br/> options.elementType the type of the element: 'question', 'panel' or 'page'.
  * <br/> options.allowing set it to false to cancel the element deleting
  */
  onElementDeleting: any;
  /*
  * The event is called on setting a readOnly property of the property editor. By default the property.readOnly property is used.
  * You may changed it and make the property editor read only or enabled for a particular object.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object, Survey, Page, Panel or Question
  * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
  * <br/> options.readOnly a boolean value. It has value equals to options.readOnly property by default. You may change it.
  * <br/> options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
  * <br/> options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
  */
  onGetPropertyReadOnly: any;
  /*
  * The event is fired when the survey creator creates a survey object (Survey.Survey).
  * <br/> sender the survey creator object that fires the event
  * <br/> options.survey the survey object showing in the creator.
  * <br/> options.reason indicates what component of the creator requests the survey. There are several reason types: "designer" - survey for designer survey, "test" - survey for "Test Survey" tab and "conditionEditor", "defaultValueEditor", "restfulEditor" - surveys for different property editors.
  */
  onSurveyInstanceCreated: any;
  /*
  * The event allows to display the custom name for objects: questions, pages and panels. By default the object name is using. You may show object title by setting showObjectTitles property to true.
  * Use this event, if you want custom display name for objects.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object, Survey, Page, Panel or Question
  * <br/> options.reason the name of the UI that requests the object display name
  * <br/> options.displayName change this property to show your custom display name for the object
  */
  onGetObjectDisplayName: any;
  /*
  * Use this event to add/remove/modify the element (question/panel) menu items.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.items the list of menu items. It has two required fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
  */
  onDefineElementMenuItems: any;
  /*
  * The event is called before showing a property in the Properties Grid or in the Question Editor.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object, Survey, Page, Panel or Question
  * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
  * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Properties Grid and in the Question Editor.
  * <br/> options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
  * <br/> options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
  * <br/>
  * <br/> [Example: Hide a category in the Properties Grid](https://surveyjs.io/Examples/Survey-Creator?id=hidecategoryinpropertiesgrid)
  */
  onShowingProperty: any;
  onCanShowProperty: any;
  /*
  * The event is called before rendering a delete button in the Property Grid or in Question Editor.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey Question
  * <br/> options.item the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
  * <br/> options.canDelete a boolean value. It is true by default. Set it false to remove delete button from the Property Grid or in Question Editor
  */
  onCanDeleteItem: any;
  /*
  * The event is called on deleting a collection item from the Property Editor. For example: column in columns editor or item in choices and so on.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object: Question, Panel, Page or Survey
  * <br/> options.property the collection property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
  * <br/> options.propertyName the collection property name
  * <br/> options.collection the editing collection where deleting item is located. It is can be columns in the matrices or choices in dropdown question and so on.
  * <br/> options.item the collection item that we are going to delete
  * <br/> options.allowDelete a boolean value. It is true by default. Set it false to abondome the element removing from the collection
  */
  onCollectionItemDeleting: any;
  /*
  * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
  * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
  * <br/> sender the survey creator object that fires the event
  * <br /> options.obj the object that contains the itemsValues array, for example selector, rating and single choice matrix questions.
  * <br/> options.propertyName  the object property Name. It can be "choices" for selector questions or rateValues for rating question or columns/rows for single choice matrix.
  * <br/> options.newItem a new created Survey.ItemValue object.
  * <br/> options.itemValues an editing Survey.ItemValue array. newItem object is not added yet into this array.
  */
  onItemValueAdded: any;
  /*
  * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.matrix a matrix question where column is located, matrix.columns.
  * <br/> options.newColumn a new created Survey.MatrixDropdownColumn object.
  * <br/> options.columns editable columns objects. They can be different from options.matrix.columns. options.columns and options.matrix.columns are equal after user press Apply or Cancel and options.columns will be set to options.matrix.columns or reset to initial state.
  */
  onMatrixColumnAdded: any;
  /*
  * Use this event to control Property Editors UI.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName  the name of the edited property.
  * <br/> options.editorOptions  options that can be changed.
  * <br/> options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
  * <br/> options.editorOptions.allowRemoveAllItems a boolean property, true by default. Set it false to disable remove all items in array properties. For example 'choices', 'columns', 'rows'.
  * <br/> options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Fast Entry" tab for "choices" property.
  * <br/> options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Fast Entry" tab for "choices" property by default.
  */
  onSetPropertyEditorOptions: any;
  /*
  * The event is called on generation a new name for a new created element.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.element a new created survey element. It can be question, panel or page
  * <br/> options.name a new suggested name, that is unique for the current survey. You can suggest your own name. If it is unique, creator will assign it to the element.
  * <br/> options.isUnique a boolean property, set this property to false, if you want to ask Creator to generate another name
  */
  onGenerateNewName: any;
  /*
  * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName  the name of the edited property.
  * <br/> options.value the property value.
  * <br/> options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
  */
  onPropertyValidationCustomError: any;
  /*
  * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName  the name of the edited property.
  * <br/> options.value the property value.
  * <br/> options.newValue set the corrected value into this property. Leave it null if you are ok with the entered value.
  * <br/> options.doValidation set the value to true to call the property validation. If there is an error, the user sees it immediately.
  */
  onPropertyValueChanging: any;
  /*
  * Use this event to modify the list (name and titles) of the questions available in a condition editor.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName  the name of the edited property.
  * <br/> options.editor the instance of Property Editor.
  * <br/> options.list the list of the questions available for condition
  */
  onConditionQuestionsGetList: any;
  /*
  * Use this event to modify the list of the strings available in the Translation tab.
  * 
  * The event handler accepts the following arguments:
  * 
  * - `sender` - A Survey Creator instance that raised the event.
  * - `options.obj` - A survey object instance (survey, page, panel, question) whose string translations are being edited in the Translation tab.
  * - `options.propertyName` - The name of a property being translated.
  * - `options.visible` - A Boolean value that specifies the property visibility. Set it to `false` to hide the property.
  */
  onTranslationStringVisibility: any;
  /*
  * Use this event to define is the locale initially selected (default value) and ready for translaion or it is unselected.
  * 
  * The event handler accepts the following arguments:
  * 
  * - `sender` - A Survey Creator instance that raised the event.
  * - `options.locale` - the locale name, like 'en', 'de' and so on.
  * - `options.isSelected` - it is true by default. Set it to false to make the translation unselected.
  */
  onTranslationLocaleInitiallySelected: any;
  /*
  * This callback is used internally for providing survey JSON text.
  */
  getSurveyJSONTextCallback: any;
  /*
  * This callback is used internally for setting survey JSON text.
  */
  setSurveyJSONTextCallback: (text: string) => void;
  /*
  * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
  */
  useTabsInElementEditor: boolean;
  /*
  * You need to set this property to value bigger than 0 to disable adding more logic items in condition than this value.
  */
  maxLogicItemsInCondition: number;
  /*
  * You need to set this property to true if you want to show titles instead of names in pages editor and object selector.
  */
  showObjectTitles: boolean;
  /*
  * You need to set this property to true if you want to show titles instead of names in expression editor.
  */
  showTitlesInExpressions: boolean;
  /*
  * You need to set this property to false to allow your users build expressions visually only, without editing them in text editor.
  */
  allowEditExpressionsInTextEditor: boolean;
  /*
  * You need to set this property to number more than 0 to limit the number of columns that users can create for matrix dynamic/matrix dropdown questions.
  */
  maximumColumnsCount: number;
  /*
  * Set this property to false to hide the pages selector in the Test Survey Tab
  */
  showPagesInTestSurveyTab: boolean;
  /*
  * Set this property to false to hide the device simulator in the Test Survey Tab
  */
  showSimulatorInTestSurveyTab: boolean;
  /*
  * Set this property to false to disable pages adding, editing and deleting
  */
  allowModifyPages: boolean;
  /*
  * The default value is _"auto"_. It shows the language selector if there are more than two languages are using in the survey.
  * It shows only used languages in the survey.
  * Set this property to _false_ to hide the default language selector in the Test Survey Tab.
  * Set it to _true_ to show this selector even if there is only one language in the survey
  * Set it to _all_ to show the selector with all available languages (30+)
  */
  showDefaultLanguageInTestSurveyTab: string | boolean;
  /*
  * Set this property to false to hide the show invisible element checkbox in the Test Survey Tab
  */
  showInvisibleElementsInTestSurveyTab: boolean;
  /*
  * Set this property to true if you want to show "page selector" in the toolabar instead of "pages editor"
  */
  showPageSelectorInToolbar: boolean;
  tabs: any;
  /*
  * Returns the localized string by its id
  */
  getLocString(str: string): any;
  /*
  * Set it to true to show "JSON Editor" tab and to false to hide the tab
  */
  get showDesignerTab(): boolean;
  set showDesignerTab(val: boolean);
  /*
  * Set it to true to show "JSON Editor" tab and to false to hide the tab
  */
  get showJSONEditorTab(): boolean;
  set showJSONEditorTab(val: boolean);
  /*
  * Set it to true to show "Test Survey" tab and to false to hide the tab
  */
  get showTestSurveyTab(): boolean;
  set showTestSurveyTab(val: boolean);
  get showEmbededSurveyTab(): boolean;
  set showEmbededSurveyTab(val: boolean);
  /*
  * Set it to true to show "Embed Survey" tab and to false to hide the tab
  */
  get showEmbeddedSurveyTab(): boolean;
  set showEmbeddedSurveyTab(val: boolean);
  /*
  * Set it to true to show "Logic" tab and to false to hide the tab
  */
  get showLogicTab(): boolean;
  set showLogicTab(val: boolean);
  /*
  * Set it to true to show "Translation" tab and to false to hide the tab
  */
  get showTranslationTab(): boolean;
  set showTranslationTab(val: boolean);
  /*
  * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
  */
  get isAutoSave(): any;
  set isAutoSave(val: any);
  /*
  * Set it to false to suppress an alert message about error on saving the survey into database.
  */
  showErrorOnFailedSave: boolean;
  koReadOnly: any;
  protected onSetReadOnly(newVal: boolean): void;
  /*
  * A boolean property, false by default. Set it to true to deny editing.
  */
  get readOnly(): boolean;
  set readOnly(val: boolean);
  /*
  * You have right to set this property to true if you have bought the commercial licence only.
  * It will remove the text about non-commerical usage on the top of the widget.
  * Setting this property true without having a commercial licence is illegal.
  */
  get haveCommercialLicense(): any;
  set haveCommercialLicense(val: any);
  /*
  * Set it to true to activate RTL support
  */
  get isRTL(): boolean;
  set isRTL(val: boolean);
  get showState(): any;
  set showState(val: any);
  /*
  * Change the active view/tab. It will return false if it can't change the current tab.
  */
  makeNewViewActive(viewName: string): boolean;
  protected onViewTypeChanged(newType: string): void;
  protected canSwitchViewType(newType: string): boolean;
  protected initTabs(): void;
  getOptions(): ICreatorOptions;
  protected setOptions(options: ICreatorOptions): void;
  onIsPropertyReadOnlyCallback(obj: any, property: any, readOnly: boolean, parentObj: any, parentProperty: any): boolean;
  /*
  * The editing survey object (Survey.Survey)
  */
  get survey(): any;
  protected setTextValue(value: string): void;
  /*
  * Set JSON as text  into survey. Clear undo/redo states optionally.
  */
  changeText(value: string, clearState?: boolean): void;
  /*
  * The Survey JSON as a text. Use it to get Survey JSON or change it.
  */
  get text(): string;
  set text(val: string);
  getSurveyJSON(): any;
  getObjectDisplayName(obj: any, reason: string, displayName?: string): string;
  createSurvey(json?: any, reason?: string, surveyType?: any): any;
  setModified(options?: any): void;
  protected convertCurrentObject(obj: any, className: string): void;
  protected initSurveyWithJSON(json: any, clearState: boolean): void;
  /*
  * The Survey JSON. Use it to get Survey JSON or change it.
  */
  get JSON(): any;
  set JSON(val: any);
  /*
  * Set it to false hide the dropdown page selector in the page editor above the design surface
  */
  get showDropdownPageSelector(): any;
  protected doClickQuestionCore(element: IElement, modifiedType?: string): void;
  setNewNames(element: IElement): void;
  protected getAllQuestions(): Array<any>;
  protected getAllPanels(): Array<any>;
  protected addElements(elements: any, isPanel: boolean, result: any): void;
  protected getNewName(type: string): string;
  protected getNewQuestionName(): string;
  protected getNewPanelName(): string;
  protected setNewNamesCore(element: IElement): void;
  protected createNewElement(json: any): IElement;
  copyElement(element: any): IElement;
  /*
  * Copy a question to the active page
  */
  fastCopyQuestion(question: any): void;
  /*
  * Delete an element in the survey. It can be a question, a panel or a page.
  */
  deleteElement(element: any): void;
  protected deleteObjectCore(obj: any): void;
  protected deleteObject(obj: any): void;
  protected updateConditionsOnRemove(obj: any): void;
  selectElement(element: any): void;
  protected deletePanelOrQuestion(obj: any, objType: ObjType): void;
  protected onCanShowObjectProperty(object: any, property: any, showMode: string, parentObj: any, parentProperty: any): boolean;
  protected canDeleteItem(object: any, item: any, allowDelete: boolean): boolean;
  protected generateUniqueName(el: any, newName: string): string;
  protected isNameUnique(el: any, newName: string): boolean;
  protected doPropertyGridChanged(): void;
  get alwaySaveTextInPropertyEditors(): boolean;
  set alwaySaveTextInPropertyEditors(val: boolean);
  onCanShowPropertyCallback(object: any, property: any, showMode: string, parentObj: any, parentProperty: any): boolean;
  onCanDeleteItemCallback(object: any, item: any, allowDelete: boolean): boolean;
  onCollectionItemDeletingCallback(obj: any, property: any, collection: any, item: any): boolean;
  onItemValueAddedCallback(obj: any, propertyName: string, itemValue: any, itemValues: any): void;
  onMatrixDropdownColumnAddedCallback(matrix: any, column: any, columns: any): void;
  onSetPropertyEditorOptionsCallback(propertyName: string, obj: any, editorOptions: any): void;
  onGetErrorTextOnValidationCallback(propertyName: string, obj: any, value: any): string;
  onValueChangingCallback(options: any): void;
  onPropertyValueChanged(property: any, obj: any, newValue: any): any;
  onGetElementEditorTitleCallback(obj: any, title: string): string;
  onConditionQuestionsGetListCallback(propertyName: string, obj: any, editor: any, list: any): void;
  startUndoRedoTransaction(): void;
  stopUndoRedoTransaction(): void;
  protected startTransaction(name: string): void;
  protected stopTransation(): void;
}
export declare class EmptySurveyCreatorOptions implements ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean;
  maximumColumnsCount: number;
  getObjectDisplayName(obj: any, reason: string, displayName: string): string;
  onCanShowPropertyCallback(object: any, property: any, showMode: string, parentObj: any, parentProperty: any): boolean;
  onIsPropertyReadOnlyCallback(obj: any, property: any, readOnly: boolean, parentObj: any, parentProperty: any): boolean;
  onCanDeleteItemCallback(object: any, item: any, allowDelete: boolean): boolean;
  onCollectionItemDeletingCallback(obj: any, property: any, collection: any, item: any): boolean;
  onItemValueAddedCallback(obj: any, propertyName: string, itemValue: any, itemValues: any): void;
  onMatrixDropdownColumnAddedCallback(matrix: any, column: any, columns: any): void;
  onSetPropertyEditorOptionsCallback(propertyName: string, obj: any, editorOptions: any): void;
  onGetErrorTextOnValidationCallback(propertyName: string, obj: any, value: any): string;
  onValueChangingCallback(options: any): void;
  onPropertyValueChanged(property: any, obj: any, newValue: any): void;
  onGetElementEditorTitleCallback(obj: any, title: string): string;
  startUndoRedoTransaction(): void;
  stopUndoRedoTransaction(): void;
  createSurvey(json: any, reason: string, surveyType?: any): any;
  onConditionQuestionsGetListCallback(propertyName: string, obj: any, editor: any, list: any): void;
}
export declare class FlowPanelActionsAdorner extends QuestionActionsAdorner {
  constructor(question: any, editor: any, adornerElement: any);
}
export declare class ItemInplaceEditor extends TitleInplaceEditor {
  constructor(target: any, name: string, question: any, item: any, rootElement: any, editor: SurveyCreator);
  _allowAddRemoveItems: boolean;
  deleteItem(model: ItemInplaceEditor, event: any): void;
  get isDraggable(): boolean;
  get isLastItem(): boolean;
  get allowAddRemoveItems(): boolean;
}
export declare class RatingItemEditor extends TitleInplaceEditor {
  constructor(target: any, name: string, question: any, item: any, rootElement: any, editor: SurveyCreator);
  deleteItem(model: RatingItemEditor, event: any): void;
  get isLastItem(): boolean;
  dispose(): void;
}
export declare class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  get editorType(): string;
  get canShowDisplayNameOnTop(): boolean;
  getValueText(value: any): string;
}
export declare class SurveyColorPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  get editorType(): string;
}
export declare class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  koChoices: any;
  koHasFocus: any;
  get editorType(): string;
  getValueText(value: any): string;
  setObject(value: any): void;
  updateDynamicProperties(): void;
  updateChoices(): void;
  get optionsCaption(): string;
  protected getPropertyChoices(): Array<any>;
}
export declare class SurveyElementEditorOldTableContentModel extends SurveyElementEditorContentModel {
  constructor(obj: any, className?: string, options?: ISurveyObjectEditorOptions, onSortPropertyCallback?: (object: any, property1: any, property2: any) => number);
  className: string;
  options: ISurveyObjectEditorOptions;
  koProperties: any;
  koTab: any;
  protected addPropertiesTabs(tabs: any): void;
  protected assignPropertiesToEditor(propEditor: SurveyObjectProperty): void;
}
export declare class SurveyFilePropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  get editorType(): string;
}
export declare class SurveyLogic implements ISurveyLogicItemOwner {
  constructor(survey: any, options?: ISurveyObjectEditorOptions);
  survey: any;
  options: ISurveyObjectEditorOptions;
  static visibleActions: any;
  static types: any;
  koItems: any;
  invisibleItems: any;
  koLogicTypes: any;
  koMode: any;
  koAddNew: any;
  koEditItem: any;
  koRemoveItem: any;
  koShowView: any;
  koSaveAndShowView: any;
  koSaveEditableItem: any;
  koAddNewAction: any;
  koRemoveAction: any;
  koEditableItem: any;
  expressionEditor: SurveyPropertyConditionEditor;
  koReadOnly: any;
  koErrorText: any;
  koDisplayError: any;
  onChangedCallback: (item: SurveyLogicItem, changeType: string) => void;
  /*
  * The event is called when logic item is saved.
  * <br/> options.item is the saved logic item.
  */
  onLogicItemSaved: SurveyLogicEvent;
  /*
  * The event is called before logic item is saved. You can set options.error to non empty string to show error instead of saving the item.
  * You can use options.item.actions to access actions and optionally set errorText to a particular action.
  * <br/> options.item is the saved logic item.
  * <br/> usedNamesInExpression - the string list of all variables (questions, calculatedValues, and so on) that are used in expression
  * <br/> error - the error string. It is empty by default. You have to set it to non-empty string to show the error on saving.
  */
  onLogicItemValidation: SurveyLogicEvent;
  /*
  * The event is called before logic item is being removed.
  * <br/> options.allowRemove is the option you can set to false and prevent removing.
  * <br/> options.item is the logic item to remove.
  */
  onLogicItemRemoving: SurveyLogicEvent;
  /*
  * The event is called when logic item is removed.
  * <br/> options.item is the removed logic item.
  */
  onLogicItemRemoved: SurveyLogicEvent;
  koAfterRender: any;
  _placeholderHtml: any;
  get placeholderHtml(): any;
  set placeholderHtml(val: any);
  getLocString(name: string): any;
  getTypeByName(name: string): SurveyLogicType;
  update(survey?: any, options?: ISurveyObjectEditorOptions): void;
  get readOnly(): boolean;
  saveEditableItem(): boolean;
  protected onItemChanged(item: SurveyLogicItem, changeType: string): void;
  get items(): any;
  get logicTypes(): any;
  get editableItem(): SurveyLogicItem;
  renameQuestion(oldName: string, newName: string): void;
  removeQuestion(name: string): void;
  hasError(): boolean;
  get addNewActionText(): string;
  get selectedActionCaption(): string;
  get expressionSetupText(): string;
  get actionsSetupText(): string;
  /*
  * There are 3 modes: view, new, edit
  */
  get mode(): string;
  set mode(val: string);
  get addNewText(): string;
  addNew(): void;
  editItem(item: SurveyLogicItem): void;
  removeItem(item: SurveyLogicItem): void;
  addAction(lt: SurveyLogicType, element?: any): SurveyLogicAction;
  addNewAction(): SurveyLogicAction;
  removeAction(action: SurveyLogicAction): void;
  getExpressionAsDisplayText(expression: string): string;
  protected buildItems(showInUI: boolean): Array<SurveyLogicItem>;
  protected getAllElements(): Array<Base>;
  protected createLogicTypes(): Array<SurveyLogicType>;
  get hideExpressionHeader(): boolean;
  set hideExpressionHeader(val: boolean);
  dispose(): void;
}
export declare class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  get editorType(): string;
  protected getCorrectedValue(value: any): any;
}
export declare class SurveyPropertyCustomEditor extends SurveyPropertyEditorBase {
  constructor(property: any, widgetJSON?: any);
  widgetJSONValue: any;
  onValueChangedCallback: (newValue: any) => void;
  get editorType(): string;
  get widgetJSON(): any;
  isValueChanging: boolean;
  protected onValueChanged(): void;
  protected checkForErrors(): boolean;
  protected get widgetRender(): any;
  protected widgetValidate(): string;
  protected doAfterRender(el: any): void;
}
export declare class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  static customWidgets: any;
  static registerCustomWidget(editorType: string, json: any): void;
  protected static idCounter: number;
  static getCustomWidget(editorType: string): SurveyPropertyModalEditorCustomWidget;
  isBeforeShowCalledValue: boolean;
  elements: any;
  modalEditableObject: EditableObject;
  editingObject: any;
  onApplyClick: any;
  onOkClick: any;
  onResetClick: any;
  onShowModal: any;
  onHideModal: any;
  modalName: string;
  modalNameTarget: string;
  koShowApplyButton: any;
  koTitleCaption: any;
  koAfterRender: any;
  koHtmlTop: any;
  koHtmlBottom: any;
  koIsShowingModal: any;
  protected get isModal(): boolean;
  get isBeforeShowCalled(): boolean;
  beforeShow(): void;
  protected beforeShowCore(): void;
  updatePropertyValue(newValue: any): void;
  protected getOriginalValue(): any;
  protected performApply(): void;
  protected beforeShowModal(): void;
  protected isShowingModal(): boolean;
  protected beforeCloseModal(): void;
  protected onOptionsChanged(): void;
  setObject(value: any): void;
  get isEditable(): boolean;
  protected afterRender(componentInfo: any, modalEditor: SurveyPropertyModalEditor): void;
}
export declare class SurveyPropertySelectItemsEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  itemSelectorValue: SurveyElementSelector;
  koItemSelector: any;
  koSelectedForDelete: any;
  koDummy: any;
  koItems: any;
  get editorTypeTemplate(): string;
  deleteItems(): void;
  addItem(): void;
  beforeShow(): void;
  protected getElementType(): string;
}
export declare class SurveyQuestionEditor extends SurveyElementEditorContentModel {
  constructor(obj: any, className?: string, options?: ISurveyObjectEditorOptions);
  className: string;
  options: ISurveyObjectEditorOptions;
  onChanged: (obj: any) => any;
  onHideWindow: any;
  onOkClick: any;
  onApplyClick: any;
  onResetClick: any;
  koTabs: any;
  koActiveTab: any;
  koTitle: any;
  koShowApplyButton: any;
  onTabClick: any;
  editableObject: EditableObject;
  protected setOriginalObjValue(obj: any): void;
  get obj(): any;
  get editableObj(): any;
  protected doCloseWindow(isCancel: boolean): void;
  reset(): void;
  apply(): boolean;
}
export declare class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  koInputType: any;
  listNameValue: string;
  static dataListNumber: number;
  get inputType(): string;
  set inputType(val: string);
  get editorType(): string;
  get listName(): string;
}
export declare class SurveySwitchPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: any);
  get editorType(): string;
  get canShowDisplayNameOnTop(): boolean;
  getValueText(value: any): string;
}
export declare class Translation implements ITranslationLocales {
  constructor(survey: any, showAllStrings?: boolean, koReadOnly?: any, onCanShowProperty?: (obj: any, prop: any) => boolean, onLocaleSelected?: (locale: string) => boolean);
  koReadOnly: any;
  static csvDelimiter: string;
  static newLineDelimiter: string;
  koLocales: any;
  koRoot: any;
  koAvailableLanguages: any;
  koSelectedLanguageToAdd: any;
  koShowAllStrings: any;
  koFilteredPage: any;
  koFilteredPages: any;
  koIsEmpty: any;
  koExportToCSVFile: any;
  koImportFromCSVFile: any;
  koCanMergeLocaleWithDefault: any;
  koMergeLocaleWithDefault: any;
  koMergeLocaleWithDefaultText: any;
  importFinishedCallback: any;
  translateItemAfterRenderCallback: (item: TranslationItem, el: any, locale: string) => void;
  availableTranlationsChangedCallback: any;
  tranlationChangedCallback: (locale: string, name: string, value: string, context: any) => void;
  translationStringVisibilityCallback: (obj: any, propertyName: string, visible: boolean) => boolean;
  rootValue: TranslationGroup;
  surveyValue: any;
  /*
  * The list of toolbar items. You may add/remove/replace them.
  */
  toolbarItems: any;
  get survey(): any;
  set survey(val: any);
  get root(): TranslationGroup;
  get filteredPage(): any;
  set filteredPage(val: any);
  reset(): void;
  get locales(): any;
  get defaultLocale(): string;
  getLocaleName(loc: string): string;
  hasLocale(locale: string): boolean;
  addLocale(locale: string): void;
  resetLocales(): void;
  getSelectedLocales(): Array<any>;
  setSelectedLocales(selectedLocales: any): any;
  get selectLanguageOptionsCaption(): any;
  canShowProperty(obj: any, prop: any, isEmpty: boolean): boolean;
  get showAllStrings(): boolean;
  set showAllStrings(val: boolean);
  get showAllStringsText(): string;
  get showAllPagesText(): string;
  get noStringsText(): string;
  get exportToCSVText(): string;
  get importFromCSVText(): string;
  exportToCSV(): string;
  importFromNestedArray(rows: any): void;
  exportToSCVFile(fileName: string): void;
  importFromCSVFile(file: any): void;
  mergeLocaleWithDefault(): void;
  expandAll(): void;
  collapseAll(): void;
  translateItemAfterRender(item: TranslationItem, el: any, locale: string): void;
  /*
  * Update a translation item with given values
  */
  updateItemWithStrings(item: TranslationItem, values: any, locales: any): void;
  dispose(): void;
}
export declare class TranslationGroup extends TranslationItemBase {
  constructor(name: any, obj: any, translation?: ITranslationLocales, text?: string);
  name: any;
  obj: any;
  translation: ITranslationLocales;
  text: string;
  isRootValue: boolean;
  koExpanded: any;
  koShowHeader: any;
  itemValues: any;
  get items(): any;
  get locItems(): any;
  get isRoot(): boolean;
  setAsRoot(): void;
  getItemByName(name: string): TranslationItemBase;
  get groups(): any;
  get isGroup(): boolean;
  get koLocales(): any;
  get localeCount(): number;
  get locWidth(): string;
  getLocaleName(loc: string): string;
  reset(): void;
  fillLocales(locales: any): void;
  get showAllStrings(): boolean;
  get hasItems(): boolean;
  mergeLocaleWithDefault(loc: string): void;
  expandAll(): void;
  collapseAll(): void;
}
export declare class TranslationItem extends TranslationItemBase {
  constructor(name: string, locString: any, defaultValue: string, translation: ITranslationLocales, context: any);
  name: string;
  locString: any;
  defaultValue: string;
  values: any;
  customText: string;
  afterRender: any;
  koReadOnly: any;
  get text(): string;
  get localizableName(): string;
  getLocText(loc: string): string;
  setLocText(loc: string, newValue: string): void;
  koValue(loc: string): any;
  fillLocales(locales: any): void;
  mergeLocaleWithDefault(loc: string): void;
}
export declare class SurveyCreator extends CreatorBase<SurveyForDesigner> implements ISurveyObjectEditorOptions {
  constructor(renderedElement?: any, options?: any);
  static defaultNewSurveyText: string;
  renderedElement: any;
  questionEditorWindow: SurveyPropertyEditorShowWindow;
  surveyLive: SurveyLiveTester;
  translationValue: Translation;
  logicValue: SurveyLogic;
  protected surveyObjects: SurveyObjects;
  toolboxValue: QuestionToolbox;
  undoRedoManager: UndoRedoManager;
  saveSurveyFuncValue: (no: number, onSaveCallback: any, isSuccess: boolean) => any;
  stateValue: string;
  dragDropHelper: DragDropHelper;
  koShowSurveyTitle: any;
  koAllowControlSurveyTitleVisibility: any;
  closeModalOutsideValue: "off" | "cancel" | "apply";
  pageEditModeValue: "standard" | "single";
  showApplyButtonValue: boolean;
  hideExpressionHeaderValue: any;
  /*
  * If set to true (default value) the creator scrolls to a new element. A new element can be added from Toolbox or by copying.
  */
  scrollToNewElement: boolean;
  /*
  * This property is assign to the survey.surveyId property on showing in the "Embed Survey" tab.
  */
  surveyId: string;
  /*
  * This property is assign to the survey.surveyPostId property on showing in the "Embed Survey" tab.
  */
  surveyPostId: string;
  /*
  * This callback is called on changing "Generate Valid JSON" option.
  */
  generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
  /*
  * The event is called in case of UI notifications. By default all notifications are done via built-in alert () function.
  * In case of any subscriptions to this event all notifications will be redirected into the event handler.
  * <br/> options.message is a message to show.
  */
  onNotify: CreatorEvent;
  /*
  * The event is called before undo happens.
  * <br/> options.canUndo a boolean value. It is true by default. Set it false to hide prevent undo operation.
  */
  onBeforeUndo: CreatorEvent;
  /*
  * The event is called before redo happens.
  * <br/> options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
  */
  onBeforeRedo: CreatorEvent;
  /*
  * The event is called after undo happens.
  * <br/> options.state is an undo/redo item.
  */
  onAfterUndo: CreatorEvent;
  /*
  * The event is called after redo happens.
  * <br/> options.state is an undo/redo item.
  */
  onAfterRedo: CreatorEvent;
  /*
  * The event is called on changing the selected element. You may change the new selected element by changing the property options.newSelectedElement to your own
  * <br/> options.newSelectedElement the element that is going to be selected in the survey desiger: question, panel, page or survey.
  */
  onSelectedElementChanging: CreatorEvent;
  /*
  * The event is called after the selected element is changed.
  * <br/> options.newSelectedElement the new selected element in the survey desiger: question, panel, page or survey.
  */
  onSelectedElementChanged: CreatorEvent;
  /*
  * The event is called when creator tab has been rendered.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.tabName the name of the rendered tab
  * <br/> options.elements the rendered elements
  * <br/> options.model current context model
  * <br/> options.tabData the data of the rendered tab
  */
  onEditorTabRendered: CreatorEvent;
  /*
  * The event is called when creator active tab is changed.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.tabName the name of new active tab
  */
  onActiveTabChanged: CreatorEvent;
  /*
  * The event allows you to custom sort properties in the Property Grid. It is a compare function. You should set options.result to -1 or 1 by comparing options.property1 and options.property2.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object, Survey, Page, Panel or Question
  * <br/> options.property1 the left object property (Survey.JsonObjectProperty object).
  * <br/> options.property2 the right object property (Survey.JsonObjectProperty object).
  * <br/> options.result the result of comparing. It can be 0 (use default behavior),  -1 options.property1 is less than options.property2 or 1 options.property1 is more than options.property2
  */
  onCustomSortProperty: CreatorEvent;
  /*
  * The event allows you modify DOM element for a property in the Property Grid. For example, you may change its styles.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object, Survey, Page, Panel or Question
  * <br/> options.htmlElement the html element that renders the property display name and its editor.
  * <br/> options.property object property (Survey.JsonObjectProperty object).
  * <br/> options.propertyEditor the property Editor.
  */
  onPropertyAfterRender: CreatorEvent;
  /*
  * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.question a new added survey question. Survey.Question object
  * <br/> options.page the survey Page object where question has been added.
  */
  onQuestionAdded: CreatorEvent;
  /*
  * The event is called when an end-user double click on an element (question/panel).
  * <br/> sender the survey creator object that fires the event
  * <br/> options.element an instance of the element
  */
  onElementDoubleClick: CreatorEvent;
  /*
  * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.panel a new added survey panel. Survey.Panel object
  * <br/> options.page the survey Page object where question has been added.
  */
  onPanelAdded: CreatorEvent;
  /*
  * The event is called on adding a new page into the survey.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.page the new survey Page object.
  */
  onPageAdded: CreatorEvent;
  /*
  * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
  * <br/> sender the survey creator object that fires the event
  * <br/> options object contains the information about certain modifications
  * <br/> options.type contains string constant describing certain modification
  * <br/> Available values:
  * <br/>
  * <br/> options.type: "ADDED_FROM_TOOLBOX"
  * <br/> options.question: newly added question
  * <br/>
  * <br/> options.type: "PAGE_ADDED"
  * <br/> options.newValue: newly created page
  * <br/>
  * <br/> options.type: "PAGE_MOVED"
  * <br/> options.page: page has been moved
  * <br/> options.indexFrom: pevious index
  * <br/> options.indexTo: new index
  * <br/>
  * <br/> options.type: "QUESTION_CONVERTED"
  * <br/> options.className: the converted class name
  * <br/> options.oldValue: pevious object
  * <br/> options.newValue: the new object, converted from oldVale to the given class name
  * <br/>
  * <br/> options.type: "QUESTION_CHANGED_BY_EDITOR"
  * <br/> options.question: question has been edited in the popup question editor
  * <br/>
  * <br/> options.type: "PROPERTY_CHANGED"
  * <br/> options.name: the name of the property has been changed
  * <br/> options.target: the object containing the changed property
  * <br/> options.oldValue: the previous value of the changed property
  * <br/> options.newValue: the new value of the changed property
  * <br/>
  * <br/> options.type: "OBJECT_DELETED"
  * <br/> options.target: deleted object
  * <br/>
  * <br/> options.type: "VIEW_TYPE_CHANGED"
  * <br/> options.newType: new type of the creator view: editor or designer
  * <br/>
  * <br/> options.type: "DO_DROP"
  * <br/> options.page: the page of the drap/drop operation
  * <br/> options.source: the source dragged object
  * <br/> options.target: the drop target
  * <br/> options.newElement: a new element. It is defined if a user drops question or panel from the toolbox
  * <br/>
  * <br/> options.type: "TRANSLATIONS_CHANGED"
  */
  onModified: CreatorEvent;
  /*
  * The event is fired on changing question, panel or page name.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the object (question, panel or page)
  * <br/> options.oldName the previous name of the element
  * <br/> options.newName the new name of the element
  */
  onElementNameChanged: CreatorEvent;
  /*
  * The event is fired when the survey creator is initialized and a survey object (Survey.Survey) is created.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.survey  the survey object showing in the creator.
  */
  onDesignerSurveyCreated: CreatorEvent;
  /*
  * The event is fired when the survey creator runs the survey in the test mode.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.survey  the survey object showing in the "Test survey" tab.
  */
  onTestSurveyCreated: CreatorEvent;
  /*
  * Use this event to show a check and custom error in property grid and adorners of the selected elements.
  * Returns true if selected element is null or there is no errors.
  * <br/> options.errors an array of error messages if any.
  */
  onValidateSelectedElement: CreatorEvent;
  /*
  * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName  the name of the edited property.
  * <br/> options.editor the instance of Property Editor.
  */
  onPropertyEditorObjectAssign: CreatorEvent;
  /*
  * Use this event to modify the survey that used on setting value for condition/expression properties, like visibleIf, enableIf and so on.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName  the name of the edited property.
  * <br/> options.editor the instance of Property Editor.
  * <br/> options.valueQuestionName the name of the question that shows in the survey for choosing the value
  * <br/> options.survey the instance of the survey that allows to choose the value. You may modify it before it shows to the end-user
  */
  onConditionValueSurveyCreated: CreatorEvent;
  /*
  * Use this event to process key down event in a property editor
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName  the name of the edited property.
  * <br/> options.editor the instance of Property Editor.
  * <br/> options.event the instance of mouse event.
  */
  onPropertyEditorKeyDown: CreatorEvent;
  /*
  * Use this event to disable user interactions with a question or panel on the design surface.
  * 
  * The event handler accepts the following arguments:
  * 
  * - `sender`- A Survey Creator instance that raised the event.
  * - `options.obj` - A survey element instance (question or panel) for which you can disable user interactions.
  * - `options.allowAddToToolbox` - Allows users to save the current survey element configuration in the Toolbox.
  * - `options.allowChangeRequired` - Allows users to make the survey element required.
  * - `options.allowChangeType` - Allows users to change the survey element type.
  * - `options.allowCopy` - Allows users to duplicate the survey element.
  * - `options.allowDelete` - Allows users to delete the survey element.
  * - `options.allowDragging` - Allows users to drag and drop the survey element.
  * - `options.allowEdit` - Allows users to edit survey element properties on the design surface. If you disable this property, users can edit the properties only in the Property Grid.
  * - `options.allowShowHideTitle` - Specifies whether users can change the `titleLocation` property to "hidden" or "default".
  * 
  * To disable a user interaction, set the correponding `allow...` property to `false`.
  */
  onElementAllowOperations: CreatorEvent;
  /*
  * Use this event to show the description on the top or/and bottom of the property modal editor.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.obj the survey object which property is edited in the Property Editor.
  * <br/> options.propertyName the property name
  * <br/> options.htmlTop the html  that you want to see on the top of the modal window
  * <br/> options.htmlBottom the html that you want to see on the bottom of the modal window
  */
  onShowPropertyModalEditorDescription: CreatorEvent;
  onGetObjectTextInPropertyGrid: CreatorEvent;
  /*
  * The event is called when end-user addes new element (question or panel) into the survey toolbox.
  * It calls before adding the element into toolbox and it allows to change the toolbox item attributes using options.itemOptions parameter
  * <br/> sender the survey creator object that fires the event
  * <br/> options.element is a new added element
  * <br/> options.itemOptions a json object that allows you to override question properties. Attributes are: name, title, isCopied, iconName, json and category.
  */
  onCustomElementAddingIntoToolbox: CreatorEvent;
  /*
  * The event is called when end-user addes new element (question or panel) into the survey toolbox.
  * <br/> sender the survey creator object that fires the event
  * <br/> options.element is a new added element
  */
  onCustomElementAddedIntoToolbox: CreatorEvent;
  /*
  * The event is fired on clearing the files.
  * <br/> sender the survey creator object that fires the event
  * <br/> There are following properties in options:
  * <br/> files - value to clear (it can be a byte array or an URI of a resource)
  * <br/> callback - called on clear complete
  */
  onClearFile: CreatorEvent;
  /*
  * The event is fired on uploading the files.
  * <br/> sender the survey creator object that fires the event
  * <br/> There are two properties in options:
  * <br/> files the Javascript File objects array
  * <br/> callback called on upload complete
  */
  onUploadFile: CreatorEvent;
  /*
  * The event is fired then one need to choose files.
  * <br/> sender the survey creator object that fires the event
  * <br/> input file input HTML element
  * <br/> callback need to be called after files has been chosen
  */
  onOpenFileChooser: CreatorEvent;
  /*
  * The method is called when the translation from csv file is imported.
  */
  onTranslationImported: CreatorEvent;
  /*
  * The method is called on after render translation item. You can modify the html element using this event
  * <br/> options.item - translation item
  * <br/> options.htmlElement - text area for editing
  * <br/> options.locale - the name of the editing locale
  * <br/> options.onDestroyCallback - a function callback that is called on remove htmlElement from DOM.
  */
  onTranslateItemAfterRender: CreatorEvent;
  /*
  * Use this event to control drag&drop operations.
  * <br/> sender the survey creator object that fires the event.
  * <br/> options.survey the editing survey object.
  * <br/> options.allow set it to false to disable dragging.
  * <br/> options.target a target element that is dragging.
  * <br/> options.source a source element. It can be null, if it is a new element, dragging from toolbox.
  * <br/> options.parent a page or panel where target element is dragging.
  * <br/> options.insertBefore an element before the target element is dragging. It can be null if parent container (page or panel) is empty or dragging an element under the last element of the container.
  * <br/> options.insertAfter an element after the target element is dragging. It can be null if parent container (page or panel) is empty or dragging element to the top of the parent container.
  */
  onDragDropAllow: CreatorEvent;
  /*
  * Use this event to get access rendered adorder.
  * <br/> sender the survey creator object that fires the event.
  * <br/> options.survey the editing survey object.
  * <br/> options.question the survey element of the adorner.
  * <br/> options.adorner the adorner id.
  * <br/> options.element a root adorner element.
  * <br/> options.context a context for adorner element, e.g. current item of a select base question.
  */
  onAdornerRendered: CreatorEvent;
  /*
  * The event is called after user closes the popup element editor.
  * <br/> options.element the edited element.
  * <br/> options.isCanceled indicated user clicked Cancel.
  */
  onElementEditorClosed: CreatorEvent;
  selectFromStringEditor: boolean;
  /*
  * You need to set this property to true if you want to inplace edit item values instead of texts.
  */
  get inplaceEditForValues(): boolean;
  set inplaceEditForValues(val: boolean);
  protected onSetReadOnly(newVal: boolean): void;
  koCanUndo: any;
  koCanRedo: any;
  commands: any;
  propertyGridObjectEditorModel: PropertyGridObjectEditorModel;
  pagesEditorModel: PagesEditor;
  koIsShowDesigner: any;
  koCanDeleteObject: any;
  koObjects: any;
  koSelectedObject: any;
  koShowSaveButton: any;
  koShowPropertyGrid: any;
  koShowToolbox: any;
  koShowElementEditorAsPropertyGrid: any;
  koHideAdvancedSettings: any;
  koTestSurveyWidth: any;
  koDesignerHeight: any;
  koShowPagesToolbox: any;
  generateValidJSONClick: any;
  generateReadableJSONClick: any;
  doUndoClick: any;
  doRedoClick: any;
  deleteObjectClick: any;
  koState: any;
  saveButtonClick: any;
  draggingToolboxItem: any;
  clickToolboxItem: any;
  dragEnd: any;
  onEditorAfterRenderCallback: (obj: any, htmlElement: any, prop: SurveyObjectProperty) => void;
  setOptions(options: any): void;
  themeCss: any;
  protected addToolbarItems(): void;
  /*
  * Use this method to force update this element in editor.
  */
  update(element: any): void;
  /*
  * Call this method to render the Survey Creator.
  */
  render(element?: any, options?: any): void;
  loadSurvey(surveyId: string): void;
  /*
  * Set JSON as text  into survey. Clear undo/redo states optionally.
  */
  changeText(value: string, clearState?: boolean): void;
  protected initSurveyWithJSON(json: any, clearState: boolean): void;
  get surveyLiveTester(): SurveyLiveTester;
  /*
  * Toolbox object. Contains information about Question toolbox items.
  */
  get toolbox(): QuestionToolbox;
  /*
  * Return the translation mode object.
  */
  get translation(): Translation;
  set translation(val: Translation);
  /*
  * Return the logic mode object.
  */
  get logic(): SurveyLogic;
  /*
  * The list of toolbar items. You may add/remove/replace them.
  */
  toolbarItems: any;
  /*
  * Get and set the maximum of copied questions/panels in the toolbox. The default value is 3
  */
  get customToolboxQuestionMaxCount(): number;
  set customToolboxQuestionMaxCount(val: number);
  /*
  * Returns the creator state. It may return empty string or "saving" and "saved".
  */
  get state(): string;
  protected setState(value: string): void;
  /*
  * This function triggers user notification (via the alert() function if no onNotify event handler added).
  */
  notify(msg: string): void;
  /*
  * The delay on saving survey JSON on autoSave in ms. It is 500 ms by default.
  * If during this period of time an end-user modify survey, then the last version will be saved only. Set to 0 to save immediately.
  */
  autoSaveDelay: number;
  autoSaveTimerId: any;
  protected doAutoSave(): void;
  saveNo: number;
  protected doSave(): void;
  setModified(options?: any): void;
  /*
  * Returns true if Creator is currently doing undo or redo opertaions
  */
  get isProcessingUndoRedo(): boolean;
  /*
  * Undo the latest user operation. Returns true if it performes successful.
  */
  undo: any;
  /*
  * Redo the latest undo operation. Returns true if it performes successful.
  */
  redo: any;
  /*
  * Assign to this property a function that will be called on clicking the 'Save' button or on any change if isAutoSave equals true.
  */
  get saveSurveyFunc(): any;
  set saveSurveyFunc(val: any);
  /*
  * Set it to true to show "Options" menu and to false to hide the menu
  */
  get showOptions(): boolean;
  set showOptions(val: boolean);
  /*
  * Set it to false to completely hide the Property Grid on the right. It allows to edit the properties of the selected object (question/panel/page/survey).
  */
  get showPropertyGrid(): any;
  set showPropertyGrid(val: any);
  /*
  * Set it to "always", "never" or "ifentered". The "ifentered" is the default value means show survey title only in case of user entered it.
  */
  get showSurveyTitle(): any;
  set showSurveyTitle(val: any);
  /*
  * Set it to false if you want to deny user to hide/show survey title.
  */
  get allowControlSurveyTitleVisibility(): any;
  set allowControlSurveyTitleVisibility(val: any);
  /*
  * Set it to false to  hide the pages toolbox on the top.
  */
  get showPagesToolbox(): any;
  set showPagesToolbox(val: any);
  /*
  * You have to set this property to false via options on creating SurveyJS Creator to use popup editor and old property grid.
  */
  get showElementEditorAsPropertyGrid(): any;
  /*
  * Set it to false to  hide the question toolbox on the left.
  */
  get showToolbox(): any;
  set showToolbox(val: any);
  get hideAdvancedSettings(): boolean;
  set hideAdvancedSettings(val: boolean);
  _showExternalHelpLink: any;
  get showExternalHelpLink(): any;
  set showExternalHelpLink(val: any);
  _placeholderHtml: any;
  get placeholderHtml(): any;
  set placeholderHtml(val: any);
  get hideExpressionHeader(): any;
  /*
  * Set it to "cancel" or "apply" to enable closing modal windows by clicking outside popup.
  * If "apply" is set, then changes will be saved, otherwise not. By default value is "off"
  */
  get closeModalOutside(): "off" | "cancel" | "apply";
  set closeModalOutside(val: "off" | "cancel" | "apply");
  /*
  * Set it to "single" to design surface in single page mode. By default value is "standard"
  */
  get pageEditMode(): "standard" | "single";
  _leftContainer: any;
  get leftContainer(): any;
  leftContainerVisible: any;
  leftContainerActiveItem: any;
  _rightContainer: any;
  get rightContainer(): any;
  rightContainerVisible: any;
  rightContainerActiveItem: any;
  _topContainer: any;
  layoutChangedIndicator: any;
  get topContainer(): any;
  canShowObjectProperty(object: any, propertyName: string): boolean;
  protected onCustomSortPropertyObjectProperty(object: any, property1: any, property2: any): number;
  /*
  * Add a new page into the editing survey. Returns the new created page instance
  */
  addPage: any;
  deletePage: any;
  movePage: (page: any, indexFrom: number) => void;
  addPageToUI(page: any): void;
  updateObjectTextInPropertyGrid(obj: any): void;
  protected doPropertyGridChanged(): void;
  protected canSwitchViewType(newType: string): boolean;
  /*
  * Returns the current show view name. The possible returns values are:
  * "designer", "editor", "test", "embed", "logic" and "translation".
  */
  get showingViewName(): string;
  /*
  * Make a "Survey Designer" tab active.
  */
  showDesigner(): void;
  /*
  * Make a "JSON Editor" tab active.
  */
  showJsonEditor(): void;
  /*
  * Make a "Test Survey" tab active.
  */
  showTestSurvey(): void;
  /*
  * Make a "Embed Survey" tab active.
  */
  showEmbedEditor(): void;
  /*
  * Make a "Translation" tab active.
  */
  showTranslationEditor(): void;
  /*
  * Make a "Logic" tab active.
  */
  showLogicEditor(): void;
  /*
  * Get or set the current selected object in the Creator. It can be a question, panel, page or survey itself.
  */
  get selectedElement(): any;
  set selectedElement(val: any);
  selectElement(element: any): void;
  /*
  * Check for errors in property grid and adorners of the selected elements.
  * Returns true if selected element is null or there is no errors.
  */
  validateSelectedElement(): boolean;
  protected initSurveyOnRender(): void;
  /*
  * Use this method to create keyboard shortcuts
  */
  onKeyDownHandler(e: any, creator: any): void;
  execute(command: any): any;
  addingObject: any;
  disableSurveySelectedElementChanging: boolean;
  dragOverQuestionsEditor(data: any, e: any): boolean;
  dropOnQuestionsEditor(data: any, e: any): void;
  protected doClickQuestionCore(element: IElement, modifiedType?: string): void;
  deleteCurrentObject(): void;
  /*
  * Show the creator dialog. The element can be a question, panel, page or survey. If property grid is used instead of dialog window (default behavior), then focus goes into the property grid.
  */
  showElementEditor(element: any, onClose: (isCanceled: boolean) => any): void;
  get showModalOnElementEditing(): boolean;
  showQuestionEditor: (element: any, onClose?: any) => any;
  /*
  * Show the creator dialog. The element can be a question, panel, page or survey.
  */
  showModalElementEditor(element: any, onClose?: (isCanceled: boolean) => any): void;
  onQuestionEditorChanged(question: any): void;
  dirtyPageUpdate: any;
  /*
  * Add a question into Toolbox object
  */
  addCustomToolboxQuestion(question: any): void;
  /*
  * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
  */
  copyPage: (page: any) => any;
  protected deleteObjectCore(obj: any): void;
  get showApplyButtonInEditors(): boolean;
  set showApplyButtonInEditors(val: boolean);
  onEditorTabRenderedCallback: (tabName: string, elements: any, model: any, tabData: any) => void;
  onIsEditorReadOnlyCallback(obj: any, editor: SurveyPropertyEditorBase, readOnly: boolean): boolean;
  onTitleInplaceEditorStartEdit(inputElem: any): void;
  onPropertyEditorKeyDownCallback(propertyName: string, obj: any, editor: SurveyPropertyEditorBase, event: any): void;
  onPropertyEditorObjectSetCallback(propertyName: string, obj: any, editor: SurveyPropertyEditorBase): void;
  onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: any): any;
  onConditionValueSurveyCreatedCallBack(valueQuestionName: string, propertyName: string, obj: any, editor: SurveyPropertyEditorBase, survey: any): void;
  startUndoRedoTransaction(): void;
  stopUndoRedoTransaction(): void;
  protected startTransaction(name: string): void;
  protected stopTransation(): void;
  onAdornerRenderedCallback(question: any, adorner: string, element: any, context?: any): void;
  /*
  * Clear the files on a server
  */
  clearFiles(files: any, clearCallback: (status: string, data: any) => any): void;
  /*
  * Upload the files on a server
  */
  uploadFiles(files: any, uploadingCallback: (status: string, data: any) => any): void;
  /*
  * Open file chooser dialog
  */
  chooseFiles(input: any, onFilesChosen: (files: any) => void): void;
  /*
  * Collapse all property editor tabs (accordions) in properties panel
  */
  collapseAllPropertyTabs(): void;
  /*
  * Expand all property editor tabs (accordions) in properties panel
  */
  expandAllPropertyTabs(): void;
  /*
  * Expand certain property editor tab (accordion) in properties panel
  * name - tab category name
  */
  expandPropertyTab(name: string): void;
  /*
  * Collapse certain property editor tab (accordion) in properties panel
  * name - tab category name
  */
  collapsePropertyTab(name: string): void;
}
export declare class SurveyPropertyBindingsEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  items: any;
  get editorType(): string;
  beforeShowCore(): void;
}
export declare class SurveyPropertyCellsEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  koRows: any;
  koColumns: any;
  koCanEdit: any;
  getValueText(value: any): string;
  beforeShowCore(): void;
  get editorType(): string;
  protected onValueChanged(): void;
  get canEdit(): boolean;
  get rows(): any;
  get columns(): any;
  protected getCellText(rowIndex: number, columnIndex: number): string;
  protected setupCells(): void;
  protected createRow(rowIndex: number, rowText: string): any;
}
export declare class SurveyPropertyDefaultValueEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  static skipPropertyNames: any;
  static defaultQuestionName: string;
  static createJsonFromQuestion(obj: any, readOnly: boolean): any;
  static createSurveyFromJsonQuestion(questionJson: any, options: ISurveyObjectEditorOptions, surveyName: string): any;
  static updateSurveyStyle(survey: any): void;
  survey: any;
  koSurvey: any;
  protected currentObject: any;
  resetText(): string;
  refreshText(): string;
  resetValue(model: SurveyPropertyDefaultValueEditor): void;
  refreshSurvey(model: SurveyPropertyDefaultValueEditor): void;
  getValueText(value: any): string;
  beforeShowCore(): void;
  get editorType(): string;
  protected createSurvey(): void;
  protected buildQuestionJson(): any;
  protected getObject(): any;
  protected getSurveyInitialValue(): any;
  protected getSurveyResult(): any;
}
export declare class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  onDeleteClick: any;
  onAddClick: any;
  onClearClick: any;
  koAllowAddRemoveItems: any;
  koAllowRemoveAllItems: any;
  koCanAddItem: any;
  viewItems: any;
  getValueText(value: any): string;
  get addItemText(): string;
  protected getCorrectedValue(value: any): any;
  protected createEditorOptions(): any;
  protected onSetEditorOptions(editorOptions: any): void;
  protected startDragItem(): void;
  protected endDragItem(): void;
  sortableOptions: any;
  protected addItem(): void;
  protected onDeletingItem(obj: any): boolean;
  protected deleteItem(obj: any): void;
  protected onItemDeleted(obj: any, index: number): void;
  hasError(): boolean;
  setup(): void;
  createItemViewModel(obj: any): any;
  protected get isCurrentValueEmpty(): boolean;
  protected createEditorItemCore(item?: any): any;
  protected createNewItem(): any;
  protected createEditorItem(item: any): any;
}
export declare class SurveyPropertyMultipleValuesEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  items: any;
  koCategories: any;
  koEditingValue: any;
  isEditingValueSetting: boolean;
  getValueText(value: any): string;
  setObject(value: any): void;
  updateValue(): void;
  get editorType(): string;
  getBackgroundCls(value: any): "svd-light-background-color" | "svd-main-background-color";
  updateDynamicProperties(): void;
}
export declare class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  koContentEditor: any;
  survey: any;
  question: any;
  get editorType(): string;
  beforeShowCore(): void;
  get contentEditor(): SurveyElementEditorContentModel;
  getValueText(value: any): string;
}
export declare class SurveyPropertySelectPagesEditor extends SurveyPropertySelectItemsEditor {
  constructor(property: any);
  get editorType(): string;
  protected getElementType(): string;
}
export declare class SurveyPropertySelectQuestionsEditor extends SurveyPropertySelectItemsEditor {
  constructor(property: any);
  get editorType(): string;
}
export declare class SurveyPropertyStringsEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  koTextValue: any;
  get editorType(): string;
  get editorTypeTemplate(): string;
  isSettingInitialValue: boolean;
  beforeShowCore(): void;
}
export declare class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
  constructor(property: any);
  get editorType(): string;
  get isEditable(): boolean;
  getValueText(value: any): string;
  onFocus: any;
  onBlur: any;
}
export declare class SurveyQuestionPropertyEditor extends SurveyDropdownPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  get optionsCaption(): string;
  protected getPropertyChoices(): Array<any>;
  protected getItemValue(question: IQuestion): string;
  protected getQuestions(survey: any): Array<Question>;
}
export declare class SurveyEditor extends SurveyCreator {
  constructor(renderedElement?: any, options?: any);
}
export declare class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
  constructor(property: any);
  koEditItem: any;
  koIsList: any;
  koActiveView: any;
  onEditItemClick: any;
  onReturnToListClick: any;
  koEditorName: any;
  koShowHeader: any;
  koColumnsValue: any;
  get columns(): any;
  beforeShowCore(): void;
  createColumns(): void;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
  protected getPropertiesNames(className: string, defaultNames: any): Array<any>;
  protected getDefinedListProperties(className?: string): Array<any>;
  protected getDefaultListProperties(): Array<JsonObjectProperty>;
  protected isPropertyShownInList(property: any): boolean;
  protected getPropertiesByNames(className: string, names: any): Array<JsonObjectProperty>;
  protected getEditorName(): string;
  protected getItemClassName(item: any): string;
  protected canDeleteItem(item: any): boolean;
  protected createEditorItem(item: any): SurveyNestedPropertyEditorItem;
  protected onListDetailViewChanged(): void;
}
export declare class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor implements IConditionEditorItemOwner {
  constructor(property: any, _type?: string, syntaxCheckMethodName?: string);
  syntaxCheckMethodName: string;
  koTextValue: any;
  onRemoveConditionClick: any;
  onChangeViewClick: any;
  onShowHideEditor: any;
  koShowExpressionHeader: any;
  koSetupText: any;
  koShowTabs: any;
  koActiveView: any;
  koEditorItems: any;
  koCanAddItem: any;
  koCanParseExpression: any;
  koConditionDisplayText: any;
  koIsTextConditionValid: any;
  koIsEditorShowing: any;
  koIsWideMode: any;
  koIsEditorHidingDisabled: any;
  addConditionQuestionsHash: any;
  addConditionCalculatedValuesHash: any;
  maxLogicItemsInCondition: number;
  protected getPropertyHelpLocName(): string;
  addCondition: any;
  removeCondition: (item: ConditionEditorItem) => void;
  get addConditionText(): string;
  get removeConditionText(): string;
  beforeShowCore: any;
  protected beforeShowModal: any;
  get isEditorShowing(): boolean;
  set isEditorShowing(val: boolean);
  get isEditorHidingDisabled(): boolean;
  set isEditorHidingDisabled(val: boolean);
  get isWideMode(): boolean;
  set isWideMode(val: boolean);
  get editorType(): string;
  get availableQuestions(): any;
  protected getSurvey: any;
  allConditionQuestionsValue: any;
  resetAllConditionQuestions: any;
  get allConditionQuestions(): any;
  get isExpressionValid(): boolean;
  protected onValueChanged(): void;
  isClassContains(qType: string, contains: any, notContains: any): boolean;
  getQuestionByName(questionName: string): any;
  getQuestionValueJSON(questionName: string, operator: string): any;
  get hasAceEditor(): boolean;
  protected onkoTextValueChanged(newValue: any): void;
  isConditionItemsBuilding: boolean;
  onConditionItemChanged(): void;
}
export declare class SurveyPropertyDefaultRowValueEditorBase extends SurveyPropertyDefaultValueEditor {
  constructor(property: any);
  get editorTypeTemplate(): string;
  get editorType(): string;
  protected getSurveyInitialValue(): any;
  protected getSurveyResult(): any;
}
export declare class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
  constructor(property: any);
  get editorType(): string;
}
export declare class SurveyPropertyOneSelectedEditor extends SurveyPropertyItemsEditor {
  constructor(property: any);
  selectedObjectEditor: any;
  koSelected: any;
  koChangeCounter: any;
  koAvailableClasses: any;
  currentObjClassName: string;
  get editorTypeTemplate(): string;
  get editorType(): string;
  getItemText(item: any, counter?: any): any;
  protected getObjClassName(): string;
  protected getAvailableClasses(): Array<any>;
  protected addNewItem(className: string): void;
  protected onValueChanged(): void;
  protected onCreateEditor(editor: SurveyElementEditorContentModel): void;
  protected onItemDeleted(obj: any, index: number): void;
  protected createNewItem(): any;
}
export declare class SurveyPropertySetEditor extends SurveyPropertyDefaultValueEditor {
  constructor(property: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  protected getSurveyInitialValue(): any;
  protected buildQuestionJson(): any;
}
export declare class SurveyPropertyTriggerValueEditor extends SurveyPropertyDefaultValueEditor {
  constructor(property: any);
  get editorTypeTemplate(): string;
  updateDynamicProperties(): void;
  protected getObject(): any;
}
export declare class SurveyQuestionSelectBasePropertyEditor extends SurveyQuestionPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  protected getQuestions(survey: any): Array<Question>;
  protected isQuestionFit(question: any): boolean;
}
export declare class SurveyQuestionValuePropertyEditor extends SurveyQuestionPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  protected getItemValue(question: IQuestion): string;
}
export declare class SurveyPropertyCalculatedValueEditor extends SurveyNestedPropertyEditor {
  constructor(property: any);
  static ValueBaseName: string;
  get editorType(): string;
  get editorTypeTemplate(): string;
  protected getEditorName(): string;
  protected createNewItem(): any;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
}
export declare class SurveyPropertyDefaultPanelValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
  constructor(property: any);
  protected buildQuestionJson(): any;
  get editorType(): string;
}
export declare class SurveyPropertyDefaultRowValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
  constructor(property: any);
  protected buildQuestionJson(): any;
  get editorType(): string;
}
export declare class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  protected getEditorName(): string;
  protected getItemClassName(item: any): string;
  protected createNewItem(): any;
  protected addItem(): void;
  protected deleteItem(obj: any): void;
  updateValue(): void;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
}
export declare class SurveyPropertyHtmlConditionEditor extends SurveyNestedPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  protected createNewItem(): any;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
}
export declare class SurveyPropertyItemValuesEditor extends SurveyNestedPropertyEditor {
  constructor(property: any);
  detailDefinition: any;
  optionsShowTextView: boolean;
  koItemsText: any;
  koShowTextView: any;
  changeToTextViewClick: any;
  changeToFormViewClick: any;
  koItemsTextDelayed: any;
  isUpdatingItemText: boolean;
  get editorType(): string;
  get editorTypeTemplate(): string;
  get hasDetailButton(): boolean;
  protected getItemValueClassName(): string;
  protected getEditorName(): string;
  beforeShowCore(): void;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
  protected getDefinedProperties(): Array<any>;
  protected createEditorOptions(): any;
  protected onSetEditorOptions(editorOptions: any): void;
  protected createNewItem(): any;
  protected getItemClassName(item: any): string;
  protected onValueChanged(): void;
  isUpdatingOnTyping: boolean;
  protected onListDetailViewChanged(): void;
  protected updateItems(text: string): void;
  protected getItemsText(): string;
  protected hasDetailsProperties(): boolean;
}
export declare class SurveyPropertyPagesEditor extends SurveyNestedPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  protected getEditorName(): string;
  protected getItemClassName(item: any): string;
  protected createNewItem(): any;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
  protected createEditorItem(item: any): SurveyNestedPropertyEditorItem;
  protected canDeleteItem(item: any): boolean;
  protected createEditorOptions(): any;
  protected startDragItem(): void;
  protected endDragItem(): void;
}
export declare class SurveyPropertyTextItemsEditor extends SurveyNestedPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  protected getEditorName(): string;
  protected createNewItem(): any;
  protected getItemClassName(item: any): string;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
}
export declare class SurveyPropertyTriggersEditor extends SurveyPropertyOneSelectedEditor {
  constructor(property: any);
  get editorType(): string;
  getItemText(item: any, counter?: any): any;
  protected getAvailableClasses(): Array<any>;
  protected onCreateEditor(editor: SurveyElementEditorContentModel): void;
}
export declare class SurveyPropertyUrlConditionEditor extends SurveyNestedPropertyEditor {
  constructor(property: any);
  get editorType(): string;
  get editorTypeTemplate(): string;
  protected createNewItem(): any;
  protected getColumnsProperties(): Array<JsonObjectProperty>;
}
export declare class SurveyPropertyValidatorsEditor extends SurveyPropertyOneSelectedEditor {
  constructor(property: any);
  get editorType(): string;
  getItemText(item: any, counter?: any): any;
  protected getAvailableClasses(): Array<any>;
}
export declare class SurveyQuestionCarryForwardPropertyEditor extends SurveyQuestionSelectBasePropertyEditor {
  constructor(property: any);
  get editorType(): string;
  protected isQuestionFit(question: any): boolean;
}
export declare function getLocString(strName: string, locale?: string): any;
export declare function getNextValue(prefix: string, values: any): string | number;
export declare function findParentNode(className: string, sourceNode: any): any;
export declare function focusFirstControl(renderedElements: any): void;
export declare function getFirstNonTextElement(elements: any): any;
export declare function getNodesFromKoComponentInfo(componentInfo: any): any;
export declare function createKey2click(element: any): (ev: any) => void;
export declare function propertyExists(obj: any, propertyName: string): boolean;
export declare function isPropertyVisible(obj: any, propertyName: string): boolean;
export declare function trimValue(value: any): any;
export declare function doGetCompletions(prevIdentifier: string, prefix: string, config: any, completer?: any): any;
export declare function insertMatch(editor: any, data: any): void;
export declare function createAfterRenderHandler(creator: any, survey: SurveyForDesigner): (domElement: any, surveyElement: any, isPanel: boolean, disable: boolean) => void;
export declare function createAfterRenderPageHandler(creator: any, survey: SurveyForDesigner): (domElement: any, page: any) => void;
export declare function createAfterRenderHeaderHandler(creator: any, survey: SurveyForDesigner): (domElement: any, survey: any) => void;
export declare function registerAdorner(name: any, adorner: any): void;
export declare function removeAdorners(names?: any): void;
export declare function addAdornerMarkerClasses(classes: any, surveyElement: any): void;
export declare function applyAdornerClass(classes: any, adornerClass: any): any;
export declare function createImageFileChooser(contentMode?: string): any;
export declare var editorLocalization: {
  camelCaseBreaking: boolean,
  currentLocale: string,
  locales: any,
  getString: (strName: string, locale?: string) => any,
  hasString: (strName: string, locale?: string) => boolean,
  getLocaleName: (loc: string, defaultLocale?: string) => string,
  getPropertyName: (strName: string, defaultName?: string) => any,
  getPropertyTitle: (strName: string) => any,
  getPropertyNameInEditor: (strName: string, defaultName?: string) => any,
  getProperty: (strName: string, defaultName?: string) => any,
  getAutoPropertyName: (propName: string, defaultName?: string) => any,
  getPropertyValue: (value: any, locale?: string) => any,
  getValidatorName: (name: string, locale?: string) => any,
  getTriggerName: (name: string, locale?: string) => any,
  getLocale: (locale: string) => any,
  getValueInternal: (value: any, prefix: string, locale?: string) => any,
  getLocales: any,
};
export declare var defaultStrings: any;
export declare var settings: {
  traslation: {
    sortByName: boolean,
    exportPrefix: string,
  },
  operators: {
    empty: any,
    notempty: any,
    equal: any,
    notequal: any,
    contains: any,
    notcontains: any,
    anyof: any,
    allof: any,
    greater: any,
    less: any,
    greaterorequal: any,
    lessorequal: any,
  },
  jsonEditor: {
    indentation: number,
  },
};
export declare var opositeValues: {
  true: string,
  True: string,
  TRUE: string,
  false: string,
  False: string,
  FALSE: string,
  yes: string,
  Yes: string,
  YES: string,
  no: string,
  No: string,
  NO: string,
};
export declare var operations: any;
export declare var createAnnotations: (condition: string, syntaxCheckMethodName: string) => any;
export declare var ID_REGEXP: any;
export declare var templateHtml: any;
export declare var adornersConfig: any;
export declare var questionPrototype: any;
export declare var pagePrototype: any;
export declare var FRIENDLY_PADDING: any;
/*
* Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
*/
export declare var cachedCanvas: any;
export declare var titleAdorner: {
  surveyTitleEditable: boolean,
  pageTitleEditable: boolean,
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var itemTitleAdorner: {
  inplaceEditForNames: boolean,
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var descriptionAdorner: {
  surveyDescriptionEditable: boolean,
  pageDescriptionEditable: boolean,
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var itemAdorner: {
  inplaceEditForValues: boolean,
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var createAddItemHandler: (question: any, onItemAdded: any) => any;
export declare var createAddItemElement: (handler: any) => any;
export declare var createCustomElement: (title: any, handler: any) => any;
export declare var itemDraggableAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: SurveyCreator) => void,
};
export declare var DEFAULT_MONITOR_DPI: number;
export declare var simulatorDevices: {
  desktop: {
    deviceType: string,
    title: string,
  },
  iPhone5: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPhone6: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPhone6plus: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPhone8: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPhone8plus: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPhoneX: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPhoneXmax: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPad: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPadMini: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPadPro: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  iPadPro13: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  androidPhone: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  androidTablet: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  win10Phone: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  msSurface: {
    cssPixelRatio: number,
    ppi: number,
    width: number,
    height: number,
    frameWidth: number,
    frameHeight: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
  genericPhone: {
    cssPixelRatio: number,
    deviceType: string,
    title: string,
    cssClass: string,
  },
};
export declare var rowTemplateHtml: any;
export declare var groupTemplateHtml: any;
export declare var templateEditorHtml: any;
export declare var creatorProperties: SurveyCreatorProperties;
export declare var template: any;
export declare var ToolboxViewModel: any;
export declare var labelAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var questionActionsAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var panelActionsAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var renderDisplayMode: (elements: any, model: any, editor: any) => void;
export declare var renderEditableItems: (elements: any, model: any, editor: any) => void;
export declare var selectItemsAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
  renderReadOnly: (elements: any, model: any, editor: any) => void,
  isExpanded: boolean,
};
export declare var ratingItemAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var imageAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var imageItemsAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var addImageItemAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var flowpanelActionsAdorner: {
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: any, editor: any) => void,
};
export declare var titleImageAdorner: {
  ignoreHiddenLogoProperty: boolean,
  onRegister: any,
  onUnregister: any,
  getMarkerClass: any,
  getElementName: (model: any) => string,
  afterRender: (elements: any, model: SurveyForDesigner, editor: SurveyCreator) => void,
};
export declare var BooleanViewModel: any;
export declare var SVGIconBinding: any;
export declare var SurveyWidgetBinding: any;
export declare var Version: string;