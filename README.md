# turtle-position-sizer
A React App that calculates stop losses and position size according to the Turtle methodology. See [The Complete TurtleTrader](https://www.amazon.com/Complete-TurtleTrader-Investors-Overnight-Millionaires/dp/0061241717) for more information.

<img src='./public/app-1.png'></img>

The Application calculates stop loss and unit size like this

<p style="font-family: courier">
	Stop Loss = Share Price - (ATR * Stop Loss (%ATR))<br/>
	Unit Size = (Account Value * Risk per Trade / 100) / (ATR * Stop Loss (%ATR))
</p>

If you click the editing pencil, you can specify your stop level explicitly, like this.

<img src='./public/app-2.png'></img>

To run the application

1. Clone the repository

2. In the directory created in step #1 execute the following commands

<p style="font-family: courier">npm install
<br/>
<span style="font-family: courier">npm start</span>
</p>

3. Access localhost:3000 in a browser
