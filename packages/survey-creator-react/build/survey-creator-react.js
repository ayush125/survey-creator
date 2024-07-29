/*!
 * SurveyJS Creator React v1.11.8
 * (c) 2015-2024 Devsoft Baltic OÜ - http://surveyjs.io/
 * Github: https://github.com/surveyjs/survey-creator
 * License: https://surveyjs.io/Licenses#SurveyCreator
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("survey-core"), require("survey-creator-core"), require("survey-react-ui"));
	else if(typeof define === 'function' && define.amd)
		define("survey-creator-react", ["react", "react-dom", "survey-core", "survey-creator-core", "survey-react-ui"], factory);
	else if(typeof exports === 'object')
		exports["survey-creator-react"] = factory(require("react"), require("react-dom"), require("survey-core"), require("survey-creator-core"), require("survey-react-ui"));
	else
		root["SurveyCreator"] = factory(root["React"], root["ReactDOM"], root["Survey"], root["SurveyCreatorCore"], root["SurveyReact"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_survey_core__, __WEBPACK_EXTERNAL_MODULE_survey_creator_core__, __WEBPACK_EXTERNAL_MODULE_survey_react_ui__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ActionButton.tsx":
/*!******************************!*\
  !*** ./src/ActionButton.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var ActionButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ActionButton, _super);
    function ActionButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionButton.prototype.renderElement = function () {
        var _this = this;
        var classes = this.props.classes + " svc-action-button";
        if (this.props.selected) {
            classes += " svc-action-button--selected";
        }
        if (this.props.disabled) {
            classes += " svc-action-button--disabled";
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: classes }, this.props.text);
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { role: "button", className: classes, onClick: function (e) {
                if (!_this.props.allowBubble) {
                    e.stopPropagation();
                }
                _this.props.click();
            }, title: this.props.title }, this.props.text))));
    };
    return ActionButton;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));



/***/ }),

/***/ "./src/ImageItemValueWrapper.tsx":
/*!***************************************!*\
  !*** ./src/ImageItemValueWrapper.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageItemValueAdornerComponent: () => (/* binding */ ImageItemValueAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModelElement */ "./src/ModelElement.tsx");






var ImageItemValueAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ImageItemValueAdornerComponent, _super);
    function ImageItemValueAdornerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.preventDragHandler = function (e) {
            e.preventDefault();
        };
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
        return _this;
    }
    ImageItemValueAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.ImageItemValueWrapperViewModel(props.componentData.creator, props.question, props.item, null, null);
    };
    ImageItemValueAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "item"];
    };
    ImageItemValueAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(ImageItemValueAdornerComponent.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    ImageItemValueAdornerComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.itemsRoot = this.rootRef.current;
    };
    ImageItemValueAdornerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.model.itemsRoot = this.rootRef.current;
    };
    ImageItemValueAdornerComponent.prototype.renderLoadingIndicator = function () {
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-item-value__loading" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingIndicatorComponent, null));
    };
    ImageItemValueAdornerComponent.prototype.render = function () {
        var _this = this;
        // if (this.model.question.isDragged) {
        //   return null;
        // }
        this.model.item = this.props.item;
        var isNew = !this.props.question.isItemInList(this.props.item);
        this.model.isNew = isNew;
        var imageStyle = !this.model.getIsNewItemSingle() ? { width: this.question.renderedImageWidth, height: this.question.renderedImageHeight } : null;
        var content = null;
        if (isNew || this.model.isUploading) {
            content = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-item-value__item", onDrop: this.model.onDrop, onDragOver: this.model.onDragOver, onDragLeave: this.model.onDragLeave },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "sd-imagepicker__item sd-imagepicker__item--inline" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", { className: "sd-imagepicker__label" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { style: imageStyle, className: "sd-imagepicker__image" }, this.model.isUploading ? this.renderLoadingIndicator() : null)))),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-item-value-controls" }, this.model.allowAdd && !this.model.isUploading ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-context-button svc-image-item-value-controls__add", onClick: function () { return _this.model.chooseNewFile(_this.model); } },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 24, iconName: "icon-add-lg", title: this.model.addFileTitle }))) : null)));
        }
        else {
            content = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-item-value__item" }, this.props.element),
                this.model.isDraggable && this.model.canRenderControls ?
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-context-button svc-image-item-value-controls__drag-area-indicator", onPointerDown: function (event) { return _this.model.onPointerDown(event); } },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 24, iconName: "icon-drag-area-indicator" }))
                    : null,
                this.model.canRenderControls ?
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-context-container svc-image-item-value-controls" },
                        this.model.allowRemove && !this.model.isUploading ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-context-button", onClick: function () { return _this.model.chooseFile(_this.model); } },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { role: "button", size: 24, iconName: "icon-file", title: this.model.selectFileTitle }))) : null,
                        this.model.allowRemove && !this.model.isUploading ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-context-button svc-context-button--danger", onClick: function () { return _this.model.remove(_this.model); } },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { role: "button", size: 24, iconName: "icon-delete", title: this.model.removeFileTitle }))) : null)
                    : null));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { ref: this.rootRef, className: this.model.getRootCss(), key: this.props.element.key, "data-sv-drop-target-item-value": this.model.isDraggable ? this.model.item.value : undefined, onPointerDown: function (event) { return _this.model.onPointerDown(event); }, onDragStart: this.preventDragHandler },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-item-value-wrapper__ghost", style: imageStyle }),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-item-value-wrapper__content" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "file", "aria-hidden": "true", tabIndex: -1, accept: this.model.acceptedTypes, className: "svc-choose-file-input", style: {
                        position: "absolute",
                        opacity: 0,
                        width: "1px",
                        height: "1px",
                        overflow: "hidden"
                    } }),
                content)));
    };
    return ImageItemValueAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-image-item-value", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ImageItemValueAdornerComponent, props);
});


/***/ }),

/***/ "./src/ItemValueWrapper.tsx":
/*!**********************************!*\
  !*** ./src/ItemValueWrapper.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemValueAdornerComponent: () => (/* binding */ ItemValueAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModelElement */ "./src/ModelElement.tsx");





var ItemValueAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ItemValueAdornerComponent, _super);
    function ItemValueAdornerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onBlur = function (event) {
            _this.model.onFocusOut(event.nativeEvent);
        };
        return _this;
    }
    ItemValueAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.ItemValueWrapperViewModel(props.componentData.creator, props.question, props.item);
    };
    ItemValueAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "item"];
    };
    ItemValueAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    ItemValueAdornerComponent.prototype.render = function () {
        var _this = this;
        // if (this.model.question.isDragged) {
        //   return null;
        // }
        this.model.item = this.props.item;
        var button = this.model.allowAdd ? ((0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-item-value-controls__button svc-item-value-controls__add", "aria-label": this.model.tooltip, onClick: function () {
                _this.model.add(_this.model);
                _this.model.isNew = false;
            } },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 16, iconName: "icon-add_16x16", title: this.model.tooltip })))) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
            " ",
            this.model.isDraggable ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-item-value-controls__button svc-item-value-controls__drag" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { className: "svc-item-value-controls__drag-icon", size: 24, iconName: "icon-drag-area-indicator", title: this.model.dragTooltip }))) : null,
            this.model.allowRemove ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-item-value-controls__button svc-item-value-controls__remove", "aria-label": this.model.tooltip, onClick: function () { return _this.model.remove(_this.model); } },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 16, iconName: "icon-remove_16x16", title: this.model.tooltip }))) : null));
        var itemkey = this.props.element.key + (this.model.allowAdd ? "_new" : "");
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-item-value-wrapper" +
                (this.model.allowAdd ? " svc-item-value--new" : "") +
                (this.model.isDragging ? " svc-item-value--dragging" : "") +
                (this.model.isDragDropGhost ? " svc-item-value--ghost" : "") +
                (this.model.isDragDropMoveDown ? " svc-item-value--movedown" : "") +
                (this.model.isDragDropMoveUp ? " svc-item-value--moveup" : ""), key: itemkey, "data-sv-drop-target-item-value": this.model.isDraggable ? this.model.item.value : undefined, onPointerDown: function (event) { return _this.model.onPointerDown(event); } },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-item-value__ghost" }),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-item-value-controls", onBlur: this.onBlur }, button),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-item-value__item", onClick: function (event) { return _this.model.select(_this.model, event.nativeEvent); } }, this.props.element)));
    };
    return ItemValueAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-item-value", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ItemValueAdornerComponent, props);
});


/***/ }),

/***/ "./src/LogoImage.tsx":
/*!***************************!*\
  !*** ./src/LogoImage.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoImageComponent: () => (/* binding */ LogoImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModelElement */ "./src/ModelElement.tsx");





var LogoImageComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(LogoImageComponent, _super);
    function LogoImageComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        return _this;
    }
    LogoImageComponent.prototype.createModel = function (props) {
        var prevRoot = null;
        if (!!this.model) {
            prevRoot = this.model.root;
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.LogoImageViewModel(props.data, prevRoot);
    };
    LogoImageComponent.prototype.getUpdatedModelProps = function () {
        return ["data"];
    };
    LogoImageComponent.prototype.getStateElement = function () {
        return this.model;
    };
    LogoImageComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.root = this.rootRef.current;
    };
    LogoImageComponent.prototype.renderChooseButton = function () {
        var _this = this;
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-context-button", onClick: function () { return _this.model.chooseFile(_this.model); } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { size: 24, iconName: "icon-file" })));
    };
    LogoImageComponent.prototype.renderClearButton = function () {
        var _this = this;
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-context-button svc-context-button--danger", onClick: function () { return _this.model.remove(_this.model); } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { size: 24, iconName: "icon-clear" })));
    };
    LogoImageComponent.prototype.renderButtons = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-context-container svc-logo-image-controls" },
            this.renderChooseButton(),
            this.renderClearButton()));
    };
    LogoImageComponent.prototype.renderImage = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: this.model.containerCss },
            this.renderButtons(),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.LogoImage, { data: this.props.data.survey }));
    };
    LogoImageComponent.prototype.renderPlaceHolder = function () {
        var _this = this;
        return this.model.allowEdit && !this.model.isUploading ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-logo-image-placeholder", onClick: function () { return _this.model.chooseFile(_this.model); } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("use", { xlinkHref: "#icon-logo" })))) : null;
    };
    LogoImageComponent.prototype.renderInput = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { "aria-hidden": "true", type: "file", tabIndex: -1, accept: this.model.acceptedTypes, className: "svc-choose-file-input" });
    };
    LogoImageComponent.prototype.renderLoadingIndicator = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-logo-image__loading" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingIndicatorComponent, null));
    };
    LogoImageComponent.prototype.render = function () {
        var content = null;
        if (this.model.survey.locLogo.renderedHtml && !this.model.isUploading) {
            content = this.renderImage();
        }
        else if (this.model.isUploading) {
            content = this.renderLoadingIndicator();
        }
        else {
            content = this.renderPlaceHolder();
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { ref: this.rootRef, className: "svc-logo-image" },
            this.renderInput(),
            content));
    };
    return LogoImageComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-logo-image", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LogoImageComponent, props);
});


/***/ }),

/***/ "./src/MatrixCellWrapper.tsx":
/*!***********************************!*\
  !*** ./src/MatrixCellWrapper.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatrixCellAdornerComponent: () => (/* binding */ MatrixCellAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModelElement */ "./src/ModelElement.tsx");





var MatrixCellAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MatrixCellAdornerComponent, _super);
    function MatrixCellAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixCellAdornerComponent.prototype.createModel = function (props) {
        var _a;
        var data = props.componentData;
        var prevIsSelected = false;
        if (!!this.model) {
            prevIsSelected = this.model.isSelected;
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.MatrixCellWrapperViewModel(data.creator, data.element, data.question, data.row, data.column || ((_a = data.element.cell) === null || _a === void 0 ? void 0 : _a.column));
        this.model.isSelected = prevIsSelected;
    };
    MatrixCellAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["componentData"];
    };
    MatrixCellAdornerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b;
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var data = this.props.componentData;
        this.model.templateData = data.element;
        this.model.row = data.row;
        this.model.column = data.column || ((_b = (_a = data.element) === null || _a === void 0 ? void 0 : _a.cell) === null || _b === void 0 ? void 0 : _b.column);
        this.model.question = data.question;
    };
    MatrixCellAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    MatrixCellAdornerComponent.prototype.render = function () {
        var _this = this;
        var controls = null;
        if (!!this.model.isSupportCellEditor) {
            controls = react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-matrix-cell__question-controls" }, (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-matrix-cell__question-controls-button", onClick: function (event) { return _this.model.editQuestion(_this.model, event); } },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 24, iconName: "icon-edit" }))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-matrix-cell", tabIndex: -1, key: this.props.element.key, onClick: function (e) { return !_this.props.question && _this.model.selectContext(_this.model, e); }, onMouseOut: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); }, onMouseOver: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-matrix-cell--selected" + (this.model.isSelected ? " svc-visible" : "") }),
            this.props.element,
            controls));
    };
    return MatrixCellAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-matrix-cell", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MatrixCellAdornerComponent, props);
});


/***/ }),

/***/ "./src/ModelElement.tsx":
/*!******************************!*\
  !*** ./src/ModelElement.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatorModelElement: () => (/* binding */ CreatorModelElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__);


var CreatorModelElement = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CreatorModelElement, _super);
    function CreatorModelElement(props) {
        var _this = _super.call(this, props) || this;
        _this.createModel(props);
        return _this;
    }
    CreatorModelElement.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var result = _super.prototype.shouldComponentUpdate.call(this, nextProps, nextState);
        if (result) {
            if (this.needUpdateModel(nextProps)) {
                this.createModel(nextProps);
            }
        }
        return result;
    };
    CreatorModelElement.prototype.createModel = function (props) { };
    CreatorModelElement.prototype.needUpdateModel = function (nextProps) {
        var names = this.getUpdatedModelProps();
        if (!Array.isArray(names))
            return true;
        for (var i = 0; i < names.length; i++) {
            var key = names[i];
            if (this.props[key] !== nextProps[key])
                return true;
        }
        return false;
    };
    CreatorModelElement.prototype.getUpdatedModelProps = function () {
        return undefined;
    };
    return CreatorModelElement;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "./src/Navigation.tsx":
/*!****************************!*\
  !*** ./src/Navigation.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyNavigation: () => (/* binding */ SurveyNavigation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__);


var SurveyNavigation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyNavigation, _super);
    function SurveyNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPropChangedHandler = function (sender, options) {
            if (_this.isRendering)
                return;
            var reactiveProps = [
                "showProgressBar",
                "progressBarType",
                "currentPageValue"
            ];
            if (reactiveProps.indexOf(options.name) < 0)
                return;
            var val = {};
            for (var i = 0; i < reactiveProps.length; i++) {
                var propName = reactiveProps[i];
                val[propName] = _this.survey[propName];
            }
            _this.setState(val);
        };
        return _this;
    }
    SurveyNavigation.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setHandler();
    };
    SurveyNavigation.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.setHandler();
    };
    SurveyNavigation.prototype.setHandler = function () {
        if (!this.survey ||
            this.survey.onPropertyChanged.hasFunc(this.onPropChangedHandler))
            return;
        this.survey.onPropertyChanged.add(this.onPropChangedHandler);
    };
    SurveyNavigation.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.survey) {
            this.survey.onPropertyChanged.remove(this.onPropChangedHandler);
        }
    };
    Object.defineProperty(SurveyNavigation.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyNavigation.prototype, "location", {
        get: function () {
            return this.props.location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyNavigation.prototype, "isTop", {
        get: function () {
            return this.location == "top";
        },
        enumerable: false,
        configurable: true
    });
    SurveyNavigation.prototype.canRender = function () {
        return this.isTop
            ? this.survey.isShowProgressBarOnTop
            : this.survey.isShowProgressBarOnBottom;
    };
    SurveyNavigation.prototype.renderElement = function () {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(this.survey.getProgressTypeComponent(), { survey: this.survey, css: this.survey.css, isTop: this.isTop });
    };
    return SurveyNavigation;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "./src/ObjectSelector.tsx":
/*!********************************!*\
  !*** ./src/ObjectSelector.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var ObjectSelectorComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ObjectSelectorComponent, _super);
    function ObjectSelectorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ObjectSelectorComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    ObjectSelectorComponent.prototype.getStateElement = function () {
        return this.model;
    };
    ObjectSelectorComponent.prototype.renderElement = function () {
        if (!this.model.isVisible)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.List, { model: this.model.list }));
    };
    return ObjectSelectorComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-object-selector", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ObjectSelectorComponent, props);
});


/***/ }),

