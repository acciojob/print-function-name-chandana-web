//your JS code here. If required.
    var functionName = function() {
      // Get the function name using arguments.callee.name
      var currentFunctionName = arguments.callee.name;

      // Display the function name using an alert statement
      alert('The current function name is: ' + currentFunctionName);
	}