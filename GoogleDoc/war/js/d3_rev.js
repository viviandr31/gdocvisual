
var width = 960, height = 600, color = d3.scale.category10(), margin = {
	top : 20,
	right : 10,
	bottom : 10,
	left : 10
};

var formatTime = d3.time.format("%B %d, $I:%M %p");

document.getElementById('chart').innerHTML = "";

var svg = d3.select("#chart").append("svg").attr("width",
		width + margin.left + margin.right).attr("height",
		height + margin.top + margin.bottom);

var json_obj = {
	"revisions" : [
			{
				"revisionLength" : 0,
				"time" : "2012-01-24 12:29:35",
				"segments" : [ 0 ]
			},
			{
				"revisionLength" : 430,
				"time" : "2012-01-31 17:22:26",
				"segments" : [ 1 ]
			},
			{
				"revisionLength" : 857,
				"time" : "2012-01-31 17:26:25",
				"segments" : [ 1, 2 ]
			},
			{
				"revisionLength" : 4386,
				"time" : "2012-02-02 12:10:35",
				"segments" : [ 1, 3, 4, 5, 6, 7, 8 ]
			},
			{
				"revisionLength" : 3324,
				"time" : "2012-02-07 09:59:37",
				"segments" : [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
						21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
						35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47 ]
			},
			{
				"revisionLength" : 3324,
				"time" : "2012-02-07 10:51:58",
				"segments" : [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
						21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
						35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47 ]
			},
			{
				"revisionLength" : 4414,
				"time" : "2012-02-08 11:14:01",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 78, 79, 80, 81,
						82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
						96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
						108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
						119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
						130, 131, 132, 133 ]
			},
			{
				"revisionLength" : 4911,
				"time" : "2012-02-08 21:35:55",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 78, 79, 134,
						135, 136, 137, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
						94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
						106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
						117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
						128, 129, 130, 131, 132, 133 ]
			},
			{
				"revisionLength" : 4913,
				"time" : "2012-02-09 00:13:26",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 78, 79, 134,
						135, 136, 137, 84, 85, 86, 87, 88, 138, 139, 140, 90,
						91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
						104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
						115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
						126, 127, 128, 129, 130, 131, 132, 133 ]
			},
			{
				"revisionLength" : 5755,
				"time" : "2012-02-09 01:21:51",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 78, 79, 134,
						135, 136, 137, 84, 85, 86, 87, 88, 141, 140, 90, 142,
						143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
						154, 155, 156, 157, 158, 159, 160, 161, 162, 92, 93,
						94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
						106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
						117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
						128, 129, 130, 131, 132, 133 ]
			},
			{
				"revisionLength" : 5755,
				"time" : "2012-02-09 03:11:54",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 78, 79, 134,
						135, 136, 137, 84, 85, 86, 87, 88, 141, 140, 90, 142,
						143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
						154, 155, 156, 157, 158, 159, 160, 161, 162, 92, 93,
						94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
						106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
						117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
						128, 129, 130, 131, 132, 133 ]
			},
			{
				"revisionLength" : 5370,
				"time" : "2012-02-09 10:29:32",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 78, 79, 134,
						135, 136, 137, 84, 85, 86, 87, 88, 141, 140, 90, 142,
						143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
						154, 155, 156, 157, 158, 159, 160, 161, 162, 92, 93,
						94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
						106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
						117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
						128, 129, 130, 131, 132 ]
			},
			{
				"revisionLength" : 6678,
				"time" : "2012-02-09 11:40:48",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 78, 163, 79,
						134, 135, 136, 137, 84, 85, 86, 87, 88, 141, 164, 165,
						166, 90, 142, 143, 144, 145, 167, 168, 169, 170, 171,
						172, 173, 174, 152, 153, 154, 155, 156, 157, 158, 159,
						160, 161, 175, 176, 177, 92, 93, 94, 95, 96, 178, 179,
						180, 181, 182, 183, 184, 185, 186, 187, 188, 115, 116,
						117, 189, 190, 191, 192, 193, 119, 120, 121, 194, 195,
						196, 197, 123, 124, 125, 126, 127, 128, 129, 130, 131,
						198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
						209 ]
			},
			{
				"revisionLength" : 6676,
				"time" : "2012-02-09 15:42:14",
				"segments" : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 14, 57, 58,
						59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 24, 25, 26,
						27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 70, 71, 72,
						73, 74, 75, 76, 42, 43, 44, 45, 46, 77, 210, 163, 79,
						134, 135, 136, 137, 84, 85, 86, 87, 88, 141, 164, 165,
						166, 90, 142, 143, 144, 145, 167, 168, 169, 170, 171,
						172, 173, 174, 152, 153, 154, 155, 156, 157, 158, 159,
						160, 161, 175, 176, 177, 92, 93, 94, 95, 96, 178, 179,
						180, 181, 182, 183, 184, 185, 186, 187, 188, 115, 116,
						117, 189, 190, 191, 192, 193, 119, 120, 121, 194, 195,
						196, 197, 123, 124, 125, 126, 127, 128, 129, 130, 131,
						198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
						209 ]
			},
			{
				"revisionLength" : 7612,
				"time" : "2012-02-14 12:42:40",
				"segments" : [ 211, 212, 213, 49, 50, 51, 52, 53, 54, 55, 56,
						14, 57, 58, 59, 60, 61, 62, 63, 64, 214, 215, 216, 66,
						67, 68, 69, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
						35, 36, 37, 217, 218, 219, 71, 72, 73, 74, 75, 76, 42,
						220, 221, 222, 44, 45, 46, 77, 210, 163, 79, 134, 135,
						136, 137, 84, 85, 86, 87, 88, 141, 164, 165, 223, 224,
						225, 90, 142, 143, 144, 145, 167, 168, 169, 170, 171,
						172, 173, 174, 152, 153, 154, 155, 156, 157, 158, 159,
						160, 161, 175, 176, 177, 92, 93, 94, 226, 227, 228, 96,
						178, 179, 180, 181, 182, 183, 184, 185, 186, 229, 187,
						188, 115, 116, 117, 189, 190, 191, 192, 193, 119, 120,
						121, 194, 195, 196, 197, 123, 124, 125, 126, 127, 128,
						129, 130, 131, 198, 199, 200, 201, 202, 203, 204, 205,
						206, 207, 208, 209, 230 ]
			},
			{
				"revisionLength" : 7775,
				"time" : "2012-02-14 17:15:37",
				"segments" : [ 211, 212, 213, 49, 50, 51, 52, 53, 54, 55, 56,
						14, 57, 58, 59, 60, 61, 62, 63, 64, 214, 215, 216, 66,
						67, 68, 69, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
						35, 36, 37, 217, 218, 219, 231, 232, 233, 234, 235, 72,
						73, 74, 75, 76, 42, 220, 221, 222, 44, 45, 236, 46, 77,
						210, 163, 79, 134, 135, 136, 137, 84, 85, 86, 87, 88,
						141, 164, 165, 223, 224, 225, 90, 142, 143, 144, 145,
						167, 168, 169, 170, 171, 172, 173, 174, 152, 153, 154,
						155, 156, 157, 158, 159, 160, 161, 175, 176, 177, 92,
						93, 94, 226, 227, 228, 96, 178, 179, 180, 181, 182,
						183, 184, 185, 186, 229, 187, 188, 115, 116, 117, 189,
						190, 191, 192, 193, 119, 120, 121, 194, 195, 196, 197,
						123, 124, 125, 126, 127, 128, 129, 130, 131, 198, 199,
						200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 230 ]
			},
			{
				"revisionLength" : 7779,
				"time" : "2012-02-20 23:33:04",
				"segments" : [ 211, 212, 213, 49, 50, 51, 52, 53, 54, 55, 56,
						14, 57, 58, 59, 60, 61, 62, 63, 64, 214, 215, 216, 66,
						67, 68, 69, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
						35, 36, 37, 217, 218, 237, 219, 231, 232, 233, 234,
						235, 72, 73, 74, 75, 76, 42, 220, 221, 222, 44, 45,
						236, 46, 77, 210, 163, 79, 134, 135, 136, 137, 84, 85,
						86, 87, 88, 141, 164, 165, 223, 224, 225, 90, 142, 143,
						144, 145, 167, 168, 169, 170, 171, 172, 173, 174, 152,
						153, 154, 155, 156, 157, 158, 159, 160, 161, 175, 176,
						177, 92, 93, 94, 226, 227, 228, 96, 178, 179, 180, 181,
						182, 183, 184, 185, 186, 229, 187, 188, 115, 116, 117,
						189, 190, 191, 192, 193, 119, 120, 121, 194, 195, 196,
						197, 123, 124, 125, 126, 127, 128, 129, 130, 131, 198,
						199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
						230 ]
			},
			{
				"revisionLength" : 0,
				"time" : "2012-03-08 14:46:40",
				"segments" : []
			},
			{
				"revisionLength" : 0,
				"time" : "2012-03-08 14:46:58",
				"segments" : []
			},
			{
				"revisionLength" : 430,
				"time" : "2012-03-08 14:47:34",
				"segments" : [ 238 ]
			},
			{
				"revisionLength" : 4414,
				"time" : "2012-03-08 14:55:43",
				"segments" : [ 239, 240, 241, 242, 243, 244, 245, 246, 247,
						248, 249, 250, 251 ]
			},
			{
				"revisionLength" : 4911,
				"time" : "2012-03-08 14:57:32",
				"segments" : [ 239, 240, 241, 242, 243, 244, 245, 246, 252,
						253, 254, 255, 256, 248, 249, 250, 251 ]
			},
			{
				"revisionLength" : 4911,
				"time" : "2012-03-08 14:59:12",
				"segments" : [ 239, 240, 241, 242, 243, 244, 245, 246, 252,
						253, 254, 255, 256, 248, 249, 250, 251 ]
			},
			{
				"revisionLength" : 5755,
				"time" : "2012-03-08 15:03:45",
				"segments" : [ 239, 240, 241, 242, 243, 244, 245, 246, 252,
						253, 254, 255, 257, 258, 259, 260, 261, 262, 263, 264,
						265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275,
						276, 277, 278, 248, 249, 250, 251 ]
			},
			{
				"revisionLength" : 7612,
				"time" : "2012-03-08 15:15:40",
				"segments" : [ 279, 280, 281, 240, 241, 242, 243, 244, 245,
						246, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291,
						253, 254, 255, 257, 292, 293, 294, 295, 296, 259, 260,
						261, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306,
						307, 308, 309, 310, 265, 311, 312, 313, 314, 315, 316,
						317, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277,
						318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328,
						329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339,
						340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350,
						351, 352, 353, 354, 355, 356, 357, 358 ]
			},
			{
				"revisionLength" : 7612,
				"time" : "2012-04-03 11:09:34",
				"segments" : [ 279, 280, 281, 240, 241, 242, 243, 244, 245,
						246, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291,
						253, 254, 255, 257, 292, 293, 294, 295, 296, 259, 260,
						261, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306,
						307, 308, 309, 310, 265, 311, 312, 313, 314, 315, 316,
						317, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277,
						318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328,
						329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339,
						340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350,
						351, 352, 353, 354, 355, 356, 357, 358 ]
			} ],
	"segments" : [ {
		"segmentLength" : 0,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 430,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 427,
		"authorId" : 2,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1,
		"authorId" : 2,
		"fatherSegmentIndex" : 2,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1362,
		"authorId" : 2,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 232,
		"authorId" : 2,
		"fatherSegmentIndex" : 2,
		"offsetInFatherSegment" : 1
	}, {
		"segmentLength" : 9,
		"authorId" : 2,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 183,
		"authorId" : 2,
		"fatherSegmentIndex" : 2,
		"offsetInFatherSegment" : 233
	}, {
		"segmentLength" : 2169,
		"authorId" : 2,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 318,
		"authorId" : 1,
		"fatherSegmentIndex" : 1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 33,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 18
	}, {
		"segmentLength" : 32,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 52
	}, {
		"segmentLength" : 49,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 141
	}, {
		"segmentLength" : 4,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 151
	}, {
		"segmentLength" : 146,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 15,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 641
	}, {
		"segmentLength" : 2,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 656
	}, {
		"segmentLength" : 3,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 697
	}, {
		"segmentLength" : 1,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 704
	}, {
		"segmentLength" : 2,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 709
	}, {
		"segmentLength" : 17,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 730
	}, {
		"segmentLength" : 2,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 16,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 736
	}, {
		"segmentLength" : 2,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 754
	}, {
		"segmentLength" : 1,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 757
	}, {
		"segmentLength" : 35,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 782
	}, {
		"segmentLength" : 1,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 785
	}, {
		"segmentLength" : 8,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 16,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 831
	}, {
		"segmentLength" : 104,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 1003
	}, {
		"segmentLength" : 2,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 1008
	}, {
		"segmentLength" : 175,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 1143
	}, {
		"segmentLength" : 13,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 1153
	}, {
		"segmentLength" : 1,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 1167
	}, {
		"segmentLength" : 120,
		"authorId" : 2,
		"fatherSegmentIndex" : 4,
		"offsetInFatherSegment" : 1174
	}, {
		"segmentLength" : 2143,
		"authorId" : 2,
		"fatherSegmentIndex" : 8,
		"offsetInFatherSegment" : 26
	}, {
		"segmentLength" : 167,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 2,
		"fatherSegmentIndex" : 12,
		"offsetInFatherSegment" : 26
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 2,
		"fatherSegmentIndex" : 12,
		"offsetInFatherSegment" : 29
	}, {
		"segmentLength" : 18,
		"authorId" : 3,
		"fatherSegmentIndex" : 13,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 3,
		"fatherSegmentIndex" : 13,
		"offsetInFatherSegment" : 19
	}, {
		"segmentLength" : 16,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 28,
		"authorId" : 3,
		"fatherSegmentIndex" : 13,
		"offsetInFatherSegment" : 21
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 2,
		"fatherSegmentIndex" : 15,
		"offsetInFatherSegment" : 1
	}, {
		"segmentLength" : 33,
		"authorId" : 3,
		"fatherSegmentIndex" : 16,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 98,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 3,
		"fatherSegmentIndex" : 16,
		"offsetInFatherSegment" : 44
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 10,
		"authorId" : 3,
		"fatherSegmentIndex" : 16,
		"offsetInFatherSegment" : 47
	}, {
		"segmentLength" : 5,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 90,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 3,
		"fatherSegmentIndex" : 16,
		"offsetInFatherSegment" : 103
	}, {
		"segmentLength" : 6,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 3,
		"fatherSegmentIndex" : 16,
		"offsetInFatherSegment" : 114
	}, {
		"segmentLength" : 160,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 88,
		"authorId" : 3,
		"fatherSegmentIndex" : 38,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 531,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 88,
		"authorId" : 3,
		"fatherSegmentIndex" : 41,
		"offsetInFatherSegment" : 48
	}, {
		"segmentLength" : 2,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 3,
		"fatherSegmentIndex" : 41,
		"offsetInFatherSegment" : 136
	}, {
		"segmentLength" : 44,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 31,
		"authorId" : 3,
		"fatherSegmentIndex" : 41,
		"offsetInFatherSegment" : 144
	}, {
		"segmentLength" : 4,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 142,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 25,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 4
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 30
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 102,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 38
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 141
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 11,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 149
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 106,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 161
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 463,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 268
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 736
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 72,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 744
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 84,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 817
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 10,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 902
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 913
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 45,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 918
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 110,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 963
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 73,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1073
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 17,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1149
	}, {
		"segmentLength" : 9,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 12,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1167
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1180
	}, {
		"segmentLength" : 113,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1211
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1325
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 211,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1333
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1545
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 132,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1552
	}, {
		"segmentLength" : 32,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 5,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1690
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 9,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1696
	}, {
		"segmentLength" : 7,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 237,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1705
	}, {
		"segmentLength" : 5,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1943
	}, {
		"segmentLength" : 1,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 192,
		"authorId" : 2,
		"fatherSegmentIndex" : 47,
		"offsetInFatherSegment" : 1951
	}, {
		"segmentLength" : 385,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 524,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 70,
		"authorId" : 2,
		"fatherSegmentIndex" : 83,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 9,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 5,
		"authorId" : 2,
		"fatherSegmentIndex" : 83,
		"offsetInFatherSegment" : 97
	}, {
		"segmentLength" : 8,
		"authorId" : 2,
		"fatherSegmentIndex" : 89,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 98,
		"authorId" : 2,
		"fatherSegmentIndex" : 89,
		"offsetInFatherSegment" : 8
	}, {
		"segmentLength" : 6,
		"authorId" : 2,
		"fatherSegmentIndex" : 138,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 18,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 19
	}, {
		"segmentLength" : 66,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 32,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 20
	}, {
		"segmentLength" : 112,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 70
	}, {
		"segmentLength" : 452,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 12,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 252
	}, {
		"segmentLength" : 8,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 45,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 267
	}, {
		"segmentLength" : 375,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 12,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 334
	}, {
		"segmentLength" : 3,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 35,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 349
	}, {
		"segmentLength" : 3,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 9,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 387
	}, {
		"segmentLength" : 29,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 418
	}, {
		"segmentLength" : 7,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 10,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 426
	}, {
		"segmentLength" : 45,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 27,
		"authorId" : 2,
		"fatherSegmentIndex" : 91,
		"offsetInFatherSegment" : 436
	}, {
		"segmentLength" : 2,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 2,
		"fatherSegmentIndex" : 140,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 96,
		"authorId" : 2,
		"fatherSegmentIndex" : 140,
		"offsetInFatherSegment" : 2
	}, {
		"segmentLength" : 13,
		"authorId" : 2,
		"fatherSegmentIndex" : 146,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 21,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 13,
		"authorId" : 2,
		"fatherSegmentIndex" : 146,
		"offsetInFatherSegment" : 38
	}, {
		"segmentLength" : 30,
		"authorId" : 2,
		"fatherSegmentIndex" : 146,
		"offsetInFatherSegment" : 53
	}, {
		"segmentLength" : 1,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 2,
		"fatherSegmentIndex" : 146,
		"offsetInFatherSegment" : 84
	}, {
		"segmentLength" : 237,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 282,
		"authorId" : 0,
		"fatherSegmentIndex" : 151,
		"offsetInFatherSegment" : 93
	}, {
		"segmentLength" : 3,
		"authorId" : 2,
		"fatherSegmentIndex" : 162,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 24,
		"authorId" : 2,
		"fatherSegmentIndex" : 162,
		"offsetInFatherSegment" : 3
	}, {
		"segmentLength" : 17,
		"authorId" : 2,
		"fatherSegmentIndex" : 97,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1213,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 59,
		"authorId" : 2,
		"fatherSegmentIndex" : 114,
		"offsetInFatherSegment" : 2
	}, {
		"segmentLength" : 13,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 5,
		"authorId" : 2,
		"fatherSegmentIndex" : 114,
		"offsetInFatherSegment" : 76
	}, {
		"segmentLength" : 1,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 2,
		"fatherSegmentIndex" : 114,
		"offsetInFatherSegment" : 82
	}, {
		"segmentLength" : 1,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 15,
		"authorId" : 2,
		"fatherSegmentIndex" : 114,
		"offsetInFatherSegment" : 86
	}, {
		"segmentLength" : 2,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 10,
		"authorId" : 2,
		"fatherSegmentIndex" : 114,
		"offsetInFatherSegment" : 103
	}, {
		"segmentLength" : 10,
		"authorId" : 2,
		"fatherSegmentIndex" : 118,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 80,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 15,
		"authorId" : 2,
		"fatherSegmentIndex" : 118,
		"offsetInFatherSegment" : 52
	}, {
		"segmentLength" : 321,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 95,
		"authorId" : 2,
		"fatherSegmentIndex" : 118,
		"offsetInFatherSegment" : 116
	}, {
		"segmentLength" : 83,
		"authorId" : 2,
		"fatherSegmentIndex" : 122,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1,
		"authorId" : 2,
		"fatherSegmentIndex" : 122,
		"offsetInFatherSegment" : 84
	}, {
		"segmentLength" : 1,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 47,
		"authorId" : 2,
		"fatherSegmentIndex" : 122,
		"offsetInFatherSegment" : 85
	}, {
		"segmentLength" : 52,
		"authorId" : 2,
		"fatherSegmentIndex" : 132,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 2,
		"fatherSegmentIndex" : 132,
		"offsetInFatherSegment" : 53
	}, {
		"segmentLength" : 56,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 5,
		"authorId" : 2,
		"fatherSegmentIndex" : 132,
		"offsetInFatherSegment" : 59
	}, {
		"segmentLength" : 1,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 42,
		"authorId" : 2,
		"fatherSegmentIndex" : 132,
		"offsetInFatherSegment" : 67
	}, {
		"segmentLength" : 72,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 67,
		"authorId" : 2,
		"fatherSegmentIndex" : 132,
		"offsetInFatherSegment" : 118
	}, {
		"segmentLength" : 2,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 2,
		"fatherSegmentIndex" : 132,
		"offsetInFatherSegment" : 185
	}, {
		"segmentLength" : 427,
		"authorId" : 0,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 140,
		"authorId" : 1,
		"fatherSegmentIndex" : 78,
		"offsetInFatherSegment" : 2
	}, {
		"segmentLength" : 3,
		"authorId" : 1,
		"fatherSegmentIndex" : 48,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 164,
		"authorId" : 1,
		"fatherSegmentIndex" : 48,
		"offsetInFatherSegment" : 3
	}, {
		"segmentLength" : 57,
		"authorId" : 1,
		"fatherSegmentIndex" : 65,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 33,
		"authorId" : 1,
		"fatherSegmentIndex" : 65,
		"offsetInFatherSegment" : 57
	}, {
		"segmentLength" : 78,
		"authorId" : 3,
		"fatherSegmentIndex" : 70,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 10,
		"authorId" : 3,
		"fatherSegmentIndex" : 70,
		"offsetInFatherSegment" : 78
	}, {
		"segmentLength" : 12,
		"authorId" : 2,
		"fatherSegmentIndex" : 43,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1,
		"authorId" : 2,
		"fatherSegmentIndex" : 43,
		"offsetInFatherSegment" : 12
	}, {
		"segmentLength" : 36,
		"authorId" : 2,
		"fatherSegmentIndex" : 166,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 60,
		"authorId" : 2,
		"fatherSegmentIndex" : 166,
		"offsetInFatherSegment" : 36
	}, {
		"segmentLength" : 11,
		"authorId" : 2,
		"fatherSegmentIndex" : 95,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 61,
		"authorId" : 2,
		"fatherSegmentIndex" : 95,
		"offsetInFatherSegment" : 11
	}, {
		"segmentLength" : 3,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 915,
		"authorId" : 4,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 36,
		"authorId" : 1,
		"fatherSegmentIndex" : 71,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 68,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 355,
		"authorId" : 1,
		"fatherSegmentIndex" : 71,
		"offsetInFatherSegment" : 36
	}, {
		"segmentLength" : 86,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 140,
		"authorId" : 1,
		"fatherSegmentIndex" : 71,
		"offsetInFatherSegment" : 391
	}, {
		"segmentLength" : 9,
		"authorId" : 1,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 3,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 430,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 41,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 5,
		"fatherSegmentIndex" : 238,
		"offsetInFatherSegment" : 14
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 5,
		"fatherSegmentIndex" : 238,
		"offsetInFatherSegment" : 20
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 4,
		"authorId" : 5,
		"fatherSegmentIndex" : 238,
		"offsetInFatherSegment" : 24
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 238,
		"offsetInFatherSegment" : 28
	}, {
		"segmentLength" : 4123,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 238,
		"offsetInFatherSegment" : 409
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 238,
		"offsetInFatherSegment" : 411
	}, {
		"segmentLength" : 226,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1838,
		"authorId" : 5,
		"fatherSegmentIndex" : 247,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 524,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 70,
		"authorId" : 5,
		"fatherSegmentIndex" : 247,
		"offsetInFatherSegment" : 1847
	}, {
		"segmentLength" : 9,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2179,
		"authorId" : 5,
		"fatherSegmentIndex" : 247,
		"offsetInFatherSegment" : 1944
	}, {
		"segmentLength" : 32,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 117,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 34
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 152
	}, {
		"segmentLength" : 66,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 32,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 153
	}, {
		"segmentLength" : 112,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 203
	}, {
		"segmentLength" : 452,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 12,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 385
	}, {
		"segmentLength" : 8,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 45,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 400
	}, {
		"segmentLength" : 375,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 12,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 467
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 35,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 482
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 9,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 520
	}, {
		"segmentLength" : 29,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 8,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 551
	}, {
		"segmentLength" : 7,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 10,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 559
	}, {
		"segmentLength" : 45,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1610,
		"authorId" : 5,
		"fatherSegmentIndex" : 256,
		"offsetInFatherSegment" : 569
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : 239,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 38,
		"authorId" : 5,
		"fatherSegmentIndex" : 239,
		"offsetInFatherSegment" : 3
	}, {
		"segmentLength" : 396,
		"authorId" : 5,
		"fatherSegmentIndex" : 252,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 409,
		"authorId" : 5,
		"fatherSegmentIndex" : 252,
		"offsetInFatherSegment" : 396
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 734,
		"authorId" : 5,
		"fatherSegmentIndex" : 252,
		"offsetInFatherSegment" : 805
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 132,
		"authorId" : 5,
		"fatherSegmentIndex" : 252,
		"offsetInFatherSegment" : 1539
	}, {
		"segmentLength" : 140,
		"authorId" : 5,
		"fatherSegmentIndex" : 252,
		"offsetInFatherSegment" : 1673
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 25,
		"authorId" : 5,
		"fatherSegmentIndex" : 252,
		"offsetInFatherSegment" : 1813
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 258,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 36,
		"authorId" : 5,
		"fatherSegmentIndex" : 258,
		"offsetInFatherSegment" : 2
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 79,
		"authorId" : 5,
		"fatherSegmentIndex" : 258,
		"offsetInFatherSegment" : 38
	}, {
		"segmentLength" : 13,
		"authorId" : 5,
		"fatherSegmentIndex" : 262,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 21,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 13,
		"authorId" : 5,
		"fatherSegmentIndex" : 262,
		"offsetInFatherSegment" : 38
	}, {
		"segmentLength" : 30,
		"authorId" : 5,
		"fatherSegmentIndex" : 262,
		"offsetInFatherSegment" : 53
	}, {
		"segmentLength" : 24,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 19,
		"authorId" : 5,
		"fatherSegmentIndex" : 263,
		"offsetInFatherSegment" : 130
	}, {
		"segmentLength" : 4,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 5,
		"fatherSegmentIndex" : 263,
		"offsetInFatherSegment" : 152
	}, {
		"segmentLength" : 105,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 263,
		"offsetInFatherSegment" : 449
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 264,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 5,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : 264,
		"offsetInFatherSegment" : 11
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : 266,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 10,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 5,
		"fatherSegmentIndex" : 267,
		"offsetInFatherSegment" : 39
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 9,
		"authorId" : 5,
		"fatherSegmentIndex" : 267,
		"offsetInFatherSegment" : 45
	}, {
		"segmentLength" : 35,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 282,
		"authorId" : 5,
		"fatherSegmentIndex" : 267,
		"offsetInFatherSegment" : 93
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 44,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 3
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 79,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 47
	}, {
		"segmentLength" : 1213,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 59,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 489
	}, {
		"segmentLength" : 13,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 5,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 563
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 3,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 569
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 15,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 573
	}, {
		"segmentLength" : 5,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 29,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 590
	}, {
		"segmentLength" : 80,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 15,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 661
	}, {
		"segmentLength" : 321,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 186,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 725
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 912
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 403,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 913
	}, {
		"segmentLength" : 4,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 6,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 1317
	}, {
		"segmentLength" : 56,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 5,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 1323
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 42,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 1331
	}, {
		"segmentLength" : 72,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 67,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 1382
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 7,
		"authorId" : 5,
		"fatherSegmentIndex" : 278,
		"offsetInFatherSegment" : 1449
	}, {
		"segmentLength" : 614,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 251,
		"offsetInFatherSegment" : 47
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 251,
		"offsetInFatherSegment" : 49
	}, {
		"segmentLength" : 42,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 251,
		"offsetInFatherSegment" : 52
	}, {
		"segmentLength" : 1,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	}, {
		"segmentLength" : 2,
		"authorId" : 5,
		"fatherSegmentIndex" : 251,
		"offsetInFatherSegment" : 55
	}, {
		"segmentLength" : 676,
		"authorId" : 5,
		"fatherSegmentIndex" : -1,
		"offsetInFatherSegment" : 0
	} ],
	"authors" : [ {
		"email" : "melvin.chien"
	}, {
		"email" : "foreverjola"
	}, {
		"email" : "scashin82291"
	}, {
		"email" : "mcnamara.kevin.m"
	}, {
		"email" : "hainesj"
	}, {
		"email" : "olson.judith"
	} ]
};
/*
var json_obj = {
	'revisions' : [ {
		'revisionLength' : 123,
		'time' : '2011-01-16 00:42:13',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-17 20:50:02',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-17 22:24:48',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-17 23:56:50',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-18 04:17:00',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-18 05:13:45',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-18 07:28:25',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-18 16:50:15',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-18 17:23:54',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-19 00:00:51',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-19 00:14:14',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-19 00:18:21',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-19 00:32:31',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-01-26 00:32:36',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-03-07 20:51:31',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-03-07 20:51:42',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-03-09 00:07:18',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2011-03-09 00:07:52',
		'segments' : [ 0 ]
	}, {
		'revisionLength' : 123,
		'time' : '2012-04-16 21:48:33',
		'segments' : [ 0 ]
	} ],
	'segments' : [ {
		'segmentLength' : 9,
		'authorId' : 0,
		'fatherSegmentIndex' : -1,
		'offsetInFatherSegment' : 0
	} ],
	'authors' : [ {
		'email' : 'Stephan Chilingaryan'
	}, {
		'email' : 'Chris Lang'
	}, {
		'email' : 'Raymond Lam'
	}, {
		'email' : 'Alex Taubman'
	}, {
		'email' : 'Judith Olson'
	}, {
		'email' : 'Steve Abrams'
	} ]
};
*/
/*   	d3.json("revisions.json",
 function(json_obj) {*/

