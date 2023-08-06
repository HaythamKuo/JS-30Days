# Features

- 透過按鍵觸發音檔與特效

# Notes

一開始的想法很簡單就是透過 `dataset` 的屬性遍尋契合的屬性並監聽是哪一個按鍵被觸發，促使事件發生。
但過程中其實滿白癡，忘記音檔是透過`play()`來做觸發，導致一直在找`<audio>`物件的何種屬性是負責播放音檔。

在達到預期效果時發現'keyup', 'keydown'的事件函式重複到，於是嘗試重構程式碼。
在重構的程式碼中除了帶入相似的程式碼之外，另外判斷說是否需要調用其他函式或是只是單純觸發 CSS 特效。
但我相信也有其他更好的寫法，日後有其他想法會回來重新修改。