/***/ "./src/PageNavigator.tsx":
/*!*******************************!*\
  !*** ./src/PageNavigator.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyPageNavigator: () => (/* binding */ SurveyPageNavigator),
/* harmony export */   SurveyPageNavigatorItem: () => (/* binding */ SurveyPageNavigatorItem)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModelElement */ "./src/ModelElement.tsx");






var SurveyPageNavigator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyPageNavigator, _super);
    function SurveyPageNavigator(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = react__WEBPACK_IMPORTED_MODULE_4___default().createRef();
        return _this;
    }
    SurveyPageNavigator.prototype.createModel = function (props) {
        if (this.model) {
            this.model.dispose();
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.PageNavigatorViewModel(props.pagesController, props.pageEditMode);
    };
    SurveyPageNavigator.prototype.getUpdatedModelProps = function () {
        return ["pagesController", "pageEditMode"];
    };
    SurveyPageNavigator.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(SurveyPageNavigator.prototype, "scrollableContainer", {
        get: function () {
            var el = this.containerRef.current;
            if (!!el) {
                var self_1 = this;
                return el.parentElement.parentElement.parentElement;
            }
            return el;
        },
        enumerable: false,
        configurable: true
    });
    SurveyPageNavigator.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.props.pageEditMode !== "bypage") {
            var el = this.containerRef.current;
            if (!!el) {
                var self_2 = this;
                el.parentElement.parentElement.parentElement.onscroll = function (ev) {
                    return self_2.model.onContainerScroll(ev.currentTarget);
                };
                self_2.model.setItemsContainer(el.parentElement);
                self_2.model.setScrollableContainer(el.parentElement.parentElement.parentElement);
            }
        }
    };
    SurveyPageNavigator.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        var el = this.containerRef.current;
        if (!!el) {
            el.parentElement.parentElement.parentElement.onscroll = undefined;
        }
        this.model.stopItemsContainerHeightObserver();
        this.model.setScrollableContainer(undefined);
    };
    SurveyPageNavigator.prototype.renderElement = function () {
        var _this = this;
        var className = "svc-page-navigator__selector";
        if (this.model.isPopupOpened)
            className += " svc-page-navigator__selector--opened";
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-page-navigator", ref: this.containerRef, style: { display: this.model.visible ? "flex" : "none" } },
            (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: className, onClick: function () { return _this.model.togglePageSelector(); }, title: this.model.pageSelectorCaption },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: "svc-page-navigator__navigator-icon", iconName: this.model.icon, size: 24, title: this.model.pageSelectorCaption }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Popup, { model: this.model.popupModel }))),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null, this.model.visibleItems.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(SurveyPageNavigatorItem, { key: item.id, item: item })); }))));
    };
    return SurveyPageNavigator;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_5__.CreatorModelElement));

var SurveyPageNavigatorItem = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyPageNavigatorItem, _super);
    function SurveyPageNavigatorItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyPageNavigatorItem.prototype.getStateElement = function () {
        return this.props.item;
    };
    SurveyPageNavigatorItem.prototype.renderElement = function () {
        var item = this.props.item;
        var className = "svc-page-navigator-item-content";
        if ((0,survey_core__WEBPACK_IMPORTED_MODULE_1__.unwrap)(item.active)) {
            className += " svc-page-navigator-item--selected";
        }
        if ((0,survey_core__WEBPACK_IMPORTED_MODULE_1__.unwrap)(item.disabled)) {
            className += " svc-page-navigator-item--disabled";
        }
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-page-navigator-item" }, (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: className, onClick: function (e) {
                item.action(item);
                e.stopPropagation();
            } },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-page-navigator-item__dot", title: item.title }),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-page-navigator-item__banner" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", { className: "svc-text svc-text--small svc-text--bold" }, item.title),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", { className: "svc-page-navigator-item__dot" }))))));
    };
    return SurveyPageNavigatorItem;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_5__.CreatorModelElement));



/***/ }),

/***/ "./src/PropertyGrid.tsx":
/*!******************************!*\
  !*** ./src/PropertyGrid.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyGridComponent: () => (/* binding */ PropertyGridComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./src/Search.tsx");




var PropertyGridComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(PropertyGridComponent, _super);
    function PropertyGridComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PropertyGridComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    PropertyGridComponent.prototype.getStateElement = function () {
        return this.model;
    };
    PropertyGridComponent.prototype.canRender = function () {
        if (!this.model)
            return false;
        return _super.prototype.canRender.call(this);
    };
    PropertyGridComponent.prototype.renderElement = function () {
        var rootClassName = this.model.searchEnabled ? "spg-container spg-container_search" : "spg-container";
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: rootClassName },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Search__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, { model: this.model.searchManager }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Survey, { model: this.model.survey })));
    };
    return PropertyGridComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("buttongroup", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionButtonGroup, props);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyGridComponent);
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-property-grid", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PropertyGridComponent, props);
});


/***/ }),

/***/ "./src/QuestionEditorContent.tsx":
/*!***************************************!*\
  !*** ./src/QuestionEditorContent.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionEditorContentComponent: () => (/* binding */ QuestionEditorContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var QuestionEditorContentComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionEditorContentComponent, _super);
    function QuestionEditorContentComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(QuestionEditorContentComponent.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    QuestionEditorContentComponent.prototype.createQuestionElement = function (question) {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.ReactQuestionFactory.Instance.createQuestion(!question.isDefaultRendering || question.isDefaultRendering()
            ? question.getTemplate()
            : question.getComponentName(), {
            question: question,
            isDisplayMode: question.isInputReadOnly,
            creator: this,
        });
    };
    QuestionEditorContentComponent.prototype.questionTitleLocation = function () {
        return this.survey.questionTitleLocation;
    };
    QuestionEditorContentComponent.prototype.questionErrorLocation = function () {
        return this.survey.questionErrorLocation;
    };
    QuestionEditorContentComponent.prototype.renderError = function (key, error, cssClasses) {
        return null;
    };
    QuestionEditorContentComponent.prototype.render = function () {
        var question = this.survey.getAllQuestions()[0];
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestion, { creator: this, element: question })));
    };
    return QuestionEditorContentComponent;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component)));

survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-question-editor-content", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(QuestionEditorContentComponent, props);
});


/***/ }),

/***/ "./src/QuestionEmbeddedSurvey.tsx":
/*!****************************************!*\
  !*** ./src/QuestionEmbeddedSurvey.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyElementEmbeddedSurvey: () => (/* binding */ SurveyElementEmbeddedSurvey)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var SurveyElementEmbeddedSurvey = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyElementEmbeddedSurvey, _super);
    function SurveyElementEmbeddedSurvey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyElementEmbeddedSurvey.prototype, "embeddedSurvey", {
        get: function () {
            return (this.props.element || this.props.question);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyElementEmbeddedSurvey.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementEmbeddedSurvey.prototype.render = function () {
        if (!this.embeddedSurvey)
            return null;
        var survey = this.embeddedSurvey.embeddedSurvey;
        if (!survey || !survey.currentPage)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyPage, { survey: survey, page: survey.currentPage, css: survey.css, creator: this.creator });
    };
    return SurveyElementEmbeddedSurvey;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("embeddedsurvey", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyElementEmbeddedSurvey, props);
});


/***/ }),

/***/ "./src/QuestionLinkValue.tsx":
/*!***********************************!*\
  !*** ./src/QuestionLinkValue.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionLinkValue: () => (/* binding */ SurveyQuestionLinkValue)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionButton */ "./src/ActionButton.tsx");





var SurveyQuestionLinkValue = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyQuestionLinkValue, _super);
    function SurveyQuestionLinkValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionLinkValue.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionLinkValue.prototype.renderClear = function () {
        var _this = this;
        var showClear = this.questionBase.showClear;
        if (!this.questionBase.isReadOnly && showClear) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_4__.ActionButton, { classes: this.question.linkClearButtonCssClasses, click: function () { return _this.question.doClearClick(); }, selected: this.question.isSelected, text: survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.editorLocalization.getString("pe.clear") }));
        }
        else {
            return null;
        }
    };
    SurveyQuestionLinkValue.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_4__.ActionButton, { classes: this.question.linkSetButtonCssClasses, click: function () { return _this.question.doLinkClick(); }, selected: this.question.isSelected, disabled: !this.question.isClickable, text: this.question.linkValueText, title: this.question.tooltip }),
            this.renderClear()));
    };
    return SurveyQuestionLinkValue;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("linkvalue", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyQuestionLinkValue, props);
});


/***/ }),

/***/ "./src/Results.tsx":
/*!*************************!*\
  !*** ./src/Results.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyResults: () => (/* binding */ SurveyResults),
/* harmony export */   SurveyResultsByRow: () => (/* binding */ SurveyResultsByRow)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionButton */ "./src/ActionButton.tsx");
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModelElement */ "./src/ModelElement.tsx");






var SurveyResults = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyResults, _super);
    function SurveyResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyResults.prototype.createModel = function (props) {
        if (this.props.survey) {
            this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.SurveyResultsModel(props.survey);
        }
    };
    SurveyResults.prototype.getUpdatedModelProps = function () {
        return ["survey"];
    };
    SurveyResults.prototype.getStateElement = function () {
        return this.model;
    };
    SurveyResults.prototype.render = function () {
        var _this = this;
        if (!this.model) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svd-test-results" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svd-test-results__header" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svd-test-results__header-text" }, this.model.surveyResultsText),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svd-test-results__header-types" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_4__.ActionButton, { click: function () { return _this.model.selectTableClick(); }, text: this.model.surveyResultsTableText, selected: this.model.isTableSelected, disabled: false }),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_4__.ActionButton, { click: function () { return _this.model.selectJsonClick(); }, text: this.model.surveyResultsJsonText, selected: this.model.isJsonSelected, disabled: false }))),
            this.renderResultAsText(),
            this.renderResultAsTable()));
    };
    SurveyResults.prototype.renderResultAsText = function () {
        if (this.model.resultViewType !== "text") {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svd-test-results__text svd-light-bg-color" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, this.model.resultText)));
    };
    SurveyResults.prototype.renderResultAsTable = function () {
        if (this.model.resultViewType !== "table") {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svd-test-results__table svd-light-bg-color" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", { className: "svd-light-background-color" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", { key: 1, className: "svd-dark-border-color" }, this.model.resultsTitle),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", { key: 2, className: "svd-dark-border-color" }, this.model.resultsDisplayValue))),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, SurveyResults.renderRows(this.model.resultData)))));
    };
    SurveyResults.renderRows = function (data) {
        var rows = [];
        for (var i = 0; i < data.length; i++) {
            rows.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyResultsByRow, { key: i + 1, row: data[i] }));
        }
        return rows;
    };
    return SurveyResults;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_5__.CreatorModelElement));

var SurveyResultsByRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyResultsByRow, _super);
    function SurveyResultsByRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyResultsByRow.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyResultsByRow.prototype.getStateElement = function () {
        return this.row;
    };
    SurveyResultsByRow.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", { onClick: function () { return _this.row.toggle(); } },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", { key: 1, style: { paddingLeft: this.row.textMargin }, className: "svd-dark-border-color" },
                    this.row.isNode ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { style: { left: this.row.markerMargin }, className: "svd-test-results__marker " + (this.row.collapsed ? "" : "svd-test-results__marker--expanded") },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-expand_16x16", size: 16 }))) : null,
                    this.row.question ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyLocStringViewer, { locStr: this.row.question.locTitle }) : react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, this.row.title)),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", { key: 2, className: this.row.isNode ? "svd-test-results__node-value" : "svd-dark-border-color" }, this.row.getString(this.row.displayValue)))),
            this.row.isNode && !this.row.collapsed ? SurveyResults.renderRows(this.row.data) : null));
    };
    return SurveyResultsByRow;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_5__.CreatorModelElement));



/***/ }),

/***/ "./src/Search.tsx":
/*!************************!*\
  !*** ./src/Search.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);




var SearchComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SearchComponent, _super);
    function SearchComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            filterString: _this.model.filterString || ""
        };
        return _this;
    }
    Object.defineProperty(SearchComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SearchComponent.prototype.getStateElement = function () {
        return this.model;
    };
    SearchComponent.prototype.renderElement = function () {
        var _this = this;
        if (!this.model.isVisible)
            return null;
        var onChange = function (e) {
            var root = survey_core__WEBPACK_IMPORTED_MODULE_2__.settings.environment.root;
            if (e.target === root.activeElement) {
                _this.model.filterString = e.target.value;
            }
        };
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spg-search-editor_container" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spg-search-editor_search-icon" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-search", size: "auto" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", className: "spg-search-editor_input", "aria-label": this.model.filterStringPlaceholder, placeholder: this.model.filterStringPlaceholder, value: this.state.filterString, onChange: onChange }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spg-search-editor_toolbar" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spg-search-editor_toolbar-counter" }, this.model.matchCounterText),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyActionBar, { model: this.model.searchActionBar }))));
    };
    return SearchComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-search", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SearchComponent, props);
});


/***/ }),

/***/ "./src/SideBar.tsx":
/*!*************************!*\
  !*** ./src/SideBar.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var SidebarComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SidebarComponent, _super);
    function SidebarComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        return _this;
    }
    Object.defineProperty(SidebarComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SidebarComponent.prototype.getStateElement = function () {
        return this.model;
    };
    SidebarComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.initResizeManager(this.containerRef.current);
    };
    SidebarComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.resetResizeManager();
    };
    SidebarComponent.prototype.canRender = function () {
        if (!this.model)
            return false;
        return _super.prototype.canRender.call(this);
    };
    SidebarComponent.prototype.renderElement = function () {
        var _this = this;
        var style = { display: !this.model.visible ? "none" : "" };
        var className = "svc-side-bar" + (this.model.flyoutPanelMode ? " svc-flyout-side-bar" : "");
        var items = this.model.tabs.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SidebarTab, { item: item, key: item.id }); });
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className, style: { display: !this.model.hasVisibleTabs ? "none" : "" } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-side-bar__shadow", onClick: function () { return _this.model.collapseSidebar(); } }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-flex-column svc-side-bar__wrapper" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { ref: this.containerRef, style: style, className: "svc-side-bar__container" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-side-bar__container-header" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-side-bar__container-actions" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyActionBar, { model: this.model.toolbar })),
                        (!!this.model.headerText ?
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-side-bar__container-title" }, this.model.headerText)
                            : null)),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-side-bar__container-content" }, items)))));
    };
    return SidebarComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

var SidebarTab = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SidebarTab, _super);
    function SidebarTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SidebarTab.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SidebarTab.prototype.getStateElement = function () {
        return this.item;
    };
    SidebarTab.prototype.renderElement = function () {
        if (!this.item.visible)
            return null;
        var component = survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(this.item.componentName, { model: this.item.model });
        return component;
    };
    return SidebarTab;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("svc-side-bar-tab", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SidebarTab, props);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarComponent);
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-side-bar", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SidebarComponent, props);
});


/***/ }),

/***/ "./src/StringEditor.tsx":
/*!******************************!*\
  !*** ./src/StringEditor.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLocStringEditor: () => (/* binding */ SurveyLocStringEditor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModelElement */ "./src/ModelElement.tsx");