var json_obj = eval('(' + data + ')');

var revisions = json_obj.revisions;

/* For crossfilter 
var revisionsDataset = crossfilter(revisions),
//time = revisions.dimension(function(d) { return d3.time.day(parseTime(d.time)); }),
revisionByOrder = revisionsDataset
		.dimension(function(d, i) {
			return i;
		}),
//revisionByOrder.top(4);
revisionGroupByOrder = revisionByOrder.group(), brush = d3.svg
		.brush();
 END of Crossfilter*/

var authors = json_obj.authors;
var segments = json_obj.segments;
var barPadding = width / revisions.length / 2;

var xScale = d3.scale.ordinal().domain(d3.range(revisions.length))
		.rangeRoundBands([ 0, width ], 0.5);


var yScale = d3.scale.linear().domain([ 0, d3.max(revisions, function(d) {
	return d.revisionLength;
}) ]).range([ 0, height ]);

var xAxis = d3.svg.axis().scale(xScale).orient("top").ticks(revisions.length);

//var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(10);

var groups = svg.selectAll("g").data(revisions).enter().append("g")
//.filter(function(d,i){return i<10;})
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var revisionIndex = -1;
var accumulateSegLength = 0;

groups.selectAll("rect").data(function(d) {
	if (d.segments.length != 0)
		return d.segments;
	else
		return [ -1 ];
}).enter().append("rect").attr("class", "segment").attr("x", function(d, i) {
	if (i == 0)
		revisionIndex++;
	return xScale(revisionIndex);
}).attr("y", function(d, i) {
	if (i == 0) {
		if (d == -1)
			return yScale(0);
		else {
			accumulateSegLength = segments[d].segmentLength;
			return yScale(accumulateSegLength - segments[d].segmentLength);
		}
	} else {
		accumulateSegLength += segments[d].segmentLength;
		return yScale(accumulateSegLength - segments[d].segmentLength);
	}
}).attr("width", xScale.rangeBand()).attr("height", function(d) {
	if (d == -1)
		return 0;
	else
		return yScale(segments[d].segmentLength);
}).attr("fill", function(d, i) {
	if (d != -1)
		return color(segments[d].authorId)
}).on("mouseover", function(d) {
	if (d != -1)
		d3.select(this).attr("title", segments[d].content);
});

