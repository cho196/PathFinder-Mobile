// Main Handlers

// Features

export * from "./features/summarize";
export * from "./features/dictionary";

// Database

// Users
export * from "./database/getUserByLogin";
export * from "./database/getUserById";
export * from "./database/addUser";
export * from "./database/updateUserEmail";
export * from "./database/updateUserName";
export * from "./database/deleteUser";

// Settings
export * from "./database/getSetting";
export * from "./database/getSettingByFileId";
export * from "./database/getSettingByUserId";
export * from "./database/addSetting";
export * from "./database/updateSetting";
export * from "./database/deleteSetting";

// Files
export * from "./database/getFile";
export * from "./database/getFilesByFolderId";
export * from "./database/getFilesByUserId";
export * from "./database/addFile";
export * from "./database/updateFile";
export * from "./database/deleteFile";
export * from "./database/deleteFilesByFolderId";

// Folders
export * from "./database/getFolder";
export * from "./database/getFolderByFileId";
export * from "./database/getFoldersByUserId";
export * from "./database/addFolder";
export * from "./database/updateFolder";
export * from "./database/deleteFolder";
export * from "./database/deleteFoldersByUserId";

// Images

// Keywords
export * from "./database/getKeyword";
export * from "./database/getKeywordsByFileId";
export * from "./database/addKeyword";
export * from "./database/updateKeyword";
export * from "./database/deleteKeyword";

// Summary
export * from "./database/getSummary";
export * from "./database/getSummariesByFileId";
export * from "./database/addSummary";
export * from "./database/updateSummary";
export * from "./database/deleteSummary";

// Highlights

export * from "./database/getHighlight";
export * from "./database/getHighlightsByFileId";
export * from "./database/addHighlight";
export * from "./database/updateHighlight";
export * from "./database/deleteHighlight";
