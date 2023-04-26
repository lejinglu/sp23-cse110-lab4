# Part2 Answers
<p>question1: 3</p>
<p>question2: 150</p>
<p>question3: 150</p>
<p>question4: the function should returns array of discounted, but it does not show up on the screen, there is nothing, because did not write console.log. </p>
<p>question5: ReferenceError: i is not defined. Because let has block scope, and i is defined within the for loop scope, so cannot be accessed outside of scope</p>
<p>question6: ReferenceError: discountedPrice is not defined. Because declared with let within for loop, let has block scope, cannot be accessed outside of scope</p>
<p>question7: 150</p>
<p>question8: nothing shows up on console, the function should return discounted(array of discounted price)like [ 50, 100, 150 ].</p>
<p>question9: ReferenceError: i is not defined. Because i is declared using let in the for loop, so cannot be accessed outside of scope.</p>
<p>question10: 3</p>
<p>question11: nothing shows up on cosole, but should return array of discounted [ 50, 100, 150 ] </p>
<p>question12: 
<ol>
<p>A: student.name </p>
<p>B: student.'Grad year' </p>
<p>C: student.greeting </p>
<p>D: student.'Favorite Teacher'.name </p>
<p>E: student.courseLoad[0]</p>
</ol>
</p>
<p>question13: Arithmetic
<ol>
<p>A:'32'</p>
<p>B: 1 </p>
<p>C: 3 </p>
<p>D: 3null </p>
<p>E: 4 </p>
<p>F: 0 </p>
<p>G: 3undefined </p>
<p>H: NaN </p>
</ol></p>
<p>question14: Comparison
<ol>
<p>A: true</p>
<p>B: false</p>
<p>C: true </p>
<p>D: false </p>
<p>E: false</p>
<p>F: true</p>
</ol></p>
<p>question15: == is looks the same, equal in value, there could be an type conversion happening during comparison to make sure they have equal value, but does not check for types. Differently, === is equal in value and equal with type, === if equal should have the same type, it is a strict equality comparison. 
<p>question17: should return [ 2, 4, 6]. Because in the for loop, for every item in the array [1,2,3], it pushes the result from callback(array[i]) into newArr, which is pushing 2*the element in array to newArr by index order, i=0, push in result of doSomething(array[0])=doSomething(1}=2, then i=1, push 2*2=4 into newArr, and then i=2, push 3*2=6 in newArr. In the end newArr should contain[ 2, 4, 6] </p>
<p>question19: 
<ol>
<p>1</p>
<p>4</p>
<p>3</p>
<p>2</p>
</ol></p>