//===============================
var link = [], preSegment = [];
for ( var j = 0; j < revisions.length - 1; j++) {
	link[j] = [];//link[j] represent the link between revision j and j+1
	preSegment = revisions[j].segments; //revision j segments
	var newSegment = revisions[j + 1].segments; //revision j+1 segments
	//iterate revision j+1 segments to find father segment (segmentId) or it own(-1) in the previous revision 
	for ( var k = 0; k < newSegment.length; k++) {
		if (segments[newSegment[k]].fatherSegmentIndex < 0) {
			var preIndex = preSegment.indexOf(newSegment[k]);
			if (preIndex != -1) {
				link[j].push([ preSegment[preIndex], newSegment[k] ]);
			} else {
				//No link
			}
		} else {
			preIndex = preSegment
					.indexOf(segments[newSegment[k]].fatherSegmentIndex);
			if (preIndex != -1) {
				link[j].push([ preSegment[preIndex], newSegment[k] ]);
			} else {

				preIndex = preSegment.indexOf(newSegment[k]);
				if (preIndex != -1) {
					link[j].push([ preSegment[preIndex], newSegment[k] ]);
				} else {
					alert("link compute error" + preIndex + " "
							+ segments[newSegment[k]]);
				}
			}
		}

	}
	if (link[j].length == 0) {
		link[j].push([ -1, -1 ]);
	}

}
console.log(link);

