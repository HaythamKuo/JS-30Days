# Feature

對 Array 的各種常見方法做應用的練習

# Note

1. 這題對`filter()`的應用是找出哪些人活在 16 世紀，算滿簡單的。

2. 這題我有偷吃步哈哈，直接用樣板文字就解決了。

3. 這題是透過`sort()`做排序，從老到年輕，透過 Array 內建的方法總是能輕易獲取結果，前提是數據和篩選條件也要簡單才行...

4. 這題計算那些人年齡是多少並做總和，一開始我先透過`map()`得出每個人享年幾歲，緊接著再使用`reduce()`算出總和。

5. 跟第四題相似，只是這次目的是要排序年齡，因為題目沒有限制是怎麼排序，因此我就直接從老開始。

6. 這題要取得指定網頁中的資料，有沒有含有'de'，擅用 queryselector 方法與`map(), filter()`就能解出來。

7. 這題是對名字做排序，將名字斷開後(透過`split()`)，使用`sort()`自定義排序條件就能得出結果。

8. 對於 reduce()的方法應用還只停留在加加減減，因此對第八題無從下手。
   上網爬了一下文，看到這位大大的[筆記](https://hackmd.io/Z9rZgNC6RhKm0zubfHDiPg?view#%E7%AC%AC%E5%85%AB%E9%A1%8C)，有了基本的了解，也知道如果要使用變數當作物件的屬性應該要更換成`[]`而非`.`，算是長知識了。
   接下來就好辦了，首先初始值要設成空物件，開始遍歷這個陣列，判斷陣列裡的字串是否已存在於物件當中，如果有則加 1；反之將字串當作物件的屬性並賦予 0。直到遍歷完便能獲得結果。
