# Features

本次目標是要利用<canvas>讓網頁充當畫布，並可以使用滑鼠在上面畫出線條。
隨著滑鼠拖移可以讓線條與顏色有不同變化。

# Note

這是本人第一次接觸到<canvas>這個標籤，可以說是相當陌生，因此這一次的筆記是搭配教學服用。

## Canvas 方法

getContext()：此方法可以取得渲染環境來產生或操作顯示內容，裡面的參數可以填 2D 或是 3D，根據自己當下環境做設定。

context.beginPath()方:產生一條路徑，或重置目前的路徑。

context.moveTo():該線的起點座標。

context.lineWidth = number：線條寬度。

context.lineTo(X-End, Y-End)：**lineTo()**:該線的終點座標。

context.lineCap = 'butt'<切平> or 'round'<圓形> or 'square'<方形>：端點樣式。

context.lineJoin = 'bevel'<斜角> or 'round'<圓形> or 'miter'<尖角>：交叉點樣式。

context.strokeStyle = color：線條顏色。

context.stroke()：繪製路徑。

```
const canvas = document.getElementById("draw");
let z = canvas.getContext("2d");
z.beginPath();

z.moveTo(75, 75);

z.lineTo(225, 75);
z.lineTo(75, 225);
z.lineTo(225, 225);

z.lineWidth = 20;

z.lineCap = "round";

z.lineJoin = "round";

z.strokeStyle = "red";

z.stroke();

```

### 圓形方法

test.arc(x,y,r,sAngle,eAngle)

- x:圓心 X 軸座標，往右為正。
- y:圓心 Y 軸座標，往下為正。
- r:圓的半徑。
- sAngle:起始角度。
- eAngle:結束角度。

```
z.beginPath();
z.arc(500, 500, 250, 0, 2 * Math.PI);
z.fillStyle = "blue";
z.fill();
z.lineWidth = 5;
z.strokeStyle = "green";
z.stroke();
```

### 字體方法

- context.strokeText(text,x,y);
- context.fileText(text,x,y);
  text:要呈現的字。
- x:字串左上起始點 X 軸座標。
- y:字串左上起始點 Y 軸座標。

```
const canvas = document.getElementById("draw");
let z = canvas.getContext("2d");
z.beginPath();

//字型, 字體大小
z.font = "100px Arial";

//外框顏色
z.strokeStyle = "black";

//要描繪的句子以及座標
z.strokeText("React So Good", 25, 75);

z.font = "100px Arial";
z.fillStyle = "orange";
z.fillText("React So Good", 25, 225);

```

### 漸層

透過**createLinearGradient()**這方法就能創造漸層
context.createLinearGradient(x0,y0,x1,y1);
x0:漸層起點的 X 軸座標。
y0:漸層起點的 y 軸座標。
x1:漸層終點的 X 軸座標。
y1:漸層終點的 y 軸座標。

> 圓形漸層
> context.createRadialGradient(x0,y0,r0,x1,y1,r1);
> x0:漸層起點圓心的 X 軸座標。
> y0:漸層起點圓心的 y 軸座標。
> r0:漸層起點圓心的半徑大小。
> x1:漸層終點圓心的 X 軸座標。
> y1:漸層終點圓心的 y 軸座標。
> r1:漸層終點圓心的半徑大小。

這裡的 gradient 指向漸層本身
gradient.addColorStop(stop,color);
stop:代表漸層起點到終點間的位置。該值從 0(起點)到 1(終點)。
color:代表漸層在該位置上的顏色。

```
let 漸層 = circle.createLinearGradient(50, 50, 150, 50);

//0~1之間顏色間曾順序為紅色,橘色,黃色
漸層.addColorStop(0, "red");
漸層.addColorStop(0.5, "orange");
漸層.addColorStop(1, "yellow");

circle.fillStyle = 漸層;
circle.fillRect(50, 50, 150, 150);

```

> 圓形漸層範例

```
const canvas = document.getElementById("draw");
let circle = canvas.getContext("2d");
let 漸層 = circle.createLinearGradient(150, 150, 0, 150, 150, 120);

漸層.addColorStop(0, "blue");
漸層.addColorStop(0.25, "green");
漸層.addColorStop(0.5, "yellow");
漸層.addColorStop(0.75, "orange");
漸層.addColorStop(1, "red");

circle.beginPath();
circle.fillStyle = 漸層;
circle.arc(150, 150, 120, 0, 2 * Math.PI);
circle.fill();

```
