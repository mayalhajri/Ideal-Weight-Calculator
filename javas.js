//1-May AL-Hajri_43309518_6w3
//2-Reem AL-Gazlan_433005171_6w3
//3-wadha AL-Qahtani_433009838_6w3
//4-Wejdan AL-Zahrani_433001549_6w3 
//5-Shatha AL-Mutairi _433007590_6W3
$(document).ready(function(){
        var d= new Date();
		var day=d.getDay();
		var month=d.getMonth();
		var date=d.getDate();
		var index=0;
		var day_of_week = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
		var month_of_year = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
for (index=0; index< 7; index++){
if (day == index)
day=day_of_week[index];
}
for (index=0; index< 7; index++){
if (month == index)
month=month_of_year[index];
}
		//alert("hhh");
    document.getElementById("day").innerHTML=day;
	document.getElementById("month").innerHTML=month;
	document.getElementById("date").innerHTML=date;
});

	function DietBooks(){
	document.getElementById("content").innerHTML=" <img src=\"images/h1.jpg\" class=\"images\"/><h3>Subject : <span id=\"tfont\">Women'sHealth Perfect Body Diet</span> </h3><h3>Description : </h3> <h4> <span id=\"tfont\"> the healthy lifestyle magazine for today’s active woman on the go, have devised a weight-loss plan that works especially well for women who would like to lose 5-25 pounds </span> </h4><h3>To Buy : <span id=\"tfont\"><a href=\"http://www.amazon.com/Womens-Health-Perfect-Body-Diet/dp/B001FOR68Y \" target=\"_blank\"> ClickHere</a></span> </h3>"+
	"<hr><img src=\"images/r2.jpg\" class=\"images\"/><h3>Subject : <span id=\"tfont\"> The Happiness Diet </span></h3><h3>Description : </h3> <h4> <span id=\"tfont\"> you'll discover how to avoid the common 'mood busters' found in the foods we eat (sugar, fats, chemical additives, and even dangerous pesticides) and instead give your brain the nutrients it needs for optimal health and function.</span> </h4><h3>To Buy : <span id=\"tfont\"><a href=\" http://www.amazon.com/The-Happiness-Diet-Nutritional-Prescription/dp/1609618971 \" target=\"_blank\"> ClickHere</a></span> </h3>";
	}
	function SportsBooks(){
	document.getElementById("content").innerHTML=" <img src=\"images/child1.jpg\" class=\"images\"/><h3>Subject : <span id=\"tfont\">Mini Flexable Workout </span> </h3><h3>Description : </h3> <h4> <span id=\"tfont\"> this book learn how to do simple exercizes at your home and help to make a shape for yor body .  </span> </h4><h3>To Buy : <span id=\"tfont\"><a href=\"http://www.amazon.co.uk/Mini-Stability-Power-Region-Import/dp/B000VBB6WO/ref=pd_cp_74_2/280-5694588-2110126?ie=UTF8&refRID=0BSJ1ZN162XS78M6PG8H/ \" target=\"_blank\"> ClickHere</a></span> </h3>"+
	"<hr><img src=\"images/child2.jpg\" class=\"images\"/><h3>Subject : <span id=\"tfont\"> Light On Yoga </span></h3><h3>Description : </h3> <h4> <span id=\"tfont\"> The definitive guide to the philosophy and practice of Yoga.provides complete descriptions and illustrations of all the positions and breathing exercises. </span> </h4><h3>To Buy : <span id=\"tfont\"><a href=\"http://www.amazon.com/Light-Yoga-B-K-Iyengar/dp/0805210318 \" target=\"_blank\"> ClickHere</a></span> </h3>";
	}
	function NutritionBooks(){
	document.getElementById("content").innerHTML=" <img src=\"images/t1.jpg\" class=\"images\"/><h3>Subject : <span id=\"tfont\">It Starts With Food  </span> </h3><h3>Description : </h3> <h4> <span id=\"tfont\"> It Starts With Food outlines a clear, balanced, sustainable plan to change the way you eat forever and transform your life in profound and unexpected ways.  </span> </h4><h3>To Buy : <span id=\"tfont\"><a href=\"http://www.amazon.com/Starts-Food-Discover-Whole30-Unexpected/dp/1628600543/ref=lp_282861_1_5?s=books&ie=UTF8&qid=1460373018&sr=1-5 \" target=\"_blank\"> ClickHere</a></span> </h3>"+
	"<hr><img src=\"images/t2.jpg\" class=\"images\"/><h3>Subject : <span id=\"tfont\"> 10-Day Green Smoothie Cleanse </span></h3><h3>Description : </h3> <h4> <span id=\"tfont\"> Made up of supernutrients from leafy greens and fruits, green smoothies are filling and healthy and you will enjoy drinking them. Your body will also thank you for drinking them as your health and energy improve to levels you never thought possible. It is an experience that could change your life if you stick with it! </span> </h4><h3>To Buy : <span id=\"tfont\"><a href=\"http://www.amazon.com/10-Day-Green-Smoothie-Cleanse-Smith/dp/1501100106/ref=zg_bs_282861_2 \" target=\"_blank\"> ClickHere</a></span> </h3>";
	}
	function Tips(){
	document.getElementById("content").innerHTML="<h3>Tips Of Health And Dieting</h3> "
	+"<h3>1.  Don't skip breakfast : </h3> <h4> <span id=\"tfont\">Research shows eating breakfast helps you control your weight. Some people skip breakfast because they think it will help them lose weight, but missing meals doesn't help us lose weight and isn't good for us as we can miss out on essential nutrients. It could also encourage us to snack more throughout the day because you feel hungry.</span></h4>"
	+"<h3>2.  Eat regular meals </h3> <h4> <span id=\"tfont\">Some people think missing meals will help them lose weight, but it's been shown eating regularly during the day helps burn calories at a faster rate. It also reduces the temptation to snack on foods high in fat and sugar. </span></h4>"
    +"<h3>3.  Eat plenty of fruit and veg :</h3> <h4> <span id=\"tfont\"> Fruit and veg are low in calories and fat, and high in fibre – three essential ingredients for successful weight loss. They also contain plenty of vitamins and minerals. </span></h4>"
	+"<h3>4.  Get more active : </h3> <h4> <span id=\"tfont\"> Studies show regular activity is key to losing weight and keeping it off. As well as providing numerous health benefits, exercise can help burn off the excess calories you can't cut through diet alone. </span></h4>"
	+"<h3>5.  Drink plenty of water : </h3> <h4> People sometimes confuse thirst with hunger. You can end up consuming extra calories when a glass of water is really what you need. You should aim to drink about six to eight glasses (1.2 litres) of fluid, preferably water, every day – or more if it's warm or you're exercising. </h4>"
	+"<h3>6.  Eat high-fibre foods : </h3> <h4> Foods containing lots of fibre can help keep you to feel full, which is perfect for losing weight. Fibre is only found in food from plants, such as fruit and veg, oats, wholegrain bread, brown rice and pasta, and beans, peas and lentils.</h4>"
	+"<h3>7.  Read food labels : </h3> <h4> Knowing how to read food labels can help you choose healthier options, and keep a check on the amount of calories, fat, salt and sugars you eat. Use the calorie information to work out how a particular food fits into your daily calorie allowance on the weight loss plan. Find out more about reading food labels.</h4>"
	+"<h3>8.  Use a smaller plate : </h3> <h4> Studies show people who use smaller plates tend to eat smaller portions and are still satisfied. By using smaller plates and bowls, you may be able to gradually get used to eating smaller portions without going hungry. It takes about 20 minutes for the stomach to tell the brain it's full, so eat slowly and stop eating before you feel full.</h4>" 
	+"<h3>9.  Don't ban foods : </h3> <h4> Don't ban any foods from your weight loss plan, especially the ones you like. Banning foods will only make you crave them more. There's no reason you can't enjoy the occasional treat as long as you stay within your daily calorie allowance.</h4>"
	+"<h3>10. Don't stock junk food: </h3> <h4> To avoid temptation, avoid stocking junk food, such as chocolate, biscuits, crisps and sweet fizzy drinks, at home. Instead, stock up on healthy snacks, such as fruit, unsalted rice cakes, oat cakes, unsalted or unsweetened popcorn, and fruit juice.</h4>" 
	+"<h3>11. Cut down on alcohol : </h3> <h4> Did you know a standard glass of wine can contain as many calories as a piece of chocolate, and a pint of lager has about the same calorie count as a packet of crisps? Over time, drinking too much can easily contribute to weight gain. </h4>"
	+"<h3>12. Plan your meals : </h3> <h4> Plan your breakfast, lunch, dinner and snacks for the week, making sure you stick to your calorie allowance. Try to plan for four to seven days' worth of meals and snacks. Make a shopping list, but don't shop when you're hungry as that can lead to high-calorie impulse buys!</h4>"
	;
	}
	
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "That you are too thin."
}
if(finalBmi > 18.5 && finalBmi < 24.9){
document.bmiForm.meaning.value = "That you are healthy."
}
if(finalBmi > 25 && finalBmi < 29.9){
document.bmiForm.meaning.value = "That you have overweight."
}
if(finalBmi > 30){
document.bmiForm.meaning.value = "you are Obese that is risk to your health ."
}
}
else{
alert("Please Fill in everything correctly")
}
}
	