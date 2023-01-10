// This dictionary contains 617 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization } from "survey-creator-core";

var traditionalChineseTranslation = {
  // survey templates
  survey: {
    edit: "編輯",
    // externalHelpLink: "Watch and learn how to create surveys",
    // externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "請將問題放置於此",
    // addLogicItem: "Create a rule to customize the flow of the survey.",
    copy: "複製",
    // duplicate: "Duplicate",
    addToToolbox: "添加到工具箱",
    deletePanel: "刪除面板",
    deleteQuestion: "刪除題目",
    convertTo: "轉變為",
    // drag: "Drag element"
  },
  // Question types
  qt: {
    // default: "Default",
    checkbox: "多項選擇",
    comment: "多行文本框",
    // imagepicker: "Image Picker",
    // ranking: "Ranking",
    // image: "Image",
    dropdown: "下拉框",
    // tagbox: "Tag Box",
    file: "文件上傳",
    html: "Html 代碼",
    matrix: "矩陣 (單選題)",
    matrixdropdown: "矩陣 (下拉框)",
    matrixdynamic: "矩陣 (動態問題)",
    multipletext: "文本框組",
    panel: "面板",
    paneldynamic: "面板(動態)",
    radiogroup: "單項選擇",
    rating: "評分",
    text: "文本框",
    boolean: "布林選項",
    expression: "表達式",
    // signaturepad: "Signature Pad",
    // buttongroup: "Button Group"
  },
  // Strings in SurveyJS Creator
  ed: {
    // defaultLocale: "Default ({0})",
    survey: "調查問卷",
    // settings: "Settings",
    // settingsTooltip: "Open settings",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    // showPanel: "Show Panel",
    // hidePanel: "Hide Panel",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "添加新頁面",
    // moveRight: "Scroll to the Right",
    // moveLeft: "Scroll to the Left",
    deletePage: "刪除頁面",
    editPage: "編輯頁面",
    // edit: "Edit",
    newPageName: "頁面",
    newQuestionName: "問題",
    newPanelName: "面板",
    // newTextItemName: "text",
    testSurvey: "測試問卷",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "再次測試問卷",
    testSurveyWidth: "問卷寬度: ",
    // navigateToMsg: "You had to navigate to",
    // logic: "Logic",
    embedSurvey: "將問卷嵌入網頁",
    // translation: "Translation",
    saveSurvey: "保存問卷",
    // saveSurveyTooltip: "Save Survey",
    designer: "問卷設計器",
    jsonEditor: "JSON 編輯器",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "還原",
    redo: "重做",
    // undoTooltip: "Undo last change",
    // redoTooltip: "Redo the change",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    // copy: "Copy",
    // cut: "Cut",
    // paste: "Paste",
    // copyTooltip: "Copy selection to clipboard",
    // cutTooltip: "Cut selection to clipboard",
    // pasteTooltip: "Paste from clipboard",
    options: "選項",
    generateValidJSON: "生成 JSON",
    generateReadableJSON: "生成易讀的 JSON",
    toolbox: "工具箱",
    // "property-grid": "Properties",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    // toolboxGeneralCategory: "General",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "修正 JSON",
    surveyResults: "問卷結果: ",
    // surveyResultsTable: "As Table",
    // surveyResultsJson: "As JSON",
    // resultsTitle: "Question Title",
    // resultsName: "Question Name",
    // resultsValue: "Answer Value",
    // resultsDisplayValue: "Display Value",
    modified: "已修改",
    saving: "保存中...",
    saved: "已保存",
    // propertyEditorError: "Error",
    // saveError: "Error! Editor content is not saved.",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    // translationAddLanguage: "Select language to translate",
    // translationShowAllStrings: "All Strings",
    // translationShowUsedStringsOnly: "Used Strings Only",
    // translationShowAllPages: "All Pages",
    // translationNoStrings: "No strings to translate. Please, change the filter.",
    // translationExportToSCVButton: "Export to CSV",
    // translationImportFromSCVButton: "Import from CSV",
    // translationMergeLocaleWithDefault: "Merge {0} with default locale",
    // translationPlaceHolder: "Translation...",
    // bold: "Bold",
    // italic: "Italic",
    // underline: "Underline",
    // addNewQuestion: "Add Question",
    // selectPage: "Select page...",
    // htmlPlaceHolder: "HTML content will be here.",
    // panelPlaceHolder: "Drop a question from the toolbox here.",
    // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    // chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      // addNewItem: "Add New Rule",
      // empty_tab: "Create a rule to customize the flow of the survey.",
      // page_visibilityName: "Show (hide) page",
      // page_enableName: "Enable (disable) page",
      // panel_visibilityName: "Show (hide) panel",
      // panel_enableName: "Enable (disable) panel",
      // question_visibilityName: "Show (hide) question",
      // question_enableName: "Enable (disable) question",
      // question_requireName: "Make question required",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      // trigger_completeName: "Complete survey",
      // trigger_setvalueName: "Set answer",
      // trigger_copyvalueName: "Copy answer",
      // trigger_skipName: "Skip to question",
      // trigger_runExpressionName: "Run expression",
      // completedHtmlOnConditionName: "Set \"Survey Complete\" page markup",
      // page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      // panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      // panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      // question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      // question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      // question_requireDescription: "Question becomes required when the logic expression returns true.",
      // trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      // trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      // trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      // trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question.",
      // trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      // completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",
      // itemExpressionText: "When expression: '{0}' returns true", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      // page_visibilityText: "make page {0} visible", //{0} page name
      // panel_visibilityText: "make panel {0} visible", //{0} panel name
      // panel_enableText: "make panel {0} enable", //{0} panel name
      // question_visibilityText: "make question {0} visible", //{0} question name
      // question_enableText: "make question {0} enable", //{0} question name
      // question_requireText: "make question {0} required", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      // trigger_completeText: "survey becomes completed",
      // trigger_setvalueText: "set into question: {0} value {1}", //{0} question name, {1} setValue
      // trigger_copyvalueText: "copy into question: {0} value from question {1}", //{0} and {1} question names
      // trigger_skipText: "survey skip to the question {0}", //{0} question name
      // trigger_runExpressionText1: "run expression: '{0}'", //{0} the expression
      // trigger_runExpressionText2: " and set its result into question: {0}", //{0} question name
      // completedHtmlOnConditionText: "show custom text for the 'Thank you page'.",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      // conditions: "Condition(s)",
      // actions: "Action(s)",
      // expressionEditorTitle: "Define condition(s)",
      // actionsEditorTitle: "Define action(s)",
      // deleteAction: "Delete Action",
      // addNewAction: "Add Action",
      // selectedActionCaption: "Select action...",
      // expressionInvalid: "The logic expression is empty or invalid. Please correct it.",
      // noActionError: "Please, add at least one action.",
      // actionInvalid: "Please, fix problems in your action(s).",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "應用",
    ok: "確定",
    // save: "Save",
    // clear: "Clear",
    // saveTooltip: "Save",
    cancel: "取消",
    // set: "Set",
    reset: "重置",
    // change: "Change",
    // refresh: "Refresh",
    close: "關閉",
    delete: "刪除",
    // add: "Add",
    addNew: "新建",
    // addItem: "Click to add an item...",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    // addOther: "Other",
    // addSelectAll: "Select All",
    // addNone: "None",
    removeAll: "全部刪除",
    edit: "編輯器",
    // back: "Return without saving",
    // backTooltip: "Return without saving",
    // saveAndBack: "Save and return",
    // saveAndBackTooltip: "Save and return",
    // doneEditing: "Done",
    // editChoices: "Edit Choices",
    // showChoices: "Show Choices",
    // move: "Move",
    empty: "<空>",
    // emptyValue: "Value is empty",
    fastEntry: "快速輸入",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "表單輸入",
    testService: "測試服務",
    // itemSelectorEmpty: "Please select the element",
    // conditionActionEmpty: "Please select the action",
    // conditionSelectQuestion: "Select question...",
    // conditionSelectPage: "Select page...",
    // conditionSelectPanel: "Select panel...",
    // conditionValueQuestionTitle: "Please enter/select the value",
    expressionHelp: "請輸入一項條件判斷。當條件判斷為真時問題/頁面將可見。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
    // aceEditorHelp: "Press ctrl+space to get expression completion hint",
    // aceEditorRowTitle: "Current row",
    // aceEditorPanelTitle: "Current panel",
    showMore: "更多細節...",
    // assistantTitle: "Available questions",
    // cellsEmptyRowsColumns: "There is should be at least one column or row",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "請為該屬性設定一個值",
    // propertyIsNoUnique: "Please enter a unique value",
    // propertyNameIsNotUnique: "Please enter a unique name",
    // listIsEmpty: "No items have been added yet",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    // expressionIsEmpty: "Expression is empty",
    value: "值",
    text: "顯示文本",
    // rowid: "Row ID",
    // imageLink: "Image or video URL",
    columnEdit: "編輯列: {0}",
    itemEdit: "編輯選項: {0}",
    url: "URL",
    path: "Path",
    valueName: "Value name",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Title name",
    // imageLinkName: "Get image URLs from the following JSON field",
    // allowEmptyResponse: "Allow empty response",
    // titlePlaceholder: "Title",
    // surveyTitlePlaceholder: "Survey Title",
    // pageTitlePlaceholder: "Page {num}",
    // descriptionPlaceholder: "Description",
    // surveyDescriptionPlaceholder: "Description",
    // pageDescriptionPlaceholder: "Description",
    showOtherItem: "可添加其他答案?",
    otherText: "其他答案文本",
    // showNoneItem: "Allow the None option",
    // noneText: "None option text",
    // showSelectAllItem: "Allow the Select All option",
    // selectAllText: "Select All option text",
    // choicesMin: "Minimum value for auto-generated items",
    // choicesMax: "Maximum value for auto-generated items",
    // choicesStep: "Step for auto-generated items",
    name: "題目名",
    title: "題目文本",
    cellType: "單元格類型",
    colCount: "列數",
    choicesOrder: "設置選項順序",
    visible: "是否可見?",
    isRequired: "是否為必填項?",
    // isAllRowRequired: "Require answer for all rows",
    // requiredErrorText: "\"Required\" error message",
    startWithNewLine: "問題是否新起一行?",
    rows: "文本框行數",
    // cols: "Columns",
    placeholder: "占位文本",
    showPreview: "是否顯示圖像預覽?",
    storeDataAsText: "以 JSON 文本方式存儲文件",
    maxSize: "文件最大尺寸 (Bytes)",
    imageHeight: "圖片高度",
    imageWidth: "圖片寬度",
    rowCount: "默認行數",
    // columnLayout: "Columns layout",
    // addRowLocation: "Add Row button location",
    addRowText: "添加條目按鈕文本",
    removeRowText: "刪除條目按鈕文本",
    // rateMin: "Minimum rate value",
    // rateMax: "Maximum rate value",
    // rateStep: "Rate step",
    minRateDescription: "最小值提示",
    maxRateDescription: "最大值提示",
    inputType: "文本框類型",
    optionsCaption: "下拉框提示語",
    // defaultValue: "Default Answer",
    // cellsDefaultRow: "Default texts",
    // surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "編輯問題: {0}",
    // maxLength: "Maximum length (in characters)",
    // buildExpression: "Build",
    // editExpression: "Edit",
    // and: "and",
    // or: "or",
    // remove: "Remove",
    // addCondition: "Add Condition",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "顯示/隱藏 標題",
    // expandCollapseTitle: "Expand/collapse title",
    locale: "默認語言",
    // simulator: "Select device type",
    // landscapeOrientation: "Switch to landscape orientation",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "模式 (編輯/只讀)",
    clearInvisibleValues: "清除隱藏值",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "顯示頁面標題",
    showPageNumbers: "顯示頁數",
    pagePrevText: "前一頁按鈕文本",
    pageNextText: "後一頁按鈕文本",
    completeText: "完成按鈕文本",
    // previewText: "Preview Answers button text",
    // editText: "Edit Answer button text",
    startSurveyText: "開始按鈕文本",
    showNavigationButtons: "顯示導航按鈕 (默認導航)",
    showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
    firstPageIsStarted: "調查的第一頁面為起始頁.",
    showCompletedPage: "結尾展示完成後的頁面 (completedHtml)",
    goNextPageAutomatic: "回答本頁所有問題後，自動跳轉到下一頁",
    showProgressBar: "顯示進度條",
    questionTitleLocation: "問題的標題位置",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "問題起始標誌 (1, 2 or 'A', 'a')",
    showQuestionNumbers: "顯示問題編號",
    questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
    questionErrorLocation: "問題錯誤定位",
    focusFirstQuestionAutomatic: "改變頁面時聚焦在第一個問題",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "完成調查的最長時間",
    maxTimeToFinishPage: "完成調查中頁面的最長時間",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "顯示計時器面板",
    showTimerPanelMode: "顯示計時器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允許添加面板",
    allowRemovePanel: "允許刪除面板",
    // noEntriesText: "Empty entries text",
    panelAddText: "添加面板文本",
    panelRemoveText: "刪除面板文本",
    isSinglePage: "在一個頁面上展示所有元素",
    // html: "HTML markup",
    // expression: "Expression",
    // setValue: "Answer",
    // dataFormat: "Image format",
    // allowAddRows: "Allow adding rows",
    // allowRemoveRows: "Allow removing rows",
    // allowRowsDragAndDrop: "Allow row drag and drop",
    // responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    // minImageWidth: "Minimum image width",
    // maxImageWidth: "Maximum image width",
    // minImageHeight: "Minimum image height",
    // maxImageHeight: "Maximum image height",
    // minValue: "Minimum value",
    // maxValue: "Maximum value",
    // minLength: "Minimum length (in characters)",
    // allowDigits: "Allow digits",
    // minCount: "Minimum count",
    // maxCount: "Maximum count",
    // regex: "Regular expression",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    // totalText: "Total row text",
    // totalType: "Total type",
    // totalExpression: "Total expression",
    // totalDisplayStyle: "Total value display style",
    // totalCurrency: "Currency",
    // totalFormat: "Formatted string",
    // logo: "Logo (URL or base64-encoded string)",
    // questionsOnPageMode: "Survey structure",
    // maxTextLength: "Maximum answer length (in characters)",
    // maxOthersLength: "Maximum comment length (in characters)",
    // autoGrowComment: "Auto-expand comment area if necessary",
    // textUpdateMode: "Update text question value",
    // focusOnFirstError: "Set focus on the first invalid answer",
    // checkErrorsMode: "Run validation",
    // navigateToUrl: "Navigate to URL",
    // navigateToUrlOnCondition: "Dynamic URL",
    // completedBeforeHtml: "Markup to show if the user already filled out this survey",
    // completedHtml: "Survey Complete page markup",
    // completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    // loadingHtml: "Markup to show while survey model is loading",
    // commentText: "Comment area text",
    // autocomplete: "Autocomplete type",
    // labelTrue: "\"True\" label",
    // labelFalse: "\"False\" label",
    // allowClear: "Show the Clear button",
    // displayStyle: "Value display style",
    // format: "Formatted string",
    // maximumFractionDigits: "Maximum fractional digits",
    // minimumFractionDigits: "Minimum fractional digits",
    // useGrouping: "Display grouping separators",
    // allowMultiple: "Allow multiple files",
    // allowImagesPreview: "Preview images",
    // acceptedTypes: "Accepted file types",
    // waitForUpload: "Wait for the upload to complete",
    // needConfirmRemoveFile: "Confirm file deletion",
    // detailPanelMode: "Detail panel location",
    // minRowCount: "Minimum row count",
    // maxRowCount: "Maximum row count",
    // confirmDelete: "Confirm row deletion",
    // confirmDeleteText: "Confirmation message",
    paneldynamic: {
      // confirmDelete: "Confirm panel deletion"
    },
    // panelCount: "Initial panel count",
    // minPanelCount: "Minimum panel count",
    // maxPanelCount: "Maximum panel count",
    // panelsState: "Inner panel expand state",
    // templateDescription: "Description template",
    // templateTitle: "Title template",
    // panelPrevText: "Previous Panel button tooltip",
    // panelNextText: "Next Panel button tooltip",
    // showRangeInProgress: "Show progress bar",
    // templateTitleLocation: "Question title location",
    // panelRemoveButtonLocation: "Remove Panel button location",
    // hideIfRowsEmpty: "Hide the question if there are no rows",
    // hideColumnsIfEmpty: "Hide columns if there are no rows",
    // rateValues: "Custom rate values",
    // hideIfChoicesEmpty: "Hide the question if it contains no choices",
    // hideNumber: "Hide question number",
    // minWidth: "Minimum width (in CSS-accepted values)",
    // maxWidth: "Maximum width (in CSS-accepted values)",
    // width: "Width (in CSS-accepted values)",
    // showHeader: "Show column headers",
    // horizontalScroll: "Show horizontal scrollbar",
    // columnMinWidth: "Minimum column width (in CSS-accepted values)",
    // rowTitleWidth: "Row header width (in CSS-accepted values)",
    // valueTrue: "\"True\" value",
    // valueFalse: "\"False\" value",
    // minErrorText: "\"Value is below minimum\" error message",
    // maxErrorText: "\"Value exceeds maximum\" error message",
    // otherErrorText: "\"Empty comment\" error message",
    // keyDuplicationError: "\"Non-unique key value\" error message",
    // maxSelectedChoices: "Maximum selected choices",
    // showClearButton: "Show the Clear button",
    // showNumber: "Show panel number",
    // logoWidth: "Logo width (in CSS-accepted values)",
    // logoHeight: "Logo height (in CSS-accepted values)",
    // readOnly: "Read-only",
    // enableIf: "Editable if",
    // emptyRowsText: "\"No rows\" message",
    // size: "Input size (in characters)",
    // separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    // choicesFromQuestion: "Copy choices from the following question",
    // choicesFromQuestionMode: "Which choices to copy?",
    // showCommentArea: "Show the comment area",
    // commentPlaceholder: "Comment area placeholder",
    // displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    // rowsOrder: "Row order",
    // columnsLayout: "Column layout",
    // columnColCount: "Nested column count",
    // state: "Panel expand state",
    // correctAnswer: "Correct Answer",
    // defaultPanelValue: "Default Values",
    // cells: "Cell Texts",
    // keyName: "Key column",
    itemvalue: {
      // text: "Alt text"
    },
    // logoPosition: "Logo position",
    // addLogo: "Add logo...",
    // changeLogo: "Change logo...",
    logoPositions: {
      // none: "Remove logo",
      // left: "Left",
      // right: "Right",
      // top: "On the top",
      // bottom: "In the bottom"
    },
    tabs: {
      general: "通用項",
      fileOptions: "選項",
      html: "HTML 編輯器",
      columns: "設置列",
      rows: "設置行",
      choices: "設置選項",
      // items: "Items",
      visibleIf: "設置可見條件",
      enableIf: "Enable If",
      // requiredIf: "Required If",
      rateValues: "設置評分值",
      choicesByUrl: "通過 URL 導入選項",
      matrixChoices: "默認選項",
      multipleTextItems: "文本輸入",
      // numbering: "Numbering",
      validators: "校驗規則",
      navigation: "導航",
      question: "問題",
      // pages: "Pages",
      timer: "問卷計時器",
      // calculatedValues: "Calculated Values",
      // triggers: "Triggers",
      // templateTitle: "Title template",
      // totals: "Totals",
      // logic: "Logic",
      // layout: "Layout",
      // data: "Data",
      // validation: "Validation",
      // cells: "Cell Texts",
      // showOnCompleted: "Survey Complete",
      // logo: "Logo in Survey Title",
      // slider: "Slider",
      // expression: "Expression",
      // others: "Others"
    },
    editProperty: "編輯屬性: '{0}'",
    items: "[ 項目數量: {0} ]",
    // choicesVisibleIf: "Choices are visible if",
    // choicesEnableIf: "Choices are selectable if",
    // columnsEnableIf: "Columns are visible if",
    // rowsEnableIf: "Rows are visible if",
    // indent: "Add indents",
    panel: {
      // indent: "Add outer indents"
    },
    // innerIndent: "Add inner indents",
    // defaultValueFromLastRow: "Take default values from the last row",
    // defaultValueFromLastPanel: "Take default values from the last panel",
    enterNewValue: "請設定值",
    noquestions: "問卷中還沒有創建任何問題",
    createtrigger: "請創建觸發器",
    // titleKeyboardAdornerTip: "Press enter button to edit",
    // keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "當 ",
    triggerMakePagesVisible: "使頁面可見:",
    triggerMakeQuestionsVisible: "使問題可見:",
    triggerCompleteText: "如果滿足條件，則完成問卷",
    triggerNotSet: "觸發器尚未設置",
    triggerRunIf: "滿足下列條件時執行",
    triggerSetToName: "修改下列問題值: ",
    // triggerFromName: "Copy value from: ",
    // triggerRunExpression: "Run this Expression",
    triggerSetValue: "修改為: ",
    // triggerGotoName: "Go to the question",
    triggerIsVariable: "在問卷提交結果中不要包含該變量",
    // triggerRunExpressionEmpty: "Please enter a valid expression",
    // emptyExpressionPlaceHolder: "Type expression here...",
    // noFile: "No file choosen",
    // clearIfInvisible: "Clear the value if the question becomes hidden",
    // valuePropertyName: "Value property name",
    // searchEnabled: "Enable search",
    // hideSelectedItems: "Hide selected items",
    // signatureWidth: "Signature width",
    // signatureHeight: "Signature height",
    // verticalAlign: "Vertical alignment",
    // alternateRows: "Alternate rows",
    // columnsVisibleIf: "Columns are visible if",
    // rowsVisibleIf: "Rows are visible if",
    // otherPlaceholder: "Comment area placeholder"
  },
  // Property values
  pv: {
    // true: "true",
    // false: "false",
    // inherit: "Inherit",
    // show: "Visible",
    // hide: "Hidden",
    // default: "Inherit",
    // initial: "Initial",
    // random: "Random",
    // collapsed: "Collapsed",
    // expanded: "Expanded",
    // none: "None",
    // asc: "Ascending",
    // desc: "Descending",
    // indeterminate: "Indeterminate",
    // decimal: "decimal",
    // currency: "currency",
    // percent: "percent",
    // firstExpanded: "First panel is expanded",
    // off: "Hide question numbers",
    // onpanel: "Start on each panel",
    // onPanel: "Start on each panel",
    // onSurvey: "Continue throughout the survey",
    // list: "List",
    // progressTop: "Panel navigator + Progress bar at the top",
    // progressBottom: "Panel navigator + Progress bar at the bottom",
    // progressTopBottom: "Panel navigator + Progress bar at the top and bottom",
    // horizontal: "Horizontal",
    // vertical: "Vertical",
    // top: "Top",
    // bottom: "Bottom",
    // topBottom: "Top and bottom",
    // both: "Both",
    // left: "Left",
    // right: "Right",
    // color: "color",
    // date: "date",
    // datetime: "datetime",
    // "datetime-local": "datetime-local",
    // email: "email",
    // month: "month",
    // number: "number",
    // password: "password",
    // range: "range",
    // tel: "tel",
    // text: "text",
    // time: "time",
    // url: "url",
    // week: "week",
    // hidden: "Hidden",
    // on: "Continue from the previous page",
    // onPage: "Start on each page",
    // edit: "Editable",
    // display: "Read-only",
    // onComplete: "When the survey is completed",
    // onHidden: "When the question becomes hidden",
    // onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      // none: "Never"
    },
    // all: "All",
    // page: "Page",
    // survey: "Survey",
    // onNextPage: "When switching to the next page",
    // onValueChanged: "After an answer is changed",
    // onValueChanging: "Before an answer is changed",
    // standard: "Original structure",
    // singlePage: "All questions on a single page",
    // questionPerPage: "Each question on an individual page",
    // noPreview: "No preview",
    // showAllQuestions: "Show all questions",
    // showAnsweredQuestions: "Show answered questions only",
    // pages: "Completed pages",
    // questions: "Answered questions",
    // requiredQuestions: "Answered required questions",
    // correctQuestions: "Valid answers",
    // buttons: "Completed pages (button UI)",
    // underInput: "Under the input",
    // underTitle: "Under the title",
    // onBlur: "On blur",
    // onTyping: "While typing",
    // underRow: "Under the row",
    // underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      // none: "Hidden"
    },
    showProgressBar: {
      // off: "Hidden"
    },
    showTimerPanel: {
      // none: "Hidden"
    },
    showTimerPanelMode: {
      // all: "Both"
    },
    detailPanelMode: {
      // none: "Hidden"
    },
    addRowLocation: {
      // default: "Depends on matrix layout"
    },
    panelsState: {
      // default: "Users cannot expand or collapse panels",
      // collapsed: "All panels are collapsed",
      // expanded: "All panels are expanded"
    },
    widthMode: {
      // auto: "Auto",
      // static: "Static",
      // responsive: "Responsive"
    },
    imageFit: {
      // none: "None",
      // contain: "Contain",
      // cover: "Cover",
      // fill: "Fill"
    },
    contentMode: {
      // auto: "Auto",
      // image: "Image",
      // video: "Video",
      // youtube: "YouTube"
    },
    displayMode: {
      // auto: "Auto",
      // buttons: "Buttons",
      // dropdown: "Dropdown"
    }
  },
  // Operators
  op: {
    empty: "為空",
    notempty: "不為空",
    equal: "等於",
    notequal: "不等於",
    contains: "包含",
    notcontains: "不包含",
    // anyof: "Any of",
    // allof: "All of",
    greater: "大於",
    less: "小於",
    greaterorequal: "大於等於",
    lessorequal: "小於等於",
    // and: "and",
    // or: "or"
  },
  // Embed window
  ew: {
    angular: "使用 Angular 時",
    jquery: "使用 JQuery 時",
    knockout: "使用 Knockout 時",
    react: "使用 React 時",
    vue: "使用 Vue 時",
    bootstrap: "使用 Bootstrap 時",
    // modern: "Modern theme",
    // default: "Default theme",
    // orange: "Orange theme",
    // darkblue: "Darkblue theme",
    // darkrose: "Darkrose theme",
    // stone: "Stone theme",
    // winter: "Winter theme",
    // winterstone: "Winter-Stone theme",
    showOnPage: "嵌入頁面顯示",
    showInWindow: "使用單獨的問卷視窗",
    loadFromServer: "從服務器加載問卷 JSON 數據",
    titleScript: "腳本和樣式",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // selectPage: "Select the page to test it",
    // showInvisibleElements: "Show invisible elements",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "數量檢查",
    emailvalidator: "Email",
    // expressionvalidator: "Expression",
    numericvalidator: "數字",
    regexvalidator: "正則表達式",
    textvalidator: "文本"
  },
  triggers: {
    completetrigger: "完成問卷",
    setvaluetrigger: "設置問題值",
    // copyvaluetrigger: "Copy answer",
    // skiptrigger: "Skip to question",
    // runexpressiontrigger: "Run expression",
    visibletrigger: "修改可見性"
  },
  pehelp: {
    // cookieName: "Cookies prevent users from filling out the same survey twice.",
    // format: "Use {0} as a placeholder for the actual value.",
    // totalText: "Visible only when at least one column has Total type or Total expression.",
    // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    // columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    // autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    // valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    choicesbyurl: {
      // valueName: " "
    },
    // keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
  },
  // Properties
  p: {
    title: {
      name: "標題",
      title: "如果與名字相同，請設置為空值"
    },
    // multiSelect: "Allow multiple selection",
    // showLabel: "Show image captions",
    // value: "Value",
    // visibleIf: "visibleIf",
    // attachOriginalItems: "attachOriginalItems",
    // useDisplayValuesInDynamicTexts: "useDisplayValuesInDynamicTexts",
    // titleLocation: "titleLocation",
    description: "說明",
    // descriptionLocation: "descriptionLocation",
    // defaultValueExpression: "defaultValueExpression",
    // requiredIf: "requiredIf",
    // validators: "validators",
    // bindings: "bindings",
    // renderAs: "renderAs",
    // currency: "currency",
    // cellHint: "cellHint",
    // isUnique: "isUnique",
    // showInMultipleColumns: "showInMultipleColumns",
    // totalMaximumFractionDigits: "totalMaximumFractionDigits",
    // totalMinimumFractionDigits: "totalMinimumFractionDigits",
    // columns: "columns",
    // detailElements: "detailElements",
    choices: "選項",
    // allowAdaptiveActions: "allowAdaptiveActions",
    // defaultRowValue: "defaultRowValue",
    // detailPanelShowOnAdding: "detailPanelShowOnAdding",
    // logoFit: "logoFit",
    // pages: "pages",
    // questions: "questions",
    // triggers: "triggers",
    // calculatedValues: "calculatedValues",
    // surveyId: "surveyId",
    // surveyPostId: "surveyPostId",
    // surveyShowDataSaving: "surveyShowDataSaving",
    // questionDescriptionLocation: "questionDescriptionLocation",
    // progressBarType: "progressBarType",
    // questionTitlePattern: "questionTitlePattern",
    // widthMode: "widthMode",
    // showBrandInfo: "showBrandInfo",
    choicesByUrl: "Url選項",
    // choicesLazyLoadEnabled: "choicesLazyLoadEnabled",
    // choicesLazyLoadPageSize: "choicesLazyLoadPageSize",
    // inputFieldComponent: "inputFieldComponent",
    // itemComponent: "itemComponent",
    // min: "min",
    // max: "max",
    // minValueExpression: "minValueExpression",
    // maxValueExpression: "maxValueExpression",
    // step: "step",
    // dataList: "dataList",
    // itemSize: "itemSize",
    // elements: "elements",
    // content: "content",
    // navigationButtonsVisibility: "navigationButtonsVisibility",
    // navigationTitle: "navigationTitle",
    // navigationDescription: "navigationDescription",
    // closeOnSelect: "closeOnSelect",
    // longTap: "longTap",
    // autoGrow: "autoGrow",
    // acceptCarriageReturn: "acceptCarriageReturn",
    // displayMode: "displayMode",
    // label: "label",
    // contentMode: "contentMode",
    // imageFit: "imageFit",
    // altText: "altText",
    // height: "height",
    // penColor: "penColor",
    // backgroundColor: "backgroundColor",
    // templateElements: "templateElements",
    // operator: "operator",
    // isVariable: "isVariable",
    // runExpression: "runExpression",
    // showCaption: "showCaption",
    // iconName: "iconName",
    // iconSize: "iconSize"
  }
};

editorLocalization.locales["zh-tw"] = traditionalChineseTranslation;
