
var textdata = [];

var textformat = {};

BrowserDetect.init();

switch(BrowserDetect.Language)
{
	/*
	case "it":
		textformat.thousandseparator = ".";
		break;
	case "de":
		textformat.thousandseparator = ".";
		break;
	case "fr":
		textformat.thousandseparator = ".";
		break;
	case "ru":
		textformat.thousandseparator = ".";
		break;
		*/
	default:
		textdata[0] = "\u51C6\u5907\u5F00\u59CB";
		textdata[1] = "\u5F00\u59CB\u6E38\u620F";
		textdata[2] = "\u65CB\u8F6C\u5C4F\u5E55";
		textdata[3] = "\u6E38\u620F\u7ED3\u675F";
		textdata[4] = "X2";
		textdata[5] = "X5";
		textdata[6] = "\u5956\u52B1";
		textdata[7] = "\u5173\u53E3\u7ED3\u675F";
		textdata[8] = "\u5C04\u51FB ";
		textdata[9] = "\u547D\u4E2D\u7387 ";
		textdata[10] = "\u5956\u52B1 ";
		textdata[11] = "\u989D\u5916"; //∂ÓÕ‚
		textdata[12] =  "\u661F\u9645\u6218\u58EB";//"Starfigher";
		textdata[13] = "\u827E\u65AF\u7684";//"Ace's";
		textdata[14] = "\u82F1\u96C4\u7684";//"Herc";
		textdata[15] = "\u8F93\u5165\u4F60\u7684\u540D\u5B57";//"Enter your name";
		textdata[16] = "\u5269\u4F59\u751F\u547D";
		textformat.thousandseparator = ",";
		break;
}