var SurveyLocStringEditor = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyLocStringEditor, _super);
    function SurveyLocStringEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangedHandler = function (sender, options) {
            _this.setState({ changed: !!_this.state && _this.state.changed ? _this.state.changed + 1 : 1 });
        };
        _this.onBlur = function (event) {
            _this.svStringEditorRef.current.spellcheck = false;
            _this.locString["__isEditing"] = false;
            _this.justFocused = false;
            _this.baseModel.onBlur(event.nativeEvent);
            return _this.baseModel.errorText;
        };
        _this.onCompositionStart = function (event) {
            _this.baseModel.onCompositionStart(event.nativeEvent);
        };
        _this.onCompositionEnd = function (event) {
            _this.baseModel.onCompositionEnd(event.nativeEvent);
        };
        _this.onInput = function (event) {
            _this.baseModel.onInput(event.nativeEvent);
        };
        _this.onPaste = function (event) {
            _this.baseModel.onPaste(event.nativeEvent);
        };
        _this.justFocused = false;
        _this.onFocus = function (event) {
            _this.baseModel.onFocus(event.nativeEvent);
            _this.justFocused = true;
        };
        _this.onKeyDown = function (event) {
            return _this.baseModel.onKeyDown(event.nativeEvent);
        };
        _this.onKeyUp = function (event) {
            return _this.baseModel.onKeyUp(event.nativeEvent);
        };
        _this.onMouseUp = function (event) {
            return _this.baseModel.onMouseUp(event.nativeEvent);
        };
        _this.done = function (event) {
            _this.baseModel.done(event);
            _this.locString["__isEditing"] = false;
        };
        _this.edit = function (event) {
            _this.svStringEditorRef.current.focus();
            // document.execCommand('selectAll', false, null);
            _this.locString["__isEditing"] = true;
            _this.baseModel.onClick(event);
        };
        _this.state = { changed: 0 };
        _this.svStringEditorRef = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        return _this;
    }
    SurveyLocStringEditor.prototype.createModel = function (props) {
        if (this.baseModel) {
            this.baseModel.dispose();
        }
        this.baseModel = new survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.StringEditorViewModelBase(this.locString, this.creator);
    };
    SurveyLocStringEditor.prototype.getUpdatedModelProps = function () {
        return ["creator", "locString"];
    };
    Object.defineProperty(SurveyLocStringEditor.prototype, "locString", {
        get: function () {
            return this.props.locStr.locStr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "creator", {
        get: function () {
            return this.props.locStr.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringEditor.prototype.getStateElement = function () {
        return this.baseModel;
    };
    Object.defineProperty(SurveyLocStringEditor.prototype, "errorText", {
        get: function () {
            return this.baseModel.errorText;
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringEditor.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        if (!this.locString)
            return;
        this.baseModel.setLocString(this.locString);
        this.baseModel.getEditorElement = function () { return _this.svStringEditorRef.current; };
        this.baseModel.blurEditor = function () {
            _this.svStringEditorRef.current.blur();
            _this.svStringEditorRef.current.spellcheck = false;
        };
        this.baseModel.afterRender();
        this.locString.onStringChanged.add(this.onChangedHandler);
        if (this.locString["__isEditing"]) {
            this.svStringEditorRef.current.focus();
            // document.execCommand('selectAll', false, null);
        }
    };
    SurveyLocStringEditor.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.baseModel.setLocString(this.locString);
        this.baseModel.afterRender();
    };
    SurveyLocStringEditor.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.baseModel.detachFromUI();
        if (!this.locString)
            return;
        this.locString.onStringChanged.remove(this.onChangedHandler);
    };
    Object.defineProperty(SurveyLocStringEditor.prototype, "placeholder", {
        get: function () {
            return this.baseModel.placeholder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "contentEditable", {
        get: function () {
            return this.baseModel.contentEditable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "className", {
        get: function () {
            return this.baseModel.className(this.locString.renderedHtml);
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringEditor.prototype.render = function () {
        if (!this.locString) {
            return null;
        }
        var control = null;
        if (this.locString.hasHtml) {
            var htmlValue = { __html: this.locString.renderedHtml };
            control = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { role: "textbox", ref: this.svStringEditorRef, className: "sv-string-editor sv-string-editor--html", contentEditable: this.contentEditable, spellCheck: false, "aria-placeholder": this.placeholder, "aria-label": this.placeholder || "content editable", suppressContentEditableWarning: true, 
                // style={this.style}
                dangerouslySetInnerHTML: htmlValue, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown, onMouseUp: this.onMouseUp, onClick: this.edit }));
        }
        else {
            control = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { role: "textbox", ref: this.svStringEditorRef, className: "sv-string-editor", contentEditable: this.contentEditable, spellCheck: false, "aria-placeholder": this.placeholder, "aria-label": this.placeholder || "content editable", suppressContentEditableWarning: true, 
                // style={this.style}
                onBlur: this.onBlur, onInput: this.onInput, onPaste: this.onPaste, onCompositionStart: this.onCompositionStart, onCompositionEnd: this.onCompositionEnd, onFocus: this.onFocus, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, onMouseUp: this.onMouseUp, onClick: this.edit }, this.locString.renderedHtml));
        }
        var counter = this.baseModel.showCharacterCounter ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.CharacterCounterComponent, { counter: this.baseModel.characterCounter, remainingCharacterCounter: this.baseModel.getCharacterCounterClass })) : null;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: this.className },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-string-editor__content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-string-editor__border", onClick: this.edit },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: "svc-string-editor__button svc-string-editor__button--edit", size: 16, iconName: "icon-edit" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-string-editor__input" },
                    control,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-string-editor__controls", onClick: this.edit }),
                    counter)),
            this.errorText ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-string-editor__error" }, this.errorText) : ""));
    };
    return SurveyLocStringEditor;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.editableStringRendererName, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyLocStringEditor, props);
});


/***/ }),

/***/ "./src/SurveyCreator.tsx":
/*!*******************************!*\
  !*** ./src/SurveyCreator.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreator: () => (/* binding */ SurveyCreator),
/* harmony export */   SurveyCreatorComponent: () => (/* binding */ SurveyCreatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TabbedMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabbedMenu */ "./src/TabbedMenu.tsx");






var SurveyCreatorComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyCreatorComponent, _super);
    function SurveyCreatorComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootNode = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        return _this;
    }
    Object.defineProperty(SurveyCreatorComponent.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorComponent.prototype.getStateElement = function () {
        return this.creator;
    };
    Object.defineProperty(SurveyCreatorComponent.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (this.creator !== prevProps.creator) {
            if (prevProps.creator) {
                prevProps.creator.unsubscribeRootElement();
            }
            if (this.creator && this.rootNode.current) {
                this.creator.setRootElement(this.rootNode.current);
            }
        }
    };
    SurveyCreatorComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.creator.setRootElement(this.rootNode.current);
    };
    SurveyCreatorComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.creator.unsubscribeRootElement();
    };
    SurveyCreatorComponent.prototype.renderElement = function () {
        var creator = this.props.creator;
        if (creator.isCreatorDisposed)
            return null;
        var creatorClassName = "svc-creator" + (this.props.creator.isMobileView ? " svc-creator--mobile" : "") + (this.props.creator.isTouch ? " svc-creator--touch" : "");
        var areaClassName = "svc-full-container svc-creator__area svc-flex-column" + (this.props.creator.haveCommercialLicense ? "" : " svc-creator__area--with-banner");
        var contentWrapperClassName = "svc-creator__content-wrapper svc-flex-row" + (this.props.creator.isMobileView ? " svc-creator__content-wrapper--footer-toolbar" : "");
        var fullContainerClassName = "svc-flex-row svc-full-container" + (" svc-creator__side-bar--" + this.creator.sidebarLocation);
        var licenseBanner = null;
        if (!this.props.creator.haveCommercialLicense) {
            var htmlValue = { __html: this.props.creator.licenseText };
            licenseBanner = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-creator__banner" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-creator__non-commercial-text", dangerouslySetInnerHTML: htmlValue })));
        }
        //AM: width unrecognized by react
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: creatorClassName, ref: this.rootNode, style: this.style },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgBundleComponent, null),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: areaClassName },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: fullContainerClassName },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-flex-column svc-flex-row__element svc-flex-row__element--growing" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-top-bar" },
                            (creator.showTabs ?
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-tabbed-menu-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TabbedMenu__WEBPACK_IMPORTED_MODULE_5__.TabbedMenuComponent, { model: creator.tabbedMenu })) : null),
                            (creator.showToolbar ?
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbar-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyActionBar, { model: creator.toolbar }))
                                : null)),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: contentWrapperClassName },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-creator__content-holder svc-flex-column" }, this.renderActiveTab())),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-footer-bar" }, (creator.isMobileView ?
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbar-wrapper" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyActionBar, { model: creator.footerToolbar }))
                            : null))),
                    this.renderSidebar()),
                licenseBanner,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.NotifierComponent, { notifier: creator.notifier }))));
    };
    SurveyCreatorComponent.prototype.renderActiveTab = function () {
        var creator = this.props.creator;
        for (var i = 0; i < creator.tabs.length; i++) {
            if (creator.tabs[i].id === creator.activeTab) {
                return this.renderCreatorTab(creator.tabs[i]);
            }
        }
        return null;
    };
    SurveyCreatorComponent.prototype.renderCreatorTab = function (tab) {
        if (tab.visible === false) {
            return null;
        }
        var creator = this.props.creator;
        var component = !!tab.renderTab
            ? tab.renderTab()
            : survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement(tab.componentContent, {
                creator: creator,
                survey: creator.survey,
                data: tab.data.model
            });
        var className = "svc-creator-tab" + (creator.toolboxLocation == "right" ? " svc-creator__toolbox--right" : "");
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: tab.id, id: "scrollableDiv-" + tab.id, className: className }, component));
    };
    SurveyCreatorComponent.prototype.renderSidebar = function () {
        if (!!this.creator.sidebar) {
            var className = this.creator.isMobileView ? "sv-mobile-side-bar" : "";
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className }, survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement("svc-side-bar", { model: this.creator.sidebar })));
        }
        else {
            return null;
        }
    };
    return SurveyCreatorComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

var SurveyCreator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyCreator, _super);
    function SurveyCreator(options, options2) {
        if (options === void 0) { options = {}; }
        return _super.call(this, options, options2) || this;
    }
    SurveyCreator.prototype.render = function (target) {
        var node = target;
        if (typeof target === "string") {
            node = document.getElementById(target);
        }
        /* eslint-disable react/no-deprecated */
        react_dom__WEBPACK_IMPORTED_MODULE_2___default().unmountComponentAtNode(node);
        react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyCreatorComponent, { creator: this })), node);
        /* eslint-enable react/no-deprecated */
    };
    //ISurveyCreator
    SurveyCreator.prototype.createQuestionElement = function (question) {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.createQuestion(question.isDefaultRendering()
            ? question.getTemplate()
            : question.getComponentName(), {
            question: question,
            isDisplayMode: question.isReadOnly,
            creator: this
        });
    };
    SurveyCreator.prototype.renderError = function (key, error, cssClasses) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: key },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: cssClasses.error.icon, "aria-hidden": "true" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: cssClasses.error.item },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyLocStringViewer, { locStr: error.locText }))));
    };
    SurveyCreator.prototype.questionTitleLocation = function () {
        return this.survey.questionTitleLocation;
    };
    SurveyCreator.prototype.questionErrorLocation = function () {
        return this.survey.questionErrorLocation;
    };
    return SurveyCreator;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_4__.SurveyCreatorModel));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("survey-widget", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.Survey, props);
});


/***/ }),

/***/ "./src/Switcher.tsx":
/*!**************************!*\
  !*** ./src/Switcher.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitcherComponent: () => (/* binding */ SwitcherComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var SwitcherComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SwitcherComponent, _super);
    function SwitcherComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SwitcherComponent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SwitcherComponent.prototype.getStateElement = function () {
        return this.item;
    };
    SwitcherComponent.prototype.renderElement = function () {
        var _this = this;
        var tooltip = this.item.tooltip || this.item.title;
        var title = this.item.hasTitle ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-switcher__title" }, this.item.title) : null;
        var button = (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { className: this.item.getActionBarItemCss(), type: "button", disabled: this.item.disabled, onClick: function (args) { return _this.item.action(_this.item, _this.item.getIsTrusted(args)); }, title: tooltip, "aria-checked": this.item.ariaChecked, "aria-expanded": this.item.ariaExpanded, role: this.item.ariaRole },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: this.item.getSwitcherIconCss() },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-switcher__icon-thumb" })),
            title), this.item, { processEsc: false });
        return button;
    };
    return SwitcherComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitcherComponent);
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-switcher", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SwitcherComponent, props);
});


/***/ }),

/***/ "./src/TabbedMenu.tsx":
/*!****************************!*\
  !*** ./src/TabbedMenu.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabbedMenuComponent: () => (/* binding */ TabbedMenuComponent),
/* harmony export */   TabbedMenuItemComponent: () => (/* binding */ TabbedMenuItemComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);




var TabbedMenuComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabbedMenuComponent, _super);
    function TabbedMenuComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        return _this;
    }
    Object.defineProperty(TabbedMenuComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    TabbedMenuComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabbedMenuComponent.prototype.renderElement = function () {
        var items = this.model.renderedActions.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabbedMenuItemWrapper, { item: item, key: item.id }); });
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { ref: this.rootRef, className: "svc-tabbed-menu" }, items));
    };
    TabbedMenuComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var container = this.rootRef.current;
        if (!container)
            return;
        this.manager = new survey_core__WEBPACK_IMPORTED_MODULE_2__.ResponsivityManager(container, this.model, ".svc-tabbed-menu-item-container:not(.sv-dots)>.sv-action__content");
    };
    TabbedMenuComponent.prototype.componentWillUnmount = function () {
        this.manager && (this.manager.dispose());
        _super.prototype.componentWillUnmount.call(this);
    };
    return TabbedMenuComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

var TabbedMenuItemWrapper = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabbedMenuItemWrapper, _super);
    function TabbedMenuItemWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabbedMenuItemWrapper.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    TabbedMenuItemWrapper.prototype.getStateElement = function () {
        return this.item;
    };
    TabbedMenuItemWrapper.prototype.renderElement = function () {
        var css = "svc-tabbed-menu-item-container";
        if (this.item.css) {
            css += " " + this.item.css;
        }
        css += (!this.item.isVisible ? " sv-action--hidden" : "");
        var component = survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement(this.item.component || "svc-tabbed-menu-item", { item: this.item });
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { key: this.item.id, className: css },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "sv-action__content" }, component)));
    };
    return TabbedMenuItemWrapper;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));
var TabbedMenuItemComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabbedMenuItemComponent, _super);
    function TabbedMenuItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabbedMenuItemComponent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    TabbedMenuItemComponent.prototype.getStateElement = function () {
        return this.item;
    };
    TabbedMenuItemComponent.prototype.render = function () {
        var item = this.item;
        var className = "svc-tabbed-menu-item";
        if (item.active)
            className += " svc-tabbed-menu-item--selected";
        if (item.enabled !== undefined && !item.enabled)
            className += " svc-tabbed-menu-item--disabled";
        var titleClassName = "svc-text svc-tabbed-menu-item__text svc-text--normal";
        if (item.active)
            titleClassName += " svc-text--bold";
        return ((0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className, onClick: function () { return item.action(item); } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: titleClassName }, item.title))));
    };
    return TabbedMenuItemComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-tabbed-menu-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabbedMenuItemComponent, props);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabbedMenuComponent);


/***/ }),

/***/ "./src/adorners/CellQuestion.tsx":
/*!***************************************!*\
  !*** ./src/adorners/CellQuestion.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellQuestionAdornerComponent: () => (/* binding */ CellQuestionAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_4__);





var CellQuestionAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CellQuestionAdornerComponent, _super);
    function CellQuestionAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellQuestionAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_4__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    CellQuestionAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    CellQuestionAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    CellQuestionAdornerComponent.prototype.render = function () {
        if (this.model.isDragged) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-sv-drop-target-survey-element": this.model.element.name, className: "svc-question__adorner" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: " svc-question__content--in-popup svc-question__content" }, this.props.element))));
    };
    return CellQuestionAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_3__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-cell-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CellQuestionAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/CellQuestionDropdown.tsx":
/*!***********************************************!*\
  !*** ./src/adorners/CellQuestionDropdown.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellQuestionDropdownAdornerComponent: () => (/* binding */ CellQuestionDropdownAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");





var CellQuestionDropdownAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CellQuestionDropdownAdornerComponent, _super);
    function CellQuestionDropdownAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellQuestionDropdownAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    CellQuestionDropdownAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    CellQuestionDropdownAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    CellQuestionDropdownAdornerComponent.prototype.render = function () {
        if (this.model.isDragged) {
            return null;
        }
        var question = this.props.question;
        var textStyle = this.props.question.textStyle;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { "data-sv-drop-target-survey-element": this.model.element.name, className: "svc-question__adorner" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: " svc-question__content--in-popup svc-question__content" },
                    this.props.element,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-question__dropdown-choices" }, question.visibleChoices.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-question__dropdown-choice", key: "editable_choice_".concat(index) }, survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElementsWrapper.wrapItemValue(question.survey, survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement("survey-radiogroup-item", {
                        question: question,
                        cssClasses: question.cssClasses,
                        isDisplayMode: true,
                        item: item,
                        textStyle: textStyle,
                        index: index,
                        isChecked: question.value === item.value
                    }), question, item))); }))))));
    };
    return CellQuestionDropdownAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-cell-dropdown-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CellQuestionDropdownAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/Page.tsx":
/*!*******************************!*\
  !*** ./src/adorners/Page.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatorSurveyPageComponent: () => (/* binding */ CreatorSurveyPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events */ "./src/events.ts");






var CreatorSurveyPageComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CreatorSurveyPageComponent, _super);
    function CreatorSurveyPageComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_4___default().createRef();
        return _this;
    }
    CreatorSurveyPageComponent.prototype.createModel = function (props) {
        if (this.model) {
            this.model.dispose();
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.PageAdorner(props.creator, props.page);
    };
    CreatorSurveyPageComponent.prototype.getUpdatedModelProps = function () {
        return ["creator", "page"];
    };
    CreatorSurveyPageComponent.prototype.getStateElement = function () {
        return this.model;
    };
    CreatorSurveyPageComponent.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.model.onPageSelectedCallback = function () {
            if (!!_this.rootRef.current) {
                survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.SurveyHelper.scrollIntoViewIfNeeded(_this.rootRef.current);
            }
        };
    };
    CreatorSurveyPageComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.onPageSelectedCallback = undefined;
    };
    CreatorSurveyPageComponent.prototype.canRender = function () {
        return (!!this.model &&
            this.model.isPageLive &&
            !!this.model.page &&
            !!this.model.page.survey);
    };
    CreatorSurveyPageComponent.prototype.renderElement = function () {
        var _this = this;
        if (!this.props.page)
            return null;
        return ((0,survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { ref: this.rootRef, className: "svc-page__content " + this.model.css, id: this.props.page.id, onClick: function (e) {
                return _this.model.select(_this.model, new _events__WEBPACK_IMPORTED_MODULE_5__.ReactMouseEvent(e));
            }, onMouseLeave: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); }, onMouseOver: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); } },
            this.renderHeader(),
            this.renderContent(),
            this.renderPlaceholder(),
            this.renderFooter())));
    };
    CreatorSurveyPageComponent.prototype.renderPlaceholder = function () {
        if (!this.model.showPlaceholder)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-page__placeholder_frame" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-panel__placeholder_frame" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-panel__placeholder" }, this.model.placeholderText))));
    };
    CreatorSurveyPageComponent.prototype.renderContent = function () {
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyPage, { page: this.props.page, survey: this.props.survey, creator: this.props.creator, css: this.model.css }));
    };
    CreatorSurveyPageComponent.prototype.renderHeader = function () {
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-page__content-actions" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyActionBar, { model: this.model.actionContainer })));
    };
    CreatorSurveyPageComponent.prototype.renderFooter = function () {
        return react__WEBPACK_IMPORTED_MODULE_4___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyActionBar, { model: this.model.footerActionsBar });
    };
    return CreatorSurveyPageComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-page", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_4___default().createElement(CreatorSurveyPageComponent, props);
});
var AddQuestionButtonComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AddQuestionButtonComponent, _super);
    function AddQuestionButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AddQuestionButtonComponent.prototype, "model", {
        get: function () {
            return this.props.item.data;
        },
        enumerable: false,
        configurable: true
    });
    AddQuestionButtonComponent.prototype.renderElement = function () {
        var _this = this;
        var questionTypeSelectorModel = this.model.questionTypeSelectorModel;
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "svc-page__add-new-question svc-btn", onClick: function (e) {
                e.stopPropagation();
                _this.model.addNewQuestion(_this.model, new _events__WEBPACK_IMPORTED_MODULE_5__.ReactMouseEvent(e));
            }, onMouseOver: function (e) { return _this.model.hoverStopper(e.nativeEvent, e.currentTarget); } },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", { className: "svc-text svc-text--normal svc-text--bold" }, this.model.addNewQuestionText),
            (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", { type: "button", onClick: function (e) {
                    e.stopPropagation();
                    questionTypeSelectorModel.action();
                }, className: "svc-page__question-type-selector", title: this.model.addNewQuestionText },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", { className: "svc-page__question-type-selector-icon" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { iconName: questionTypeSelectorModel.iconName, size: 24, title: this.model.addNewQuestionText })),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.Popup, { model: questionTypeSelectorModel.popupModel })))));
    };
    return AddQuestionButtonComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));
survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-add-new-question-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_4___default().createElement(AddQuestionButtonComponent, props);
});


/***/ }),

/***/ "./src/adorners/Panel.tsx":
/*!********************************!*\
  !*** ./src/adorners/Panel.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelAdornerComponent: () => (/* binding */ PanelAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question */ "./src/adorners/Question.tsx");




var PanelAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(PanelAdornerComponent, _super);
    function PanelAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelAdornerComponent.prototype.renderElementPlaceholder = function () {
        var _this = this;
        if (!this.model.isEmptyElement) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__placeholder_frame-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__placeholder_frame" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__placeholder" }, this.model.placeholderText),
                this.model.showAddQuestionButton ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__add-new-question svc-action-button", onClick: function (e) {
                        e.stopPropagation();
                        _this.model.addNewQuestion();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: "svc-panel__add-new-question-icon", iconName: "icon-add_24x24", size: 24 }),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-text svc-text--normal svc-text--bold" }, this.model.addNewQuestionText))) : null)));
    };
    PanelAdornerComponent.prototype.disableTabStop = function () {
        return true;
    };
    PanelAdornerComponent.prototype.renderFooter = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            !this.model.isEmptyElement && this.model.element.isPanel && this.model.showAddQuestionButton ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__add-new-question-container" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__question-type-selector-popup" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Popup, { model: this.model.questionTypeSelectorModel.popupModel })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__add-new-question-wrapper" },
                    (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-panel__add-new-question svc-action-button", onClick: function (e) {
                            e.stopPropagation();
                            _this.model.addNewQuestion();
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: "svc-panel__add-new-question-icon", iconName: "icon-add_24x24", size: 24 }),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-text svc-text--normal svc-text--bold" }, this.model.addNewQuestionText)), undefined),
                    (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { type: "button", onClick: function (e) {
                            e.stopPropagation();
                            _this.model.questionTypeSelectorModel.action();
                        }, className: "svc-panel__question-type-selector", title: this.model.addNewQuestionText },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-panel__question-type-selector-icon" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.model.questionTypeSelectorModel.iconName, size: 24 }))))))) : null,
            _super.prototype.renderFooter.call(this)));
    };
    return PanelAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_3__.QuestionAdornerComponent));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-panel", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PanelAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/Question.tsx":
/*!***********************************!*\
  !*** ./src/adorners/Question.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionAdornerComponent: () => (/* binding */ QuestionAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events */ "./src/events.ts");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");






var QuestionAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionAdornerComponent, _super);
    function QuestionAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionAdornerComponent.prototype.createModel = function (props) {
        if (this.modelValue) {
            this.modelValue.dispose();
        }
        this.modelValue = this.createQuestionViewModel(props);
    };
    QuestionAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    QuestionAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    Object.defineProperty(QuestionAdornerComponent.prototype, "model", {
        get: function () {
            return this.modelValue;
        },
        enumerable: false,
        configurable: true
    });
    QuestionAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    QuestionAdornerComponent.prototype.canRender = function () {
        return _super.prototype.canRender.call(this) && !this.model.isDragged;
    };
    QuestionAdornerComponent.prototype.renderElement = function () {
        var _this = this;
        var allowInteractions = this.model.element
            .isInteractiveDesignElement;
        var content = this.renderContent(allowInteractions);
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { ref: this.rootRef, "data-sv-drop-target-survey-element": this.model.element.name || null, className: "svc-question__adorner " + this.model.rootCss(), onMouseOut: function (e) { return allowInteractions && _this.model.hover(e.nativeEvent, e.currentTarget); }, onMouseOver: function (e) { return allowInteractions && _this.model.hover(e.nativeEvent, e.currentTarget); } }, content));
    };
    QuestionAdornerComponent.prototype.disableTabStop = function () {
        return true;
    };
    QuestionAdornerComponent.prototype.renderContent = function (allowInteractions) {
        var _this = this;
        var content = this.renderElementContent();
        //if (!allowInteractions) return <>{content}{this.renderFooter()}</>;
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: this.model.css(), onClick: function (e) { return _this.model.select(_this.model, new _events__WEBPACK_IMPORTED_MODULE_3__.ReactMouseEvent(e)); } },
            allowInteractions ? this.renderHeader() : null,
            content,
            this.renderFooter()), undefined, { disableTabStop: this.disableTabStop() });
    };
    QuestionAdornerComponent.prototype.renderHeader = function () {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.createElement("svc-question-header", { model: this.model });
    };
    QuestionAdornerComponent.prototype.renderFooter = function () {
        var allowInteractions = this.model.element
            .isInteractiveDesignElement;
        return allowInteractions ? survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.createElement("svc-question-footer", { className: "svc-question__content-actions", model: this.model }) : null;
    };
    QuestionAdornerComponent.prototype.renderCarryForwardBanner = function () {
        if (!this.model.isBannerShowing)
            return null;
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.createElement("svc-question-banner", this.model.createBannerParams());
    };
    QuestionAdornerComponent.prototype.renderElementContent = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
            this.props.element,
            this.renderElementPlaceholder(),
            this.renderCarryForwardBanner()));
    };
    QuestionAdornerComponent.prototype.renderElementPlaceholder = function () {
        if (!this.model.isEmptyElement) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-panel__placeholder_frame-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-panel__placeholder_frame" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-panel__placeholder" }, this.model.placeholderText))));
    };
    return QuestionAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_5__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.registerElement("svc-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(QuestionAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/QuestionBanner.tsx":
/*!*****************************************!*\
  !*** ./src/adorners/QuestionBanner.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionBanner: () => (/* binding */ QuestionBanner)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ActionButton */ "./src/ActionButton.tsx");




var QuestionBanner = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionBanner, _super);
    function QuestionBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionBanner.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-carry-forward-panel-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-carry-forward-panel" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null,
                    this.props.text,
                    " "),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-carry-forward-panel__link" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_3__.ActionButton, { click: function () { return _this.props.onClick(); }, text: this.props.actionText })))));
    };
    return QuestionBanner;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component)));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-question-banner", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(QuestionBanner, props);
});


/***/ }),

/***/ "./src/adorners/QuestionDropdown.tsx":
/*!*******************************************!*\
  !*** ./src/adorners/QuestionDropdown.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionDropdownAdornerComponent: () => (/* binding */ QuestionDropdownAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Question */ "./src/adorners/Question.tsx");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ActionButton */ "./src/ActionButton.tsx");






var QuestionDropdownAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionDropdownAdornerComponent, _super);
    function QuestionDropdownAdornerComponent(props) {
        return _super.call(this, props) || this;
    }
    QuestionDropdownAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.QuestionDropdownAdornerViewModel(props.componentData, props.question, null);
    };
    Object.defineProperty(QuestionDropdownAdornerComponent.prototype, "dropdownModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionDropdownAdornerComponent.prototype, "question", {
        get: function () {
            return this.dropdownModel.question;
        },
        enumerable: false,
        configurable: true
    });
    QuestionDropdownAdornerComponent.prototype.renderElementPlaceholder = function () {
        var _this = this;
        var textStyle = this.question.textStyle;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-question__dropdown-choices--wrapper" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-question__dropdown-choices" }, (this.dropdownModel.getRenderedItems() || []).map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: _this.dropdownModel.getChoiceCss(), key: "editable_choice_".concat(index) }, survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElementsWrapper.wrapItemValue(_this.question.survey, survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement(_this.dropdownModel.itemComponent, {
                    key: item.value,
                    question: _this.question,
                    cssClasses: _this.question.cssClasses,
                    isDisplayMode: true,
                    item: item,
                    textStyle: textStyle,
                    index: index,
                    isChecked: _this.question.value === item.value
                }), _this.question, item))); })),
                this.dropdownModel.needToCollapse ?
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_5__.ActionButton, { click: this.dropdownModel.switchCollapse, text: this.dropdownModel.getButtonText(), allowBubble: true }) :
                    null)));
    };
    return QuestionDropdownAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_4__.QuestionAdornerComponent));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-dropdown-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(QuestionDropdownAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/QuestionFooter.tsx":
/*!*****************************************!*\
  !*** ./src/adorners/QuestionFooter.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionWrapperFooter: () => (/* binding */ QuestionWrapperFooter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.ts");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);




var QuestionWrapperFooter = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionWrapperFooter, _super);
    function QuestionWrapperFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionWrapperFooter.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: this.props.className, onFocus: function (e) { return _this.props.model.select(_this.props.model, new _events__WEBPACK_IMPORTED_MODULE_2__.ReactMouseEvent(e)); } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SurveyActionBar, { model: this.props.model.actionContainer, handleClick: false })));
    };
    return QuestionWrapperFooter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component)));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-question-footer", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(QuestionWrapperFooter, props);
});


/***/ }),

/***/ "./src/adorners/QuestionHeader.tsx":
/*!*****************************************!*\
  !*** ./src/adorners/QuestionHeader.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionWrapperHeader: () => (/* binding */ QuestionWrapperHeader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var QuestionWrapperHeader = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionWrapperHeader, _super);
    function QuestionWrapperHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionWrapperHeader.prototype.render = function () {
        var _this = this;
        if (!this.props.model.allowDragging)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-question__drag-area", onPointerDown: function (event) {
                return _this.props.model.onPointerDown(event);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: "svc-question__drag-element", size: 24, iconName: "icon-drag-area-indicator_24x16" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-question__top-actions" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyActionBar, { model: this.props.model.topActionContainer, handleClick: false }))));
    };
    return QuestionWrapperHeader;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component)));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-question-header", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(QuestionWrapperHeader, props);
});


/***/ }),

/***/ "./src/adorners/QuestionImage.tsx":
/*!****************************************!*\
  !*** ./src/adorners/QuestionImage.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionImageAdornerComponent: () => (/* binding */ QuestionImageAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Question */ "./src/adorners/Question.tsx");





var QuestionImageAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionImageAdornerComponent, _super);
    function QuestionImageAdornerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
        return _this;
    }
    QuestionImageAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.QuestionImageAdornerViewModel(props.componentData, props.question, null, null);
    };
    Object.defineProperty(QuestionImageAdornerComponent.prototype, "imageModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    QuestionImageAdornerComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.imageModel.questionRoot = this.rootRef.current;
    };
    QuestionImageAdornerComponent.prototype.renderHeader = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "file", "aria-hidden": "true", tabIndex: -1, accept: this.imageModel.acceptedTypes, className: "svc-choose-file-input", style: {
                    position: "absolute",
                    opacity: 0,
                    width: "1px",
                    height: "1px",
                    overflow: "hidden"
                } }),
            _super.prototype.renderHeader.call(this)));
    };
    QuestionImageAdornerComponent.prototype.renderLoadingPlaceholder = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-question__loading-placeholder" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-question__loading" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingIndicatorComponent, null))));
    };
    QuestionImageAdornerComponent.prototype.renderChooseButton = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-image-question-controls" }, this.model.allowEdit ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "svc-context-button", onClick: function () { return _this.imageModel.chooseFile(_this.imageModel); } },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 24, iconName: "icon-file" }))) : null));
    };
    QuestionImageAdornerComponent.prototype.renderElementPlaceholder = function () {
        return this.imageModel.isUploading ? this.renderLoadingPlaceholder() : this.renderChooseButton();
    };
    QuestionImageAdornerComponent.prototype.getStateElements = function () {
        return [this.model, this.imageModel.filePresentationModel];
    };
    QuestionImageAdornerComponent.prototype.renderElementContent = function () {
        if (this.imageModel.isEmptyImageLink) {
            var fileQuestion = survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.createQuestion("file", {
                creator: this.imageModel.question.survey,
                isDisplayMode: false,
                question: this.imageModel.filePresentationModel
            });
            return fileQuestion;
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                this.props.element,
                this.renderElementPlaceholder()));
        }
    };
    return QuestionImageAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_4__.QuestionAdornerComponent));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-image-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(QuestionImageAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/QuestionRating.tsx":
/*!*****************************************!*\
  !*** ./src/adorners/QuestionRating.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionRatingAdornerComponent: () => (/* binding */ QuestionRatingAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");





var QuestionRatingAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionRatingAdornerComponent, _super);
    function QuestionRatingAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionRatingAdornerComponent.prototype.createModel = function (props) {
        this.modelValue = this.createQuestionViewModel(props);
    };
    QuestionRatingAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.QuestionRatingAdornerViewModel(props.componentData, props.question, null);
    };
    QuestionRatingAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    Object.defineProperty(QuestionRatingAdornerComponent.prototype, "ratingModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionRatingAdornerComponent.prototype, "model", {
        get: function () {
            return this.modelValue;
        },
        enumerable: false,
        configurable: true
    });
    QuestionRatingAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    QuestionRatingAdornerComponent.prototype.renderElement = function () {
        var model = this.ratingModel;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-rating-question-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: model.controlsClassNames },
                    model.allowRemove ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: model.removeClassNames, "aria-label": model.removeTooltip, onClick: function () { return model.removeItem(model); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 16, iconName: "icon-remove_16x16", title: model.removeTooltip }))) : null,
                    model.allowAdd ? (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: model.addClassNames, "aria-label": model.addTooltip, onClick: function () { return model.addItem(model); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 16, iconName: "icon-add_16x16", title: model.addTooltip }))) : null),
                this.props.element)));
    };
    return QuestionRatingAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-rating-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(QuestionRatingAdornerComponent, props);
});
survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-rating-question-content", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(QuestionRatingAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/QuestionWidget.tsx":
/*!*****************************************!*\
  !*** ./src/adorners/QuestionWidget.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionWidgetAdornerComponent: () => (/* binding */ QuestionWidgetAdornerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question */ "./src/adorners/Question.tsx");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_4__);





var QuestionWidgetAdornerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuestionWidgetAdornerComponent, _super);
    function QuestionWidgetAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionWidgetAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    Object.defineProperty(QuestionWidgetAdornerComponent.prototype, "widgetModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    QuestionWidgetAdornerComponent.prototype.renderElementContent = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svc-widget__content" }, this.props.element));
    };
    return QuestionWidgetAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_3__.QuestionAdornerComponent));

survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.registerElement("svc-widget-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(QuestionWidgetAdornerComponent, props);
});


/***/ }),

/***/ "./src/adorners/Row.tsx":
/*!******************************!*\
  !*** ./src/adorners/Row.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowWrapper: () => (/* binding */ RowWrapper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");





var RowWrapper = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(RowWrapper, _super);
    function RowWrapper(props) {
        return _super.call(this, props) || this;
    }
    RowWrapper.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.RowViewModel(props.componentData.creator, props.row, null);
    };
    RowWrapper.prototype.getUpdatedModelProps = function () {
        return ["row", "componentData"];
    };
    RowWrapper.prototype.getStateElement = function () {
        return this.model;
    };
    RowWrapper.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { key: "svc-row-" + this.props.row.id, className: this.model.cssClasses }, this.props.element));
    };
    return RowWrapper;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-row", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(RowWrapper, props);
});


/***/ }),

/***/ "./src/custom-questions/ColorItem.tsx":
/*!********************************************!*\
  !*** ./src/custom-questions/ColorItem.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var ItemTemplateComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ItemTemplateComponent, _super);
    function ItemTemplateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemTemplateComponent.prototype.render = function () {
        var item = this.props.item;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "spg-color-editor__color-swatch", style: { backgroundColor: item.value } }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { key: 2 }, this.renderLocString(item.locTitle, undefined, "locString"))));
    };
    return ItemTemplateComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("color-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ItemTemplateComponent, props);
});


/***/ }),

/***/ "./src/custom-questions/ColorQuestion.tsx":
/*!************************************************!*\
  !*** ./src/custom-questions/ColorQuestion.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionColor: () => (/* binding */ SurveyQuestionColor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var SurveyQuestionColor = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyQuestionColor, _super);
    function SurveyQuestionColor(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionColor.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionColor.prototype.renderInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { id: this.question.inputId, disabled: this.isDisplayMode, className: this.question.cssClasses.control, ref: function (input) { return (_this.setControl(input)); }, placeholder: this.question.renderedPlaceholder, autoComplete: "off", onKeyUp: function (event) { return _this.question.onKeyUp(event.nativeEvent); }, onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onChange: this.question.onChange, onBeforeInput: function (event) { return _this.question.onBeforeInput(event.nativeEvent); }, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-describedby": this.question.ariaDescribedBy })));
    };
    SurveyQuestionColor.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.question.cssClasses.root, onKeyDown: function (event) { return _this.question.onKeyDown(event.nativeEvent); } },
            this.renderColorSwatch(),
            this.renderInput(),
            this.question.showDropdownAction ? this.renderDropdownAction() : null));
    };
    SurveyQuestionColor.prototype.getValueCore = function () {
        return this.question.renderedValue;
    };
    SurveyQuestionColor.prototype.renderColorSwatch = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: this.question.getSwatchCss(), style: this.question.getSwatchStyle() },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.question.cssClasses.swatchIcon, size: "auto" }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "color", disabled: this.isDisplayMode, value: this.question.renderedColorValue, className: this.question.cssClasses.colorInput, onChange: function (event) { return _this.question.onColorInputChange(event.nativeEvent); }, tabIndex: -1 }));
    };
    SurveyQuestionColor.prototype.renderDropdownAction = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement("sv-action-bar-item", { item: this.question.dropdownAction }),
            this.renderPopup()));
    };
    SurveyQuestionColor.prototype.renderPopup = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Popup, { model: this.question.dropdownAction.popupModel });
    };
    return SurveyQuestionColor;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionText));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("color", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyQuestionColor, props);
});


/***/ }),

/***/ "./src/custom-questions/FileEditQuestion.tsx":
/*!***************************************************!*\
  !*** ./src/custom-questions/FileEditQuestion.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionFileEditor: () => (/* binding */ SurveyQuestionFileEditor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var SurveyQuestionFileEditor = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyQuestionFileEditor, _super);
    function SurveyQuestionFileEditor(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionFileEditor.prototype, "questionFile", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionFileEditor.prototype.getValueCore = function () {
        return this.question.renderedValue;
    };
    SurveyQuestionFileEditor.prototype.renderInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { disabled: this.isDisplayMode, className: this.questionFile.cssClasses.control, placeholder: this.questionFile.renderedPlaceholder, ref: function (input) { return (_this.setControl(input)); }, autoComplete: "off", type: "text", onBlur: function (event) { return _this.questionFile.onInputBlur(event.nativeEvent); }, onChange: function (event) { return _this.questionFile.onInputChange(event.nativeEvent); } })));
    };
    SurveyQuestionFileEditor.prototype.renderFileInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "file", disabled: this.isDisplayMode, className: this.questionFile.cssClasses.fileInput, id: this.questionFile.inputId, "aria-required": this.questionFile.ariaRequired, "aria-label": this.questionFile.ariaLabel, "aria-invalid": this.questionFile.ariaInvalid, "aria-describedby": this.questionFile.ariaDescribedBy, multiple: false, title: this.questionFile.inputTitle, accept: this.questionFile.acceptedTypes, tabIndex: -1, onChange: function (event) { return _this.questionFile.onFileInputChange(event.nativeEvent); } }));
    };
    SurveyQuestionFileEditor.prototype.renderButtons = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.questionFile.cssClasses.buttonsContainer },
            this.renderClearButton(),
            this.renderChooseButton()));
    };
    SurveyQuestionFileEditor.prototype.renderClearButton = function () {
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)((react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { type: "button", className: this.questionFile.cssClasses.clearButton, disabled: this.questionFile.getIsClearButtonDisabled(), onClick: this.questionFile.doClean },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.questionFile.cssClasses.clearButtonIcon, size: "auto", title: this.questionFile.clearButtonCaption }))));
    };
    SurveyQuestionFileEditor.prototype.renderChooseButton = function () {
        var _this = this;
        return ((0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { role: "button", onClick: function (event) { return _this.questionFile.chooseFiles(event.nativeEvent); }, className: this.questionFile.getChooseButtonCss(), htmlFor: this.questionFile.inputId, "aria-label": this.questionFile.chooseButtonCaption },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.questionFile.cssClasses.chooseButtonIcon, size: "auto", title: this.questionFile.chooseButtonCaption }))));
    };
    SurveyQuestionFileEditor.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.questionFile.cssClasses.root, ref: function (el) { return _this.setContent(el); }, onDragEnter: this.questionFile.onDragEnter, onDragOver: this.questionFile.onDragOver, onDrop: this.questionFile.onDrop, onDragLeave: this.questionFile.onDragLeave, onKeyDown: function (event) { return _this.question.onKeyDown(event.nativeEvent); } },
            this.renderInput(),
            this.renderFileInput(),
            this.renderButtons()));
    };
    return SurveyQuestionFileEditor;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionText));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("fileedit", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyQuestionFileEditor, props);
});


/***/ }),

/***/ "./src/custom-questions/SpinEditor.tsx":
/*!*********************************************!*\
  !*** ./src/custom-questions/SpinEditor.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionSpinEditor: () => (/* binding */ SurveyQuestionSpinEditor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var SurveyQuestionSpinEditor = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyQuestionSpinEditor, _super);
    function SurveyQuestionSpinEditor(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionSpinEditor.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionSpinEditor.prototype.renderInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { id: this.question.inputId, disabled: this.isDisplayMode, className: this.question.cssClasses.control, ref: function (input) { return (_this.setControl(input)); }, placeholder: this.question.renderedPlaceholder, autoComplete: "off", onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onFocus: function (event) { return _this.question.onFocus(event.nativeEvent); }, onChange: this.question.onChange, onBeforeInput: function (event) { return _this.question.onBeforeInput(event.nativeEvent); }, onKeyUp: function (event) { return _this.question.onKeyUp(event.nativeEvent); }, onKeyDown: function (event) { return _this.question.onInputKeyDown(event.nativeEvent); }, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-describedby": this.question.ariaDescribedBy })));
    };
    SurveyQuestionSpinEditor.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.question.cssClasses.root, onKeyDown: function (event) { return _this.question.onKeyDown(event.nativeEvent); } },
            this.renderInput(),
            this.renderButtons()));
    };
    SurveyQuestionSpinEditor.prototype.getValueCore = function () {
        return this.question.renderedValue;
    };
    SurveyQuestionSpinEditor.prototype.renderButtons = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: this.question.cssClasses.buttonsContainer },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { tabIndex: -1, className: this.question.cssClasses.arrowButton, disabled: this.isDisplayMode, onMouseDown: this.question.onDownButtonMouseDown, onMouseUp: this.question.onButtonMouseUp, onMouseLeave: this.question.onButtonMouseLeave, onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onFocus: function (event) { return _this.question.onFocus(event.nativeEvent); } },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.question.cssClasses.decreaseButtonIcon, size: "auto" })),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { tabIndex: -1, className: this.question.cssClasses.arrowButton, disabled: this.isDisplayMode, onMouseDown: this.question.onUpButtonMouseDown, onMouseUp: this.question.onButtonMouseUp, onMouseLeave: this.question.onButtonMouseLeave, onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onFocus: function (event) { return _this.question.onFocus(event.nativeEvent); } },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.question.cssClasses.increaseButtonIcon, size: "auto" }))));
    };
    return SurveyQuestionSpinEditor;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionText));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("spinedit", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyQuestionSpinEditor, props);
});


/***/ }),

/***/ "./src/custom-questions/TextWithResetQuestion.tsx":
/*!********************************************************!*\
  !*** ./src/custom-questions/TextWithResetQuestion.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionTextWithReset: () => (/* binding */ SurveyQuestionTextWithReset)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var SurveyQuestionTextWithReset = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyQuestionTextWithReset, _super);
    function SurveyQuestionTextWithReset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionTextWithReset.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionTextWithReset.prototype.renderElement = function () {
        var textElement = this.renderInput();
        var resetButton = this.renderResetButton();
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.question.getRootClass() },
            textElement,
            resetButton));
    };
    SurveyQuestionTextWithReset.prototype.renderInput = function () {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.createQuestion(this.question.wrappedQuestionTemplate, {
            question: this.question,
            isDisplayMode: this.question.isInputReadOnly,
            creator: this,
        });
    };
    SurveyQuestionTextWithReset.prototype.renderResetButton = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: this.question.cssClasses.resetButton, disabled: this.question.resetValueAdorner.isDisabled, title: this.question.resetValueAdorner.caption, onClick: function () { return _this.question.resetValueAdorner.resetValue(); } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.question.cssClasses.resetButtonIcon, size: "auto" })));
    };
    return SurveyQuestionTextWithReset;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("textwithreset", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyQuestionTextWithReset, props);
});
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("commentwithreset", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyQuestionTextWithReset, props);
});


/***/ }),

/***/ "./src/entries/helpers.ts":
/*!********************************!*\
  !*** ./src/entries/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays)
/* harmony export */ });
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3
        ? target
        : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}
var __spreadArrays = function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


/***/ }),

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactDragEvent: () => (/* binding */ ReactDragEvent),
/* harmony export */   ReactMouseEvent: () => (/* binding */ ReactMouseEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");

var ReactMouseEvent = /** @class */ (function () {
    function ReactMouseEvent(event) {
        this.event = event;
    }
    ReactMouseEvent.prototype.stopPropagation = function () {
        this.event.stopPropagation();
        //this.event.nativeEvent.stopPropagation();
        //this.event.nativeEvent.stopImmediatePropagation();
    };
    ReactMouseEvent.prototype.preventDefault = function () {
        this.event.preventDefault();
        //this.event.nativeEvent.preventDefault();
    };
    Object.defineProperty(ReactMouseEvent.prototype, "cancelBubble", {
        get: function () {
            //return this.event.cancelBubble;
            return false;
        },
        set: function (value) {
            //this.event.cancelBubble = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "target", {
        get: function () {
            return this.event.target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "currentTarget", {
        get: function () {
            return this.event.currentTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "clientX", {
        get: function () {
            return this.event.clientX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "clientY", {
        get: function () {
            return this.event.clientY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "offsetX", {
        get: function () {
            return this.event.nativeEvent.offsetX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "offsetY", {
        get: function () {
            return this.event.nativeEvent.offsetY;
        },
        enumerable: false,
        configurable: true
    });
    return ReactMouseEvent;
}());

var ReactDragEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ReactDragEvent, _super);
    function ReactDragEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    Object.defineProperty(ReactDragEvent.prototype, "dataTransfer", {
        get: function () {
            return this.event.dataTransfer;
        },
        enumerable: false,
        configurable: true
    });
    return ReactDragEvent;
}(ReactMouseEvent));



/***/ }),

/***/ "./src/tabs/Designer.tsx":
/*!*******************************!*\
  !*** ./src/tabs/Designer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabDesignerComponent: () => (/* binding */ TabDesignerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageNavigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PageNavigator */ "./src/PageNavigator.tsx");




var TabDesignerComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabDesignerComponent, _super);
    function TabDesignerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.denyUpdate = function () {
            _this.denyComponentUpdate();
        };
        _this.allowUpdate = function () {
            _this.allowComponentUpdate();
        };
        _this.addDragDropEvents = function () {
            _this.creator.onDragStart.add(_this.denyUpdate);
            _this.creator.onDragEnd.add(_this.allowUpdate);
        };
        _this.clearDragDropEvents = function () {
            _this.creator.onDragStart.remove(_this.denyUpdate);
            _this.creator.onDragEnd.remove(_this.allowUpdate);
        };
        _this.renderedPagesCache = {};
        return _this;
    }
    Object.defineProperty(TabDesignerComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TabDesignerComponent.prototype, "creator", {
        get: function () {
            return this.model.creator;
        },
        enumerable: false,
        configurable: true
    });
    TabDesignerComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.addDragDropEvents();
    };
    TabDesignerComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.clearDragDropEvents();
        _super.prototype.componentWillUnmount.call(this);
    };
    TabDesignerComponent.prototype.getStateElements = function () {
        return [this.model, this.model.survey, this.model.pagesController];
    };
    TabDesignerComponent.prototype.getRenderedPages = function () {
        var _this = this;
        if (this.changedStatePropName !== "pages") {
            this.renderedPagesCache = {};
        }
        var renderedPages = [];
        if (this.creator.pageEditMode !== "bypage") {
            var pages = this.creator.survey.pages;
            pages.forEach(function (page, index) {
                var cachedPage = _this.renderedPagesCache[page.id];
                if (!cachedPage) {
                    cachedPage = _this.createRenderedPage(page, index);
                    _this.renderedPagesCache[page.id] = cachedPage;
                }
                renderedPages.push(cachedPage);
            });
            if (this.model.showNewPage) {
                renderedPages.push(this.renderNewPage("svc-page", this.model.newPage.id + "-ghost-new-page"));
            }
        }
        else {
            var page2Display = this.model.pagesController.page2Display;
            if (!!page2Display) {
                var cachedPage = this.renderedPagesCache[page2Display.id];
                if (!cachedPage) {
                    cachedPage = this.createRenderedPage(page2Display, 0, this.model.newPage === page2Display);
                    this.renderedPagesCache[page2Display.id] = cachedPage;
                }
                renderedPages.push(cachedPage);
            }
        }
        return renderedPages;
    };
    TabDesignerComponent.prototype.createRenderedPage = function (page, index, isGhostPage) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-page", "data-sv-drop-target-page": page.name, "data-sv-drop-target-survey-element": isGhostPage ? "newGhostPage" : page.name, key: page.id + "-" + index }, this.renderPage(page)));
    };
    TabDesignerComponent.prototype.renderNewPage = function (className, key) {
        if (key === void 0) { key = ""; }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { key: key },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className, "data-sv-drop-target-survey-element": "newGhostPage" }, !!this.model.newPage ? this.renderPage(this.model.newPage) : null)));
    };
    TabDesignerComponent.prototype.renderPage = function (pageV) {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement("svc-page", { survey: this.creator.survey, page: pageV, creator: this.creator });
    };
    TabDesignerComponent.prototype.renderElement = function () {
        var _this = this;
        var designerTabClassName = "svc-tab-designer " + this.model.getRootCss();
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-flex-column" }, this.model.isToolboxVisible ? survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement("svc-adaptive-toolbox", { model: this.creator }) : null),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: designerTabClassName, onClick: function () { return _this.model.clickDesigner(); } },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-tab-designer_content" }, this.model.showPlaceholder ? this.renderPlaceHolder() : this.renderTabContent()))));
    };
    TabDesignerComponent.prototype.renderHeader = function (condition) {
        if (!condition)
            return null;
        var survey = this.creator.survey;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-designer-header" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyHeader, { survey: survey }))));
    };
    TabDesignerComponent.prototype.renderPlaceHolder = function () {
        var surveyHeader = this.renderHeader(this.creator.allowEditSurveyTitle && this.creator.showHeaderInEmptySurvey);
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            surveyHeader,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-designer__placeholder-container", "data-sv-drop-target-survey-element": "newGhostPage" },
                this.renderPlaceHolderContent(),
                this.renderNewPage("svc-designer-placeholder-page"))));
    };
    TabDesignerComponent.prototype.renderPlaceHolderContent = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-designer-placeholder-text svc-text svc-text--normal" }, this.model.placeholderText);
    };
    TabDesignerComponent.prototype.renderTabContent = function () {
        var survey = this.creator.survey;
        var surveyHeader = this.renderHeader(this.creator.allowEditSurveyTitle);
        var style = {};
        if (!!survey.width) {
            style.maxWidth = survey.renderedWidth;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: this.model.designerCss, style: style },
                surveyHeader,
                this.getRenderedPages()),
            this.creator.showPageNavigator ?
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-tab-designer__page-navigator" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PageNavigator__WEBPACK_IMPORTED_MODULE_3__.SurveyPageNavigator, { pagesController: this.model.pagesController, pageEditMode: this.model.creator.pageEditMode }))
                : null));
    };
    return TabDesignerComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-designer", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabDesignerComponent, props);
});


