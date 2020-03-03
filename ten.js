
	function palindrome(num)
	{
		var rem, temp, final = 0;
		var number = num

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
		alert("The inputed number is Palindrome");
		}
		else
		{
		alert("The inputted number is not palindrome");
		}
	}

      palindrome(2002)