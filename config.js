/**
 * config.js — 本地敏感設定檔
 *
 * ⚠️  重要保安提示：
 *   - 此檔案包含 Firebase API Key 及教師密碼等敏感資料。
 *   - 請確保此檔案已加入 .gitignore，絕對不要上載至 GitHub 或任何公開倉庫！
 *   - 如需版本控制，請只上載 config.example.js（已移除所有實際憑證）。
 *
 * 使用方法：
 *   1. 將此檔案命名為 config.js 並放於與 index.html 相同的目錄下。
 *   2. 填寫下方各欄位的實際數值。
 *   3. 確認 .gitignore 已包含 config.js。
 */

// ── Firebase 設定 ──────────────────────────────────────────────
// 前往 Firebase Console > 專案設定 > 您的應用程式 取得以下資料
window.__firebase_config = JSON.stringify({
            apiKey: "AIzaSyB8qnI07P2IUxFfwfGygHhHZ02FPH32vNs",
            authDomain: "cyyeung-lms.firebaseapp.com",
            projectId: "cyyeung-lms",
            storageBucket: "cyyeung-lms.firebasestorage.app",
            messagingSenderId: "88426426301",
            appId: "1:88426426301:web:e641824f23979ff118acd4"
});

// ── 應用程式 ID (用作 Firestore 資料路徑的根節點) ──────────────
// 建議使用小寫英文、數字及連字號，例如: "s4-ict-python-2026"
window.APP_ID = "s4-ict-atm-lms";

// ── 教師登入密碼 ───────────────────────────────────────────────
// 請設定一個不易猜測的密碼
window.TEACHER_PASSWORD = "0614";

// ── 主題設定 (多主題功能) ──────────────────────────────────────
// 每個主題對應一個獨立的 Firestore 資料集與任務清單。
// 可依課堂需要增減主題，至少保留一個。
//
// 欄位說明：
//   id        : 唯一識別碼（英文小寫，用作 Firestore 子集合名稱）
//   label     : 顯示在主題選擇頁面的名稱
//   subtitle  : 顯示在頂部導航欄的副標題
//   icon      : 表情符號或 Unicode 圖示
//   color     : Tailwind 色彩名稱 (blue / emerald / indigo / purple / rose / orange / teal)
window.TOPICS = [
  {
    id:       "ATM-Machine",
    label:    "Python programming",
    subtitle: "S4 ICT — Your ATM",
    icon:     "🔐",
    color:    "blue"
  }
  // {
  //   id:       "networking",
  //   label:    "網絡與通訊協議",
  //   subtitle: "S4 ICT — 網絡與通訊協議",
  //   icon:     "🌐",
  //   color:    "emerald"
  // },
  // {
  //   id:       "databases",
  //   label:    "資料庫設計",
  //   subtitle: "S4 ICT — 資料庫設計",
  //   icon:     "🗄️",
  //   color:    "indigo"
  // }
];