/***/ }),

/***/ "./src/tabs/JsonEditorAce.tsx":
/*!************************************!*\
  !*** ./src/tabs/JsonEditorAce.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabJsonEditorAceComponent: () => (/* binding */ TabJsonEditorAceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JsonEditorTextarea */ "./src/tabs/JsonEditorTextarea.tsx");




var TabJsonEditorAceComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabJsonEditorAceComponent, _super);
    function TabJsonEditorAceComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.aceEditorrRef = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        return _this;
    }
    TabJsonEditorAceComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(TabJsonEditorAceComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabJsonEditorAceComponent.prototype.componentDidMount = function () {
        this.model.init(ace.edit(this.aceEditorrRef.current));
    };
    TabJsonEditorAceComponent.prototype.renderElement = function () {
        var errors = react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_3__.TabJsonEditorErrorsComponent, { data: this.model });
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-creator-tab__content" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-json-editor-tab__content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-json-editor-tab__ace-editor", ref: this.aceEditorrRef }),
                errors)));
    };
    return TabJsonEditorAceComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-json-editor-ace", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabJsonEditorAceComponent, props);
});


/***/ }),

/***/ "./src/tabs/JsonEditorTextarea.tsx":
/*!*****************************************!*\
  !*** ./src/tabs/JsonEditorTextarea.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabJsonEditorErrorsComponent: () => (/* binding */ TabJsonEditorErrorsComponent),
/* harmony export */   TabJsonEditorTextareaComponent: () => (/* binding */ TabJsonEditorTextareaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var TabJsonEditorErrorsComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabJsonEditorErrorsComponent, _super);
    function TabJsonEditorErrorsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabJsonEditorErrorsComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(TabJsonEditorErrorsComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabJsonEditorErrorsComponent.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-json-editor-tab__errros_list", style: { display: this.model.hasErrors ? "block" : "none" } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.List, { model: this.model.errorList }));
    };
    return TabJsonEditorErrorsComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

var TabJsonEditorTextareaComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabJsonEditorTextareaComponent, _super);
    function TabJsonEditorTextareaComponent(props) {
        return _super.call(this, props) || this;
    }
    TabJsonEditorTextareaComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(TabJsonEditorTextareaComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabJsonEditorTextareaComponent.prototype.renderElement = function () {
        var _this = this;
        var setControl = function (el) {
            _this.model.textElement = el;
        };
        var errors = react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabJsonEditorErrorsComponent, { data: this.model });
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-creator-tab__content" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-json-editor-tab__content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", { ref: function (input) { return (setControl(input)); }, className: "svc-json-editor-tab__content-area", value: this.model.text, onChange: function (e) {
                        return (_this.model.text = e.target.value);
                    }, onKeyDown: function (e) { return _this.model.checkKey(e, e); }, disabled: this.model.readOnly, "aria-label": this.model.ariaLabel }),
                errors)));
    };
    return TabJsonEditorTextareaComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-json-editor-textarea", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabJsonEditorTextareaComponent, props);
});


/***/ }),

/***/ "./src/tabs/JsonErrorItem.tsx":
/*!************************************!*\
  !*** ./src/tabs/JsonErrorItem.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var ItemTemplateComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ItemTemplateComponent, _super);
    function ItemTemplateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemTemplateComponent.prototype.render = function () {
        var item = this.props.item;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: item.iconName, iconSize: item.iconSize, className: "svc-json-error__icon" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-json-error__container" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-json-error__title" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { key: 2 }, this.renderLocString(item.locTitle, undefined, "locString"))),
                this.renderFixButton())));
    };
    ItemTemplateComponent.prototype.renderFixButton = function () {
        if (!this.props.item.data.showFixButton)
            return null;
        var item = this.props.item;
        return ((0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { type: "button", onClick: function (event) { event.stopPropagation(); item.data.fixError(); }, title: item.data.fixButtonTitle, className: "svc-json-error__fix-button" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: item.data.fixButtonIcon, size: "auto" }))));
    };
    return ItemTemplateComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));
survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("json-error-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ItemTemplateComponent, props);
});


/***/ }),

/***/ "./src/tabs/Logic.tsx":
/*!****************************!*\
  !*** ./src/tabs/Logic.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabLogicAddButtonComponent: () => (/* binding */ TabLogicAddButtonComponent),
/* harmony export */   TabLogicComponent: () => (/* binding */ TabLogicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var TabLogicAddButtonComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabLogicAddButtonComponent, _super);
    function TabLogicAddButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabLogicAddButtonComponent.prototype, "model", {
        get: function () {
            return this.props.button;
        },
        enumerable: false,
        configurable: true
    });
    TabLogicAddButtonComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabLogicAddButtonComponent.prototype.renderElement = function () {
        var _this = this;
        var buttonClassName = "svc-logic-tab__content-action svc-btn" + ((this.model.enabled !== undefined && !this.model.enabled) ? " svc-logic-tab__content-action--disabled" : "");
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { role: "button", onClick: function (e) {
                e.stopPropagation();
                _this.model.action();
            }, className: buttonClassName, title: this.model.title },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-text svc-text--normal svc-text--bold" }, this.model.title)));
    };
    return TabLogicAddButtonComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-logic-add-button", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabLogicAddButtonComponent, props);
});
var TabLogicComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabLogicComponent, _super);
    function TabLogicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabLogicComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabLogicComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabLogicComponent.prototype.renderElement = function () {
        var logic = this.model;
        var rootClass = "svc-creator-tab__content";
        var content = this.renderViewContent();
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: rootClass }, content);
    };
    TabLogicComponent.prototype.renderViewContent = function () {
        var logicTabClassName = "svc-plugin-tab__content svc-logic-tab__content " + (this.model.hasItems ? "" : "svc-logic-tab__empty");
        var addLogic = !this.model.readOnly ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabLogicAddButtonComponent, { button: this.model.addNewButton }) : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: logicTabClassName },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Survey, { model: this.model.itemsSurvey }),
                this.model.hasItems ? null : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-logic-tab__content-empty" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-text" }, this.model.emptyTabPlaceholder))),
                addLogic)));
    };
    return TabLogicComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-logic", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabLogicComponent, props);
});


/***/ }),

/***/ "./src/tabs/Preview.tsx":
/*!******************************!*\
  !*** ./src/tabs/Preview.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabPreviewSurveyComponent: () => (/* binding */ TabPreviewSurveyComponent),
/* harmony export */   TabPreviewTestSurveyAgainComponent: () => (/* binding */ TabPreviewTestSurveyAgainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SurveySimulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SurveySimulator */ "./src/tabs/SurveySimulator.tsx");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Results */ "./src/Results.tsx");





var TabPreviewTestSurveyAgainComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabPreviewTestSurveyAgainComponent, _super);
    function TabPreviewTestSurveyAgainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabPreviewTestSurveyAgainComponent.prototype, "model", {
        get: function () {
            return this.props.model.testAgainAction;
        },
        enumerable: false,
        configurable: true
    });
    TabPreviewTestSurveyAgainComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabPreviewTestSurveyAgainComponent.prototype.renderElement = function () {
        var _this = this;
        var buttonClassName = "svc-preview__test-again svc-btn";
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { role: "button", onClick: function (e) {
                e.stopPropagation();
                _this.model.action();
            }, className: buttonClassName, title: this.model.title },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-text svc-text--normal svc-text--bold" }, this.model.title)));
    };
    return TabPreviewTestSurveyAgainComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-complete-page", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabPreviewTestSurveyAgainComponent, props);
});
var TabPreviewSurveyComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabPreviewSurveyComponent, _super);
    function TabPreviewSurveyComponent(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TabPreviewSurveyComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabPreviewSurveyComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabPreviewSurveyComponent.prototype.renderElement = function () {
        var tabContentClassName = "svc-creator-tab__content svc-test-tab__content" + (this.model.isPageToolbarVisible ? " svc-creator-tab__content--with-toolbar" : "");
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: tabContentClassName },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-plugin-tab__content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SurveySimulator__WEBPACK_IMPORTED_MODULE_3__.SurveySimulator, { model: this.model.simulator }),
                this.model.showResults ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Results__WEBPACK_IMPORTED_MODULE_4__.SurveyResults, { survey: this.model.simulator.survey }) : null),
            this.getBottomToolbar()));
    };
    TabPreviewSurveyComponent.prototype.getBottomToolbar = function () {
        if (this.model.isPageToolbarVisible) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-test-tab__content-actions" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyActionBar, { model: this.model.pages })));
        }
        else {
            return null;
        }
    };
    return TabPreviewSurveyComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-test", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabPreviewSurveyComponent, props);
});


/***/ }),

/***/ "./src/tabs/SurveySimulator.tsx":
/*!**************************************!*\
  !*** ./src/tabs/SurveySimulator.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveySimulator: () => (/* binding */ SurveySimulator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var SurveySimulator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveySimulator, _super);
    function SurveySimulator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveySimulator.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SurveySimulator.prototype.getStateElement = function () {
        return this.model;
    };
    SurveySimulator.prototype.renderElement = function () {
        var _this = this;
        var mainSimulatorClass = this.model.getRootCss();
        if (!this.model.survey) {
            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: mainSimulatorClass });
        }
        if (this.model.hasFrame) {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: mainSimulatorClass, onKeyDown: function (e) { return _this.model.tryToZoom(e, e); }, onMouseEnter: this.model.device === "desktop" ? null : this.model.activateZoom, onMouseLeave: this.model.device === "desktop" ? null : this.model.deactivateZoom },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svd-simulator-wrapper", id: "svd-simulator-wrapper", style: {
                        width: this.model.simulatorFrame.frameWidth + "px",
                        height: this.model.simulatorFrame.frameHeight + "px"
                    } },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svd-simulator", style: {
                            width: this.model.simulatorFrame.deviceWidth + "px",
                            height: this.model.simulatorFrame.deviceHeight + "px",
                            transform: "scale(" +
                                this.model.simulatorFrame.scale +
                                ") translate(-50%, -50%)"
                        } },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svd-simulator-content" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.Survey, { model: this.model.survey }))))));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: mainSimulatorClass },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "svd-simulator-content" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.Survey, { model: this.model.survey }))));
        }
    };
    return SurveySimulator;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "./src/tabs/Theme.tsx":
/*!****************************!*\
  !*** ./src/tabs/Theme.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabThemeSurveyComponent: () => (/* binding */ TabThemeSurveyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SurveySimulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SurveySimulator */ "./src/tabs/SurveySimulator.tsx");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Results */ "./src/Results.tsx");





var TabThemeSurveyComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabThemeSurveyComponent, _super);
    function TabThemeSurveyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabThemeSurveyComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabThemeSurveyComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabThemeSurveyComponent.prototype.renderElement = function () {
        var tabContentClassName = "svc-creator-tab__content svc-test-tab__content" + (this.model.isPageToolbarVisible ? " svc-creator-tab__content--with-toolbar" : "");
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: tabContentClassName },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-plugin-tab__content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SurveySimulator__WEBPACK_IMPORTED_MODULE_3__.SurveySimulator, { model: this.model.simulator }),
                this.model.showResults ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Results__WEBPACK_IMPORTED_MODULE_4__.SurveyResults, { survey: this.model.simulator.survey }) : null),
            this.getBottomToolbar()));
    };
    TabThemeSurveyComponent.prototype.getBottomToolbar = function () {
        if (this.model.isPageToolbarVisible) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-test-tab__content-actions" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyActionBar, { model: this.model.pages })));
        }
        else {
            return null;
        }
    };
    return TabThemeSurveyComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-theme", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabThemeSurveyComponent, props);
});


/***/ }),

/***/ "./src/tabs/logic-operator.tsx":
/*!*************************************!*\
  !*** ./src/tabs/logic-operator.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLogicOpertor: () => (/* binding */ SurveyLogicOpertor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_4__);





var SurveyLogicOpertor = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyLogicOpertor, _super);
    function SurveyLogicOpertor(props) {
        return _super.call(this, props) || this;
    }
    SurveyLogicOpertor.prototype.renderInput = function () {
        var q = this.question;
        (0,survey_creator_core__WEBPACK_IMPORTED_MODULE_3__.initLogicOperator)(q);
        var text = (q.selectedItemLocText) ? this.renderLocString(q.selectedItemLocText) : "";
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: this.question.inputId, className: q.getControlClass(), tabIndex: this.question.isInputReadOnly ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isInputReadOnly, required: this.question.isRequired, onChange: this.updateValueOnEvent, onInput: this.updateValueOnEvent, onKeyUp: this.keyhandler, role: this.question.ariaRole, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-describedby": this.question.ariaDescribedBy },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.question.cssClasses.controlValue },
                text,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, q.readOnlyText)),
            this.createClearButton()));
    };
    return SurveyLogicOpertor;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.SurveyQuestionDropdown));

survey_react_ui__WEBPACK_IMPORTED_MODULE_4__.ReactQuestionFactory.Instance.registerQuestion("sv-logic-operator", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyLogicOpertor, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory.Instance.registerRenderer("dropdown", "logicoperator", "sv-logic-operator");


/***/ }),

/***/ "./src/tabs/translation/TranslateFromAction.tsx":
/*!******************************************************!*\
  !*** ./src/tabs/translation/TranslateFromAction.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateFromAction: () => (/* binding */ TranslateFromAction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var TranslateFromAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TranslateFromAction, _super);
    function TranslateFromAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TranslateFromAction.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    TranslateFromAction.prototype.getStateElement = function () {
        return this.item;
    };
    TranslateFromAction.prototype.renderElement = function () {
        var item = this.item;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: item.data.containerCss },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: item.data.additionalTitleCss }, item.data.additionalTitle),
            survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement("sv-action-bar-item-dropdown", { item: this.item })));
    };
    return TranslateFromAction;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-translate-from-action", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TranslateFromAction, props);
});


/***/ }),

/***/ "./src/tabs/translation/Translation.tsx":
/*!**********************************************!*\
  !*** ./src/tabs/translation/Translation.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabTranslationComponent: () => (/* binding */ TabTranslationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var TabTranslationComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TabTranslationComponent, _super);
    function TabTranslationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabTranslationComponent.prototype, "model", {
        get: function () {
            return this.props.data || this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    TabTranslationComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabTranslationComponent.prototype.renderElement = function () {
        if (!this.model)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-creator-tab__content svc-translation-tab" }, this.renderElementContent()));
    };
    TabTranslationComponent.prototype.renderElementContent = function () {
        if (this.model.isEmpty) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "st-no-strings" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, this.model.noStringsText)));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "st-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-flex-column st-strings-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-flex-row st-strings-header" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Survey, { model: this.model.stringsHeaderSurvey })),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-flex-row svc-plugin-tab__content st-strings" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Survey, { model: this.model.stringsSurvey })))));
        }
    };
    return TabTranslationComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-tab-translation", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TabTranslationComponent, props);
});


