// This dictionary contains 334 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization } from "survey-creator-core";

export var turkishStrings = {
  // survey templates
  survey: {
    edit: "Düzenle",
    externalHelpLink: "Nasıl anket oluşturulur izle",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Lütfen araç kutusundan bir soru sürükleyin.",
    addLogicItem: "Anket akışını özelleştirmek için bir kural oluşturun.",
    copy: "Kopyala",
    // duplicate: "Duplicate",
    addToToolbox: "Araç kutusuna ekle",
    deletePanel: "Paneli Sil",
    deleteQuestion: "Soruyu Sil",
    convertTo: "Çevir",
    drag: "Nesne sürükleyin"
  },
  // Question types
  qt: {
    default: "Varsayılan",
    checkbox: "Onay Kutusu",
    comment: "Yorum",
    imagepicker: "Resim seçici",
    // ranking: "Ranking",
    image: "Resim",
    dropdown: "Seçim Kıutusu",
    // tagbox: "Tag Box",
    file: "Dosya",
    html: "Html",
    matrix: "Matrix (tek seçim)",
    matrixdropdown: "Matrix (çoklu seçim)",
    matrixdynamic: "Matrix (dinamik satır)",
    multipletext: "Çoklu Yazı",
    panel: "Panel",
    paneldynamic: "Panel (dinamik panel)",
    radiogroup: "Seçim Grubu",
    rating: "Değerlendirme",
    text: "Tek Girdi",
    boolean: "Mantıksal İfade",
    expression: "İfade (düzenlenemez)",
    signaturepad: "İmza Defteri",
    // buttongroup: "Button Group"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Varyayılan ({0})",
    survey: "Anket",
    settings: "Anket Ayarları",
    settingsTooltip: "Anket ayarlarını aç",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    showPanel: "Paneli Göster",
    hidePanel: "Paneli Gizle",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "Yeni Sayfa Ekle",
    moveRight: "Sağa sürükle",
    moveLeft: "Sola sürükle",
    deletePage: "Sayfayı Sil",
    editPage: "Sayfayı Düzenle",
    edit: "Düzenle",
    newPageName: "Sayfa",
    newQuestionName: "Soru",
    newPanelName: "Panel",
    newTextItemName: "Yazı",
    testSurvey: "Anketi Test Et",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "Anketi Tekrar Test Et",
    testSurveyWidth: "Anket genişliği: ",
    navigateToMsg: "Şuraya git:",
    logic: "Mantıksal Anket",
    embedSurvey: "Gömülü Anket",
    translation: "Çeviri",
    saveSurvey: "Anketi Kaydet",
    saveSurveyTooltip: "Anketi Kaydet",
    designer: "Anket Tasarımı",
    jsonEditor: "JSON Editor",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "Geri",
    redo: "İleri",
    undoTooltip: "Son değişikliği geri al",
    redoTooltip: "Son değişikliği ileri al",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    // copy: "Copy",
    // cut: "Cut",
    // paste: "Paste",
    // copyTooltip: "Copy selection to clipboard",
    // cutTooltip: "Cut selection to clipboard",
    // pasteTooltip: "Paste from clipboard",
    options: "Seçenekler",
    generateValidJSON: "JSON Oluştur",
    generateReadableJSON: "Okunabilir JSON oluştur",
    toolbox: "Araç Kutusu",
    "property-grid": "Özellikler",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "Genel",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "JSON nesnesini doğrular.",
    surveyResults: "Anket Sonucu: ",
    surveyResultsTable: "Tablo olarak",
    surveyResultsJson: "JSON olarak",
    resultsTitle: "Soru başlığı",
    resultsName: "Soru adı",
    resultsValue: "Cevap değeri",
    resultsDisplayValue: "Görünen değer",
    modified: "Düzenlendi",
    saving: "Kaydediliyor",
    saved: "Kaydedildi",
    // propertyEditorError: "Error",
    saveError: "Hata! Editor içerisi kaydedilmedi.",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    translationAddLanguage: "Çeviri için dil seçiniz",
    translationShowAllStrings: "Tüm yazıları göster",
    // translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "Tüm sayfaları göster",
    translationNoStrings: "Çevrilecek yazı yok. Lütfen, filtreyi değiştirin.",
    translationExportToSCVButton: "CSV dışa çıkart",
    translationImportFromSCVButton: "CSV içe aktar",
    translationMergeLocaleWithDefault: "{0} varsayılan çeviri ile sıkıştır",
    // translationPlaceHolder: "Translation...",
    bold: "Kalın",
    italic: "Italik",
    underline: "Alt Çizgi",
    addNewQuestion: "Soru Ekle",
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
      page_visibilityName: "Sayfa görünürse",
      // page_enableName: "Enable (disable) page",
      panel_visibilityName: "Panel görünürse",
      panel_enableName: "Panel aktif/pasif ise",
      question_visibilityName: "Soru görüürse",
      question_enableName: "Soru aktif/pasifse",
      question_requireName: "Soru isteğe bağlı zorunluysa",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      trigger_completeName: "Anketi tamamla",
      trigger_setvalueName: "Soru değerini güncelle",
      trigger_copyvalueName: "Soru değerini kopyala",
      trigger_skipName: "Soruyu atla",
      trigger_runExpressionName: "Varsayılan ifadeyi çalıştır",
      completedHtmlOnConditionName: "Varyalın 'Teşekkür sayfası' yazısı",
      page_visibilityDescription: "Mantıksal sorgu geçerli olduğu zaman sayfayı görünür yap. Aksi takdirde gizle.",
      panel_visibilityDescription: "Mantıksal sorgu geçerli olduğu zaman paneli görünür yap. Aksi takdirde gizle.",
      panel_enableDescription: "Panel oluştur ve tüm nesneleri panelin içine al. Mantıksal sorgu geçerli olduğunda paneli aktif et. Aksi takdirde tümünü pasifleştir.",
      question_visibilityDescription: "Mantıksal sorgu geçerli olduğunda soruyu görünür yap. Aksi takdirde gizle.",
      question_enableDescription: "Mantıksal sorgu geçerli olduğunda soruyu aktif yap. Aksi takdirde pasifleştir.",
      question_requireDescription: "Mantıksal sorgu geçerli olduğunda soruyu zorunlu olarak düzenle.",
      trigger_completeDescription: "Mantıksal sorgu geçerli olduğunda anketi tamamla ve son kullanıya 'Teşekkür sayfası'nı göster.",
      trigger_setvalueDescription: "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, değer seçilen soruya ayarlansın.",
      trigger_copyvalueDescription: "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, seçilen bir sorunun değeri seçilen başka bir soruya kopyalansın.",
      trigger_skipDescription: "Mantıksal ifade geçerli olduğunda anket seçilen soruya atlasın / odaklansın.",
      trigger_runExpressionDescription: "Mantksal ifade geçerli olduğunda ve özel ifade gereçli olur. İsteğe bağlı olarak bu ifade sonucunu seçilen soruya ayarlayabilirsiniz.",
      completedHtmlOnConditionDescription: "Eğer mantıksa ifade geçerli olursa, varsayılan ''Teşekkürler sayfası' yazısı girilen ile dğeiştirilsin.",
      itemExpressionText: "Mantıksal ifade: '{0}' geçerli olsun:", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      page_visibilityText: "{0} sayfayı görünür yap", //{0} page name
      panel_visibilityText: "{0} paneli görünür yap", //{0} panel name
      panel_enableText: "{0} panel aktif olur", //{0} panel name
      question_visibilityText: "{0} soruyu görünür yap", //{0} question name
      question_enableText: "{0} soruyu aktif yap", //{0} question name
      question_requireText: "{0} cevabı zorunlu yap", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "Anket tamamlandı",
      trigger_setvalueText: "Sorunun içine: {0} değer {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Sorusundan {1}, {0} değerini, soruya kopyala", //{0} and {1} question names
      trigger_skipText: "Soruya geç {0}", //{0} question name
      trigger_runExpressionText1: "Mantıksal ifadeyi çalıştır: '{0}'", //{0} the expression
      trigger_runExpressionText2: " ve sonuç değerini soruya ekle: {0}", //{0} question name
      completedHtmlOnConditionText: "Özel 'Teşekkürler sayfasını' göster.",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      conditions: "Koşul(lar)",
      actions: "Olay(lar)",
      expressionEditorTitle: "Koşul(ları) tanımla",
      actionsEditorTitle: "Olay(ları) tanımla",
      deleteAction: "Olayı Sil",
      addNewAction: "Yeni olay ekle",
      selectedActionCaption: "Eklemek için bir olay seçin...",
      expressionInvalid: "Mantıksal ifade boş veya geçersiz. Lütfen düzenleyin.",
      noActionError: "Lütfen, En az bir olay seçiniz.",
      actionInvalid: "Lütfen, Olay(lar)daki sorunları gideriniz.",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Uygula",
    ok: "TAMAM",
    save: "Kaydet",
    // clear: "Clear",
    // saveTooltip: "Save",
    cancel: "İptal",
    // set: "Set",
    reset: "Sıfırla",
    // change: "Change",
    refresh: "Yenile",
    // close: "Close",
    delete: "Sil",
    add: "Ekle",
    addNew: "Yeni Ekle",
    addItem: "Yeni nesne ekleme için tıklayınız...",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    addOther: "Diğer",
    addSelectAll: "Tümünü Seç",
    addNone: "Hiçbiri",
    removeAll: "Tümünü Sil",
    edit: "Düzenle",
    back: "Kaydetmeden çık",
    // backTooltip: "Return without saving",
    saveAndBack: "Kaydet ve çık",
    // saveAndBackTooltip: "Save and return",
    // doneEditing: "Done",
    editChoices: "Seçenekleri düzenle",
    showChoices: "Seçenekleri göster",
    move: "Hareket",
    empty: "<boş>",
    // emptyValue: "Value is empty",
    fastEntry: "Hızlı Giriş",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Form Girişi",
    testService: "Servisi test et",
    itemSelectorEmpty: "Lütfen nesneyi seçiniz",
    conditionActionEmpty: "Lütfen olayı seçiniz",
    conditionSelectQuestion: "Soruyu seç...",
    conditionSelectPage: "Sayfayı seç...",
    conditionSelectPanel: "Paneli seç...",
    conditionValueQuestionTitle: "Lütfen değer/seçenek giriniz",
    expressionHelp: "Lütfen mantıksal ifade giriniz. Soru değerlerine erişmek için süslü parantez kullanabilirsiniz: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Mantıksal ifade kopyası için ctrl+space tuşlarına basınız",
    aceEditorRowTitle: "Geçerli satır",
    aceEditorPanelTitle: "Geçerli panel",
    showMore: "Daha fazla bilgi için dokümantasyonu inceleyiniz",
    assistantTitle: "Erişilebilir sorular:",
    cellsEmptyRowsColumns: "En az bir kolon veya satır olmalı",
    showPreviewBeforeComplete: "Tamamlanmadan önce önizlemeyi göster",
    propertyIsEmpty: "Lütfen değer giriniz",
    // propertyIsNoUnique: "Please enter a unique value",
    propertyNameIsNotUnique: "Lütfen benzersiz bir isim giriniz",
    listIsEmpty: "Yeni eleman ekle",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    expressionIsEmpty: "Mantıksal ifade boş",
    value: "Değer",
    text: "Yazı",
    rowid: "Satır ID",
    imageLink: "Resim linki",
    columnEdit: "Kolonu düzenle: {0}",
    itemEdit: "Eleman düzenle: {0}",
    url: "URL",
    path: "Yol",
    valueName: "Değer adı",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Başlık adı",
    // imageLinkName: "Get image URLs from the following JSON field",
    allowEmptyResponse: "Boş cevaba izin ver",
    titlePlaceholder: "Başlık",
    surveyTitlePlaceholder: "Anket başlığı",
    pageTitlePlaceholder: "Sayfa başlığı",
    descriptionPlaceholder: "Bir açıklama giriniz",
    surveyDescriptionPlaceholder: "Anket açıklaması giriniz",
    pageDescriptionPlaceholder: "Sayfa açıklaması giriniz",
    showOtherItem: "Başka bir öğeye sahip",
    otherText: "Diğer eleman metni",
    showNoneItem: "Hiçbir elemana sahip değil",
    noneText: "Hiçbir eleman metni",
    showSelectAllItem: "Tüm elemanlar seçildi",
    selectAllText: "Tüm elemanların yazısını seç",
    choicesMin: "Otomatik oluşturulan öğeler için minimum değer",
    choicesMax: "Otomatik oluşturulan öğeler için maksimum değer",
    choicesStep: "Otomatik oluşturulan öğeler arasındaki fark",
    name: "isim",
    title: "Başlık",
    cellType: "Hücre tipi",
    colCount: "Kolon sayısı",
    choicesOrder: "Seçenek sırasını seç",
    visible: "Görünür?",
    isRequired: "Zorunlu?",
    isAllRowRequired: "Tüm satırlar zorunlu",
    requiredErrorText: "Zorunlu hata yazısı",
    startWithNewLine: "Yeni satırla başla?",
    rows: "Satır sayısı",
    cols: "Kolon sayısı",
    placeholder: "Giriş varsayılan içeriği",
    showPreview: "Resim önizleme gösteriliyor mu?",
    storeDataAsText: "Dosya içeriğini JSON sonucunda metin olarak depola",
    maxSize: "Bayt cinsinden maksimum dosya boyutu",
    imageHeight: "Resim yüksekliği",
    imageWidth: "Resim genişliği",
    rowCount: "Satır sayısı",
    columnLayout: "Kolon yerleşimi",
    addRowLocation: "Satır butonu konumu ekle",
    addRowText: "Satır butonu yazısı ekle",
    removeRowText: "Satır butonu yazısını kaldır",
    rateMin: "Minimum oran",
    rateMax: "Maksimum oran",
    rateStep: "Oylama adımı",
    minRateDescription: "Minimum oran açıklaması",
    maxRateDescription: "Maksimum oran açıklaması",
    inputType: "Girdi tipi",
    optionsCaption: "Seçenekler başlığı",
    defaultValue: "Varsayılan değer",
    cellsDefaultRow: "Varsayılan hücre yazısı",
    surveyEditorTitle: "Anket ayarlarını düzenle",
    qEditorTitle: "Düzenle: {0}",
    maxLength: "Maksimum uzunluk",
    buildExpression: "Kur",
    editExpression: "Düzenle",
    // and: "and",
    // or: "or",
    remove: "Kaldır",
    addCondition: "Koşul ekle",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "Başlığı göster/gizle",
    // expandCollapseTitle: "Expand/collapse title",
    locale: "Varsayılan dil",
    simulator: "Cihaz seçin",
    landscapeOrientation: "Yatay",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "Mod (düzenlebilir/düzenlenemez)",
    clearInvisibleValues: "Görünmez değerleri sil",
    cookieName: "Çerez adı (anketi yerel olarak iki kez devre dışı bırakmak için)",
    sendResultOnPageNext: "Bir sonraki sayfada anket sonuçlarını gönder",
    storeOthersAsComment: "'Diğerleri' değerini ayrı alanda depolayın",
    showPageTitles: "Sayfa başlıklarını göster",
    showPageNumbers: "Sayfa numaralarını göster",
    pagePrevText: "Önceki sayfa butonu metni",
    pageNextText: "Yeni sayfa butonu metni",
    completeText: "Tamamla butonu metni",
    previewText: "Önizleme düğmesi metni",
    editText: "Düğme metnini düzenle",
    startSurveyText: "Başla butonu yazısı",
    showNavigationButtons: "Gezinme butonlarını göster (varsayılan gezinme)",
    showPrevButton: "Önceki butonu göster (kullanıcı önceki sayfaya dönebilir)",
    firstPageIsStarted: "Anketteki ilk sayfa bir başlangıç sayfasıdır.",
    showCompletedPage: "Tamamlanan sayfayı en sonunda göster (HTML)",
    goNextPageAutomatic: "Tüm soruları cevaplarken otomatik olarak sonraki sayfaya git",
    showProgressBar: "İlerleme çubuğunu göster",
    questionTitleLocation: "Soru başlığı konumu",
    requiredText: "Zorunlu soru sembolü",
    questionStartIndex: "Soru indeksi (1, 2 veya 'A', 'a' gibi)",
    showQuestionNumbers: "Soru numarasını göster",
    questionTitleTemplate: "Soru başlığı şablonu, varsayılan değer: '{no}. {require} {title}'",
    questionErrorLocation: "Soru hatası konumu",
    focusFirstQuestionAutomatic: "İlk soruyu sayfayı değiştirmeye odakla",
    questionsOrder: "Sayfadaki öğelerin sırası",
    maxTimeToFinish: "Anketi bitirmek için maksimum süre",
    maxTimeToFinishPage: "Ankette bir sayfayı bitirmek için maksimum süre",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "Zamanlayıcı panelini göster",
    showTimerPanelMode: "Zamanlayıcı paneli modunu göster",
    renderMode: "İşleme modu",
    allowAddPanel: "Panel eklemeye izin ver",
    allowRemovePanel: "Panel silmeye izin ver",
    // noEntriesText: "Empty entries text",
    panelAddText: "Panel ekleme metni",
    panelRemoveText: "Panel silme metni",
    isSinglePage: "Tüm öğeleri tek bir sayfada göster",
    html: "Html",
    expression: "Mantıksal İfade",
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
    minValue: "Minimum değer",
    maxValue: "Maksimum değer",
    minLength: "Minimum uzunluk",
    allowDigits: "Rakamlara izin ver",
    minCount: "Minimum miktar",
    maxCount: "Maksimum miktar",
    regex: "Düzenli ifade",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    totalText: "Toplam metni",
    totalType: "Toplam tipi",
    totalExpression: "Toplam mantıksal ifade",
    totalDisplayStyle: "Toplam görünüm",
    totalCurrency: "Toplam para birimi",
    totalFormat: "Toplam format",
    // logo: "Logo (URL or base64-encoded string)",
    // questionsOnPageMode: "Survey structure",
    maxTextLength: "Maksimum metin uzunluğu",
    maxOthersLength: "Maksimum diğerleri uzunluğu",
    // autoGrowComment: "Auto-expand comment area if necessary",
    // textUpdateMode: "Update text question value",
    focusOnFirstError: "İlk hataya odaklan",
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
    allowClear: "Seçeneklerin başlığını göster",
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
    showClearButton: "Temizleme butonunu göster",
    // showNumber: "Show panel number",
    logoWidth: "Logo genişlik",
    logoHeight: "Logo uzunluk",
    // readOnly: "Read-only",
    // enableIf: "Editable if",
    // emptyRowsText: "\"No rows\" message",
    // size: "Input size (in characters)",
    // separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    // choicesFromQuestion: "Copy choices from the following question",
    // choicesFromQuestionMode: "Which choices to copy?",
    showCommentArea: "Yorumu var",
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
    logoPosition: "Logo pozisyonu",
    addLogo: "Logo ekle...",
    changeLogo: "Logoyu değiştir...",
    logoPositions: {
      none: "Logoyu kaldır",
      left: "Sol",
      right: "Sağ",
      top: "Üstte",
      bottom: "Altta"
    },
    tabs: {
      general: "Genel",
      fileOptions: "Seçenekler",
      html: "Html Editor",
      columns: "Kolonlar",
      rows: "Satırlar",
      choices: "Seçenekler",
      items: "Elemanlar",
      visibleIf: "Göster eğer",
      enableIf: "Pasifleştir Eğer",
      requiredIf: "Zorunlu Eğer",
      rateValues: "Oran değerleri",
      choicesByUrl: "Webten seçenekler",
      matrixChoices: "Varsayılan seçenekler",
      multipleTextItems: "Yazı girdileri",
      numbering: "Rakamlama",
      validators: "Doğrulayıcılar",
      navigation: "Gezinme",
      question: "Soru",
      pages: "Sayfalar",
      timer: "Zamanlayıcı / Sınav",
      calculatedValues: "Hesaplanan Değerler",
      triggers: "Tetikleyiciler",
      templateTitle: "Şablon başlığı",
      totals: "Toplamlar",
      logic: "Mantık",
      layout: "Şablon",
      data: "Veri",
      validation: "Doğrulayıcı",
      cells: "Hücreler",
      showOnCompleted: "Tamamlandı Göster",
      logo: "Anket Başlığında Logo",
      // slider: "Slider",
      // expression: "Expression",
      others: "Diğer"
    },
    editProperty: "Özelliği düzenle '{0}'",
    items: "[ Elemanlar: {0} ]",
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
    enterNewValue: "Lütfen, değer girin.",
    noquestions: "Ankette herhangi bir soru yok.",
    createtrigger: "Lütfen bir tetikleyici oluşturun",
    // titleKeyboardAdornerTip: "Press enter button to edit",
    keyboardAdornerTip: "Öğeyi düzenlemek için enter butonuna basın, öğeyi silmek için sil butonuna basın, öğeyi taşımak için kontrol artı ok yukarı veya ok tuşuna basın",
    triggerOn: "Açık ",
    triggerMakePagesVisible: "Sayfaları görünür yap:",
    triggerMakeQuestionsVisible: "Elemanları görünür yap:",
    triggerCompleteText: "Başarılı olursa anketi tamamlayın.",
    triggerNotSet: "Tetikleyici ayarlanmadı",
    triggerRunIf: "Çalıştır eğer",
    triggerSetToName: "Değerini şuradan değiştir: ",
    triggerFromName: "Değerini şuradan kopyala: ",
    triggerRunExpression: "Mantıksal ifadeyi çalıştır:",
    triggerSetValue: "şuraya: ",
    triggerGotoName: "Soruya git:",
    triggerIsVariable: "Değişkeni anket sonucuna koymayın.",
    triggerRunExpressionEmpty: "Lütfen geçerli bir ifade girin",
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
    inherit: "Başlangıç",
    show: "Göster",
    hide: "Gizle",
    default: "Varsayılan",
    initial: "Başlangıç",
    random: "Rastgele",
    collapsed: "Kapalı",
    expanded: "Genişletilmiş",
    none: "Yok",
    asc: "Artan",
    desc: "Azalan",
    indeterminate: "Belirsiz",
    // decimal: "decimal",
    // currency: "currency",
    // percent: "percent",
    firstExpanded: "firstExpanded",
    off: "Kapalı",
    // onpanel: "Start on each panel",
    onPanel: "Panelde",
    onSurvey: "Ankette",
    list: "Liste",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "Yatay",
    vertical: "Dikey",
    top: "Üst",
    bottom: "Alt",
    topBottom: "Üst ve alt",
    both: "Her ikiside",
    left: "Sol",
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
    hidden: "Gizli",
    on: "Açık",
    onPage: "Sayfada",
    edit: "Düzenle",
    display: "Görüntüle",
    onComplete: "Tamamlandığında",
    onHidden: "Gizlendiğinde",
    // onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      // none: "Never"
    },
    all: "Tümü",
    page: "Sayfa",
    survey: "Anket",
    onNextPage: "Sonraki sayfada",
    onValueChanged: "Değer değiştiğinde",
    // onValueChanging: "Before an answer is changed",
    standard: "Standart",
    singlePage: "Tek sayfa",
    questionPerPage: "Sayfa başına soru",
    noPreview: "Önizleme yok",
    showAllQuestions: "Tüm soruları göster",
    showAnsweredQuestions: "Cevaplanan soruları göster",
    // pages: "Completed pages",
    questions: "Sorular",
    requiredQuestions: "Gerekli sorular",
    correctQuestions: "Doğru sorular",
    buttons: "Butonlar",
    underInput: "Giriş altında",
    underTitle: "Başlık altında",
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
    empty: "boş",
    notempty: "boş değil",
    equal: "eşittir",
    notequal: "eşit değildir",
    contains: "içerir",
    notcontains: "içermez",
    anyof: "herhangi biri",
    allof: "tümü",
    greater: "büyüktür",
    less: "küçüktür",
    greaterorequal: "büyük eşittir",
    lessorequal: "küçük eşittir",
    // and: "and",
    // or: "or"
  },
  // Embed window
  ew: {
    angular: "Angular versiyonu kullan",
    jquery: "Jquery versiyonu kullan",
    knockout: "Knockout versiyonu kullan",
    react: "React versiyonu kullan",
    vue: "Vue versiyonu kullan",
    bootstrap: "Bootstrap",
    // modern: "Modern theme",
    // default: "Default theme",
    // orange: "Orange theme",
    // darkblue: "Darkblue theme",
    // darkrose: "Darkrose theme",
    // stone: "Stone theme",
    // winter: "Winter theme",
    // winterstone: "Winter-Stone theme",
    showOnPage: "Bir sayfada anket göster",
    showInWindow: "Anketi bir pencerede göster",
    loadFromServer: "Anket JSON'u sunucudan yükle",
    titleScript: "Scriptler ve stiller",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Test edilecek sayfayı seçin:",
    showInvisibleElements: "Görünmez öğeleri göster",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "cevap sayısı",
    emailvalidator: "e-mail",
    expressionvalidator: "ifade",
    numericvalidator: "numerik",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "anketi tamamla",
    setvaluetrigger: "değeri ayarla",
    copyvaluetrigger: "değeri kopyala",
    skiptrigger: "soruyu atla",
    runexpressiontrigger: "mantıksal ifadeyi çalıştır",
    visibletrigger: "görünürlüğü değiştir (kullanımdan kaldırıldı)"
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
      name: "başlık",
      title: "'Ad' ile aynıysa boş bırakın"
    },
    multiSelect: "Çoklu Seçim",
    showLabel: "Başlığı göster",
    // value: "Value",
    visibleIf: "Görünür eğer",
    // attachOriginalItems: "attachOriginalItems",
    useDisplayValuesInDynamicTexts: "Başlıkta görünen değeri kullan",
    titleLocation: "Başlık konumu",
    description: "Açıklama",
    descriptionLocation: "Açıklama konumu",
    // defaultValueExpression: "defaultValueExpression",
    requiredIf: "Eğer gerekli mi?",
    validators: "Doğrulayıcılar",
    // bindings: "bindings",
    // renderAs: "renderAs",
    currency: "Para birimi",
    // cellHint: "cellHint",
    // isUnique: "isUnique",
    // showInMultipleColumns: "showInMultipleColumns",
    // totalMaximumFractionDigits: "totalMaximumFractionDigits",
    // totalMinimumFractionDigits: "totalMinimumFractionDigits",
    columns: "Sütunlar",
    // detailElements: "detailElements",
    choices: "Seçenekler",
    // allowAdaptiveActions: "allowAdaptiveActions",
    defaultRowValue: "Varsayılan satır değeri",
    // detailPanelShowOnAdding: "detailPanelShowOnAdding",
    // logoFit: "logoFit",
    // pages: "pages",
    // questions: "questions",
    triggers: "tetikleyiciler",
    // calculatedValues: "calculatedValues",
    // surveyId: "surveyId",
    // surveyPostId: "surveyPostId",
    // surveyShowDataSaving: "surveyShowDataSaving",
    questionDescriptionLocation: "Soru açıklaması konumu",
    progressBarType: "İlerleme çubuğu türü",
    // questionTitlePattern: "questionTitlePattern",
    // widthMode: "widthMode",
    // showBrandInfo: "showBrandInfo",
    choicesByUrl: "URL'e göre seçimler",
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
    itemSize: "Öğe boyutu",
    // elements: "elements",
    // content: "content",
    navigationButtonsVisibility: "Navigasyon butonları görünürlüğü",
    // navigationTitle: "navigationTitle",
    // navigationDescription: "navigationDescription",
    // closeOnSelect: "closeOnSelect",
    // longTap: "longTap",
    // autoGrow: "autoGrow",
    // acceptCarriageReturn: "acceptCarriageReturn",
    // displayMode: "displayMode",
    label: "Başlık",
    contentMode: "İçerik modu",
    imageFit: "Görsel'u uyumlandır",
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

editorLocalization.locales["tr"] = turkishStrings;
