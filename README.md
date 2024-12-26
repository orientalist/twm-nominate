# Employee Validation API

## 簡介
此專案是一個簡單的 Node.js API，專門用於驗證員工資訊。API 接受一個包含員工 ID 和姓名的請求，然後檢查該資訊是否存在於本地的 `employee.json` 檔案中。若資料有效，則返回成功信息，否則返回錯誤信息。

## 功能
- 驗證員工 ID 和姓名是否存在於系統中
- 支援 CORS，適合跨域請求
- 返回詳細錯誤信息，幫助使用者進行錯誤排查

## 安裝與使用方式
1. **克隆專案**
   ```bash
   git clone https://github.com/yourusername/employee-validation-api.git
   cd employee-validation-api
   ```

2. **安裝依賴**
   專案目前不需要額外的依賴模組，但需要 Node.js 環境支持。

3. **運行服務**
   由於此程式碼設計為 AWS Lambda 函數，您可以在本地環境中使用 AWS SAM 或類似工具進行測試。您也可以更改程式碼以適應您的運行環境。

4. **測試 API**
   使用工具（如 Postman 或 curl）發送請求：
   ```bash
   curl -X POST https://your-api-endpoint \
        -H "Content-Type: application/json" \
        -d '{"value":"A12345-Victor"}'
   ```

## 必要的依賴模組清單
此專案不依賴第三方模組，但使用了 Node.js 內建模組，包括：
- `fs`
- `path`

## 授權條款
此專案已採用 MIT 許可證。請參閱 [LICENSE](LICENSE) 文件以獲取詳細授權信息。
```

這份 README.md 概述了專案的基本詳細信息，幫助使用者快速理解專案的重要性，如何安裝和使用它，以及相關的依賴和授權信息。