/***/ }),

/***/ "./src/tabs/translation/TranslationLineSkeleton.tsx":
/*!**********************************************************!*\
  !*** ./src/tabs/translation/TranslationLineSkeleton.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationLineSkeleton: () => (/* binding */ TranslationLineSkeleton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);



var TranslationLineSkeleton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TranslationLineSkeleton, _super);
    function TranslationLineSkeleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslationLineSkeleton.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "sd-translation-line-skeleton" }));
    };
    return TranslationLineSkeleton;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component)));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sd-translation-line-skeleton", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TranslationLineSkeleton, props);
});


/***/ }),

/***/ "./src/toolbox/AdaptiveToolbox.tsx":
/*!*****************************************!*\
  !*** ./src/toolbox/AdaptiveToolbox.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveToolbox: () => (/* binding */ AdaptiveToolbox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toolbox */ "./src/toolbox/Toolbox.tsx");
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToolboxItem */ "./src/toolbox/ToolboxItem.tsx");
/* harmony import */ var src_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/Search */ "./src/Search.tsx");







var AdaptiveToolbox = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AdaptiveToolbox, _super);
    function AdaptiveToolbox(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        return _this;
    }
    AdaptiveToolbox.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var container = this.rootRef.current;
        this.toolbox.setRootElement(container);
        if (!container)
            return;
        this.manager = new survey_core__WEBPACK_IMPORTED_MODULE_2__.VerticalResponsivityManager(this.toolbox.containerElement, this.toolbox, this.toolbox.itemSelector, null, undefined, function (callback) { return setTimeout(callback); });
    };
    AdaptiveToolbox.prototype.componentWillUnmount = function () {
        this.manager && (this.manager.dispose());
        _super.prototype.componentWillUnmount.call(this);
    };
    AdaptiveToolbox.prototype.renderSearch = function () {
        var searchButton = this.toolbox.isCompactRendered ?
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_5__.SurveyCreatorToolboxTool, { item: this.toolbox.searchItem, creator: this.creator, parentModel: this.toolbox, isCompact: this.toolbox.isCompactRendered, key: "searchitem" }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__category-separator svc-toolbox__category-separator--search" })) :
            null;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__search-container" },
            searchButton,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(src_Search__WEBPACK_IMPORTED_MODULE_6__.SearchComponent, { model: this.toolbox.searchManager })));
    };
    AdaptiveToolbox.prototype.render = function () {
        var _this = this;
        if (!this.toolbox.hasActions)
            return null;
        var search = this.toolbox.showSearch ? this.renderSearch() : null;
        var placeholder = this.toolbox.showPlaceholder ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__placeholder" }, this.toolbox.toolboxNoResultsFound) : null;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { ref: this.rootRef, className: this.toolbox.classNames },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { onBlur: function (e) { return _this.toolbox.focusOut(e); }, className: "svc-toolbox__panel" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__scroller", onScroll: function (event) { return _this.toolbox.onScroll(_this.toolbox, event); } },
                    search,
                    placeholder,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__container" }, (this.toolbox.showInSingleCategory) ?
                        (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__category" }, this.renderItems(this.toolbox.renderedActions, this.toolbox.isCompactRendered)))
                        : this.renderCategories())))));
    };
    return AdaptiveToolbox;
}(_Toolbox__WEBPACK_IMPORTED_MODULE_4__.Toolbox));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-adaptive-toolbox", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AdaptiveToolbox, props);
});


/***/ }),

/***/ "./src/toolbox/Toolbox.tsx":
/*!*********************************!*\
  !*** ./src/toolbox/Toolbox.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toolbox: () => (/* binding */ Toolbox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolboxItem */ "./src/toolbox/ToolboxItem.tsx");
/* harmony import */ var _ToolboxCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolboxCategory */ "./src/toolbox/ToolboxCategory.tsx");





var Toolbox = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Toolbox, _super);
    function Toolbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Toolbox.prototype, "creator", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Toolbox.prototype, "toolbox", {
        get: function () {
            return this.creator.toolbox;
        },
        enumerable: false,
        configurable: true
    });
    Toolbox.prototype.getStateElement = function () {
        return this.toolbox;
    };
    Toolbox.prototype.render = function () {
        if (!this.toolbox.hasActions)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__container" }, (this.toolbox.categories.length == 1 || !this.toolbox.showCategoryTitles) ?
                (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__category" }, this.renderItems(this.toolbox.visibleActions)))
                : this.renderCategories())));
    };
    Toolbox.prototype.renderItems = function (items, isCompact) {
        var _this = this;
        if (isCompact === void 0) { isCompact = false; }
        var result = [];
        items.forEach(function (item, itemIndex) {
            var tool = react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_3__.SurveyCreatorToolboxTool, { item: item, creator: _this.creator, parentModel: _this.toolbox, isCompact: isCompact, key: "item" + itemIndex });
            result.push(tool);
        });
        return result;
    };
    Toolbox.prototype.renderCategories = function () {
        var _this = this;
        return this.toolbox.categories.map(function (category, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ToolboxCategory__WEBPACK_IMPORTED_MODULE_4__.SurveyCreatorToolboxCategory, { category: category, toolbox: _this.toolbox, key: "category" + index });
        });
    };
    return Toolbox;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-toolbox", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Toolbox, props);
});


/***/ }),

/***/ "./src/toolbox/ToolboxCategory.tsx":
/*!*****************************************!*\
  !*** ./src/toolbox/ToolboxCategory.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreatorToolboxCategory: () => (/* binding */ SurveyCreatorToolboxCategory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolboxItem */ "./src/toolbox/ToolboxItem.tsx");




var SurveyCreatorToolboxCategory = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyCreatorToolboxCategory, _super);
    function SurveyCreatorToolboxCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyCreatorToolboxCategory.prototype, "category", {
        get: function () {
            return this.props.category;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxCategory.prototype, "toolbox", {
        get: function () {
            return this.props.toolbox;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxCategory.prototype, "class", {
        get: function () {
            return "svc-toolbox__category" +
                (this.category.collapsed ? " svc-toolbox__category--collapsed" : "") +
                (this.category.empty ? " svc-toolbox__category--empty" : "");
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxCategory.prototype.getStateElement = function () {
        return this.category;
    };
    SurveyCreatorToolboxCategory.prototype.render = function () {
        var header = this.renderCategoryHeader();
        var items = this.renderCategoryContent();
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: this.class, key: this.category.name },
            header,
            items));
    };
    SurveyCreatorToolboxCategory.prototype.renderCategoryHeader = function () {
        var _this = this;
        var className = "svc-toolbox__category-header";
        if (this.toolbox.canCollapseCategories) {
            className += " svc-toolbox__category-header--collapsed";
        }
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className, onClick: function (e) { return _this.category.toggleState(); } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-toolbox__category-title" }, this.category.title),
            this.renderButton()));
    };
    SurveyCreatorToolboxCategory.prototype.renderButton = function () {
        if (!this.toolbox.canCollapseCategories)
            return null;
        var iconName = this.category.collapsed ? "arrow-down" : "arrow-up";
        var suffixName = this.category.collapsed ? "expand" : "collapse";
        var svgIconClassName = "svc-toolbox__category-header__button svc-string-editor__button--" + suffixName;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__category-header__controls" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: svgIconClassName, iconName: "icon-" + iconName, size: 24 })));
    };
    SurveyCreatorToolboxCategory.prototype.renderCategoryContent = function () {
        return this.renderItems(this.category.items);
    };
    SurveyCreatorToolboxCategory.prototype.renderItems = function (items, isCompact) {
        var _this = this;
        if (isCompact === void 0) { isCompact = false; }
        return items.map(function (item, itemIndex) {
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_3__.SurveyCreatorToolboxTool, { item: item, creator: _this.toolbox.creator, parentModel: _this.toolbox, isCompact: isCompact, key: "item" + itemIndex });
        });
    };
    return SurveyCreatorToolboxCategory;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-toolbox-category", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyCreatorToolboxCategory, props);
});


/***/ }),

/***/ "./src/toolbox/ToolboxItem.tsx":
/*!*************************************!*\
  !*** ./src/toolbox/ToolboxItem.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreatorToolboxItem: () => (/* binding */ SurveyCreatorToolboxItem),
/* harmony export */   SurveyCreatorToolboxTool: () => (/* binding */ SurveyCreatorToolboxTool)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");





var SurveyCreatorToolboxTool = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyCreatorToolboxTool, _super);
    function SurveyCreatorToolboxTool(props) {
        return _super.call(this, props) || this;
    }
    SurveyCreatorToolboxTool.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.ToolboxToolViewModel(props.item, props.creator, props.parentModel);
    };
    SurveyCreatorToolboxTool.prototype.getUpdatedModelProps = function () {
        return ["creator", "item"];
    };
    Object.defineProperty(SurveyCreatorToolboxTool.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxTool.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxTool.prototype, "isCompact", {
        get: function () {
            return this.props.isCompact;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxTool.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyCreatorToolboxTool.prototype.render = function () {
        var _this = this;
        var item = this.item;
        var itemComponent = survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement(item.component || "svc-toolbox-item", {
            item: item,
            creator: this.creator,
            parentModel: this.creator.toolbox,
            isCompact: this.isCompact
        });
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: item.css, key: item.id },
            (item.needSeparator && !this.creator.toolbox.showCategoryTitles) ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__category-separator" })) : null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "sv-action__content", onPointerDown: function (event) {
                    event.persist();
                    _this.model.onPointerDown(event);
                }, onMouseOver: function (event) {
                    _this.model.onMouseOver(item, event);
                }, onMouseLeave: function (event) {
                    _this.model.onMouseLeave(item, event);
                } }, itemComponent)));
    };
    return SurveyCreatorToolboxTool;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

var SurveyCreatorToolboxItem = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyCreatorToolboxItem, _super);
    function SurveyCreatorToolboxItem(props) {
        return _super.call(this, props) || this;
    }
    SurveyCreatorToolboxItem.prototype.createModel = function (props) {
        var toolboxItem = props.item;
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.ToolboxToolViewModel(toolboxItem, props.creator, props.parentModel);
    };
    SurveyCreatorToolboxItem.prototype.getUpdatedModelProps = function () {
        return ["creator", "item"];
    };
    Object.defineProperty(SurveyCreatorToolboxItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItem.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxItem.prototype.getStateElement = function () {
        return this.model;
    };
    SurveyCreatorToolboxItem.prototype.render = function () {
        var _this = this;
        return (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "svc-toolbox__item " + this.item.className, tabIndex: 0, role: "button", "aria-label": this.item.tooltip, title: this.item.tooltip, onClick: function (event) {
                event.persist();
                _this.model.click(event);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-toolbox__item-container" }, !!this.item.iconName ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 24, iconName: this.item.iconName, title: this.item.tooltip }) : null),
            (this.props.isCompact ?
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-toolbox__item-banner svc-item__banner" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { size: 24, iconName: this.item.iconName, className: "svc-toolbox__item-icon", title: this.item.tooltip }),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-toolbox__item-title" }, this.item.title))
                :
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "svc-toolbox__item-title" }, this.item.title))));
    };
    return SurveyCreatorToolboxItem;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_4__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("svc-toolbox-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyCreatorToolboxItem, props);
});


/***/ }),

/***/ "./src/toolbox/ToolboxItemGroup.tsx":
/*!******************************************!*\
  !*** ./src/toolbox/ToolboxItemGroup.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreatorToolboxItemGroup: () => (/* binding */ SurveyCreatorToolboxItemGroup)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModelElement */ "./src/ModelElement.tsx");
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolboxItem */ "./src/toolbox/ToolboxItem.tsx");





var SurveyCreatorToolboxItemGroup = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SurveyCreatorToolboxItemGroup, _super);
    function SurveyCreatorToolboxItemGroup(props) {
        return _super.call(this, props) || this;
    }
    SurveyCreatorToolboxItemGroup.prototype.getUpdatedModelProps = function () {
        return ["creator", "item"];
    };
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "isCompact", {
        get: function () {
            return this.props.isCompact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "parentModel", {
        get: function () {
            return this.props.parentModel;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxItemGroup.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyCreatorToolboxItemGroup.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_4__.SurveyCreatorToolboxItem, { item: this.item, creator: this.creator, parentModel: this.parentModel, isCompact: this.isCompact }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.Popup, { model: this.item.popupModel, getArea: this.item.getArea }));
    };
    return SurveyCreatorToolboxItemGroup;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_3__.CreatorModelElement));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-toolbox-item-group", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SurveyCreatorToolboxItemGroup, props);
});


/***/ }),

/***/ "./src/toolbox/ToolboxList.tsx":
/*!*************************************!*\
  !*** ./src/toolbox/ToolboxList.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolboxList: () => (/* binding */ ToolboxList)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/entries/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react-ui */ "survey-react-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolboxItem */ "./src/toolbox/ToolboxItem.tsx");




var ToolboxList = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ToolboxList, _super);
    function ToolboxList(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(ToolboxList.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToolboxList.prototype, "toolbox", {
        get: function () {
            return this.props.toolbox;
        },
        enumerable: false,
        configurable: true
    });
    ToolboxList.prototype.getStateElement = function () {
        return this.model;
    };
    ToolboxList.prototype.render = function () {
        if (!this.model || !this.model.renderElements)
            return null;
        var items = this.renderItems();
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: this.model.cssClasses.root }, items));
    };
    ToolboxList.prototype.renderItems = function () {
        var _this = this;
        var items = this.model.renderedActions;
        return items.map(function (item, itemIndex) {
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_3__.SurveyCreatorToolboxTool, { item: item, creator: _this.toolbox.creator, parentModel: _this.model, isCompact: false, key: "item" + itemIndex });
        });
    };
    return ToolboxList;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

survey_react_ui__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("svc-toolbox-list", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ToolboxList, props);
});


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ }),

/***/ "survey-creator-core":
/*!********************************************************************************************************************************************!*\
  !*** external {"root":"SurveyCreatorCore","commonjs2":"survey-creator-core","commonjs":"survey-creator-core","amd":"survey-creator-core"} ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_creator_core__;

/***/ }),

/***/ "survey-react-ui":
/*!**************************************************************************************************************************!*\
  !*** external {"root":"SurveyReact","commonjs2":"survey-react-ui","commonjs":"survey-react-ui","amd":"survey-react-ui"} ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_react_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/entries/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* reexport safe */ _ActionButton__WEBPACK_IMPORTED_MODULE_33__.ActionButton),
