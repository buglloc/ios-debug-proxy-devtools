// File is generated by Source/devtools/scripts/CodeGeneratorFrontend.py

// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Inspector.
InspectorBackend.registerInspectorDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Inspector");
InspectorBackend.registerEvent("Inspector.evaluateForTestInFrontend", ["testCallId", "script"]);
InspectorBackend.registerEvent("Inspector.inspect", ["object", "hints"]);
InspectorBackend.registerEvent("Inspector.didCreateWorker", ["id", "url", "isShared"]);
InspectorBackend.registerEvent("Inspector.didDestroyWorker", ["id"]);
InspectorBackend.registerCommand("Inspector.enable", [], [], false);
InspectorBackend.registerCommand("Inspector.disable", [], [], false);

// Memory.
InspectorBackend.registerMemoryDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Memory");
InspectorBackend.registerCommand("Memory.getDOMNodeCount", [], ["domGroups", "strings"], false);

// Page.
InspectorBackend.registerPageDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Page");
InspectorBackend.registerEnum("Page.ResourceType", {Document: "Document", Stylesheet: "Stylesheet", Image: "Image", Font: "Font", Script: "Script", XHR: "XHR", WebSocket: "WebSocket", Other: "Other"});
InspectorBackend.registerEvent("Page.domContentEventFired", ["timestamp"]);
InspectorBackend.registerEvent("Page.loadEventFired", ["timestamp"]);
InspectorBackend.registerEvent("Page.frameNavigated", ["frame"]);
InspectorBackend.registerEvent("Page.frameDetached", ["frameId"]);
InspectorBackend.registerCommand("Page.enable", [], [], false);
InspectorBackend.registerCommand("Page.disable", [], [], false);
InspectorBackend.registerCommand("Page.addScriptToEvaluateOnLoad", [{"name": "scriptSource", "type": "string", "optional": false}], ["identifier"], false);
InspectorBackend.registerCommand("Page.removeScriptToEvaluateOnLoad", [{"name": "identifier", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Page.reload", [{"name": "ignoreCache", "type": "boolean", "optional": true}, {"name": "scriptToEvaluateOnLoad", "type": "string", "optional": true}], [], false);
InspectorBackend.registerCommand("Page.navigate", [{"name": "url", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Page.getCookies", [], ["cookies", "cookiesString"], false);
InspectorBackend.registerCommand("Page.deleteCookie", [{"name": "cookieName", "type": "string", "optional": false}, {"name": "domain", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Page.getResourceTree", [], ["frameTree"], false);
InspectorBackend.registerCommand("Page.getResourceContent", [{"name": "frameId", "type": "string", "optional": false}, {"name": "url", "type": "string", "optional": false}], ["content", "base64Encoded"], false);
InspectorBackend.registerCommand("Page.searchInResource", [{"name": "frameId", "type": "string", "optional": false}, {"name": "url", "type": "string", "optional": false}, {"name": "query", "type": "string", "optional": false}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"], false);
InspectorBackend.registerCommand("Page.searchInResources", [{"name": "text", "type": "string", "optional": false}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"], false);
InspectorBackend.registerCommand("Page.setDocumentContent", [{"name": "frameId", "type": "string", "optional": false}, {"name": "html", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Page.setScreenSizeOverride", [{"name": "width", "type": "number", "optional": false}, {"name": "height", "type": "number", "optional": false}], [], false);

// Runtime.
InspectorBackend.registerRuntimeDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Runtime");
InspectorBackend.registerEnum("Runtime.RemoteObjectType", {Object: "object", Function: "function", Undefined: "undefined", String: "string", Number: "number", Boolean: "boolean"});
InspectorBackend.registerEnum("Runtime.RemoteObjectSubtype", {Array: "array", Null: "null", Node: "node", Regexp: "regexp", Date: "date"});
InspectorBackend.registerCommand("Runtime.evaluate", [{"name": "expression", "type": "string", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "includeCommandLineAPI", "type": "boolean", "optional": true}, {"name": "doNotPauseOnExceptions", "type": "boolean", "optional": true}, {"name": "frameId", "type": "string", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}], ["result", "wasThrown"], false);
InspectorBackend.registerCommand("Runtime.callFunctionOn", [{"name": "objectId", "type": "string", "optional": false}, {"name": "functionDeclaration", "type": "string", "optional": false}, {"name": "arguments", "type": "object", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}], ["result", "wasThrown"], false);
InspectorBackend.registerCommand("Runtime.getProperties", [{"name": "objectId", "type": "string", "optional": false}, {"name": "ownProperties", "type": "boolean", "optional": true}], ["result"], false);
InspectorBackend.registerCommand("Runtime.releaseObject", [{"name": "objectId", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Runtime.releaseObjectGroup", [{"name": "objectGroup", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Runtime.run", [], [], false);

// Console.
InspectorBackend.registerConsoleDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Console");
InspectorBackend.registerEnum("Console.ConsoleMessageSource", {HTML: "html", WML: "wml", XML: "xml", Javascript: "javascript", Network: "network", ConsoleAPI: "console-api", Other: "other"});
InspectorBackend.registerEnum("Console.ConsoleMessageLevel", {Tip: "tip", Log: "log", Warning: "warning", Error: "error", Debug: "debug"});
InspectorBackend.registerEnum("Console.ConsoleMessageType", {Log: "log", Dir: "dir", DirXML: "dirxml", Trace: "trace", StartGroup: "startGroup", StartGroupCollapsed: "startGroupCollapsed", EndGroup: "endGroup", Assert: "assert"});
InspectorBackend.registerEvent("Console.messageAdded", ["message"]);
InspectorBackend.registerEvent("Console.messageRepeatCountUpdated", ["count"]);
InspectorBackend.registerEvent("Console.messagesCleared", []);
InspectorBackend.registerCommand("Console.enable", [], [], false);
InspectorBackend.registerCommand("Console.disable", [], [], false);
InspectorBackend.registerCommand("Console.clearMessages", [], [], false);
InspectorBackend.registerCommand("Console.setMonitoringXHREnabled", [{"name": "enabled", "type": "boolean", "optional": false}], [], false);
InspectorBackend.registerCommand("Console.addInspectedNode", [{"name": "nodeId", "type": "number", "optional": false}], [], false);

// Network.
InspectorBackend.registerNetworkDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Network");
InspectorBackend.registerEnum("Network.InitiatorType", {Parser: "parser", Script: "script", Other: "other"});
InspectorBackend.registerEvent("Network.requestWillBeSent", ["requestId", "frameId", "loaderId", "documentURL", "request", "timestamp", "initiator", "stackTrace", "redirectResponse"]);
InspectorBackend.registerEvent("Network.requestServedFromCache", ["requestId"]);
InspectorBackend.registerEvent("Network.responseReceived", ["requestId", "frameId", "loaderId", "timestamp", "type", "response"]);
InspectorBackend.registerEvent("Network.dataReceived", ["requestId", "timestamp", "dataLength", "encodedDataLength"]);
InspectorBackend.registerEvent("Network.loadingFinished", ["requestId", "timestamp"]);
InspectorBackend.registerEvent("Network.loadingFailed", ["requestId", "timestamp", "errorText", "canceled"]);
InspectorBackend.registerEvent("Network.webSocketWillSendHandshakeRequest", ["requestId", "timestamp", "request"]);
InspectorBackend.registerEvent("Network.webSocketHandshakeResponseReceived", ["requestId", "timestamp", "response"]);
InspectorBackend.registerEvent("Network.webSocketCreated", ["requestId", "url"]);
InspectorBackend.registerEvent("Network.webSocketClosed", ["requestId", "timestamp"]);
InspectorBackend.registerCommand("Network.enable", [], [], false);
InspectorBackend.registerCommand("Network.disable", [], [], false);
InspectorBackend.registerCommand("Network.setUserAgentOverride", [{"name": "userAgent", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Network.setExtraHTTPHeaders", [{"name": "headers", "type": "object", "optional": false}], [], false);
InspectorBackend.registerCommand("Network.getResponseBody", [{"name": "requestId", "type": "string", "optional": false}], ["body", "base64Encoded"], false);
InspectorBackend.registerCommand("Network.canClearBrowserCache", [], ["result"], false);
InspectorBackend.registerCommand("Network.clearBrowserCache", [], [], false);
InspectorBackend.registerCommand("Network.canClearBrowserCookies", [], ["result"], false);
InspectorBackend.registerCommand("Network.clearBrowserCookies", [], [], false);
InspectorBackend.registerCommand("Network.setCacheDisabled", [{"name": "cacheDisabled", "type": "boolean", "optional": false}], [], false);

// Database.
InspectorBackend.registerDatabaseDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Database");
InspectorBackend.registerEvent("Database.addDatabase", ["database"]);
InspectorBackend.registerEvent("Database.sqlTransactionSucceeded", ["transactionId", "columnNames", "values"]);
InspectorBackend.registerEvent("Database.sqlTransactionFailed", ["transactionId", "sqlError"]);
InspectorBackend.registerCommand("Database.enable", [], [], false);
InspectorBackend.registerCommand("Database.disable", [], [], false);
InspectorBackend.registerCommand("Database.getDatabaseTableNames", [{"name": "databaseId", "type": "number", "optional": false}], ["tableNames"], false);
InspectorBackend.registerCommand("Database.executeSQL", [{"name": "databaseId", "type": "number", "optional": false}, {"name": "query", "type": "string", "optional": false}], ["success", "transactionId"], false);

// IndexedDB.
InspectorBackend.registerIndexedDBDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "IndexedDB");
InspectorBackend.registerEvent("IndexedDB.databaseNamesLoaded", ["requestId", "securityOriginWithDatabaseNames"]);
InspectorBackend.registerEvent("IndexedDB.databaseLoaded", ["requestId", "databaseWithObjectStores"]);
InspectorBackend.registerCommand("IndexedDB.enable", [], [], false);
InspectorBackend.registerCommand("IndexedDB.disable", [], [], false);
InspectorBackend.registerCommand("IndexedDB.requestDatabaseNamesForFrame", [{"name": "requestId", "type": "number", "optional": false}, {"name": "frameId", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("IndexedDB.requestDatabase", [{"name": "requestId", "type": "number", "optional": false}, {"name": "frameId", "type": "string", "optional": false}, {"name": "databaseName", "type": "string", "optional": false}], [], false);

// DOMStorage.
InspectorBackend.registerDOMStorageDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOMStorage");
InspectorBackend.registerEvent("DOMStorage.addDOMStorage", ["storage"]);
InspectorBackend.registerEvent("DOMStorage.updateDOMStorage", ["storageId"]);
InspectorBackend.registerCommand("DOMStorage.enable", [], [], false);
InspectorBackend.registerCommand("DOMStorage.disable", [], [], false);
InspectorBackend.registerCommand("DOMStorage.getDOMStorageEntries", [{"name": "storageId", "type": "number", "optional": false}], ["entries"], false);
InspectorBackend.registerCommand("DOMStorage.setDOMStorageItem", [{"name": "storageId", "type": "number", "optional": false}, {"name": "key", "type": "string", "optional": false}, {"name": "value", "type": "string", "optional": false}], ["success"], false);
InspectorBackend.registerCommand("DOMStorage.removeDOMStorageItem", [{"name": "storageId", "type": "number", "optional": false}, {"name": "key", "type": "string", "optional": false}], ["success"], false);

// ApplicationCache.
InspectorBackend.registerApplicationCacheDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "ApplicationCache");
InspectorBackend.registerEvent("ApplicationCache.applicationCacheStatusUpdated", ["frameId", "manifestURL", "status"]);
InspectorBackend.registerEvent("ApplicationCache.networkStateUpdated", ["isNowOnline"]);
InspectorBackend.registerCommand("ApplicationCache.getFramesWithManifests", [], ["frameIds"], false);
InspectorBackend.registerCommand("ApplicationCache.enable", [], [], false);
InspectorBackend.registerCommand("ApplicationCache.getManifestForFrame", [{"name": "frameId", "type": "string", "optional": false}], ["manifestURL"], false);
InspectorBackend.registerCommand("ApplicationCache.getApplicationCacheForFrame", [{"name": "frameId", "type": "string", "optional": false}], ["applicationCache"], false);

// FileSystem.
InspectorBackend.registerFileSystemDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "FileSystem");
InspectorBackend.registerCommand("FileSystem.enable", [], [], false);
InspectorBackend.registerCommand("FileSystem.disable", [], [], false);

// DOM.
InspectorBackend.registerDOMDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOM");
InspectorBackend.registerEvent("DOM.documentUpdated", []);
InspectorBackend.registerEvent("DOM.setChildNodes", ["parentId", "nodes"]);
InspectorBackend.registerEvent("DOM.attributeModified", ["nodeId", "name", "value"]);
InspectorBackend.registerEvent("DOM.attributeRemoved", ["nodeId", "name"]);
InspectorBackend.registerEvent("DOM.inlineStyleInvalidated", ["nodeIds"]);
InspectorBackend.registerEvent("DOM.characterDataModified", ["nodeId", "characterData"]);
InspectorBackend.registerEvent("DOM.childNodeCountUpdated", ["nodeId", "childNodeCount"]);
InspectorBackend.registerEvent("DOM.childNodeInserted", ["parentNodeId", "previousNodeId", "node"]);
InspectorBackend.registerEvent("DOM.childNodeRemoved", ["parentNodeId", "nodeId"]);
InspectorBackend.registerCommand("DOM.getDocument", [], ["root"], false);
InspectorBackend.registerCommand("DOM.requestChildNodes", [{"name": "nodeId", "type": "number", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.querySelector", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.querySelectorAll", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["nodeIds"], false);
InspectorBackend.registerCommand("DOM.setNodeName", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "name", "type": "string", "optional": false}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.setNodeValue", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "value", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.removeNode", [{"name": "nodeId", "type": "number", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.setAttributeValue", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "name", "type": "string", "optional": false}, {"name": "value", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.setAttributesAsText", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "text", "type": "string", "optional": false}, {"name": "name", "type": "string", "optional": true}], [], false);
InspectorBackend.registerCommand("DOM.removeAttribute", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "name", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.getEventListenersForNode", [{"name": "nodeId", "type": "number", "optional": false}], ["listeners"], false);
InspectorBackend.registerCommand("DOM.getOuterHTML", [{"name": "nodeId", "type": "number", "optional": false}], ["outerHTML"], false);
InspectorBackend.registerCommand("DOM.setOuterHTML", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "outerHTML", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.performSearch", [{"name": "query", "type": "string", "optional": false}], ["searchId", "resultCount"], false);
InspectorBackend.registerCommand("DOM.getSearchResults", [{"name": "searchId", "type": "string", "optional": false}, {"name": "fromIndex", "type": "number", "optional": false}, {"name": "toIndex", "type": "number", "optional": false}], ["nodeIds"], false);
InspectorBackend.registerCommand("DOM.discardSearchResults", [{"name": "searchId", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.requestNode", [{"name": "objectId", "type": "string", "optional": false}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.setInspectModeEnabled", [{"name": "enabled", "type": "boolean", "optional": false}, {"name": "highlightConfig", "type": "object", "optional": true}], [], false);
InspectorBackend.registerCommand("DOM.highlightRect", [{"name": "x", "type": "number", "optional": false}, {"name": "y", "type": "number", "optional": false}, {"name": "width", "type": "number", "optional": false}, {"name": "height", "type": "number", "optional": false}, {"name": "color", "type": "object", "optional": true}, {"name": "outlineColor", "type": "object", "optional": true}], [], false);
InspectorBackend.registerCommand("DOM.highlightNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "highlightConfig", "type": "object", "optional": false}], [], false);
InspectorBackend.registerCommand("DOM.hideHighlight", [], [], false);
InspectorBackend.registerCommand("DOM.highlightFrame", [{"name": "frameId", "type": "string", "optional": false}, {"name": "contentColor", "type": "object", "optional": true}, {"name": "contentOutlineColor", "type": "object", "optional": true}], [], false);
InspectorBackend.registerCommand("DOM.pushNodeByPathToFrontend", [{"name": "path", "type": "string", "optional": false}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.resolveNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}], ["object"], false);
InspectorBackend.registerCommand("DOM.getAttributes", [{"name": "nodeId", "type": "number", "optional": false}], ["attributes"], false);
InspectorBackend.registerCommand("DOM.moveTo", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "targetNodeId", "type": "number", "optional": false}, {"name": "insertBeforeNodeId", "type": "number", "optional": true}], ["nodeId"], false);

// CSS.
InspectorBackend.registerCSSDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "CSS");
InspectorBackend.registerEnum("CSS.CSSRuleOrigin", {User: "user", UserAgent: "user-agent", Inspector: "inspector", Regular: "regular"});
InspectorBackend.registerEnum("CSS.CSSPropertyStatus", {Active: "active", Inactive: "inactive", Disabled: "disabled", Style: "style"});
InspectorBackend.registerEnum("CSS.CSSMediaSource", {MediaRule: "mediaRule", ImportRule: "importRule", LinkedSheet: "linkedSheet", InlineSheet: "inlineSheet"});
InspectorBackend.registerEvent("CSS.mediaQueryResultChanged", []);
InspectorBackend.registerCommand("CSS.enable", [], [], false);
InspectorBackend.registerCommand("CSS.disable", [], [], false);
InspectorBackend.registerCommand("CSS.getMatchedStylesForNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "forcedPseudoClasses", "type": "object", "optional": true}, {"name": "includePseudo", "type": "boolean", "optional": true}, {"name": "includeInherited", "type": "boolean", "optional": true}], ["matchedCSSRules", "pseudoElements", "inherited"], false);
InspectorBackend.registerCommand("CSS.getInlineStylesForNode", [{"name": "nodeId", "type": "number", "optional": false}], ["inlineStyle", "styleAttributes"], false);
InspectorBackend.registerCommand("CSS.getComputedStyleForNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "forcedPseudoClasses", "type": "object", "optional": true}], ["computedStyle"], false);
InspectorBackend.registerCommand("CSS.getAllStyleSheets", [], ["headers"], false);
InspectorBackend.registerCommand("CSS.getStyleSheet", [{"name": "styleSheetId", "type": "string", "optional": false}], ["styleSheet"], false);
InspectorBackend.registerCommand("CSS.getStyleSheetText", [{"name": "styleSheetId", "type": "string", "optional": false}], ["text"], false);
InspectorBackend.registerCommand("CSS.setStyleSheetText", [{"name": "styleSheetId", "type": "string", "optional": false}, {"name": "text", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("CSS.setPropertyText", [{"name": "styleId", "type": "object", "optional": false}, {"name": "propertyIndex", "type": "number", "optional": false}, {"name": "text", "type": "string", "optional": false}, {"name": "overwrite", "type": "boolean", "optional": false}], ["style"], false);
InspectorBackend.registerCommand("CSS.toggleProperty", [{"name": "styleId", "type": "object", "optional": false}, {"name": "propertyIndex", "type": "number", "optional": false}, {"name": "disable", "type": "boolean", "optional": false}], ["style"], false);
InspectorBackend.registerCommand("CSS.setRuleSelector", [{"name": "ruleId", "type": "object", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["rule"], false);
InspectorBackend.registerCommand("CSS.addRule", [{"name": "contextNodeId", "type": "number", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["rule"], false);
InspectorBackend.registerCommand("CSS.getSupportedCSSProperties", [], ["cssProperties"], false);
InspectorBackend.registerCommand("CSS.startSelectorProfiler", [], [], false);
InspectorBackend.registerCommand("CSS.stopSelectorProfiler", [], ["profile"], false);

// Timeline.
InspectorBackend.registerTimelineDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Timeline");
InspectorBackend.registerEvent("Timeline.eventRecorded", ["record"]);
InspectorBackend.registerCommand("Timeline.start", [{"name": "maxCallStackDepth", "type": "number", "optional": true}], [], false);
InspectorBackend.registerCommand("Timeline.stop", [], [], false);
InspectorBackend.registerCommand("Timeline.setIncludeMemoryDetails", [{"name": "enabled", "type": "boolean", "optional": false}], [], false);

// Debugger.
InspectorBackend.registerDebuggerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Debugger");
InspectorBackend.registerEnum("Debugger.ScopeType", {Global: "global", Local: "local", With: "with", Closure: "closure", Catch: "catch"});
InspectorBackend.registerEvent("Debugger.globalObjectCleared", []);
InspectorBackend.registerEvent("Debugger.scriptParsed", ["scriptId", "url", "startLine", "startColumn", "endLine", "endColumn", "isContentScript", "sourceMapURL"]);
InspectorBackend.registerEvent("Debugger.scriptFailedToParse", ["url", "scriptSource", "startLine", "errorLine", "errorMessage"]);
InspectorBackend.registerEvent("Debugger.breakpointResolved", ["breakpointId", "location"]);
InspectorBackend.registerEvent("Debugger.paused", ["callFrames", "reason", "data"]);
InspectorBackend.registerEvent("Debugger.resumed", []);
InspectorBackend.registerCommand("Debugger.causesRecompilation", [], ["result"], false);
InspectorBackend.registerCommand("Debugger.supportsNativeBreakpoints", [], ["result"], false);
InspectorBackend.registerCommand("Debugger.enable", [], [], false);
InspectorBackend.registerCommand("Debugger.disable", [], [], false);
InspectorBackend.registerCommand("Debugger.setBreakpointsActive", [{"name": "active", "type": "boolean", "optional": false}], [], false);
InspectorBackend.registerCommand("Debugger.setBreakpointByUrl", [{"name": "lineNumber", "type": "number", "optional": false}, {"name": "url", "type": "string", "optional": true}, {"name": "urlRegex", "type": "string", "optional": true}, {"name": "columnNumber", "type": "number", "optional": true}, {"name": "condition", "type": "string", "optional": true}], ["breakpointId", "locations"], false);
InspectorBackend.registerCommand("Debugger.setBreakpoint", [{"name": "location", "type": "object", "optional": false}, {"name": "condition", "type": "string", "optional": true}], ["breakpointId", "actualLocation"], false);
InspectorBackend.registerCommand("Debugger.removeBreakpoint", [{"name": "breakpointId", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Debugger.continueToLocation", [{"name": "location", "type": "object", "optional": false}], [], false);
InspectorBackend.registerCommand("Debugger.stepOver", [], [], false);
InspectorBackend.registerCommand("Debugger.stepInto", [], [], false);
InspectorBackend.registerCommand("Debugger.stepOut", [], [], false);
InspectorBackend.registerCommand("Debugger.pause", [], [], false);
InspectorBackend.registerCommand("Debugger.resume", [], [], false);
InspectorBackend.registerCommand("Debugger.searchInContent", [{"name": "scriptId", "type": "string", "optional": false}, {"name": "query", "type": "string", "optional": false}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"], false);
InspectorBackend.registerCommand("Debugger.canSetScriptSource", [], ["result"], false);
InspectorBackend.registerCommand("Debugger.setScriptSource", [{"name": "scriptId", "type": "string", "optional": false}, {"name": "scriptSource", "type": "string", "optional": false}, {"name": "preview", "type": "boolean", "optional": true}], ["callFrames", "result"], false);
InspectorBackend.registerCommand("Debugger.getScriptSource", [{"name": "scriptId", "type": "string", "optional": false}], ["scriptSource"], false);
InspectorBackend.registerCommand("Debugger.getFunctionDetails", [{"name": "functionId", "type": "string", "optional": false}], ["details"], false);
InspectorBackend.registerCommand("Debugger.setPauseOnExceptions", [{"name": "state", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("Debugger.evaluateOnCallFrame", [{"name": "callFrameId", "type": "string", "optional": false}, {"name": "expression", "type": "string", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "includeCommandLineAPI", "type": "boolean", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}], ["result", "wasThrown"], false);

// DOMDebugger.
InspectorBackend.registerDOMDebuggerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOMDebugger");
InspectorBackend.registerEnum("DOMDebugger.DOMBreakpointType", {SubtreeModified: "subtree-modified", AttributeModified: "attribute-modified", NodeRemoved: "node-removed"});
InspectorBackend.registerCommand("DOMDebugger.setDOMBreakpoint", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "type", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeDOMBreakpoint", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "type", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOMDebugger.setEventListenerBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeEventListenerBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOMDebugger.setInstrumentationBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeInstrumentationBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOMDebugger.setXHRBreakpoint", [{"name": "url", "type": "string", "optional": false}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeXHRBreakpoint", [{"name": "url", "type": "string", "optional": false}], [], false);

// Profiler.
InspectorBackend.registerProfilerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Profiler");
InspectorBackend.registerEvent("Profiler.addProfileHeader", ["header"]);
InspectorBackend.registerEvent("Profiler.addHeapSnapshotChunk", ["uid", "chunk"]);
InspectorBackend.registerEvent("Profiler.finishHeapSnapshot", ["uid"]);
InspectorBackend.registerEvent("Profiler.setRecordingProfile", ["isProfiling"]);
InspectorBackend.registerEvent("Profiler.resetProfiles", []);
InspectorBackend.registerEvent("Profiler.reportHeapSnapshotProgress", ["done", "total"]);
InspectorBackend.registerCommand("Profiler.causesRecompilation", [], ["result"], false);
InspectorBackend.registerCommand("Profiler.isSampling", [], ["result"], false);
InspectorBackend.registerCommand("Profiler.hasHeapProfiler", [], ["result"], false);
InspectorBackend.registerCommand("Profiler.enable", [], [], false);
InspectorBackend.registerCommand("Profiler.disable", [], [], false);
InspectorBackend.registerCommand("Profiler.start", [], [], false);
InspectorBackend.registerCommand("Profiler.stop", [], [], false);
InspectorBackend.registerCommand("Profiler.getProfileHeaders", [], ["headers"], false);
InspectorBackend.registerCommand("Profiler.getProfile", [{"name": "type", "type": "string", "optional": false}, {"name": "uid", "type": "number", "optional": false}], ["profile"], false);
InspectorBackend.registerCommand("Profiler.removeProfile", [{"name": "type", "type": "string", "optional": false}, {"name": "uid", "type": "number", "optional": false}], [], false);
InspectorBackend.registerCommand("Profiler.clearProfiles", [], [], false);
InspectorBackend.registerCommand("Profiler.takeHeapSnapshot", [], [], false);
InspectorBackend.registerCommand("Profiler.collectGarbage", [], [], false);
InspectorBackend.registerCommand("Profiler.getObjectByHeapObjectId", [{"name": "objectId", "type": "number", "optional": false}], ["result"], false);

// Worker.
InspectorBackend.registerWorkerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Worker");
InspectorBackend.registerEvent("Worker.workerCreated", ["workerId", "url", "inspectorConnected"]);
InspectorBackend.registerEvent("Worker.workerTerminated", ["workerId"]);
InspectorBackend.registerEvent("Worker.dispatchMessageFromWorker", ["workerId", "message"]);
InspectorBackend.registerEvent("Worker.disconnectedFromWorker", []);
InspectorBackend.registerCommand("Worker.setWorkerInspectionEnabled", [{"name": "value", "type": "boolean", "optional": false}], [], false);
InspectorBackend.registerCommand("Worker.sendMessageToWorker", [{"name": "workerId", "type": "number", "optional": false}, {"name": "message", "type": "object", "optional": false}], [], false);
InspectorBackend.registerCommand("Worker.connectToWorker", [{"name": "workerId", "type": "number", "optional": false}], [], false);
InspectorBackend.registerCommand("Worker.disconnectFromWorker", [{"name": "workerId", "type": "number", "optional": false}], [], false);
InspectorBackend.registerCommand("Worker.setAutoconnectToWorkers", [{"name": "value", "type": "boolean", "optional": false}], [], false);

