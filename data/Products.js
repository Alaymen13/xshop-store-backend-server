const products = [
	{
		_id: "630eef3d73b85df8c17797d6",
		name: "ስምንት በአንድ ማሽን 8 in 1",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920855/xshop%20ecommerce%20images/20220830_225152_sspyh1.jpg",
		description:
			"የቲሸርት፣ የሳህን፣የኮፍያ  የእስኪርቢቶ እና የተለያዩ የማግ ሞልዶች በአንድ አካቶ የያዘ ማሽን",
		rating: 0,
		numReviews: 0,
		price: 20000,
		countInStock: 5,
		reviews: [],
		createdAt: "2022-08-31T05:18:53.525Z",
		updatedAt: "2022-08-31T05:18:53.525Z",
		__v: 0,
	},
	{
		_id: "630eee9d73b85df8c17797cd",
		name: "ሠብሊሜሽን ቀለም",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920912/xshop%20ecommerce%20images/20220830_223108_ucppfe.jpg",
		description: "ከፍተኛ ጥራት ያላቸው በስድስት ቀልም አማራጭ \nባለ 100ሚሊ ሰብሊሜሽን ቀለም",
		rating: 0,
		numReviews: 0,
		price: 700,
		countInStock: 50,
		reviews: [],
		createdAt: "2022-08-31T05:16:13.026Z",
		updatedAt: "2022-08-31T05:16:13.026Z",
		__v: 0,
	},
	{
		_id: "630eee3573b85df8c17797c9",
		name: "ኢፕሰን ፕሪንተር  Epson L805",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920908/xshop%20ecommerce%20images/20220830_223847_nleckg.jpg",
		description:
			"ለሰብልሜሽን ህትመት የሚሆን ፕሪንተር \n\nበዋይ ፋይ የሚሰራ \nባለ ስድስት ታንከር ",
		rating: 0,
		numReviews: 0,
		price: 10000,
		countInStock: 5,
		reviews: [],
		createdAt: "2022-08-31T05:14:29.044Z",
		updatedAt: "2022-08-31T05:14:29.044Z",
		__v: 0,
	},
	{
		_id: "630eede273b85df8c17797c5",
		name: "ሂት ፕረስ A1,A2,A3",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920903/xshop%20ecommerce%20images/20220830_224114_mviwpx.jpg",
		description: "ቲሸርት መስሪያ ሂት ፕረስ",
		rating: 0,
		numReviews: 0,
		price: 7000,
		countInStock: 6,
		reviews: [],
		createdAt: "2022-08-31T05:13:06.285Z",
		updatedAt: "2022-08-31T05:13:06.285Z",
		__v: 0,
	},
	{
		_id: "630eed5f73b85df8c17797c1",
		name: "ከለር ማግ",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920837/xshop%20ecommerce%20images/20220830_224657_viikyi.png",
		description: "የድርጅት አርማ የሚታተምበት ወይም ፎቶዎች ማተም የሚቻልበት የሴራሚክ ኩባያ ",
		rating: 0,
		numReviews: 0,
		price: 400,
		countInStock: 20,
		reviews: [],
		createdAt: "2022-08-31T05:10:56.004Z",
		updatedAt: "2022-08-31T05:10:56.004Z",
		__v: 0,
	},
	{
		_id: "630eed0c73b85df8c17797bd",
		name: "ቢዝነስ ካርድ መቁረጫ",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920853/xshop%20ecommerce%20images/20220830_224900_t8w5h8.png",
		description:
			"ከህትመት በሆላ ቢዝነስ ካርድና መታወቂያ መቁረጫ\nየሚቆረጥበት  መጠን፡ 55mm x 89mm",
		rating: 0,
		numReviews: 0,
		price: 700,
		countInStock: 10,
		reviews: [],
		createdAt: "2022-08-31T05:09:32.359Z",
		updatedAt: "2022-08-31T05:09:32.359Z",
		__v: 0,
	},
	{
		_id: "630eeca173b85df8c17797b9",
		name: "ስኩጂ(ፕላስቲክ)",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920905/xshop%20ecommerce%20images/20220830_224004_b31eui.jpg",
		description: "ስቲከሮችን ግርግዳ እና የመስታወት ላይ ለመለጠፍ የምንጠቀምበት ኘላስቲክ",
		rating: 0,
		numReviews: 0,
		price: 100,
		countInStock: 50,
		reviews: [],
		createdAt: "2022-08-31T05:07:45.553Z",
		updatedAt: "2022-08-31T05:07:45.553Z",
		__v: 0,
	},
	{
		_id: "630eec5673b85df8c17797b5",
		name: "ሰብሊሜሽን ሜታል ቁልፍ መያዣ",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920887/xshop%20ecommerce%20images/20220830_224416_sbe8gk.jpg",
		description: "በቀላሉ በሰብሊሜሽን ወረቀት ልናትምበት የምንችለው የቁልፍ መያዣ",
		rating: 0,
		numReviews: 0,
		price: 150,
		countInStock: 20,
		reviews: [],
		createdAt: "2022-08-31T05:06:30.234Z",
		updatedAt: "2022-08-31T05:06:30.234Z",
		__v: 0,
	},
	{
		_id: "630eec0173b85df8c17797b1",
		name: "ፕሎተር ማሽን",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920896/xshop%20ecommerce%20images/20220830_224310_fijrce.jpg",
		description:
			"ለቲሸርት መስሪያ ለሲዘር ማቴሪይል ለስቲከር እንዲሁም ለፍሮስትድ ከት አውት አስተማማኝ ጥራት ያላቸው ፕሎተሮች \n\nበ135 ሴሚ  እና 72 ሴሚ ስፋት",
		rating: 0,
		numReviews: 0,
		price: 5000,
		countInStock: 5,
		reviews: [],
		createdAt: "2022-08-31T05:05:05.989Z",
		updatedAt: "2022-08-31T05:05:05.989Z",
		__v: 0,
	},
	{
		_id: "630eeb8673b85df8c17797ad",
		name: "ማግ መስሪያ ሲልከን Cup ክላምፕ",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920876/xshop%20ecommerce%20images/20220830_225428_skrlvt.jpg",
		description: "በ3ዲ ማግ ስንሰራ የሚያስፈልገን 11 ኦዝ ሲልከን መጠቅለያ",
		rating: 0,
		numReviews: 0,
		price: 300,
		countInStock: 7,
		reviews: [],
		createdAt: "2022-08-31T05:03:02.991Z",
		updatedAt: "2022-08-31T05:03:02.991Z",
		__v: 0,
	},
	{
		_id: "630e77c973b85df8c1779774",
		name: "ኦቫል ማህተም 30x40",
		image: "https://res.cloudinary.com/djpk0hzwj/image/upload/v1661920860/xshop%20ecommerce%20images/20220830_225309_sioqxe.jpg",
		description:
			"ፈጣን ለሆኑ ትዕዛዞች የሚሆኑ በቀላሉ ሊታተምባቸው የሚችሉ ማህተሞች\nመጠን: 30x40\nሞዴል: HB",
		rating: 0,
		numReviews: 0,
		price: 200,
		countInStock: 10,
		reviews: [],
		createdAt: "2022-08-30T20:49:13.777Z",
		updatedAt: "2022-08-31T04:42:38.183Z",
		__v: 0,
	},
];

export default products;