var linkGroups = svg.selectAll("link.g").data(link).enter().append("g")
//.filter(function(d,i){return i<10;})
.attr("transform",
		"translate(" + (margin.left + barPadding) + "," + margin.top + ")");

var revisionIndex = -1;
linkGroups
		.selectAll("link")
		.data(function(d) {
			return d;
		})
		.enter()
		.append("path")
		.attr("class", "link")
		.attr(
				"d",
				function(d, i) {

					if (i == 0) {
						revisionIndex++;
						accumulateSegLength1 = 0;
						accumulateSegLength2 = 0;
					}

					if (d[1] == -1) {
						return "";
					} else {

						var x0 = xScale(revisionIndex);
						var tempSegments1 = revisions[revisionIndex].segments;
						var tempSegments2 = revisions[revisionIndex + 1].segments;

						var index1 = tempSegments1.indexOf(d[0]);
						var index2 = tempSegments2.indexOf(d[1]);

						var accumulateSegLength1 = 0, accumulateSegLength2 = 0;

						for ( var q = 0; q < index1; q++) {
							accumulateSegLength1 += segments[tempSegments1[q]].segmentLength;
						}
						for ( var q = 0; q < index2; q++) {
							accumulateSegLength2 += segments[tempSegments2[q]].segmentLength;
						}

						if (d[1] == d[0]) {
							var y0 = yScale(accumulateSegLength1);
						} else {
							var y0 = yScale(accumulateSegLength1
									+ segments[d[1]].offsetInFatherSegment);
						}
						var y1 = yScale(accumulateSegLength2);

						var x1 = x0 + xScale.rangeBand();
						var dy = yScale(segments[d[1]].segmentLength);

						return "M " + x0 + "," + y0 + " " + x0 + ","
								+ (y0 + dy) + " " + x1 + "," + (y1 + dy) + " "
								+ x1 + "," + y1 + "Z";
					}

				}).attr("fill", function(d, i) {
			if (d[1] != -1)
				return color(segments[d[1]].authorId)
		}).attr("opacity", 0.8)

;
//===============================

svg.append("g").attr("class", "axis").attr("transform",
		"translate(" + margin.left + "," + margin.top + ")").call(xAxis);

/*
svg.append("g")
.attr("class","axis")
.attr("transform","translate(50,0)")
.call(yAxis);
 */

/*
var sortBars = function() {
    svg.selectAll("rect")
       .sort(function(a, b) {
    	   return d3.ascending(a.revisionLength, b.revisionLength);
            })
       .transition()
       .delay(function(d,i){return i*50;})
       .duration(1000)
       .attr("x", function(d, i) {
                    return xScale(i);
       });
    };
 */

//});
