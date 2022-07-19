
import { QuestionDropdownModel, SurveyElement, SurveyTemplateRendererTemplateData, SurveyModel, property, CssClassBuilder } from "survey-core";
import { CreatorBase } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";

import "./question-dropdown.scss";

export class QuestionDropdownAdornerViewModel extends QuestionAdornerViewModel {
  @property({ defaultValue: true }) private isCollapsed: boolean;
  @property({ defaultValue: -1 }) private visibleCount: number;

  constructor(
    creator: CreatorBase,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
  ) {
    super(creator, surveyElement, templateData);
    this.surveyElement.registerFunctionOnPropertyValueChanged("isSelectedInDesigner",
      () => {
        this.leftFocus();
      }, "dropdownCollapseChecker");
    this.visibleCount = creator.maxVisibleChoices;
    this.isCollapsed = this.isCollapsed && this.needToCollapse;
  }

  get question(): QuestionDropdownModel {
    return this.surveyElement as QuestionDropdownModel;
  }

  get needToCollapse(): boolean {
    return this.visibleCount > 0 && this.question.visibleChoices.length > this.visibleCount;
  }

  public leftFocus(): void {
    if (!this.creator.isElementSelected(this.surveyElement) && !this.isCollapsed) {
      this.isCollapsed = true;
    }
  }

  public getChoiceCss(): string {
    return new CssClassBuilder()
      .append("svc-question__dropdown-choice")
      .append("svc-question__dropdown-choice--collapsed", this.isCollapsed)
      .toString();
  }

  public getRenderedItems() {
    return this.isCollapsed ?
      this.question.visibleChoices.slice(0, this.visibleCount) :
      this.question.visibleChoices;
  }

  public getButtonText(): string {
    return !this.isCollapsed ? "Show less" : "Show more...";
  }

  public switchCollapse = (): void => {
    this.isCollapsed = !this.isCollapsed;
  }

  public dispose(): void {
    super.dispose();
    this.surveyElement.unRegisterFunctionOnPropertyValueChanged("isSelectedInDesigner", "dropdownCollapseChecker");
  }

}