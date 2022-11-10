# turtle-position-sizer
A React App that calculates stop losses and position size according to the Turtle methodology

<img src='./public/app-1.png'></img>

The Application calculates stop loss and unit size like this

<p style="font-family: courier">
	Stop Loss = Share Price - (ATR * Stop Loss (%ATR))<br/>
	Unit Size = (Account Value * Risk per Trade / 100) / (ATR * Stop Loss (%ATR))
</p>

If you click the editing pencil, you can specify your stop level explicitly, like this.

<img src='./public/app-2.png'></img>