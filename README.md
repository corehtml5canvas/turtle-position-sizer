# turtle-position-sizer
A React App that calculates stop loss and position size according to the Turtle methodology. See [The Complete TurtleTrader](https://www.amazon.com/Complete-TurtleTrader-Investors-Overnight-Millionaires/dp/0061241717) for more information.

The Application calculates stop loss and unit size like this

<p style="font-family: courier">
	Stop Loss = ATR * %ATR/100<br/>
	Stop Level = Share Price - Stop Loss<br/>
	Number of Shares per Unit = (Account Value * Risk per Trade/100) / Stop Loss<br/>
</p>

<img src='./public/app.png'></img>

To run the application

1. Clone the repository

2. In the directory created in step #1 execute the following commands

<div style="margin-left: 50px">
	<p style="font-family: courier">npm install
	<br/>
	<span style="font-family: courier">npm start</span>
	</p>
</div>

3. Access localhost:3000 in a browser