/* harmony export */   AdaptiveToolbox: () => (/* reexport safe */ _toolbox_AdaptiveToolbox__WEBPACK_IMPORTED_MODULE_27__.AdaptiveToolbox),
/* harmony export */   CellQuestionAdornerComponent: () => (/* reexport safe */ _adorners_CellQuestion__WEBPACK_IMPORTED_MODULE_10__.CellQuestionAdornerComponent),
/* harmony export */   CellQuestionDropdownAdornerComponent: () => (/* reexport safe */ _adorners_CellQuestionDropdown__WEBPACK_IMPORTED_MODULE_11__.CellQuestionDropdownAdornerComponent),
/* harmony export */   CreatorSurveyPageComponent: () => (/* reexport safe */ _adorners_Page__WEBPACK_IMPORTED_MODULE_12__.CreatorSurveyPageComponent),
/* harmony export */   ImageItemValueAdornerComponent: () => (/* reexport safe */ _ImageItemValueWrapper__WEBPACK_IMPORTED_MODULE_19__.ImageItemValueAdornerComponent),
/* harmony export */   ItemValueAdornerComponent: () => (/* reexport safe */ _ItemValueWrapper__WEBPACK_IMPORTED_MODULE_18__.ItemValueAdornerComponent),
/* harmony export */   LogoImageComponent: () => (/* reexport safe */ _LogoImage__WEBPACK_IMPORTED_MODULE_14__.LogoImageComponent),
/* harmony export */   MatrixCellAdornerComponent: () => (/* reexport safe */ _MatrixCellWrapper__WEBPACK_IMPORTED_MODULE_20__.MatrixCellAdornerComponent),
/* harmony export */   PanelAdornerComponent: () => (/* reexport safe */ _adorners_Panel__WEBPACK_IMPORTED_MODULE_13__.PanelAdornerComponent),
/* harmony export */   PropertyGridComponent: () => (/* reexport safe */ _PropertyGrid__WEBPACK_IMPORTED_MODULE_46__.PropertyGridComponent),
/* harmony export */   PropertyGridEditorCollection: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.PropertyGridEditorCollection),
/* harmony export */   QuestionAdornerComponent: () => (/* reexport safe */ _adorners_Question__WEBPACK_IMPORTED_MODULE_2__.QuestionAdornerComponent),
/* harmony export */   QuestionBanner: () => (/* reexport safe */ _adorners_QuestionBanner__WEBPACK_IMPORTED_MODULE_5__.QuestionBanner),
/* harmony export */   QuestionDropdownAdornerComponent: () => (/* reexport safe */ _adorners_QuestionDropdown__WEBPACK_IMPORTED_MODULE_6__.QuestionDropdownAdornerComponent),
/* harmony export */   QuestionEditorContentComponent: () => (/* reexport safe */ _QuestionEditorContent__WEBPACK_IMPORTED_MODULE_17__.QuestionEditorContentComponent),
/* harmony export */   QuestionImageAdornerComponent: () => (/* reexport safe */ _adorners_QuestionImage__WEBPACK_IMPORTED_MODULE_7__.QuestionImageAdornerComponent),
/* harmony export */   QuestionRatingAdornerComponent: () => (/* reexport safe */ _adorners_QuestionRating__WEBPACK_IMPORTED_MODULE_8__.QuestionRatingAdornerComponent),
/* harmony export */   QuestionWidgetAdornerComponent: () => (/* reexport safe */ _adorners_QuestionWidget__WEBPACK_IMPORTED_MODULE_9__.QuestionWidgetAdornerComponent),
/* harmony export */   QuestionWrapperFooter: () => (/* reexport safe */ _adorners_QuestionFooter__WEBPACK_IMPORTED_MODULE_4__.QuestionWrapperFooter),
/* harmony export */   QuestionWrapperHeader: () => (/* reexport safe */ _adorners_QuestionHeader__WEBPACK_IMPORTED_MODULE_3__.QuestionWrapperHeader),
/* harmony export */   ReactDragEvent: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_44__.ReactDragEvent),
/* harmony export */   ReactMouseEvent: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_44__.ReactMouseEvent),
/* harmony export */   RowWrapper: () => (/* reexport safe */ _adorners_Row__WEBPACK_IMPORTED_MODULE_1__.RowWrapper),
/* harmony export */   SearchComponent: () => (/* reexport safe */ _Search__WEBPACK_IMPORTED_MODULE_47__.SearchComponent),
/* harmony export */   SidebarComponent: () => (/* reexport safe */ _SideBar__WEBPACK_IMPORTED_MODULE_30__.SidebarComponent),
/* harmony export */   StylesManager: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.StylesManager),
/* harmony export */   SurveyCreator: () => (/* reexport safe */ _SurveyCreator__WEBPACK_IMPORTED_MODULE_0__.SurveyCreator),
/* harmony export */   SurveyCreatorComponent: () => (/* reexport safe */ _SurveyCreator__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorComponent),
/* harmony export */   SurveyCreatorToolboxCategory: () => (/* reexport safe */ _toolbox_ToolboxCategory__WEBPACK_IMPORTED_MODULE_24__.SurveyCreatorToolboxCategory),
/* harmony export */   SurveyCreatorToolboxItem: () => (/* reexport safe */ _toolbox_ToolboxItem__WEBPACK_IMPORTED_MODULE_22__.SurveyCreatorToolboxItem),
/* harmony export */   SurveyCreatorToolboxItemGroup: () => (/* reexport safe */ _toolbox_ToolboxItemGroup__WEBPACK_IMPORTED_MODULE_23__.SurveyCreatorToolboxItemGroup),
/* harmony export */   SurveyCreatorToolboxTool: () => (/* reexport safe */ _toolbox_ToolboxItem__WEBPACK_IMPORTED_MODULE_22__.SurveyCreatorToolboxTool),
/* harmony export */   SurveyElementEmbeddedSurvey: () => (/* reexport safe */ _QuestionEmbeddedSurvey__WEBPACK_IMPORTED_MODULE_16__.SurveyElementEmbeddedSurvey),
/* harmony export */   SurveyLocStringEditor: () => (/* reexport safe */ _StringEditor__WEBPACK_IMPORTED_MODULE_34__.SurveyLocStringEditor),
/* harmony export */   SurveyLogic: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.SurveyLogic),
/* harmony export */   SurveyLogicOpertor: () => (/* reexport safe */ _tabs_logic_operator__WEBPACK_IMPORTED_MODULE_35__.SurveyLogicOpertor),
/* harmony export */   SurveyLogicUI: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.SurveyLogicUI),
/* harmony export */   SurveyNavigation: () => (/* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_29__.SurveyNavigation),
/* harmony export */   SurveyQuestionColor: () => (/* reexport safe */ _custom_questions_ColorQuestion__WEBPACK_IMPORTED_MODULE_52__.SurveyQuestionColor),
/* harmony export */   SurveyQuestionEditorDefinition: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.SurveyQuestionEditorDefinition),
/* harmony export */   SurveyQuestionFileEditor: () => (/* reexport safe */ _custom_questions_FileEditQuestion__WEBPACK_IMPORTED_MODULE_53__.SurveyQuestionFileEditor),
/* harmony export */   SurveyQuestionLinkValue: () => (/* reexport safe */ _QuestionLinkValue__WEBPACK_IMPORTED_MODULE_15__.SurveyQuestionLinkValue),
/* harmony export */   SurveyQuestionSpinEditor: () => (/* reexport safe */ _custom_questions_SpinEditor__WEBPACK_IMPORTED_MODULE_50__.SurveyQuestionSpinEditor),
/* harmony export */   SurveyQuestionTextWithReset: () => (/* reexport safe */ _custom_questions_TextWithResetQuestion__WEBPACK_IMPORTED_MODULE_54__.SurveyQuestionTextWithReset),
/* harmony export */   SurveyResults: () => (/* reexport safe */ _Results__WEBPACK_IMPORTED_MODULE_21__.SurveyResults),
/* harmony export */   SurveyResultsByRow: () => (/* reexport safe */ _Results__WEBPACK_IMPORTED_MODULE_21__.SurveyResultsByRow),
/* harmony export */   SurveySimulator: () => (/* reexport safe */ _tabs_SurveySimulator__WEBPACK_IMPORTED_MODULE_43__.SurveySimulator),
/* harmony export */   SwitcherComponent: () => (/* reexport safe */ _Switcher__WEBPACK_IMPORTED_MODULE_48__.SwitcherComponent),
/* harmony export */   TabDesignerComponent: () => (/* reexport safe */ _tabs_Designer__WEBPACK_IMPORTED_MODULE_36__.TabDesignerComponent),
/* harmony export */   TabJsonEditorAceComponent: () => (/* reexport safe */ _tabs_JsonEditorAce__WEBPACK_IMPORTED_MODULE_37__.TabJsonEditorAceComponent),
/* harmony export */   TabJsonEditorErrorsComponent: () => (/* reexport safe */ _tabs_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_38__.TabJsonEditorErrorsComponent),
/* harmony export */   TabJsonEditorTextareaComponent: () => (/* reexport safe */ _tabs_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_38__.TabJsonEditorTextareaComponent),
/* harmony export */   TabLogicAddButtonComponent: () => (/* reexport safe */ _tabs_Logic__WEBPACK_IMPORTED_MODULE_39__.TabLogicAddButtonComponent),
/* harmony export */   TabLogicComponent: () => (/* reexport safe */ _tabs_Logic__WEBPACK_IMPORTED_MODULE_39__.TabLogicComponent),
/* harmony export */   TabPreviewSurveyComponent: () => (/* reexport safe */ _tabs_Preview__WEBPACK_IMPORTED_MODULE_40__.TabPreviewSurveyComponent),
/* harmony export */   TabPreviewTestSurveyAgainComponent: () => (/* reexport safe */ _tabs_Preview__WEBPACK_IMPORTED_MODULE_40__.TabPreviewTestSurveyAgainComponent),
/* harmony export */   TabThemeSurveyComponent: () => (/* reexport safe */ _tabs_Theme__WEBPACK_IMPORTED_MODULE_41__.TabThemeSurveyComponent),
/* harmony export */   TabTranslationComponent: () => (/* reexport safe */ _tabs_translation_Translation__WEBPACK_IMPORTED_MODULE_42__.TabTranslationComponent),
/* harmony export */   TabbedMenuComponent: () => (/* reexport safe */ _TabbedMenu__WEBPACK_IMPORTED_MODULE_28__.TabbedMenuComponent),
/* harmony export */   TabbedMenuItemComponent: () => (/* reexport safe */ _TabbedMenu__WEBPACK_IMPORTED_MODULE_28__.TabbedMenuItemComponent),
/* harmony export */   Toolbox: () => (/* reexport safe */ _toolbox_Toolbox__WEBPACK_IMPORTED_MODULE_25__.Toolbox),
/* harmony export */   ToolboxList: () => (/* reexport safe */ _toolbox_ToolboxList__WEBPACK_IMPORTED_MODULE_26__.ToolboxList),
/* harmony export */   ToolboxToolViewModel: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.ToolboxToolViewModel),
/* harmony export */   TranslateFromAction: () => (/* reexport safe */ _tabs_translation_TranslateFromAction__WEBPACK_IMPORTED_MODULE_32__.TranslateFromAction),
/* harmony export */   TranslationLineSkeleton: () => (/* reexport safe */ _tabs_translation_TranslationLineSkeleton__WEBPACK_IMPORTED_MODULE_31__.TranslationLineSkeleton),
/* harmony export */   Version: () => (/* binding */ Version),
/* harmony export */   editorLocalization: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.editorLocalization),
/* harmony export */   localization: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.localization),
/* harmony export */   settings: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.settings),
/* harmony export */   svgBundle: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_55__.svgBundle)
/* harmony export */ });
/* harmony import */ var _SurveyCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SurveyCreator */ "./src/SurveyCreator.tsx");
/* harmony import */ var _adorners_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adorners/Row */ "./src/adorners/Row.tsx");
/* harmony import */ var _adorners_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adorners/Question */ "./src/adorners/Question.tsx");
/* harmony import */ var _adorners_QuestionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adorners/QuestionHeader */ "./src/adorners/QuestionHeader.tsx");
/* harmony import */ var _adorners_QuestionFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adorners/QuestionFooter */ "./src/adorners/QuestionFooter.tsx");
/* harmony import */ var _adorners_QuestionBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adorners/QuestionBanner */ "./src/adorners/QuestionBanner.tsx");
/* harmony import */ var _adorners_QuestionDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../adorners/QuestionDropdown */ "./src/adorners/QuestionDropdown.tsx");
/* harmony import */ var _adorners_QuestionImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../adorners/QuestionImage */ "./src/adorners/QuestionImage.tsx");
/* harmony import */ var _adorners_QuestionRating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../adorners/QuestionRating */ "./src/adorners/QuestionRating.tsx");
/* harmony import */ var _adorners_QuestionWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../adorners/QuestionWidget */ "./src/adorners/QuestionWidget.tsx");
/* harmony import */ var _adorners_CellQuestion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../adorners/CellQuestion */ "./src/adorners/CellQuestion.tsx");
/* harmony import */ var _adorners_CellQuestionDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../adorners/CellQuestionDropdown */ "./src/adorners/CellQuestionDropdown.tsx");
/* harmony import */ var _adorners_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../adorners/Page */ "./src/adorners/Page.tsx");
/* harmony import */ var _adorners_Panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../adorners/Panel */ "./src/adorners/Panel.tsx");
/* harmony import */ var _LogoImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../LogoImage */ "./src/LogoImage.tsx");
/* harmony import */ var _QuestionLinkValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../QuestionLinkValue */ "./src/QuestionLinkValue.tsx");
/* harmony import */ var _QuestionEmbeddedSurvey__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../QuestionEmbeddedSurvey */ "./src/QuestionEmbeddedSurvey.tsx");
/* harmony import */ var _QuestionEditorContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../QuestionEditorContent */ "./src/QuestionEditorContent.tsx");
/* harmony import */ var _ItemValueWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ItemValueWrapper */ "./src/ItemValueWrapper.tsx");
/* harmony import */ var _ImageItemValueWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ImageItemValueWrapper */ "./src/ImageItemValueWrapper.tsx");
/* harmony import */ var _MatrixCellWrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../MatrixCellWrapper */ "./src/MatrixCellWrapper.tsx");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Results */ "./src/Results.tsx");
/* harmony import */ var _toolbox_ToolboxItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../toolbox/ToolboxItem */ "./src/toolbox/ToolboxItem.tsx");
/* harmony import */ var _toolbox_ToolboxItemGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../toolbox/ToolboxItemGroup */ "./src/toolbox/ToolboxItemGroup.tsx");
/* harmony import */ var _toolbox_ToolboxCategory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../toolbox/ToolboxCategory */ "./src/toolbox/ToolboxCategory.tsx");
/* harmony import */ var _toolbox_Toolbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../toolbox/Toolbox */ "./src/toolbox/Toolbox.tsx");
/* harmony import */ var _toolbox_ToolboxList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../toolbox/ToolboxList */ "./src/toolbox/ToolboxList.tsx");
/* harmony import */ var _toolbox_AdaptiveToolbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../toolbox/AdaptiveToolbox */ "./src/toolbox/AdaptiveToolbox.tsx");
/* harmony import */ var _TabbedMenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../TabbedMenu */ "./src/TabbedMenu.tsx");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../Navigation */ "./src/Navigation.tsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../SideBar */ "./src/SideBar.tsx");
/* harmony import */ var _tabs_translation_TranslationLineSkeleton__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../tabs/translation/TranslationLineSkeleton */ "./src/tabs/translation/TranslationLineSkeleton.tsx");
/* harmony import */ var _tabs_translation_TranslateFromAction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../tabs/translation/TranslateFromAction */ "./src/tabs/translation/TranslateFromAction.tsx");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../ActionButton */ "./src/ActionButton.tsx");
/* harmony import */ var _StringEditor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../StringEditor */ "./src/StringEditor.tsx");
/* harmony import */ var _tabs_logic_operator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../tabs/logic-operator */ "./src/tabs/logic-operator.tsx");
/* harmony import */ var _tabs_Designer__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../tabs/Designer */ "./src/tabs/Designer.tsx");
/* harmony import */ var _tabs_JsonEditorAce__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../tabs/JsonEditorAce */ "./src/tabs/JsonEditorAce.tsx");
/* harmony import */ var _tabs_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../tabs/JsonEditorTextarea */ "./src/tabs/JsonEditorTextarea.tsx");
/* harmony import */ var _tabs_Logic__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../tabs/Logic */ "./src/tabs/Logic.tsx");
/* harmony import */ var _tabs_Preview__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../tabs/Preview */ "./src/tabs/Preview.tsx");
/* harmony import */ var _tabs_Theme__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../tabs/Theme */ "./src/tabs/Theme.tsx");
/* harmony import */ var _tabs_translation_Translation__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../tabs/translation/Translation */ "./src/tabs/translation/Translation.tsx");
/* harmony import */ var _tabs_SurveySimulator__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../tabs/SurveySimulator */ "./src/tabs/SurveySimulator.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../events */ "./src/events.ts");
/* harmony import */ var _ObjectSelector__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../ObjectSelector */ "./src/ObjectSelector.tsx");
/* harmony import */ var _PropertyGrid__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../PropertyGrid */ "./src/PropertyGrid.tsx");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../Search */ "./src/Search.tsx");
/* harmony import */ var _Switcher__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../Switcher */ "./src/Switcher.tsx");
/* harmony import */ var _tabs_JsonErrorItem__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../tabs/JsonErrorItem */ "./src/tabs/JsonErrorItem.tsx");
/* harmony import */ var _custom_questions_SpinEditor__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../custom-questions/SpinEditor */ "./src/custom-questions/SpinEditor.tsx");
/* harmony import */ var _custom_questions_ColorItem__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../custom-questions/ColorItem */ "./src/custom-questions/ColorItem.tsx");
/* harmony import */ var _custom_questions_ColorQuestion__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../custom-questions/ColorQuestion */ "./src/custom-questions/ColorQuestion.tsx");
/* harmony import */ var _custom_questions_FileEditQuestion__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../custom-questions/FileEditQuestion */ "./src/custom-questions/FileEditQuestion.tsx");
/* harmony import */ var _custom_questions_TextWithResetQuestion__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../custom-questions/TextWithResetQuestion */ "./src/custom-questions/TextWithResetQuestion.tsx");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_56__);
var Version;
Version = "".concat("1.11.8");
// import "@survey/creator/survey-creator-core.css";


















































//custom questions













(0,survey_core__WEBPACK_IMPORTED_MODULE_56__.checkLibraryVersion)("".concat("1.11.8"), "survey-creator-react");

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=survey-creator-react.js.map